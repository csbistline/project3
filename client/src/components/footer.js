import React from "react";
import {Navbar, Image} from "react-bootstrap";



 
const Footer = () => {
    return ( 
    <Navbar className="footer" bg="light" variant="light" fixedBottom>
        
        
        <Navbar.Brand>
            <Image
             style={{ width: '2rem', height: '2rem' }}
            alt="logo"
            src="./assets/misc/Hi5.jpg"
            rounded
            />
      {' Hi5Productions 2019'}
    </Navbar.Brand>
  </Navbar>
     )};

export default Footer;