export function parseWeather(data: string) {
  const div = document.createElement('div');
  div.innerHTML = data.split('<body')[1];
  const temperature = div.querySelector('.value__main')?.textContent;
  const pressure = div.querySelector('.icon-pressure')?.parentElement?.nextElementSibling?.textContent;
  const humidity = div.querySelector('.icon-humidity')?.parentElement?.nextElementSibling?.textContent;
  const prevTemperature = localStorage.getItem('temperature');
  localStorage.setItem('temperature', temperature as string);
  let arrowUp: boolean | number = 0;
  if (!prevTemperature || parseInt(temperature as string, 10) === parseInt(prevTemperature , 10)) {
    arrowUp = 0;
  }
  if (parseInt(temperature as string, 10) > parseInt(prevTemperature as string, 10)) {
    arrowUp = true;
  }
  if (parseInt(temperature as string, 10) < parseInt(prevTemperature as string, 10)) {
    arrowUp = false;
  }
  return {
    temperature: temperature || 'error',
    pressure: pressure || 'error',
    humidity: humidity || 'error',
    arrowUp
  };
}
