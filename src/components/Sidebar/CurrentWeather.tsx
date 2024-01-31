import style from '/src/styles/sidebar.module.scss'
import weatherCodes from '/src/assets/weather_codes.json'

import { Icon } from '@iconify/react'
import { useContext } from 'react';
import { WeatherContext } from 'src/app/weatherContext.ts';

function ConditionImg( {weatherCode, is_night}: {weatherCode: number, is_night: boolean} ) {
  let img_last = 0;
  if (is_night) {
    img_last = 1;
  }

  function setImg(weather_code: number) {
    try {
      return require(`/src/assets/weather_icons/large/2x/${weather_code}${img_last}.png`);
    }
    catch(err) {
      return `/src/assets/weather_icons/large/2x/${weather_code}0.png`
    }
  }

  return (
    <img
      src={setImg(weatherCode)}
      alt="Weather Condition Icon"
      className={style.big_weather_img}
    />
  )
}

export default function CurrentWeather() {
  function getConditionText(code: number) {
    return weatherCodes.weatherCodeFullDay[code];
  }

  const weatherAll = useContext(WeatherContext);

  if (weatherAll) {
    console.log(weatherAll)
    const weatherData = weatherAll.timelines.minutely[0];
    return (
      <div className={style.current_wrapper}>
        <div className={style.current_top}>
          {/* TODO(vf) set is_night based on time */}
          <ConditionImg weatherCode={weatherData.values.weatherCode} is_night={true}/>
          <div className={style.big_temp_wrap}>
            <span className={style.big_temp}>{weatherData.values.temperature.toFixed(1)}</span>
            <Icon icon="mingcute:celsius-line" className={style.big_unit_icon}></Icon>
          </div>
        </div>
        <p className={style.condition_text}>{getConditionText(weatherData.values.weatherCode)}</p>
      </div>
    )
  }
}