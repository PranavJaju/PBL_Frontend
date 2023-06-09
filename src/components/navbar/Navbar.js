//import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
const NavBar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">FeedNeedy</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link active"  to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active"  to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active"  to="/donate">Donate</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active"  to="/receive">Receive</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active"  to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active"  to="/profile">Profile</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default NavBar