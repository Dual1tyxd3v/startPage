import { useLayoutEffect, useState } from 'react';
import Preloader from '../preloader/preloader';
import { DataURLs } from '../../const';
import { loadCurrency } from '../../utils/currencyParser';
import { CurrencyDataType } from '../../types/types';

function Currency(): JSX.Element {
  const [data, setData] = useState<null | CurrencyDataType[]>(null);

  useLayoutEffect(() => {
    fetch(DataURLs.CURRENCY)
      .then((res) => {
        if (res.ok) {
          return res.text();
        }
      })
      .then((res) => setData(loadCurrency(res as string)))
      .catch((err: Error) => setData([{
        name: 'Error',
        value: 'Error',
        className: ''
      }]));
  }, []);

  if (!data) {
    return <Preloader />;
  }
  return (
    <ul className="currency">
      {
        data.map((currencyItem, i) => {
          const key = `${i}_currItem`;
          return (
            <li key={key}>
              <p className='currency__text'>{currencyItem.name} <span className={`currency__text${currencyItem.className}`}>{currencyItem.value}</span></p>
            </li>
          );
        })
      }
    </ul>
  );
}

export default Currency;
