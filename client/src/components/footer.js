import React from "react";
import {Navbar, Image} from "react-bootstrap";



 
const Footer = () => {
    return ( 
    <Navbar bg="light" variant="light" fixedBottom>
        <Navbar.Brand>
            <Image
             style={{ width: '2rem', height: '2rem', margin: '2%' }}
            alt="logo"
            src="./assets/misc/Hi5.jpg"
            thumbnail
            />
      {' Hi5Productions 2019'}
    </Navbar.Brand>
  </Navbar>
     )};

export default Footer;