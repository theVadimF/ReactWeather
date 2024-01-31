// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import Sidebar from '/src/components/Sidebar/Sidebar';
import Forecast from '/src/components/Forecast/Forecast'

import weather_tmp from 'src/app/forecast.json'

import React, { useState, useEffect } from 'react';

import { WeatherContext } from './weatherContext';
import { api_key } from './api_key';

export function App() {
  const [weatherData, setWeatherData] = useState(undefined);

  // useEffect(() => {
  //   fetch(`https://api.tomorrow.io/v4/weather/forecast?location=novosibirsk&apikey=${api_key}`)
  //     .then(response => response.json())
  //     .then(json => setWeatherData(json))
  //     .catch(error => console.error(error));
  // }, []);

  useEffect(() => {
    setWeatherData(weather_tmp);
  }, [])

  return (
    <div className={styles.main_app}>
      <img src="/src/assets/bg.jpg" alt="" className={styles.background} />
      <WeatherContext.Provider value={weatherData}>
        <Sidebar />
        <Forecast />
      </WeatherContext.Provider>
    </div>
  );
}

export default App;
