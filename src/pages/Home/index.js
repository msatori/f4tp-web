import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import { MDBContainer } from 'mdb-react-ui-kit'
import logo from '../../assets/images/logo.png';

export default function Home() {
    return (
        <section className="home">
            <MDBContainer fluid>
                <div className='mask'>
                    <div className="mask-img">
                        <div className="cta-nav">
                            <img src={logo} />
                            <h4 className='mb-3'>East Madison's Favorite Source for Flowers</h4>
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
        </section>
    )
}