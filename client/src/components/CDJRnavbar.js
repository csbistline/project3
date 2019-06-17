import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const CDJRnavbar = () => {
    return (
        <div className="mb-5">
            <Navbar collapseOnSelect expand="xl" bg="light" variant="light" fixed="top" style={{ "boxShadow": "0px 4px 2px -1px rgba(38,37,38,1)" }}>
                <Navbar.Brand href="#home">
                    <img src="./assets/img/logo.png" width="300" height="50" alt="dealerLogo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home"><span className="sr-only">(current)</span><i className="fas fa-home"></i> HOME</Nav.Link>
                        <Nav.Link href="#new">NEW</Nav.Link>
                        <Nav.Link href="#used">USED</Nav.Link>
                        <Nav.Link href="#specials">SPECIALS</Nav.Link>
                        <Nav.Link href="#selltrade">SELL & TRADE</Nav.Link>
                        <Nav.Link href="#financelease">FINANCE & LEASE</Nav.Link>
                        <Nav.Link href="/">PARTS</Nav.Link>
                        <Nav.Link href="#service">SERVICE</Nav.Link>
                        <Nav.Link href="#collision">COLLISION</Nav.Link>
                        <Nav.Link href="#about">ABOUT</Nav.Link>
                    </Nav>
                    <Nav className="navbar-text">
                            Parts: <br /> 615-538-9033
                    </Nav>
                    <Nav>
                        <div className="btn-toolbar ml-auto" role="toolbar" aria-label="Toolbar with button groups">
                            <div className="btn-group ml-2" role="group" aria-label="First group">
                                <button type="button" className="btn btn-outline-secondary"><i className="fa fa-calendar"> SERVICE</i></button>
                                <button type="button" className="btn btn-outline-secondary"><i className="fa fa-map-marker"> MAP</i></button>
                                <button type="button" className="btn btn-outline-secondary"><i className="fa fa-envelope"> CONTACT</i></button>
                            </div>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default CDJRnavbar;