import React from "react"
import logo from './assets/CQ-logo.png'

export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <img src={logo} className="navbar-logo" />
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon  navbar-dark"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav nav">
                <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Groups & Concierge</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="https://shopcasinoquest.com/">Shop</a>
                </li>
                <li class="nav-item">
                <a class="nav-link">More +</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    )
}