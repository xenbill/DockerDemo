import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL, // Change this to your API's base URL
});

export const getWeatherForecasts = async () => {
    try {
        const response = await api.get('/weatherforecast')
        return response.data;
    } catch (error) {
        console.error('Error fetching weather forecasts:', error);
        throw error;
    }
};