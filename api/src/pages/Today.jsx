import React, { useEffect, useState } from 'react'

const Today = () => {

    const [news, setNews] = useState([]);
    const [error, setError] =useState(false);

    const trendingNews = async () => {
        try {
            const apiKey = import.meta.env.VITE_APP_TODAY;
            const url = `https://api.worldnewsapi.com/search-news?text=kenya+politics&language=en&apiKey=${apiKey}`;
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'x-api-key': apiKey
                }
            });

            if(response.ok){
                const data = await response.json();
                console.log(data)
    
                setNews(
                    data.news
                )
            }else{
                setError("No response from the api try again")
            }
            
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error)
        }        
    }

    useEffect(()=>{
        trendingNews();
    },[])
  return (
    <div>
      <div aria-label="card-overlay" className="relative w-[250px] h-[300px] hidden">
        <img
          src="https://bit.ly/3zzCTUT"
          alt=""
          className="object-cover w-full h-full rounded-lg"
        />
        <div className="absolute flex flex-col p-2 bg-white rounded bottom-5 left-5 right-5 gap-y-1">
          <h3 className="text-base font-bold">Maria</h3>
          <span className="text-sm text-gray-400">24 years old</span>
        </div>
      </div>

      <div aria-label="card-item-v1" className="w-[400px] hidden">
        <div className="relative flex-shrink-0 mb-5 h-[250px]">
          <img
            src="https://bit.ly/3zzCTUT"
            alt=""
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="flex flex-col flex-1">
          <h3 className="mb-3 text-lg font-bold">
            Welcome to the best place to travel on the world
          </h3>
          <div className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
      </div>

      <div className='m-2'>
        {
            news.map((article, index)=>(
                <div key={index}>
                    <div><img src={article.image} alt="" /></div>
                    <div>{article.publish_date}</div>
                    <div>{article.title}</div>
                    <div className='text-justify'>{article.text}</div>
                    
                    <div><a href={article.url}>readmore</a></div>
                    <div>{}</div>

                </div>
            )).slice(0,10)

        }
      </div>
    </div>
  )
}

export default Today
