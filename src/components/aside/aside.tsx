import { useCallback, useState } from 'react';
import AsideButton from '../aside-button/aside-button';
import AsideList from '../aside-list/asideList';

function Aside(): JSX.Element {
  const [isOpened, setIsOpened] = useState(false);

  const openAsideHandler = useCallback(() => {
    setIsOpened(!isOpened);
  }, [isOpened]);
  return(
    <div className={`aside ${isOpened ? 'aside--opened' : ''}`}>
      <AsideButton openAsideHandler={openAsideHandler} />
      <AsideList />
    </div>
  );
}

export default Aside;
