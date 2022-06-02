import React from 'react'
import './Footer.css'
import { NavLink, Link } from "react-router-dom";
 function Footer() {
  return (
    <div>
        <div className='container-fluid qwq'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-lg-4'>
                    <h4 className='kk'>Contact Info </h4>
            <ul className='list-unstyled ll'>
                <li>gobezeconsult@gmail.com</li>
                <li>+251 11 663 1080</li>
                <li>AB START, 3rd Floor</li>
                <li>Addis Ababa, Ethiopia</li>
            </ul> 
                    </div>

                    <div className='col-12 col-lg-6 text-black' >
            <h4 className='kk'>Gobeze Consult </h4>
            <ul className='list-unstyled ll'>
                <li> <Link className="nav-link  active" aria-current="page" to ='/' elemenet='true'>Home</Link></li>
                <li> <Link className="nav-link  active" aria-current="page" to ='/about' elemenet='true'>About us</Link></li>
                <li><Link className="nav-link  active" aria-current="page" to ='/about' elemenet='true'>Companies</Link></li>
                <li><Link className="nav-link  active" aria-current="page" to ='/about' elemenet='true'>News</Link></li>
            </ul> 
                </div>
                <div className='find col-12 col-lg-2  ' >
            <h4 className='kk'>Find us </h4>
            <ul className='list-unstyled'>
               
                <li> <a href="www.facebook.com/asreakl" class="fa fa-facebook "></a> 
                <a href="/" class="fa fa-linkedin"></a></li>
               
            </ul> 
                </div>




                </div>
            </div>
        </div>
    </div>
  )
}
export default Footer
