import { useCallback, useEffect, useRef, useState } from 'react';
import NoobClub from '../noobclub/noobclub';

type TabProps = {
  content: string;
}

function Tab({content}: TabProps): JSX.Element {
  const [showTab, setShowTab] = useState(false);
  const [counter, setCounter] = useState('');
  const [headStatus, setHeadStatus] = useState('');
  const tab = useRef(null);

  useEffect(() => {
    if (!tab.current) {
      return;
    }
    const element = tab.current as HTMLElement;
    element.style.height = showTab ? `${element.scrollHeight}px` : '0';
  }, [showTab]);

  function clickHandler() {
    setShowTab(!showTab);
  }

  const setCount = useCallback((count: string, status: string) => {
    setCounter(count);
    setHeadStatus(status);
  }, []);

  let element: null | JSX.Element = null;

  switch(content) {
    case 'NoobClub':
      element = <NoobClub setCount={setCount} />;
      break;
    default:
      element = null;
      break;
  }
  return (
    <section className="tab">
      <div className={`tab__header ${headStatus}`} onClick={clickHandler}>
        <h3 className="tab__title">{`${content}${counter}`}</h3>
      </div>
      <div ref={tab} className={`tab__content${showTab ? '' : ' hide'}`}>
        {element}
      </div>
    </section >
  );
}

export default Tab;
