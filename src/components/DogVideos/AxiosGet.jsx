import axios from 'axios';

export function axiosGet() {

  const dog = JSON.parse(localStorage.getItem("selectedDog"))
  const dogType = dog.breed
  const apiKey = "AIzaSyCZEcJXXbSbG_g0wR2uhHpEc7LZZEJbJy4"
  const search = "how%20to%20care%20for%20a%20" + dogType
  const queryURL = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&&type=video&channelType=any&maxResults=3&order=relevance&q=" + search + "&key=" + apiKey
  
    return axios
    .get(queryURL)
    .then(res => {
        return res.data.items;
      })
    }

export default axiosGet
