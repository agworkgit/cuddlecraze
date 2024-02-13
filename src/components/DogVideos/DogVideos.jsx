// import React, { useEffect, useState } from 'react';
import SectionBorder from '../SectionBorder/SectionBorder';
import './dog-videos.css'

function DogVideos() {

  // --- This is the API functionality. Just uncomment it to make it work
  //  (as long as the quote hasn't been exceeded) -----------------

  // const [data, setData] = useState([]);

  // const dogType = "poodle"
  // const apiKey = "AIzaSyCZEcJXXbSbG_g0wR2uhHpEc7LZZEJbJy4"
  // const search = "how%20to%20care%20for%20a%20" + dogType
  // const queryURL = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelType=any&maxResults=3&order=relevance&q=" + search + "&key=" + apiKey
  
  // useEffect(() => {
  //   fetch(queryURL)
  //   .then((response) => response.json())
  //   .then((data) => setData(data))
  // }, []);

  // // const src1 = "//www.youtube.com/embed/" + data.items[0].id.videoId
  // // const src2 = "//www.youtube.com/embed/" + data.items[1].id.videoId
  // // const src3 = "//www.youtube.com/embed/" + data.items[2].id.videoId

  // -----------------------------------------------

  // this is the static component
  // when the API is functioning, just swap out the src links for
  // {src1}
  // {src2}
  // {src3}

  return (
    <div>
{/*       <div className="videoContainerVertical">
        <h3>Helpful Videos</h3>
        <iframe src="//youtube.com/embed/Jk5PpPH9AN8"></iframe>
        <iframe src="//youtube.com/embed/-j3PkeNiR0E"></iframe>
        <iframe src="//youtube.com/embed/NvGErwd1Nbs"></iframe>
      </div>
      <br></br>
      <br></br> */}
      <div className='video-section-title'>Helpful Videos</div>
      <SectionBorder />
      <div className='video-container section container'>
        <iframe className='video-res' src="//youtube.com/embed/Jk5PpPH9AN8"></iframe>
        <iframe className='video-res' src="//youtube.com/embed/-j3PkeNiR0E"></iframe>
        <iframe className='video-res' src="//youtube.com/embed/NvGErwd1Nbs"></iframe>
      </div>

    </div>
   );
  }

export default DogVideos