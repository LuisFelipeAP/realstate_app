import axios from 'axios';

export const baseURL = "https://bayut.p.rapidapi.com"

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Host': "bayut.p.rapidapi.com",
            'X-RapidAPI-Key': process.env.NEXT_PUBLIC_BAYUT_KEY,
        }
    })
    return data;
}
