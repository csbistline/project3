import React from "react";
import {ListGroup, Accordion} from 'react-bootstrap'
import Card from "react-bootstrap/Card";
import SelectTechModal from './SelectTechModal';
import Moment from 'react-moment';
import 'moment-timezone';



function QueryCard(props) {
    let modal;
    if(!props.assignee){
        modal = <SelectTechModal 
        {...props}
        />
    }
    return(
        <div className="col-md-10 pt-4 d-flex flex-wrap justify-content-around">
            <Accordion defaultKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        <Card.Header as="h5">Customer Query:<br />   
                        {props.firstName} {props.lastName}<br /> 
                        {`Created: `} 
                            <Moment format="LLLL">
                            {props.createdAt}
                            </Moment>
                        </Card.Header>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            {/* <Card.Title as="h6">
                            {`Created on: `} 
                                <Moment format="LLLL">
                                    {props.createdAt}
                                </Moment>
                            </Card.Title> */}
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
                                <ListGroup.Item>TECH ASSIGNED: {props.assigneeName}</ListGroup.Item>
                             </ListGroup>
                                <br></br>
                                {modal}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    )};

    export default QueryCard;