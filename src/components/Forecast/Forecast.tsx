// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from "/src/styles/main_page.module.scss"

import ByTime from "./ByTime"
import { WeatherContext } from "src/app/weatherContext.ts";
import { useContext } from "react";

export default function MainPage() {
  const weatherAll = useContext(WeatherContext);

  return (
    <div className={styles.wrapper}>
      {weatherAll && <ByTime data={weatherAll.timelines.hourly} />}
    </div>
  )
}