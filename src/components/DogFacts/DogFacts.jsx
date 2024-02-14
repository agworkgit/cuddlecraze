import React, { useEffect, useState } from 'react';
import "./DogFacts.css"

function DogFacts() {

    const [data, setData] = useState([]);

    const url = 'https://dog-facts2.p.rapidapi.com/facts';
    const options = {
	    method: 'GET',
	    headers: {
		'X-RapidAPI-Key': '94b9e6f020msh5655a736b96a924p1c04c2jsn532f49b8810c',
		'X-RapidAPI-Host': 'dog-facts2.p.rapidapi.com'
	    }
    };

	useEffect(() => {
        fetch(url,options)
        .then((response) => response.json())
        .then((data) => setData(data))
      }, []) 
        
    console.log(data.facts)
    
      return (
        <div className='card container-fluid'>
            <h2>Did you know...?</h2>
            <p>{data.facts}</p>
        </div>
      )
}

export default DogFacts