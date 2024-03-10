import { useContext } from "react";
import style from "/src/styles/location_picker.module.scss"
import { Icon } from '@iconify/react';
import { WeatherContext } from "src/app/weatherContext";

interface LocationPickerInterface {
  setSearchState: React.Dispatch<React.SetStateAction<boolean>>,
  location: string,
}

export default function LocationPicker({setSearchState, location}: LocationPickerInterface) {
  function open_search() {
    setSearchState(true);
  }

  const weatherAll = useContext(WeatherContext);

  function get_location() {
    if (weatherAll) {
      const name = weatherAll.location.name.split(',')[0];
      if (name) {
        return name;
      }
    }

    return location;
  }


  return (
    <div>
      <button className={style.location_btn} onClick={open_search}> 
        <Icon icon="mdi:location" className={style.location_icon}></Icon>
        <span className={style.location_text}>{get_location()}</span>
      </button>
    </div>
  )
}

