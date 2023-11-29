import { useState } from "react"
import './styles/weatherCard.css'
const WeatherCard = ({ weather, temp }) => {
  const [changeTemp, setChangeTemp] = useState(true)
  const handleChangeTemp = () => setChangeTemp(!changeTemp)

  return (
    <article className="weather">
      <h1 className="weather__tittle">Weather App</h1>
      <h2 className="weather__location">{weather?.name}, {weather?.sys.country}</h2>
      <section className="weather__body">
        <header className="weather__img__container">
          <img className="weather__img" src={` https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt="" />
          <h3 className="weather__condition">"{weather?.weather[0].description}"</h3>
        </header>
        <article className="weather__info">
          <ul className="weather__list">
            <li className="weather__item">
              <span className="weather__label">Win Speed </span>{weather?.wind.speed} m/s
            </li>
            <li className="weather__item">
              <span className="weather__label">Clouds </span>{weather?.clouds.all} %
            </li>
            <li className="weather__item">
              <span className="weather__label">Pressure </span>{weather?.main.pressure} hPa
            </li>
            <li className="weather__item">
              <span className="weather__label">Humidity </span> {weather?.main.humidity} %
            </li>
          </ul>
        </article>
      </section>
      <h2 className="temperature">{changeTemp ? `${temp?.celsius} °C` : `${temp?.fahrenheit} °F `}</h2>
      <button className='temp__button' onClick={handleChangeTemp}>Change to {changeTemp ? `°F` : `°C`}</button>
    </article>
  )
}

export default WeatherCard
