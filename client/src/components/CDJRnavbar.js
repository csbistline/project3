import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap'

const CDJRnavbar = () => {
    return (
        <Navbar>
            <Nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" style={{ "boxShadow": "0px 4px 2px -1px rgba(38,37,38,1)" }}>
                <a className="navbar-brand" href="#">
                    <img src="./assets/img/logo.png" width="300" height="50" alt="dealerLogo" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#"> <span className="sr-only">(current)</span><i className="fas fa-home"></i> HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">NEW</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">USED</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">SPECIALS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">SELL & TRADE</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">FINANCE & LEASE</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">PARTS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">SERVICE</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">COLLISION</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">ABOUT</a>
                        </li>
                    </ul>
                    <span className="navbar-text ml-auto">
                        <p>Parts
                <br />615-538-9033</p>
                    </span>
                    <div className="btn-toolbar ml-auto" role="toolbar" aria-label="Toolbar with button groups">
                        <div className="btn-group ml-2" role="group" aria-label="First group">
                            <button type="button" className="btn btn-outline-secondary"><i className="fa fa-calendar"> SERVICE</i></button>
                            <button type="button" className="btn btn-outline-secondary"><i className="fa fa-map-marker"> MAP</i></button>
                            <button type="button" className="btn btn-outline-secondary"><i className="fa fa-envelope"> CONTACT</i></button>
                        </div>
                    </div>
                </div>
            </Nav>
        </Navbar>
    );
};

export default CDJRnavbar;