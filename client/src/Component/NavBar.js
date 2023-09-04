import React from 'react'
import './Resources/StyleSheets/NavBar.css'
import { Link } from 'react-router-dom'
import UserLogin from './Form/UserLogin'
import AdminLogin from './Form/AdminLogin'


function NavBar({authFunction, adminAuth, TotalQueries}) {
 
  return (
        <>
        <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand text-light" to="/">
        <img src={require('./Resources/Images/Logo.png')} className='NavBar' alt=''></img>
    </Link>
    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon " ></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/Projects">Projects</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-light" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Know more
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/Projects">Upcoming projects</Link></li>
            <li><Link className="dropdown-item" to="/About-us">About us</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/Contact-us"> Contact us  </Link></li>
          </ul>
        </li>
        { adminAuth &&
          <li className="nav-item">
          <Link className="nav-link text-light" to="/Admin-Panel">Admin panel</Link>
        </li>
        }
        {adminAuth &&
          <li className="nav-item">
          <Link className="nav-link query text-light" to="/Queries">Queries <span className='queryNumber'>{TotalQueries}</span></Link>
        </li>
        }
        
      </ul>
      <button type="button" className="btn btn-outline-success mx-1" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Login
      </button>


      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">User Login</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <UserLogin />
            </div>
          </div>
        </div>
      </div>
      <button type="button" className="btn btn-outline-success mx-1" data-bs-toggle="modal" data-bs-target="#admin">
        admin
      </button>


      <div className="modal fade" id="admin" tabindex="-1" aria-labelledby="adminLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="adminLabel">Admin Login</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
             <AdminLogin authFunction = {authFunction}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>

        </>
    )
}

export default NavBar