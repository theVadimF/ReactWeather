import style from '/src/styles/forecast.module.scss'
import weather_codes from '/src/assets/weather_codes.json'

import { Icon } from '@iconify/react';

function ConditionIcon({code}: {code: number}) {
  function getConditionText(code: number) {
    return weather_codes.weatherCode[code];
  }

  return <img
    src={`/src/assets/weather_icons/small/2x/${code}.png`}
    alt={getConditionText(code)}
    className={style.condition_icon}
  />
}

function TimeSlot() {
  return (
    <div className={style.time_slot}>
      <div className={style.time}>12:00</div>
      <ConditionIcon code={10000} />
      <div className={style.entries_wrap}>
        <div className={style.data_entry}>
          <Icon icon="fluent:temperature-48-regular" className={style.data_icon} />
          <div className={style.value_with_unit}>
            <p className={style.value}>-20</p>
            <Icon icon="mingcute:celsius-line" className={style.entry_icon} />
          </div>
        </div>
        <div className={style.data_entry}>
          <Icon icon="lucide:umbrella" className={style.data_icon} />
          <div className={style.value_with_unit}>
            <p className={style.value}>64</p>
            <Icon icon="ic:round-percent" className={style.entry_icon} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ByTime() {
  return (
    <div className={style.by_time_outer}>
      <div className={style.time_slider}>
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
      </div>
      <div className={style.button_wrap}>
        <button className={`${style.time_button} ${style.active}`}>Hourly</button>
        <button className={`${style.time_button}`}>Minutely</button>
      </div>
    </div>
  )
}