import axios from "axios";

const BaseUrl = 'https://youtube-v31.p.rapidapi.com/';
const options = {
    params: {
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST,
    }
};

const FetchData = async (endPoint) => {
    let response = undefined;
    response = await axios.get(`${BaseUrl}${endPoint}`, options);
    return response ? response.data : {};
}

export { FetchData };