import React, { useEffect, useState } from 'react'

const Flights = () => {

    const [flights, setFlights] = useState([]);
    const SearchNearbyFlights = async () => {
        const apiKey = import.meta.env.VITE_FLIGHTS_KEY
        try {
            const url = 'https://sky-scrapper.p.rapidapi.com/api/v1/flights/getNearByAirports?lat=19.242218017578125&lng=72.85846156046128&locale=en-US';
            const options = {
	            method: 'GET',
	            headers: {
		            'x-rapidapi-key': apiKey,
		            'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com'
	            }
            };

        try {
	        const response = await fetch(url, options);
	        const result = await response.json();
            const nearby = result.data.nearby;

            setFlights(
                nearby.flights
                /*
                {
                    airportName: result.data.nearby[0].navigation.localizedName,
                    airportId: result.data.nearby[0],
                    country: result.data.nearby[0].presentation.subtitle,
                    all: result.data.nearby[0].presentation.suggestionTitle
                } */
        )

	        console.log(nearby);

        } catch (error) {
	        console.error(error);
        }
            
        } catch (error) {
            console.error(error); 
        }
    }

    useEffect(()=>{
        SearchNearbyFlights()
    },[])
  return (
    <div>
        
        <h3>NearBy Flights</h3>
        {
            flights.map((flight, index) => (
                <div key={index}>
                    <p>Airport: {flight.presentation.suggestionTitle}</p>
                    <p>Country: {flight.presentation.subtitle}</p>
                </div>
            ))
        }
        {/**
            <p>airport:{flights.all} </p>
            <p>country:  {flights.country}{}</p>
       */}

    </div>
  )
}

export default Flights
