import { useEffect, useState } from 'react';
import { deleteEvent, getReadableTimer } from '../../utils/events';
import { EventType } from '../../types/types';

type EventCardProps = {
  card: EventType;
  update: () => void;
}

function EventCard({update, card}: EventCardProps): JSX.Element {
  const {title, id, time, description} = card;
  const [counter, setCounter] = useState(Math.floor((time - new Date().getTime()) / 1000));

  useEffect(() => {
    if (counter === 0) {
      update();
      return;
    }
    const timer = setInterval(() => {
      setCounter(counter - 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [counter, update]);

  function deleteHandler() {
    deleteEvent(id);
    update();
  }

  return (
    <div className="event">
      <button className="event__delete" aria-label="Удалить событие" onClick={deleteHandler}></button>
      <h5 className="event__title">{title}</h5>
      <p className="event__date">Дата: {description}</p>
      <p className="event__timer">{getReadableTimer(counter)}</p>
    </div>
  );
}

export default EventCard;
