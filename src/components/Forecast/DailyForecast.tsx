import { ReactElement } from 'react'
import { ConditionImg } from '../ConditionImg'
import { Icon } from '@iconify/react'
import style from 'src/styles/forecast.module.scss'

interface MinMaxProps {
  min: number,
  max: number,
  unit: string,
}

function MinMaxTemp({min, max, unit}: MinMaxProps) {
  return (
    <div className={style.minmax_wrap}>
      <div className={style.minmax_temp_wrap}>
        <Icon icon="lucide:move-up" className={style.details_icon} />
        <div className={style.temp_wrap}>
          <span className={style.value}>{Math.round(max)}</span>
          <Icon icon="mingcute:celsius-line" className={style.temp_unit}></Icon>
        </div>
      </div>
      <div className={style.minmax_temp_wrap}>
        <Icon icon="lucide:move-down" className={style.details_icon} />
        <div className={style.temp_wrap}>
          <span className={style.value}>{Math.round(min)}</span>
          <Icon icon="mingcute:celsius-line" className={style.temp_unit} />
        </div>
      </div>
    </div>
  )
}

function PercipitationProbability({value}: {value: number}) {
  return (
    <div className={style.details_entry}>
      <Icon icon="lucide:umbrella" className={style.entry_icon} />
      <div className={style.percentage_wrap}>
        <span className={style.value}>{Math.round(value)}</span>
        <Icon icon="ic:round-percent" className={style.percent_icon} />
      </div>
    </div>
  )
}

function WindSpeed({value, unit}: {value: number, unit: string}) {
  return (
    <div className={style.details_entry}>
      <Icon icon="ep:wind-power" className={style.entry_icon} />
      <div className={style.percentage_wrap}>
        <span className={style.value}>{Math.round(value)}</span>
        <span className={style.text_unit}>{unit}</span>
      </div>
    </div>
  )
}

function ForecastDay({data}: {data: object}) {
  const weekday = new Date(data.time).toLocaleDateString('en-EN', { weekday: 'long' })
  return <div className={style.day_block}>
    <ConditionImg
      weatherCode={data.values.weatherCodeMax}
      is_night={false}
      className={style.condition_img}
    />
    <div className={style.info}>
      <p className={style.date}>{weekday}</p>
      <div className={style.info_points}>
        <MinMaxTemp min={data.values.temperatureMin} max={data.values.temperatureMax} unit="c" />
        <PercipitationProbability value={data.values.precipitationProbabilityAvg} />
        <WindSpeed value={data.values.windSpeedAvg} unit="km/h" />
      </div>
    </div>
  </div>
}

export default function DailyForecast({data}: {data: object}) {
  function getDay(data: object) {
    return <ForecastDay data={data} />
  }

  return <div className={style.daily_wrapper}>
    {data.map((e: object) => getDay(e))}
  </div>
}
