type AsideItemProps = {
  name: string;
  imgSrc: string;
  url: string;
}

function AsideItem({name, imgSrc, url}: AsideItemProps): JSX.Element {
  return (
    <a className='aside__item' href={url}>
      <img src={imgSrc} alt={name} className="aside__img" />
      <p className="aside__text">
        {name}
      </p>
    </a>
  );
}

export default AsideItem;
