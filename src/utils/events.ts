import { EventType } from '../types/types';

export function checkExpired(data: string) {
  const dataObj = JSON.parse(data) as EventType[];
  const time = new Date().getTime();
  let index = 0;
  for (let i = 0; i < dataObj.length; i++) {
    if (dataObj[i].time < time) {
      index = i + 1;
    }
  }
  if (index === dataObj.length) {
    localStorage.removeItem('events');
    return null;
  }
  const result = dataObj.slice(index);
  localStorage.setItem('events', JSON.stringify(result));
  return result;
}

export function addEvent(title: string, readableDate: string, date: string, time: string) {
  const eventsData = localStorage.getItem('events');

  if (!eventsData) {
    localStorage.setItem('events', JSON.stringify([{
      title: title,
      time: new Date(`${date} ${time}`).getTime(),
      description: `${readableDate}`,
      id: new Date().toString()
    }]));
  } else {
    const jsonEventsData = JSON.parse(eventsData) as EventType[];
    jsonEventsData.push({
      title: title,
      time: new Date(`${date} ${time}`).getTime(),
      description: `${readableDate}`,
      id: new Date().toString()
    });

    jsonEventsData.sort((a, b) => {
      if (a.time > b.time) {
        return 1;
      }
      if (a.time < b.time) {
        return -1;
      }
      return 0;
    });

    localStorage.setItem('events', JSON.stringify(jsonEventsData));
  }
}

export function getReadableTimer(seconds: number) {
  const days = Math.floor(seconds / 3600 / 24);
  const hours = Math.floor(seconds / 3600 % 24).toString().padStart(2, '0');
  const minutes = Math.floor(seconds / 60 % 60).toString().padStart(2, '0');
  const second = (seconds % 60).toString().padStart(2, '0');
  return `${days}:${hours}:${minutes}:${second}`;
}

export function deleteEvent(id: string) {
  const data = JSON.parse(localStorage.getItem('events') as string) as EventType[];
  const newData = data.filter((event) => event.id !== id);
  newData.length === 0
    ? localStorage.removeItem('events')
    : localStorage.setItem('events', JSON.stringify(newData));
}
