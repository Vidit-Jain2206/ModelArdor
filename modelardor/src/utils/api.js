import axios from "axios";

const BASE_URL="https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com";

const options = {
  headers: {
    'X-RapidAPI-Key': 'a91f6bb6a7msh03d1dded8c30f67p10b32djsna270c936291c',
    'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
  }
};

export const fetchDataFromApi= async (url)=>{
    const {data}= await axios.get(`${BASE_URL}/${url}`,options);
    return data;
}


