// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import Sidebar from '/src/components/Sidebar/Sidebar';
import MainPage from '/src/components/MainPage';

export function App() {
  return (
    <div className={styles.main_app}>
      <img src="/src/assets/bg.jpg" alt="" className={styles.background} />
      <Sidebar></Sidebar>
      <MainPage></MainPage>
    </div>
  );
}

export default App;
