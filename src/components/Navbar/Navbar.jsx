import React from 'react'
import logo from '../../images/Logo.svg'
import './Navbar.css'
function Navbar() {
    return (
        <div className='NavBar'>
            <div>
                <img src={logo} alt="" />
            </div>
            <ul className='UnOrderedList'>
                <li>
                    <a href="#">Order</a>
                </li>
                <li><a href="#">Order Review</a></li>
                <li><a href="#">Manage Inventory</a></li>
                <li><a href="#">Login</a></li>
            </ul>
        </div>
    )
}

export default Navbar