// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import Sidebar from 'src/components/Sidebar/Sidebar';
import Forecast from 'src/components/Forecast/Forecast'
import LocationSearch from 'src/components/LocationSearch';

import weather_tmp from 'src/app/forecast.json'

import React, { useState, useEffect } from 'react';

import { WeatherContext } from './weatherContext';
import { api_key } from './api_key';

export function App() {
  const [weatherData, setWeatherData] = useState(undefined);
  const [searchState, setSearchState] = useState(false);
  const [location, setLocation] = useState('novosibirsk');

  // useEffect(() => {
  //   fetch(`https://api.tomorrow.io/v4/weather/forecast?location=${location}&apikey=${api_key}`)
  //     .then(response => response.json())
  //     .then(json => setWeatherData(json))
  //     .catch(error => console.error(error));
  // }, [location]);

  useEffect(() => {
    setWeatherData(weather_tmp);
  }, [])

  return (
    <>
      <img src="/src/assets/bg.jpg" alt="" className={styles.background} />
      <div className={styles.main_app}>
        <WeatherContext.Provider value={weatherData}>
          <Sidebar
            setSearchState={setSearchState}
            location={location}
          />
          <Forecast />
          <LocationSearch 
            setSearchState={setSearchState}
            searchState={searchState}
            setLocation={setLocation}
          /> 
        </WeatherContext.Provider>
      </div>
    </>
  );
}

export default App;
