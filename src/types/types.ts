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

export type PrevCurrency = {
  usd: string;
  euro: string;
}

export type EventType = {
  title: string;
  time: number;
  description: string;
  id: string;
}

export type EventFormType = {
  title: string;
  date: string;
  time: string;
}

type ParserResult = {
  counter: string;
  container: HTMLDivElement;
  headers: string;
}

export type ContentObject = {
  url: string;
  parser: (data: string) => null | ParserResult;
  localStorageName: string;
}

