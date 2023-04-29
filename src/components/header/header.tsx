import { headerMenu } from '../../const';

function Header(): JSX.Element {
  return (
    <header className="header">
      <ul className="header__list">
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
      </ul>
    </header>
  );
}

export default Header;
