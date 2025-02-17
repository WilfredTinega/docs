import React from 'react'

const Articles = ({ articles }) => {
  return (
    <div>
        <h2>news headlines</h2>{
            articles.length === 0 ? (
                <p>no articles available at the moment.</p>
            ): (
                articles.map((article, index) => (
                    <div key={index} className='bg-slate-600 m-2'>
                        <h3>{article.title}</h3>
                        <p>{article.author || "Unknown"}</p>
                        <p>{article.source.name}</p>
                        <p>{new Date(article.publishedAt).toLocaleString()}</p>
                        <p>{article.description}</p>
                        <p>{article.urlToImage && <img src={article.urlToImage} alt="Article"/>}</p>
                        <p><a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a></p>
                        <hr />
                    </div>
                ))
            )
        }
      
    </div>
  )
}

export default Articles
