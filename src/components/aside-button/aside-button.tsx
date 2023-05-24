type AsideButtonProps = {
  openAsideHandler: () => void;
}

function AsideButton({openAsideHandler}: AsideButtonProps): JSX.Element {
  return (
    <button onClick={openAsideHandler} type="button" className="aside__button" aria-label="Aside menu opener">
      <svg className="aside__arrow" width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

        <g id="SVGRepo_bgCarrier" strokeWidth="0" />

        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

        <g id="SVGRepo_iconCarrier"> <path d="M19 19L12.7071 12.7071C12.3166 12.3166 12.3166 11.6834 12.7071 11.2929L19 5" stroke="#eb9316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> <path d="M11 19L4.70711 12.7071C4.31658 12.3166 4.31658 11.6834 4.70711 11.2929L11 5" stroke="#eb9316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> </g>

      </svg>
    </button>
  );
}

export default AsideButton;
