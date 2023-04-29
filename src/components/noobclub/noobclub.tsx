import { useLayoutEffect } from 'react';
import { DataURLs } from '../../const';
import { loadNoobClub } from '../../utils/noobClubParser';

type NoobClubProps = {
  setCount: (value: string, status: string) => void;
}

function NoobClub({setCount}: NoobClubProps): JSX.Element {
  useLayoutEffect(() => {
    fetch(DataURLs.NOOBCLUB)
      .then((res) => {
        if (res.ok) {
          return res.text();
        }
      })
      .then((res) => loadNoobClub(res as string))
      .catch((err: Error) => setCount('0', 'qwe'));
  }, []);
  return (
    <div>
      <p>some test</p>
    </div>
  );
}

export default NoobClub;
