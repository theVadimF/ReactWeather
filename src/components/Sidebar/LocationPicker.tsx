import style from "/src/styles/location_picker.module.scss"
import { Icon } from '@iconify/react';

export default function LocationPicker() {
  return (
    <div>
      <button className={style.location_btn}>
        <Icon icon="mdi:location" className={style.location_icon}></Icon>
        <span className={style.location_text}>Novosibirsk</span>
      </button>
    </div>
  )
}