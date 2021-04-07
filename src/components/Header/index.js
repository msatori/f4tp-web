import React from 'react';
import { Container } from 'react-bootstrap';
import logo from '../../assets/images/logo.png';

function Header() {
    return(
        <header>
            <Container fluid>
                <div className="header-wrapper">
                    <img src={logo} alt="Flowers for The People"></img>
                </div>
            </Container>
        </header>
    );
};

export default Header;