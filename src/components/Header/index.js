import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Container } from 'react-bootstrap';

//import pages
import Home from '../../pages/Home'
import About from '../../pages/About';
import Contact from '../../pages/Contact';
import MarketInfo from '../../pages/Market';

//image importß
import logo from '../../assets/images/logo.png';

function Header() {
    return(
        <header>
            <Container fluid>
                <div className="header-wrapper">
                    <img src={logo} alt="Flowers for The People" Link to='/'></img>
                </div>
                <Router>
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

                    <Switch>
                        <Route path='/about'>
                            <About />
                        </Route>
                        <Route path='/contact'>
                            <Contact />
                        </Route>
                        <Route path ='/market'>
                            <MarketInfo />
                        </Route>
                        <Route path ="/">
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            </Container>
        </header>
    );
};

export default Header;