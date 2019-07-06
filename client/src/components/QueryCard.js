import React from "react";
import { ListGroup, Accordion } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import SelectTechModal from "./SelectTechModal";
import Moment from "react-moment";
import "moment-timezone";



function QueryCard(props) {
    return (
        <div >
            <Accordion defaultKey="0">
                <Card>
                    <Accordion.Toggle
                        as={Card.Header} eventKey="0"
                    >
                        <Card.Header as="h5" style={{ background: "#ffff" }}>
                            <p style={{ fontSize: ".75rem", color: "lightgrey" }}>
                                click box to expand/collapse</p>
                                {(props.status === "completed") ? "Completed: " : "Submitted: "} 
                            <Moment format="LLLL">
                                {(props.status === "completed") ? props.updatedAt : props.createdAt}
                            </Moment> <br />
                            Customer: {props.firstName} {props.lastName}<br />

                            {(props.status === "requested") ? "Request Not Assigned" :
                                `Tech Assigned: ${props.assigneeName}`} <br />

                        </Card.Header>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <ListGroup className="list-group">
                                <ListGroup.Item>NAME: {props.firstName} {props.lastName}</ListGroup.Item>
                                <ListGroup.Item>PHONE: <a href={`sms://${props.phoneNumber}`}>{props.phoneNumber}</a></ListGroup.Item>
                                <ListGroup.Item>EMAIL: <a href={`mailto:${props.email}`}>{props.email}</a></ListGroup.Item>
                                <ListGroup.Item>VIN: {props.vin}</ListGroup.Item>
                                <ListGroup.Item>YEAR: {props.year}</ListGroup.Item>
                                <ListGroup.Item>MAKE: {props.make}</ListGroup.Item>
                                <ListGroup.Item>MODEL: {props.model}</ListGroup.Item>
                                <ListGroup.Item>
                                    ADDL INFO: {props.message}
                                </ListGroup.Item>
                                <ListGroup.Item>TECH ASSIGNED: {props.assigneeName}</ListGroup.Item>
                                <ListGroup.Item>TECH NOTES: {props.note}</ListGroup.Item>
                            </ListGroup>
                            <br></br>
                            <SelectTechModal
                                {...props}
                            />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    );
}

export default QueryCard;