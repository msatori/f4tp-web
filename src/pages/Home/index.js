import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import { MDBContainer, MDBJumbotron, MDBBtn, MDBCol, MDBRow, MDBCardTitle, MDBIcon } from 'mdbreact'
import bg from '../../assets/images/bg.JPG';

//page imports
import Contact from '../Contact';
import Services from '../Services';
export default function Home() {
    return (
        <section>
            <MDBContainer fluid>
                <MDBRow>
                    <MDBCol>
                        <MDBJumbotron>
                            <MDBCol className="text-white text-center py-5 px-4 my-5 mask">
                                <MDBCol className="py-5k">
                                    <h1>Flowers 4 the People</h1>
                                    <MDBBtn outline color="white" className="mb-5"><MDBIcon icon="clone" className="mr-2"></MDBIcon>
                                        <Link to='/contact'>Contact Me</Link>
                                    </MDBBtn>
                                </MDBCol>
                            </MDBCol>
                        </MDBJumbotron>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    )
}