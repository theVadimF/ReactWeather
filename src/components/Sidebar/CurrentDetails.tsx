import { ReactElement } from "react"
import style from "/src/styles/sidebar.module.scss"

import { Icon } from "@iconify/react"

interface DetailsProps {
  component: ReactElement,
  name: string,
}

function DetailsComponent({component, name}: DetailsProps) {
  return (
    <div className={style.details_component}>
      {component}
      <p className={style.details_text}>{name}</p>
    </div>
  )
}

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
          <span className={style.value}>{max}</span>
          <Icon icon="mingcute:celsius-line" className={style.temp_unit}></Icon>
        </div>
      </div>
      <div className={style.minmax_temp_wrap}>
        <Icon icon="lucide:move-down" className={style.details_icon} />
        <div className={style.temp_wrap}>
          <span className={style.value}>{min}</span>
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
        <span className={style.value}>{value}</span>
        <Icon icon="ic:round-percent" className={style.percent_icon} />
      </div>
    </div>
  )
}

function Humidity({value}: {value: number}) {
  return (
    <div className={style.details_entry}>
      <Icon icon="carbon:humidity" className={style.entry_icon} />
      <div className={style.percentage_wrap}>
        <span className={style.value}>{value}</span>
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
        <span className={style.value}>{value}</span>
        <span className={style.text_unit}>{unit}</span>
      </div>
    </div>
  )
}

export default function CurrentDetails() {
  return (
    <div className={style.details_grid}>
      <DetailsComponent
        name="Min | Max"
        component={<MinMaxTemp min={-20} max={-15} unit="c" />}
      />
      <DetailsComponent
        name="Precipitation Probability"
        component={<PercipitationProbability value={64} />}
      />
      <DetailsComponent
        name="Humidity"
        component={<Humidity value={64} />}
      />
      <DetailsComponent
        name="Wind Speed"
        component={<WindSpeed value={4} unit="km/h" />}
      />
    </div>
  )
}