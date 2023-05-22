import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ContentObject } from '../../types/types';

type LoadedTabProps = {
  setCount: (value: string, status: string) => void;
  isViewed: boolean;
  contentObject: ContentObject;
}

function LoadedTab({ setCount, isViewed, contentObject }: LoadedTabProps): JSX.Element {
  const [content, setContent] = useState<null | HTMLDivElement>(null);
  const container = useRef(null);
  const [headers, setHeaders] = useState<null | string>(null);
  const { url, parser, localStorageName } = contentObject;

  useEffect(() => {
    if (!container.current) {
      return;
    }
    const element = container.current as HTMLElement;
    content && element.append(content);
  }, [content]);

  useLayoutEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.text();
        }
        setCount('', 'tab__header--error');
      })
      .then((res) => {
        const result = parser(res as string);
        setContent(result ? result.container : result);
        result && setHeaders(result.headers);
        result && setCount(result.counter, 'tab__header--new');
      })
      .catch((err: Error) => setCount('', 'tab__header--error'));
  }, [setCount, parser, url]);

  (isViewed && headers) && localStorage.setItem(localStorageName, headers);

  return (
    <div ref={container} className='loaded-tab'>
    </div>
  );
}

export default LoadedTab;
