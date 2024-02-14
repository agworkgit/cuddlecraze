import React, { useEffect, useState } from 'react';
import "./DogFacts.css"

function DogFacts() {

    const [data, setData] = useState([]);

    const url = 'https://random-dog-facts.p.rapidapi.com/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bc2527c02cmsh27f61ab601589f4p155766jsnc49af9f0be56',
		'X-RapidAPI-Host': 'random-dog-facts.p.rapidapi.com'
  }}

	useEffect(() => {
        fetch(url,options)
        .then((response) => response.json())
        .then((data) => setData(data))
      }, []) 
        
    console.log(data.fact)
    
      return (
        <div className='card container-fluid'>
            <h2>Did you know...?</h2>
            <p>{data.fact}</p>
        </div>
      )
}

export default DogFacts