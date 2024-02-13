import { useEffect, useState } from 'react';
import "./dog-facts.css";
import axios from 'axios';

function DogFacts() {
    const [data, setData] = useState([]);

    const options = {
        method: 'GET',
        url: 'https://random-dog-facts.p.rapidapi.com/',
        headers: {
            'X-RapidAPI-Key': 'ad4bbc4b9amshdc55534094a0c93p1f0900jsn2f5eb8773e0f',
            'X-RapidAPI-Host': 'random-dog-facts.p.rapidapi.com'
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.request(options);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // Fetch data initially
        fetchData();

        // Fetch new data every 30 minutes
        const interval = setInterval(fetchData, 30 * 60 * 1000);

        // Clear interval on component unmount to prevent memory leaks
        return () => clearInterval(interval);
    }, []);

    console.log(data.facts);

    return (
        <div className='facts-container container'>
            <div className='facts-wrapper'>
                <div className='facts-card'>
                    <h2 className='facts-title'>Did you know...?</h2>
                    <p className='facts-subtitle'>{data.facts}</p>
                </div>
            </div>
        </div>
    );
}

export default DogFacts;
