import { asideItems } from '../../aside-items';
import AsideItem from '../aside-item/aside-item';

function AsideList(): JSX.Element {
  return (
    <ul className="aside__list">
      {
        asideItems.map((item, i) => {
          const key = `${i}_${item.name}`;
          return (
            <li key={key}>
              <AsideItem name={item.name} url={item.url} imgSrc={item.imgSrc} />
            </li>
          );
        })
      }
    </ul>
  );
}

export default AsideList;
