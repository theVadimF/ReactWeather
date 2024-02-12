import style from '/src/styles/forecast.module.scss'

import { Icon } from '@iconify/react';
import { useState } from 'react';

import { ConditionImg } from '../ConditionImg';

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
  const [type, setType] = useState(1);

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

  function setActiveBtnStyle(type_id: number) {
    if (type_id === type) {
      return style.active;
    }
  }

  let dataset = undefined

  switch (type) {
    case 1:
      dataset = data.hourly;
      break;
    case 2:
      dataset = data.minutely;
      break;
    default:
      break;
  }


  return (
    <div className={style.by_time_outer}>
      <div className={style.time_slider}>
        {dataset.map((e: object, index: number) => getSlot(e, index))}
      </div>
      <div className={style.button_wrap}>
        <button className={`${style.time_button} ${setActiveBtnStyle(1)}`} onClick={() => setType(1)}>Hourly</button>
        <button className={`${style.time_button} ${setActiveBtnStyle(2)}`} onClick={() => setType(2)}>Minutely</button>
      </div>
    </div>
  )
}