import React, { useEffect, useState } from 'react'


const News = () => {
    const [articles, setArticles] = useState([]);

    const search = async ()=>{
        try {
            const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_NEWS_APIKEY}`;
            const response = await fetch(url);
            const data = await response.json();

            console.log(data.articles);
            

        setArticles(
            data.articles
        )

        } catch (error) {
            
        }
    }

    useEffect(() => {
        search()
    },[])
  return (
    <div className='flex flex-col justify-between sm:flex-row sm:flex-wrap sm:gap-2 '>
        {
            articles.map((article, index) => (
                <div className='bg-amber-300 mx-auto w-2xs p-4' key={index}>
                    <h3 className='text-xl text-blue-600'>title: {article.title} {article.publishedAt}</h3>
                    <p className='text-sm'> author: {article.author},{article.source.name}</p>
                    <p >description:{article.description}</p>
                    <p>url: {article.url}</p>
                    <p className='overflow-hidden'>Image: {article.urlToImage}</p>

                </div>
            ))
            
        }
    </div>
  )
}

export default News
