import { useLayoutEffect, useState } from 'react';
import WeatherInfo from '../weatherInfo/weatherInfo';
import { DataURLs } from '../../const';
import { parseWeather } from '../../utils/weatherParser';
import { WeatherDataType } from '../../types/types';
import Preloader from '../preloader/preloader';

function Weather(): JSX.Element {
  const [data, setData] = useState<null | WeatherDataType>(null);

  useLayoutEffect(() => {
    fetch(DataURLs.WEATHER)
      .then((res) => {
        if (res.ok) {
          return res.text();
        }
      })
      .then((res) => {
        setData(parseWeather(res as string));
      })
      .catch((err: Error) => setData({
        temperature: 'Error',
        pressure: 'Error',
        humidity: 'Error',
        arrowUp: 0
      }));
  }, []);

  return (
    <div className="weather">
      {
        !data ? <Preloader /> :
          <>
            <div className="weather__main">
              {
                data.arrowUp !== 0 &&
                <svg width="64px" height="64px" viewBox="0 -9.55 119.78 119.78" xmlns="http://www.w3.org/2000/svg" fill="#000" transform={data.arrowUp ? 'rotate(90)' : 'rotate(270)'} stroke="#000">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                  <g id="SVGRepo_iconCarrier"> <g id="Layer_2" data-name="Layer 2"> <g id="Layer_1-2" data-name="Layer 1"> <path d="M60.3,78.46c-.31,5-.39,9-.82,12.91-.86,7.85-7.86,11.57-14.92,7.85A63.53,63.53,0,0,1,34.4,92.84Q19.67,81,5.29,68.78C-.35,64-1.3,58.65,1.58,51.82a30.86,30.86,0,0,1,2.19-4.65A302.23,302.23,0,0,1,31.91,9.31a48.7,48.7,0,0,1,7.64-6.84C46-2.3,51.84,0,53.52,7.92a65.45,65.45,0,0,1,.78,7.69c.14,1.66.24,3.33.4,5.53a32.54,32.54,0,0,0,4.39.14c7.11-.83,14.18-2.09,21.3-2.57a246.17,246.17,0,0,1,24.89-.54c7.68.26,11.38,3.91,12.77,11.46a112.58,112.58,0,0,1,1.63,24.8c-.05,1.42-.31,2.84-.49,4.25-1,8.35-5.08,13.81-14,14.64a17.63,17.63,0,0,0-4.09,1.24A65.73,65.73,0,0,1,78.3,78.24C72.6,78.16,66.9,78.37,60.3,78.46ZM43.47,14c-9,5.63-27.46,31.38-32.4,44.91,10.7,9.07,21.55,18.33,32.52,27.45,1.38,1.15,3.39,1.55,5.33,2.4,1.38-4.27.25-8,.35-11.62.13-4.81.95-6.57,5.41-7.27,5-.8,10.21-.76,15.33-1,7.4-.41,14.84-.49,22.2-1.28a39.24,39.24,0,0,0,16.08-5c2.55-12.13,1.56-25-2.65-33.79-4.31-1.14-8.87-1.08-13.42-.95-10.86.31-21.7.61-32.42,2.73-5.51,1.09-10.8.41-15.4-3.89C44.12,22.77,43.83,18.81,43.47,14Z" /> <path fill={data.arrowUp ? '#2b9b1c' : 'red'} d="M43.47,14c.36,4.86.65,8.82.93,12.64,4.6,4.3,9.89,5,15.4,3.89,10.72-2.12,21.56-2.42,32.42-2.73,4.55-.13,9.11-.19,13.42.95,4.21,8.83,5.2,21.66,2.65,33.79a39.24,39.24,0,0,1-16.08,5c-7.36.79-14.8.87-22.2,1.28-5.12.29-10.29.25-15.33,1-4.46.7-5.28,2.46-5.41,7.27-.1,3.65,1,7.35-.35,11.62-1.94-.85-4-1.25-5.33-2.4-11-9.12-21.82-18.38-32.52-27.45C16,45.33,34.44,19.58,43.47,14Z" /> </g> </g> </g>
                </svg>
              }
              <p className="weather__temperature">{data ? data.temperature : '---'}</p>
            </div>
            <div className="weather__additional">
              <WeatherInfo title='Влажность' data={data ? data.humidity : '---'} />
              <WeatherInfo title='Давление' data={data ? data.pressure : '---'} />
            </div>
          </>
      }
    </div>
  );
}

export default Weather;
