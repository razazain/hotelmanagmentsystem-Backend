import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <div>
            <div className="header">
                <div className="header-left">
                    <Link to="index.html" className="logo">
                        <h4><b className="logo">LuxuryStay</b></h4>
                    </Link>
                    <Link to="index.html" className="logo logo-small"> <b>LS</b> </Link>
                </div>
                {/* javascript:void(0); */}
                <Link to="#" id="toggle_btn"> <i className="fe fe-text-align-left"></i> </Link>
                <Link className="mobile_btn" id="mobile_btn"> <i className="fas fa-bars"></i> </Link>
                <ul className="nav user-menu">

                    <li className="nav-item dropdown has-arrow">
                        <Link to="#" className="dropdown-toggle nav-link" data-toggle="dropdown"> <span
                            className="user-img"><b>PROFILE</b></span> </Link>
                        <div className="dropdown-menu">
                            <div className="user-header">
                                <Link className="dropdown-item" to="profile.html">My Profile</Link> <Link className="dropdown-item"
                                    to="settings.html">Account Settings</Link> <Link className="dropdown-item"
                                        to="login.html">Logout</Link>
                            </div>
                        </div>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default Header