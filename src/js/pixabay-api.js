import axios from 'axios';

export const perPage = 40;

/*  Function  API  */

export async function getImages(inputValue, page) {
    
    const KEY = "48554296-d2b735e3ffae040ef4553c6bb";

    try {

    const response = await axios.get(`https://pixabay.com/api/` , {
        params: {
            key: KEY,
            q: inputValue,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            page: page,
            per_page: perPage,
        }
    })

    return response.data;
    }

    catch {
        throw new Error(res.statusText);
        }

    }