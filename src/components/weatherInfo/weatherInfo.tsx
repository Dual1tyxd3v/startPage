type WeatherInfoProps = {
  title: string;
  data: string;
}

function WeatherInfo({title, data}: WeatherInfoProps): JSX.Element {
  return (
    <div className="weather__info">
      <p className="weather__title">{title}</p>
      <p className="weather__data">{data}</p>
    </div>
  );
}

export default WeatherInfo;
