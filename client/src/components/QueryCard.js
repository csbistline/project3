import React from "react";
import ListGroup from 'react-bootstrap/ListGroup'
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
import SelectTechModal from './SelectTechModal';


function QueryCard(props) {
    return(
        <Card>
            <Card.Header as="h5"></Card.Header>
                <Card.Body>
                    <Card.Title as="h5">Customer Parts Query</Card.Title>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>NAME:{props.firstName}{props.lastName}</ListGroup.Item>
                            <ListGroup.Item>PHONE:{props.phoneNumber}</ListGroup.Item>
                            <ListGroup.Item>EMAIL:{props.email}</ListGroup.Item>
                            <ListGroup.Item>VIN:{props.vin}</ListGroup.Item>
                            <ListGroup.Item>YEAR:{props.year}</ListGroup.Item>
                            <ListGroup.Item>MAKE:{props.make}</ListGroup.Item>
                            <ListGroup.Item>MODEL:{props.model}</ListGroup.Item>
                            <ListGroup.Item>
                                ADDL INFO:{props.message}
                            </ListGroup.Item>
                            <ListGroup.Item>TECH ASSIGNED:</ListGroup.Item>
                        </ListGroup>
                        <br></br>
                        {/* INSERT MODAL TRIGGER  */}
                        <SelectTechModal />
                {/* <Button variant="primary">Assign Tech</Button> */}
            </Card.Body>
        </Card>

    )};

    export default QueryCard;