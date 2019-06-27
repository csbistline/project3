import React, { Component } from "react";
import { Image, Jumbotron, Container, Col, Row, Card, ListGroup } from 'react-bootstrap';
// import QueryCard from "./QueryCard";
// import PartsSpecCard from "./PartsSpecCard";
// import API from "../utils/techsAPI";
// import API from "../utils/partsAPI";

class AutoReply extends Component { 

    // INSERT CODE TO PULL INFO FROM BOTH APIS BY ID

render() {   
    return (
        <Jumbotron>
            <Image className="mx-auto d-block" src="./assets/img/logo.png" width="50%" height="auto" alt="dealerLogo" fluid />
            <hr className="my-4"></hr>

            <h2>Hello (Insert Customer Name),</h2>

            <h5>
                Thank yout for your Parts Request. 
                Your request has been recieved and assigned to (Insert Assigned PartSpec Name). 
                We will be in contact to complete your order within 24 hours. 
                Please review the your work order below and reply to this email with any questions or corrections.  
                All replies will be routed directly to (Insert Assigned PartSpec Name).  
                We appreciate your Business and look forward to meeting all of your Parts and Service needs.
            </h5>
            <br />
            <Row>
                <Col>
                    <Card style={{ "boxShadow": "-1px 1px 2px 2px rgba(38,37,38,1)"}}>
                    <Card.Header className="text-center" >QueryCard</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item> firstName</ListGroup.Item>
                            <ListGroup.Item> lastName</ListGroup.Item>
                            <ListGroup.Item> phoneNumber</ListGroup.Item>
                            <ListGroup.Item> email</ListGroup.Item>
                            <ListGroup.Item> vin</ListGroup.Item>
                            <ListGroup.Item> year</ListGroup.Item>
                            <ListGroup.Item> make</ListGroup.Item>
                            <ListGroup.Item> model</ListGroup.Item>
                            <ListGroup.Item> message</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            <Col>
                <Card style={{ "boxShadow": "-1px 1px 2px 2px rgba(38,37,38,1)"}}>
                    <Card.Header className="text-center" >PartsSpecCard</Card.Header>
                    <Row>
                        <Col>
                            <Image src="./assets/img/Transmission.jpg"  width="85%" height="auto" alt="PartsSpec" fluid />
                        </Col>
                        <Col>
                            <ListGroup variant="flush">
                                <ListGroup.Item> name</ListGroup.Item>
                                <ListGroup.Item> contact</ListGroup.Item>
                                <ListGroup.Item> specialty</ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>

        <hr className="my-4"></hr>
        <br />
        <div className=" text-center " >
            <h6>Franklin Chrysler Dodge Jeep Ram</h6>
                <address>
                    1124 Murfreesboro Rd
                    <br />
                    Franklin, TN 37064
                    <br />
                    Parts: 615-538-9033
                </address>
        </div>

        <Container>
            <Row>
                <Col>
                <Image src="./assets/img/chrysler.png" width="30%" height="auto" alt="CHRYSLERLogo" fluid />
                </Col>
                <Col>
                <Image src="./assets/img/dodge.png" width="30%" height="auto" alt="DODGELogo" fluid />
                </Col>
                <Col>
                <Image src="./assets/img/jeep.png" width="30%" height="auto" alt="JEEPLogo" fluid />
                </Col>
                <Col>
                <Image src="./assets/img/ram.png" width="30%" height="auto" alt="RAMLogo" fluid />
                </Col>
                <Col>
                <Image src="./assets/img/fiat.png" width="30%" height="auto" alt="FIATLogo" fluid />
                </Col>
            </Row>
        </Container>


        </Jumbotron>

    )}};

export default AutoReply;