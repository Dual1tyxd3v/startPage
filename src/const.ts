export const headerMenu = [
  {
    classPostfix: 'goblin',
    description: 'Goblin Online',
    src: 'https://goblins-online.ru/'
  },
  {
    classPostfix: 'zagonka',
    description: 'Zagonka',
    src: 'http://zagonka1.zagonkov.gb.net/9'
  },
  {
    classPostfix: 'vk',
    description: 'Vkontakte',
    src: 'https://vk.com/'
  },
  {
    classPostfix: 'igromania',
    description: 'Igromania',
    src: 'https://www.igromania.ru/'
  },
  {
    classPostfix: 'whatsapp',
    description: 'WhatsApp',
    src: 'https://web.whatsapp.com/'
  },
  {
    classPostfix: 'telegram',
    description: 'Telegram',
    src: 'https://web.telegram.org/k/'
  }
];

export enum DataURLs {
  WEATHER = 'https://pogoda.ngs.ru/',
  CURRENCY = 'http://www.finmarket.ru/',
  NOOBCLUB = 'https://www.noob-club.ru/',
  SEARCH = 'https://www.google.com/search?q=',
  NAPALM = 'https://www.youtube.com/c/napalmrecords/videos',
  NUCLEAR = 'https://www.youtube.com/@NuclearBlastRecords/videos',
  SPOTIFY = 'https://open.spotify.com/embed/playlist/30a3BmF0CtcUU0mxpv2zpD?utm_source=generator'
}

export enum CurrencyQuery {
  USD = '/currency/USD/',
  EURO = '/currency/EUR/',
}

export const MIN_EVENT_NAME_LENGTH = 3;
