// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import Sidebar from '/src/components/Sidebar/Sidebar';
import Forecast from '/src/components/Forecast/Forecast'

import React, { useState, useEffect } from 'react';

import { api_key } from './api_key';

export function App() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch(`https://api.tomorrow.io/v4/weather/forecast?location=novosibirsk&apikey=${api_key}`)
      .then(response => response.json())
      .then(json => setWeatherData(json))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className={styles.main_app}>
      <img src="/src/assets/bg.jpg" alt="" className={styles.background} />
      <Sidebar />
      <Forecast />
    </div>
  );
}

export default App;
