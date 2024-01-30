// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from "/src/styles/main_page.module.scss"

import ByTime from "./ByTime"

export default function MainPage() {
  return (
    <div className={styles.wrapper}>
      <ByTime />
    </div>
  )
}