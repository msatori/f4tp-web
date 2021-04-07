import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import { Container, Col, Row } from 'react-bootstrap';
import dahlia from '../../assets/images/dahlia2.png';

export default function Home() {
    return (
        <Container fluid>
            <section className="home-wrapper">
                <div className="home-content">
                    <Row>
                        <Col>
                            <div className="nav-menu">


                                <Link to="/about"> About Us </Link>


                                <Link to="/contact">Contact Me </Link>


                                <Link to="/market">Farmers Market Information</Link>


                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </Container>
    )
}