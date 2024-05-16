import React from "react";
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.css';

export function NavBar(props)
{
    return (
        <section id="all-nav" className="all-nav">
            <nav className="navbar navbar-expand-lg navbar-dark bg-orange nav-border">
                <div className="container-fluid">
                    <a className="navbar-brand text-Kaushan mx-3" href="home.html">Coach Finder</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item mx-2 nav-item-equalspace">
                                <a className="nav-link text-white nav-col-border" href="searchpage.html"> Search</a>
                            </li>
                            <li className="nav-item mx-2 nav-item-equalspace">
                                <a className="nav-link text-white nav-col-border" href="traineeprofile.html"> Profile</a>
                            </li>
                            <li className="nav-item mx-2 nav-item-equalspace">
                                <a className="nav-link text-white nav-col-border" href="appointmentscreen.html"> Appointments</a>
                            </li>
                            <li className="nav-item mx-2 nav-item-equalspace">
                                <a className="nav-link text-white nav-col-border" href="message.html"> Messages</a>
                            </li>
                            <li className="nav-item mx-2 nav-item-equalspace">
                                <a className="nav-link text-white nav-col-border" href="login.html">Login</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </section>
    )
}