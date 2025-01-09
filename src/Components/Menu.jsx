export function Menu() {
  const handleExport = () => {
    console.log("Exporting to PDF3");
    window.print();
  };
  return (
    <header className="l-header no-print" id="header">
      <nav className="nav bd-container">
        <div className="nav__menu show-menu" id="nav-menu">
          <ul className="nav__list">
            {/*}<li className="nav__item">
              <span className="nav__link">
                <i className="bx bx-home nav__icon" /> Guardar en PDF
              </span>
              </li>*/}
          </ul>
        </div>
        <div className="nav__toggle--fixed" id="nav-toggle">
          <i className="bx bx-save nav__icon" />
          <span onClick={handleExport} className="nav__logo">
            Guardar en PDF
          </span>
        </div>
      </nav>
    </header>
  );
}
