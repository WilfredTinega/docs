import React, { useEffect, useState } from 'react'

const News = () => {
    const [articles, setArticles] = useState([])
    const [error, setError] = useState(false)
    const latestNews = async () => {
        try {
            const url = 'https://google-news13.p.rapidapi.com/latest?lr=en-US';
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': import.meta.env.VITE_APP_NEWS_KEY,
                    'x-rapidapi-host': 'google-news13.p.rapidapi.com'
                }
            };
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result.items);
            
            setArticles(
                result.items
            )
        } catch (error) {
           console.error(error); 
        }
    }

    useEffect(()=>{
        latestNews()
    },[])
  return (
    <div>
        <h1>News</h1>
        <div>
            {
                articles.map((article, index)=>{
                    <div key={index}>
                        <p>source: {article.publisher}</p>
                        <p><img src={article.images.thumbnail} alt="" />{}</p>
                        <p>snippet{article.snippet}</p>
                        <p>timestamp {new Date(article.timestamp)}</p>
                    </div>
                }).slice(0,10)
            }
        </div>
      
    </div>
  )
}

export default News
