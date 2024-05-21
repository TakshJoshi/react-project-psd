// import React from "react";

const Navbar = () => {
  return (
    <>
      <div id="head" className="bg-white p-3">
        <h4 style={{
          opacity: 0.710,
          fontSize: '15px',
          letterSpacing: '1px',
          lineHeight: '58px',
          color: '#d7794a',
          fontFamily: 'Myriad Pro',
        }}>GAMBLERS WIKIPEDIA</h4>
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: 'rgb(136, 142, 143)'}}>
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"style={{ marginLeft:'50px'}}>
                <a className="nav-link active" aria-current="page" href="#head">Home</a>
              </li>
              <li className="nav-item" style={{ marginLeft:'70px'}}>
                <a className="nav-link" href="#abtus">ABOUT</a>
              </li>
              <li className="nav-item"style={{ marginLeft:'70px'}}>
                <a className="nav-link" aria-disabled="true" href=".dotted">SERVICES</a>
              </li>
              <li className="nav-item"style={{ marginLeft:'70px'}}>
                <a className="nav-link" aria-disabled="true" href="#gallery">TESTIMONIALS</a>
              </li>
              <li className="nav-item"style={{ marginLeft:'70px'}}>
                <a className="nav-link" aria-disabled="true" href=".num">PORTFOLIO</a>
              </li>
              <li className="nav-item"style={{ marginLeft:'70px'}}>
                <a className="nav-link" aria-disabled="true" href=".back">CONTACTS</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
