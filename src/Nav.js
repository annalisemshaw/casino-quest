import React from "react"
import logo from './assets/CQ-logo.png'

export default function Navbar() {
    return (
        <nav className="navbar">
            <a><img src={logo} className="navbar--logo"/></a>
            <li><a href="./App" className="navbar--item">Home</a></li>
            <li><a href="#" className="navbar--item">Reservations</a></li>
            <li><a href="#" className="navbar--item">Groups {`&`} Concierge</a></li>
            <li><a href="https://shopcasinoquest.com/" className="navbar--item">Shop</a></li>
            <li><a href="#" className="navbar--item">More +</a></li>
        </nav>
    )
}