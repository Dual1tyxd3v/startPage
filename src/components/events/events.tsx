import { useCallback, useEffect, useState } from 'react';
import EventsEmpty from '../events-empty/events-empty';
import { EventType } from '../../types/types';
import NewEvent from '../new-event/new-event';

function Events(): JSX.Element {
  const [events, setEvents] = useState<null | EventType[]>(null);
  const [showAddEvent, setShowAddEvent] = useState(false);

  useEffect(() => {
    const eventsData = localStorage.getItem('events');
    eventsData && setEvents(JSON.parse(eventsData) as EventType[]);
  }, []);

  const clickHandler = useCallback((value?: boolean, needUpdate = false) => {
    setShowAddEvent(value ?? !showAddEvent);
    if (needUpdate) {
      setEvents(JSON.parse(localStorage.getItem('events') as string) as EventType[]);
    }
  }, []);
  return (
    <>
      {
        showAddEvent && <NewEvent closeHandler={clickHandler} />
      }
      <section className="events" onClick={() => clickHandler()}>
        {
          !events && <EventsEmpty />
        }
        <p className="events__description">кликните в пустое поле чтобы добавить событие</p>
      </section>
    </>
  );
}

export default Events;
