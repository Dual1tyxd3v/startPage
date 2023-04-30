import { FormEvent, useLayoutEffect, useRef } from 'react';
import { DataURLs } from '../../const';

function Search(): JSX.Element {
  const input = useRef(null);

  useLayoutEffect(() => {
    if (!input.current) {
      return;
    }
    (input.current as HTMLInputElement).focus();
  }, []);

  function submitHandler(evt: FormEvent) {
    evt.preventDefault();
    if (!input.current) {
      return;
    }
    const value = (input.current as HTMLInputElement).value;
    if (!value.length) {
      return;
    }
    window.location.href = (`${DataURLs.SEARCH}${value}`);
  }
  return (
    <section className="search">
      <form className="search__form" onSubmit={submitHandler}>
        <label htmlFor="search" className="visually-hidden">Поисковая строка</label>
        <input ref={input} type="text" name="search" id="search" className="search__bar" placeholder='Search...' />
      </form>
    </section>
  );
}

export default Search;
