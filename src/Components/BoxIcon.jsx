export const BoxIcon = ({ label, url: initialUrl, className }) => {
  const WORDS_TO_REPLACE = ['mailto:', 'tel:'];
  let dataPrint = WORDS_TO_REPLACE.reduce((acc, word) => acc.replace(word, ''), initialUrl);
  const parts = dataPrint.split('/');
  dataPrint = initialUrl.startsWith('http') ? '@' + parts[parts.length - 1] : dataPrint;
  dataPrint = initialUrl.includes('portfolio') ? initialUrl : dataPrint;

  return <a href={initialUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="social__link"
    title={label}
    data-print={dataPrint}>
    <i className={`bx ${className} social__icon`} />
  </a>
};
