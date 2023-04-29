function Preloader(): JSX.Element {
  return (
    <svg className='preloader' viewBox="0 0 128 128"><rect x="0" y="0" width="100%" height="100%" fill="none" /><g><circle cx="16" cy="64" r="16" fill="#f0ad4e" /><circle cx="16" cy="64" r="14.344" fill="#f0ad4e" transform="rotate(45 64 64)" /><circle cx="16" cy="64" r="12.531" fill="#f0ad4e" transform="rotate(90 64 64)" /><circle cx="16" cy="64" r="10.75" fill="#f0ad4e" transform="rotate(135 64 64)" /><circle cx="16" cy="64" r="10.063" fill="#f0ad4e" transform="rotate(180 64 64)" /><circle cx="16" cy="64" r="8.063" fill="#f0ad4e" transform="rotate(225 64 64)" /><circle cx="16" cy="64" r="6.438" fill="#f0ad4e" transform="rotate(270 64 64)" /><circle cx="16" cy="64" r="5.375" fill="#f0ad4e" transform="rotate(315 64 64)" /><animateTransform attributeName="transform" type="rotate" values="0 64 64;315 64 64;270 64 64;225 64 64;180 64 64;135 64 64;90 64 64;45 64 64" calcMode="discrete" dur="640ms" repeatCount="indefinite"></animateTransform></g></svg>
  );
}

export default Preloader;
