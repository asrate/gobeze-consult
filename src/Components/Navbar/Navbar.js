import React from 'react'
import { NavLink,Link } from 'react-router-dom';
import './Navbar.css';
import img30 from './gobeze.png'

function Navbar(){
      return(
          <div >
         <nav  className="navbar navbar-expand-lg  navbar-light bg-light ">
  <div className="container">
  <a class="navbar-brand" href="#">
      <img src={img30} alt="" width="30" height="24"/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <NavLink className="nav-link ab active" aria-current="page" to ='/' elemenet='true'>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link ab" to='/about' element='true'>About us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link ab" to='./companies' element='true'>Companies</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link ab " to='/news' element='true'>News</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
          </div>
      )
}
export default Navbar;