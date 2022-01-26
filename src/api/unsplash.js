import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 3kQl9IJU0k4ZMpYifBItyHcEooUImSoZrS8wNtzD5XQ'
    }
})

