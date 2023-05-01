import { MouseEvent, useCallback, useEffect, useState } from 'react';
import EventsEmpty from '../events-empty/events-empty';
import { EventType } from '../../types/types';
import NewEvent from '../new-event/new-event';
import EventCard from '../event-card/event-card';
import { checkExpired } from '../../utils/events';

function Events(): JSX.Element {
  const [events, setEvents] = useState<null | EventType[]>(null);
  const [showAddEvent, setShowAddEvent] = useState(false);

  useEffect(() => {
    const eventsData = localStorage.getItem('events');
    eventsData && setEvents(checkExpired(eventsData));
  }, []);

  function showClickHandler(e: MouseEvent) {
    const element = e.target as HTMLElement;
    (element.classList.contains('events') || element.classList.contains('events__list') || element.classList.contains('events__empty')) && setShowAddEvent(true);
  }

  const clickHandler = useCallback((value?: boolean, needUpdate = false) => {
    setShowAddEvent(value ?? !showAddEvent);
    if (needUpdate) {
      setEvents(checkExpired(localStorage.getItem('events') as string));
    }
  }, []);

  const update = useCallback(() => {
    const data = localStorage.getItem('events');
    setEvents(data ? checkExpired(data) : null);
  }, []);
  return (
    <>
      {
        showAddEvent && <NewEvent closeHandler={clickHandler} />
      }
      <section className="events" onClick={showClickHandler}>
        {
          !events && <EventsEmpty />
        }
        <div className="events__list">
          {
            events && events.map((event) => {
              const key = `${event.id}_event`;
              return <EventCard key={key} update={update} card={event}/>;
            })
          }
        </div>
        <p className="events__description">кликните в пустое поле чтобы добавить событие</p>
      </section>
    </>
  );
}

export default Events;
