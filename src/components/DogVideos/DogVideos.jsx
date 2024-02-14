import React, { useEffect, useState } from 'react';

import './DogVideos.css'
import axios from 'axios';

function DogVideos() {

  const [data, setData] = useState([]);

  const dog = JSON.parse(localStorage.getItem("selectedDog"))
  const dogType = dog.breed
  const apiKey = "AIzaSyCZEcJXXbSbG_g0wR2uhHpEc7LZZEJbJy4"
  const search = "how%20to%20care%20for%20a%20" + dogType
  const queryURL = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&&type=video&channelType=any&maxResults=3&order=relevance&q=" + search + "&key=" + apiKey
  const videoBox = $('#videoBox')

  const promise = new Promise(async function axiosGet() {
    await axios
      .get(queryURL)
      .then((res)=> {setData(res.data.items)})
      })
  
  useEffect(()=>{
    promise;
  },[]);

  promise.then(function(){
    for (let i = 0; i < data.length; i++) {
      const vidUrl = data[i].id.videoId
      
      const video = $('<iframe>')
      const srcURL = '//youtube.com/embed/' + vidUrl
      video.attr('src', srcURL)
      videoBox.append(video)
      }
  })
  

  return (
    <div>
      <div className="videoContainerHorizontal">
        <h3>Helpful Videos</h3>
        <div id='videoBox'></div>
      </div>
      <br></br>
    </div>
   );
  }

export default DogVideos