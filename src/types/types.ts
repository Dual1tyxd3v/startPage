export type WeatherDataType = {
  temperature: string;
  pressure: string;
  humidity: string;
  arrowUp: boolean | number;
}

export type CurrencyDataType = {
  name: string;
  value: string;
  className: string;
};

export type CurrencyDataTypes = CurrencyDataType[];

export type PrevCurrency = {
  usd: string;
  euro: string;
}

export type EventType = {
  title: string;
  time: number;
}

export type EventFormType = {
  title: string;
  date: string;
  time: string;
}
