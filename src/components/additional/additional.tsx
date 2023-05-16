type AdditionalProps = {
  src: string;
  title: string;
}

function Additional({src, title}: AdditionalProps): JSX.Element {
  return (
    <iframe allow="encrypted-media" title={title} src={src} className='iframe'></iframe>
  );
}

export default Additional;
