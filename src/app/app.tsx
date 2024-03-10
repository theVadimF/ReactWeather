// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import Sidebar from 'src/components/Sidebar/Sidebar';
import Forecast from 'src/components/Forecast/Forecast'
import LocationSearch from 'src/components/LocationSearch';

import weather_tmp from 'src/app/forecast.json'

import React, { useState, useEffect } from 'react';

import { WeatherContext } from './weatherContext';
import { api_key } from './api_key';
import { TomorrowIO } from 'src/assets/tommorow_io_interface';

export function App() {
  const [weatherData, setWeatherData] = useState<undefined|TomorrowIO>(undefined);
  const [searchState, setSearchState] = useState(false);
  const [location, setLocation] = useState('novosibirsk');
  const [updateTime, setUpdateTime] = useState('Never');

  const currentDate = new Date();

  function handleResult(json: TomorrowIO) {
    console.log(json);
    setWeatherData(json);
    setUpdateTime(currentDate.getHours() + ':' + String(currentDate.getMinutes()).padStart(2, "0"));
  }

  function get_data() {
    fetch(`https://api.tomorrow.io/v4/weather/forecast?location=${location}&apikey=${api_key}`)
      .then(response => response.json())
      // .then(json => setWeatherData(json))
      .then(json => handleResult(json))
      .catch(error => console.error(error));
  }
  
  useEffect(() => {
    setWeatherData(weather_tmp);
    // get_data();
  }, [location])

  return <>
    <img src="/src/assets/bg.jpg" alt="" className={styles.background} />
    <div className={styles.main_app}>
      <WeatherContext.Provider value={weatherData}>
        <Sidebar
          setSearchState={setSearchState}
          location={location}
          getData={get_data}
          updateTime={updateTime}
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
}

export default App;
