import style from '/src/styles/sidebar.module.scss'
import weatherCodes from '/src/assets/weather_codes.json'

import { Icon } from '@iconify/react'

function ConditionImg( {weatherCode}: {weatherCode: number} ) {
  return (
    <img
      src={`/src/assets/weather_icons/large/2x/${weatherCode}.png`}
      alt="Weather Condition Icon"
      className={style.big_weather_img}
    />
  )
}

export default function CurrentWeather() {
  function getConditionText(code: number) {
    return weatherCodes.weatherCode[code];
  }

  return (
    <div className={style.current_wrapper}>
      <div className={style.current_top}>
        <ConditionImg weatherCode={10000}/>
        <div className={style.big_temp_wrap}>
          <span className={style.big_temp}>-23</span>
          <Icon icon="mingcute:celsius-line" className={style.big_unit_icon}></Icon>
        </div>
      </div>
      <p className={style.condition_text}>{getConditionText(10000)}</p>
    </div>
  )
}