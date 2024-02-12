// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from "/src/styles/main_page.module.scss"

import ByTime from "./ByTime"
import { WeatherContext } from "src/app/weatherContext.ts";
import { useContext } from "react";
import DailyForecast from "./DailyForecast"

export default function MainPage() {
  const weatherAll = useContext(WeatherContext);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>Forecast</h1>
      {weatherAll && <ByTime data={weatherAll.timelines} />}
      <h1 className={styles.heading}>Daily</h1>
      {weatherAll && <DailyForecast data={weatherAll.timelines.daily} />}
    </div>
  )
}