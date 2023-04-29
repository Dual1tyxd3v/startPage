import { headerMenu } from '../../const';

function Header(): JSX.Element {
  return (
    <ul className="header">
      {
        headerMenu.map((menuItem, i) => {
          const key = `${i}__menuitem`;
          return (
            <li key={key}>
              <a href={menuItem.src} className={`header__item header__item--${menuItem.classPostfix}`}>
                <p className="visually-hidden">{menuItem.description}</p>
              </a>
            </li>
          );
        })
      }
      {/* <Link className='header__item header__item--goblin' to='https://goblins-online.ru/' /> */}
      {/* <a href="https://goblins-online.ru/" className="header__item header__item--goblin">
          <p className="visually-hidden">Goblin online</p>
        </a> */}
    </ul>
  );
}

export default Header;
