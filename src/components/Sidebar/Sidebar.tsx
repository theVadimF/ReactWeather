// eslint-disable-next-line @typescript-eslint/no-unused-vars
import style from '/src/styles/sidebar.module.scss';

import { Icon } from '@iconify/react';

import LocationPicker from './LocationPicker';
import CurrentWeather from './CurrentWeather';
import CurrentDetails from './CurrentDetails';
import React from 'react';

function ButtonIcon({icon, handleClick}: {icon: string, handleClick: () => void}) {
  return (
    <button className={style.sidebar_btn} onClick={handleClick}>
      <Icon icon={icon} className={style.icon_btn} />
    </button>
  )
}


interface BottomBarInterface {
  getData: () => void,
  updateTime: string, 
}

function BottomBar({getData, updateTime}: BottomBarInterface) {
  return (
    <div className={style.bottom_bar}>
      <div className={style.left}>
        <ButtonIcon icon="tabler:reload" handleClick={getData} />
        <div className={style.update_time_block}>
          <p className={style.time}>{updateTime}</p>
          <p className={style.label}>Last Update</p>
        </div>
      </div>
      <a href="https://www.tomorrow.io/" className={style.powered_by}>
        <img src="/src/assets/Powered_by-White.png" alt="" className={style.powered_by_img} />
      </a>
    </div>
  )
}

interface sidebarInterface {
  setSearchState: React.Dispatch<React.SetStateAction<boolean>>,
  location: string,
  getData: () => void,
  updateTime: string,
}

export default function Sidebar({setSearchState, location, getData, updateTime}: sidebarInterface) {
  console.log(setSearchState);
  return (
    <div className={style.wrapper}>
      <LocationPicker
        setSearchState={setSearchState}
        location={location}
      />
      <div className={style.middle}>
        <CurrentWeather />
        <CurrentDetails />
      </div>
      <BottomBar
        getData={getData}
        updateTime={updateTime}
      />
    </div>
  )
}
