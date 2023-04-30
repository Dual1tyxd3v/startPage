type AdditionalProps = {
  src: string;
  className: string;
}

function Additional({src, className}: AdditionalProps): JSX.Element {
  return (
    <iframe title={className} src={src} className={className}></iframe>
  );
}

export default Additional;
