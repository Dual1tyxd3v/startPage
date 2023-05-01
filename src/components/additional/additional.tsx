type AdditionalProps = {
  src: string;
  title: string;
}

function Additional({src, title}: AdditionalProps): JSX.Element {
  return (
    <iframe title={title} src={src} className='iframe'></iframe>
  );
}

export default Additional;
