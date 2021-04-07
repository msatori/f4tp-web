import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Container } from 'react-bootstrap';



//image importß
import logo from '../../assets/images/logo.png';

function Header() {
    return(
        <header>
            <Container fluid>
                <div className="header-wrapper">
                    <img src={logo} alt="Flowers for The People" Link to='/'></img>
                </div>
                    <div>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/about">About Us</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact Me</Link>
                                </li>
                                <li>
                                    <Link to="/market">Farmers Market Information</Link>
                                </li>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
            </Container>
        </header>
    );
};

export default Header;