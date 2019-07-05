import React from "react";
import Navbar from "react-bootstrap/Navbar";



 
const Footer = () => {
    return ( 
    <Navbar bg="light" variant="light" fixedBottom>
        <Navbar.Brand href="#home">
            <img
            alt=""
            src="/client/public/assets/img/dodge.png"
            width="30"
            height="30"
            className="d-inline-block align-bottom"
        />
      {' Hi5Productions 2019'}
    </Navbar.Brand>
  </Navbar>
     )};

export default Footer;