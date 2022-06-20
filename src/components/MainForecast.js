import React, {useContext} from 'react';
import CityContext from '../store/CityContext';
import styles from './MainForecast.module.css';
import {NavLink} from 'react-router-dom';

function MainForecast() {
  const {forecastCurrent} = useContext(CityContext);

  if (forecastCurrent) {
    return (
      <div className={styles['main-forecast']}>
        <div className={styles.title}>
          <NavLink to={`/${forecastCurrent.name}`} className={styles.navlink}>
            <h1>{forecastCurrent.name}</h1>
          </NavLink>
          <img
            src={`http://openweathermap.org/img/wn/${forecastCurrent.weather[0].icon}@2x.png`}
            alt=""
          />
        </div>
        <div className={styles.infos}>
          <h5>Real {forecastCurrent.main.temp} °C</h5>
          <h5>{forecastCurrent.weather[0].description}</h5>
          <h5> Feels {forecastCurrent.main.feels_like} °C</h5>
        </div>
      </div>
    );
  }
}

export default MainForecast;