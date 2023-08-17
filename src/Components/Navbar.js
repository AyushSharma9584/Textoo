import React from 'react'
import {Link} from 'react-router-dom';
function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">TEXTO</a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to='/' className="nav-link active" aria-current="page" >Home</Link>
              </li>
              <li className="nav-item">
                <Link to='/about' className="nav-link active" aria-current="page">About</Link>
              </li>



            </ul>
            <div className="form-check form-switch">
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className={`form-check-label text-${props.mode==="light"?"dark":"light"}`} htmlfor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>

          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar