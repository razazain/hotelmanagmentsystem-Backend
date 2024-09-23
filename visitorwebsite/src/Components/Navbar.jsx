import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>



{/* <!-- Header Section Begin --> */}
    <header class="header-section">
        {/* <div class="top-nav">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <ul class="tn-left">
                            <li><i class="fa fa-phone"></i> (12) 345 67890</li>
                            <li><i class="fa fa-envelope"></i> info.colorlib@gmail.com</li>
                        </ul>
                    </div>
                    <div class="col-lg-6">
                        <div class="tn-right">
                            <div class="top-social">
                                <a href="#"><i class="fa fa-facebook"></i></a>
                                <a href="#"><i class="fa fa-twitter"></i></a>
                                <a href="#"><i class="fa fa-tripadvisor"></i></a>
                                <a href="#"><i class="fa fa-instagram"></i></a>
                            </div>
                            <a href="#" class="bk-btn">Booking Now</a>
                            <div class="language-option">
                                <img src="img/flag.jpg" alt=""/>
                                <span>EN <i class="fa fa-angle-down"></i></span>
                                <div class="flag-dropdown">
                                    <ul>
                                        <li><a href="#">Zi</a></li>
                                        <li><a href="#">Fr</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        <div class="menu-item">
            <div class="container">
                <div class="row">
                    <div class="col-lg-2">
                        <div class="logo">
                            <a to="/">
                                <h5>LuxuryStay Hospitality</h5>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-10">
                        <div class="nav-menu">
                            <nav class="mainmenu">
                                <ul>
                                    <li class="active"><Link to="/">Home</Link></li>
                                    <li><Link to="/rooms">Rooms</Link>
                                        {/* <ul class="dropdown">
                                            <li><Link to="/doubleroom">Double Room</Link></li>
                                            <li><Link to="/premiumroom">Premium Room</Link></li>
                                            <li><Link to="/deluxroom">Delux Room</Link></li>
                                            <li><Link to="/familyroom">Family Room</Link></li>
                                        </ul> */}
                                    </li>
                                    <li><Link to="/about">About Us</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                    <li><Link to="/register">Signup/Login</Link></li>
                                 
                                </ul>
                            </nav>
                               
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    {/* <!-- Header End --> */}



    </div>
  )
}

export default Navbar