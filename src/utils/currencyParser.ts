import { CurrencyQuery } from '../const';
import { CurrencyDataType, PrevCurrency } from '../types/types';

export const loadCurrency = (data: string): CurrencyDataType[] => {
  const div = document.createElement('div');
  div.innerHTML = data.split('<body')[1];

  const usd = div.querySelector(`a[href="${CurrencyQuery.USD}"]`)?.previousElementSibling?.querySelector('.value')?.textContent?.replace(',','.');

  const euro = div.querySelector(`a[href="${CurrencyQuery.EURO}"]`)?.previousElementSibling?.querySelector('.value')?.textContent?.replace(',','.');
  const prevCurrency = localStorage.getItem('currency');
  const prevCurrObj = prevCurrency ? JSON.parse(prevCurrency) as PrevCurrency : null;

  localStorage.setItem('currency', JSON.stringify({
    usd, euro
  }));
  return [
    {
      name: '$',
      value: usd ? usd : 'Error',
      className: prevCurrObj ? compareValues(usd as string, prevCurrObj.usd) : ''
    },
    {
      name: '€',
      value: euro ? euro : 'Error',
      className: prevCurrObj ? compareValues(euro as string, prevCurrObj.euro) : ''
    }
  ];
};

function compareValues(current: string, prev: string) {
  if (+current > +prev) {
    return '--green';
  }
  if (+current < +prev) {
    return '--red';
  }
  return '';
}
