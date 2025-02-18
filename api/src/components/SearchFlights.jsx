import React, { useEffect, useState } from 'react'

const SearchFlights = () => {
    const [flights, setFlights] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const searchFlights = async () => {
        try {
            const url = 'https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlightsComplete?originSkyId=LOND&destinationSkyId=NYCA&originEntityId=27544008&destinationEntityId=27537542&date=2025-02-18&cabinClass=economy&adults=1&sortBy=best&currency=USD&market=en-US&countryCode=US';
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': import.meta.env.VITE_FLIGHTS_KEY,
                    'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                console.log(result.data.itineraries[0]);
                
                setFlights(
                    result.data.itineraries
                );

            } catch (error) {
                console.error(error);
            }

        } catch (error) {
            console.error(error)
        }

    }

    useEffect(()=>{
        searchFlights()
    },[])

  return (
    <div className='m-2'>
        <h1>Flights in the world</h1>
        {
            flights.map((flight, index) => (
                <div className='bg-green-500 my-1 sm:flex' key={index}>
                    <p>Origin: {flight.legs[0].origin.name}</p>
                    <p>Destination: {flight.legs[0].destination.name}</p>
                    <p>Duration: {flight.legs[0].durationInMinutes} mins</p>
                    <p>Price: {flight.price.formatted} </p>
                    <p>Departure: {new Date(flight.legs[0].departure).toLocaleString() } </p>
                    <p>Arrival: {new Date(flight.legs[0].arrival).toLocaleString() } </p>
                    <p>Score: {flight.score}</p>
                </div>
            )).slice(0,5)
        }

        
      
    </div>
  )
}

export default SearchFlights
