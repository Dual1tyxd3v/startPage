import Currency from '../currency/currency';
import Weather from '../weather/weather';

function Info(): JSX.Element {
  return (
    <section className="info">
      <Weather />
      <Currency />
    </section>
  );
}

export default Info;
