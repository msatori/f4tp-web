import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import { MDBContainer, MDBJumbotron } from 'mdbreact'
import logo from '../../assets/images/logo.png';

//page imports
import Contact from '../Contact';
import Services from '../Services';
export default function Home() {
    return (
        <section>
            <MDBContainer className="text-center">
                <div className="home">
                    <MDBJumbotron>
                        <div className='mask'>
                            <div className="cta">
                                <h1>Flowers 4 the People</h1>
                                <div className="cta-nav">
                                    <ul>
                                        <li>
                                            <Link to="/contact">Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </MDBJumbotron>
                </div>
            </MDBContainer>

        </section>
    )
}