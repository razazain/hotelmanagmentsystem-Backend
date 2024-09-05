import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div>
            <div className="sidebar" id="sidebar">
                <div className="sidebar-inner slimscroll">
                    <div id="sidebar-menu" className="sidebar-menu">
                        <ul>
                            <li className="active"> <Link to="index.html"><i className="fas fa-tachometer-alt"></i>
                                <span>Dashboard</span></Link> </li>
                            <li className="list-divider"></li>

                            <li className="submenu"> <Link to="#"><i className="fas fa-suitcase"></i> <span> User </span> <span
                                className="menu-arrow"></span></Link>
                                <ul className="submenu_className" style={{display: "none"}}>
                                    <li><Link to="#"> Guest </Link></li>
                                    <li><Link to="#"> Manager </Link></li>
                                    <li><Link to="#"> Housekeeping </Link></li>
                                </ul>
                            </li>

                            <li className="submenu"> <Link to="#"><i className="fas fa-key"></i> <span> Rooms </span> <span
                                className="menu-arrow"></span></Link>
                                <ul className="submenu_className" style={{display: "none"}}>
                                    <li><Link to="all-rooms.html">All Rooms </Link></li>
                                    <li><Link to="add-room.html"> Add Rooms </Link></li>
                                </ul>
                            </li>

                            <li className="submenu"> <Link to="#"><i className="fas fa-suitcase"></i> <span> Booking </span> <span
                                className="menu-arrow"></span></Link>
                                <ul className="submenu_className" style={{display: "none"}}>
                                    <li><Link to="all-booking.html"> All Booking </Link></li>
                                    <li><Link to="add-booking.html"> Add Booking </Link></li>
                                </ul>
                            </li>

                            <li className="submenu"> <Link to="#"><i className="fas fa-suitcase"></i> <span> Payments </span> <span
                                className="menu-arrow"></span></Link>
                                <ul className="submenu_className" style={{display: "none"}}>
                                    <li><Link to="payments.html"> All Payments </Link></li>
                                    <li><Link to="#"> Add Payments </Link></li>
                                </ul>
                            </li>

                            <li className="submenu"> <Link to="#"><i className="fas fa-suitcase"></i> <span> Maintainance Request
                            </span> <span className="menu-arrow"></span></Link>
                                <ul className="submenu_className" style={{display: "none"}}>
                                    <li><Link to="#"> All Request </Link></li>
                                    <li><Link to="#"> Add Request </Link></li>
                                </ul>
                            </li>

                            <li className="submenu"> <Link to="#"><i className="fas fa-suitcase"></i> <span> Housekeeping </span>
                                <span className="menu-arrow"></span></Link>
                                <ul className="submenu_className" style={{display: "none"}}>
                                    <li><Link to="#"> All Housekeeping </Link></li>
                                    <li><Link to="#"> Add Housekeeping </Link></li>
                                </ul>
                            </li>

                            <li className="submenu"> <Link to="#"><i className="fas fa-suitcase"></i> <span> Feedback </span>
                                <span className="menu-arrow"></span></Link>
                                <ul className="submenu_className" style={{display: "none"}}>
                                    <li><Link to="#"> All Feedback </Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar