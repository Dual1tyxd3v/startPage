/* eslint-disable no-console */
import { ChangeEvent, FormEvent, useState } from 'react';
import { MIN_EVENT_NAME_LENGTH } from '../../const';
import { EventFormType, EventType } from '../../types/types';
import { getMilliSeconds, getShortDate } from '../../utils/date';

type NewEventProps = {
  closeHandler: (value?: boolean, needUpdate?: boolean) => void;
}

function NewEvent({ closeHandler }: NewEventProps): JSX.Element {
  const [formData, setFormData] = useState<EventFormType>({
    title: '',
    date: getShortDate(new Date()),
    time: '00:00'
  });

  function clickHandler() {
    closeHandler(false);
  }

  function inputChangeHandler(evt: ChangeEvent) {
    const element = evt.target as HTMLInputElement;
    setFormData({ ...formData, [element.name]: element.value });
  }

  function formSubmit(evt: FormEvent) {
    evt.preventDefault();

    const form = evt.target as HTMLFormElement;
    const data = new FormData(form);

    const eventsData = localStorage.getItem('events');
    if (!eventsData) {
      localStorage.setItem('events', JSON.stringify([{
        title: data.get('title'),
        time: getMilliSeconds(data.get('date') as string, data.get('time') as string)
      }]));
    } else {
      const jsonEventsData = JSON.parse(eventsData) as EventType[];
      jsonEventsData.push({
        title: data.get('title') as string,
        time: getMilliSeconds(data.get('date') as string, data.get('time') as string)
      });
      localStorage.setItem('events', JSON.stringify(jsonEventsData));
    }
    closeHandler(false, true);
  }
  return (
    <section className="newEvent">
      <div className="newEvent__container">
        <button className="newEvent__close" aria-label="Закрыть окно" onClick={clickHandler}></button>
        <form className="newEvent__form" onSubmit={formSubmit}>
          <div className="newEvent__wrapper">
            <div className="newEvent__field">
              <label htmlFor="title" className="newEvent__label">Название</label>
              <input type="text" name="title" id="title" className="newEvent__input" value={formData.title} onChange={inputChangeHandler} />
            </div>
            <div className="newEvent__field">
              <label htmlFor="date" className="newEvent__label">Дата</label>
              <input type="date" name="date" id="date" className="newEvent__input" value={formData.date} onChange={inputChangeHandler} />
            </div>
            <div className="newEvent__field">
              <label htmlFor="time" className="newEvent__label">Время (не обязательно)</label>
              <input type="time" name="time" id="time" className="newEvent__input" value={formData.time} onChange={inputChangeHandler} />
            </div>
          </div>
          <input type="submit" value="Добавить" className="newEvent__submit" disabled={formData.title.length < MIN_EVENT_NAME_LENGTH || ((new Date(formData.date).getTime() - new Date().getTime()) <= 0 && formData.time === '00:00')} />
        </form>
      </div>
    </section>
  );
}

export default NewEvent;
