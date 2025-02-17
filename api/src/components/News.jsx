import React, { useEffect, useState } from 'react'

const News = () => {
    const [news, setNews] = useState(false);

    const search = async ()=>{
        try {
            const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_NEWS_APIKEY}`;
            const response = await fetch(url);
            const data = await response.json();

            console.log(data)

            setNews({
                author : data.articles[0].author,
                content : data.articles[0].content,
                description : data.articles[0].description,
                time : data.articles[0].publishedAt,
                sourceName : data.articles[0].source.name,
                tittle : data.articles[0].tittle,
                url: data.articles[0].url,
                image: data.articles[0].urltoImage,
                status:data.status
            })
        } catch (error) {

        
            
        }
    }

    useEffect(()=>{
        search()
    },[])
  return (
    <div>
        {
            setNews.status
        }
      
    </div>
  )
}

export default News
