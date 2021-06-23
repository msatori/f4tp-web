import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import { MDBContainer } from 'mdb-react-ui-kit'
import logo from '../../assets/images/logo.png';

//page imports
import Contact from '../Contact';
import Services from '../Services';
export default function Home() {
    return (
        <section className="home">
            <MDBContainer fluid>
                <div className='mask'>
                    <div className="mask-img">
                        <div className="cta-nav">
                            <img src={logo} />
                            
                            <ul>
                                <li>
                                    <Link to="/about">Services</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                                <li>
                                    <Link to="/market">Farmers Market Information</Link>
                                </li>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
           </MDBContainer>
           <Services />
           <Contact />
        </section>
    )
}