import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { DataURLs } from '../../const';
import { loadNoobClub } from '../../utils/noobClubParser';

type NoobClubProps = {
  setCount: (value: string, status: string) => void;
  isViewed: boolean;
}

function NoobClub({ setCount, isViewed }: NoobClubProps): JSX.Element {
  const [content, setContent] = useState<null | HTMLDivElement>(null);
  const container = useRef(null);
  const [headers, setHeaders] = useState<null | string>(null);

  useEffect(() => {
    if (!container.current) {
      return;
    }
    const element = container.current as HTMLElement;
    content && element.append(content);
  }, [content]);

  useLayoutEffect(() => {
    fetch(DataURLs.NOOBCLUB)
      .then((res) => {
        if (res.ok) {
          return res.text();
        }
        setCount('', 'tab__header--error');
      })
      .then((res) => {
        const result = loadNoobClub(res as string);
        setContent(result ? result.container : result);
        result && setHeaders(result.headers);
        result && setCount(result.counter, 'tab__header--new');
      })
      .catch((err: Error) => setCount('', 'tab__header--error'));
  }, [setCount]);

  (isViewed && headers) && localStorage.setItem('nclub', headers);

  return (
    <div ref={container} className='noobclub'>
    </div>
  );
}

export default NoobClub;
