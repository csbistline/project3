import React from "react";
import ListGroup from 'react-bootstrap/ListGroup'
import Card from "react-bootstrap/Card";
import SelectTechModal from './SelectTechModal';


function QueryCard(props) {
    return(
        <div className="col-md-10 pt-4 d-flex flex-wrap justify-content-around">

        <Card style={{ width: '80%' }}>
            <Card.Header as="h5"></Card.Header>
                <Card.Body>
                    <Card.Title as="h5">Customer Parts Query</Card.Title>
                    <ListGroup className="list-group">
                        <ListGroup.Item>NAME: {props.firstName} {props.lastName}</ListGroup.Item>
                        <ListGroup.Item>PHONE: {props.phoneNumber}</ListGroup.Item>
                        <ListGroup.Item>EMAIL: {props.email}</ListGroup.Item>
                        <ListGroup.Item>VIN: {props.vin}</ListGroup.Item>
                        <ListGroup.Item>YEAR: {props.year}</ListGroup.Item>
                        <ListGroup.Item>MAKE: {props.make}</ListGroup.Item>
                        <ListGroup.Item>MODEL: {props.model}</ListGroup.Item>
                        <ListGroup.Item>
                            ADDL INFO: {props.message}
                        </ListGroup.Item>
                        <ListGroup.Item>TECH ASSIGNED:</ListGroup.Item>
                    </ListGroup>
                    <br></br>
                    <SelectTechModal />
            </Card.Body>
        </Card>
        </div>
    )};

    export default QueryCard;