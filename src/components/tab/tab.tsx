import { useCallback, useEffect, useRef, useState } from 'react';
import NoobClub from '../noobclub/noobclub';
import Additional from '../additional/additional';
import { DataURLs } from '../../const';

type TabProps = {
  content: string;
}

function Tab({ content }: TabProps): JSX.Element {
  const [showTab, setShowTab] = useState(false);
  const [counter, setCounter] = useState('');
  const [headStatus, setHeadStatus] = useState('');
  const [isViewed, setIsViewed] = useState(false);

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
    setIsViewed(true);
  }

  const setCount = useCallback((count: string, status: string) => {
    setCounter(count);
    setHeadStatus(status);
  }, []);

  let element: null | JSX.Element = null;

  switch (content) {
    case 'NoobClub':
      element = <NoobClub setCount={setCount} isViewed={isViewed} />;
      break;
    case 'YaMusic':
      element = <Additional src={DataURLs.YAMUSIC} className='yamusic' />;
      break;
    case 'NapalmRecords':
      element = <Additional src={DataURLs.NAPALM} className='clips' />;
      break;
    case 'NuclearBlast':
      element = <Additional src={DataURLs.NUCLEAR} className='clips' />;
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
