import style from '/src/styles/forecast.module.scss'
import weather_codes from '/src/assets/weather_codes.json'

import { Icon } from '@iconify/react';
import { useContext } from 'react';
import { WeatherContext } from 'src/app/weatherContext.ts';
import { findSourceMap } from 'module';
import { strict } from 'assert';

import { ConditionImg } from '../ConditionImg';

// function ConditionIcon({code}: {code: number}) {
//   function getConditionText(code: number) {
//     return weather_codes.weatherCode[code];
//   }

//   return <img
//     src={`/src/assets/weather_icons/small/2x/${code}.png`}
//     alt={getConditionText(code)}
//     className={style.condition_icon}
//   />
// }

interface timeSlotProps {
  time: string,
  code: number,
  temp: number,
  precipitation: number,
  temp_unit: string,
}

function TimeSlot({time, code, temp, precipitation, temp_unit}: timeSlotProps) {
  return (
    <div className={style.time_slot}>
      <div className={style.time}>{time}</div>
      {/* <ConditionIcon code={code} /> */}
      <ConditionImg
        weatherCode={code}
        is_night={false}
        className={style.condition_icon}
      />
      <div className={style.entries_wrap}>
        <div className={style.data_entry}>
          <Icon icon="fluent:temperature-48-regular" className={style.data_icon} />
          <div className={style.value_with_unit}>
            <p className={style.value}>{temp}</p>
            <Icon icon="mingcute:celsius-line" className={style.entry_icon} />
          </div>
        </div>
        <div className={style.data_entry}>
          <Icon icon="lucide:umbrella" className={style.data_icon} />
          <div className={style.value_with_unit}>
            <p className={style.value}>{precipitation}</p>
            <Icon icon="ic:round-percent" className={style.entry_icon} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ByTime({data}: {data: [object]}) {
  function getSlot(slot: object, key: number) {
    const time = new Date(slot.time);
    return (
      <TimeSlot
        time={time.toLocaleTimeString([], {timeStyle: 'short', hour12: false})}
        code={slot.values.weatherCode}
        temp={Math.round(slot.values.temperature)}
        precipitation={Math.round(slot.values.precipitationProbability)}
        temp_unit='c'
        key={key}
      />
    )
  }

  return (
    <div className={style.by_time_outer}>
      <div className={style.time_slider}>
        {data.map((e: object, index: number) => getSlot(e, index))}
      </div>
      <div className={style.button_wrap}>
        <button className={`${style.time_button} ${style.active}`}>Hourly</button>
        <button className={`${style.time_button}`}>Minutely</button>
      </div>
    </div>
  )
}