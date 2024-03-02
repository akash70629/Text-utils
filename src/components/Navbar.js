import React from 'react'
// import './Navbar.css'
// import PropTypes from 'prop-types'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Navbar(props) {

  return (

    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>

      <div className="container-fluid" >
        <a className="navbar-brand" href="/">Text Utils</a>







{/* 
        <div>
          <input type="checkbox" className="checkbox" id="checkbox" />
          <label for="checkbox" className="checkbox-label">
          <FontAwesomeIcon icon="fa-solid fa-moon" />
            <i className="fas fa-sun"></i>
            <span className="ball"></span>
          </label>
        </div> */}




















        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode}</label>
        </div>

      </div>
    </nav>

  )
}
