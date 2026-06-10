export function Menu({ lang, handleLang }) {
  const handleExport = () => {
    console.log("Exporting to PDF3");
    window.print();
  };

  return (
    <header className="l-header no-print" id="header">
      <nav className="nav bd-container flexifier">
        <div className="nav__toggle--fixed" id="nav-toggle">
          <i className="bx bx-translate nav__icon" />
          <span onClick={handleLang} className="nav__logo">
            {lang === true ? "Read in spanish" : "Leer en ingles "}
          </span>
        </div>
        <div className="nav__toggle--fixed" id="nav-toggle">
          <i className="bx bx-save nav__icon" />
          <span onClick={handleExport} className="nav__logo">
            Save in PDF
          </span>
        </div>
      </nav>
    </header>
  );
}
