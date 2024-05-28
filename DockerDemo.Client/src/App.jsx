import  { useEffect, useState } from 'react';
import { getWeatherForecasts } from './services/weatherService';

function App() {
    const [forecasts, setForecasts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getWeatherForecasts();
                setForecasts(data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Weather Forecasts</h1>
                {forecasts.length > 0 ? (
                    <ul>
                        {forecasts.map((forecast, index) => (
                            <li key={index}>
                                {forecast.date} - {forecast.temperatureC}°C - {forecast.summary}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Loading...</p>
                )}
            </header>
        </div>
    );
}

export default App;
