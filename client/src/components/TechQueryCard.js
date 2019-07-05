import React, { Component } from 'react';
import { ListGroup, Accordion, Card, Button, Form } from 'react-bootstrap'
import partsAPI from "../utils/partsAPI";
import techAPI from "../utils/techsAPI";
// import { Link } from "react-router-dom";
import Moment from 'react-moment';
import 'moment-timezone';
// import QueryCard from "./QueryCard"

class TechQueryCard extends Component {

    state = {
        Query: this.props.children,
        note: (this.props.children.note) ? this.props.children.note.body : ""
    }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;

        // Updating the input's state
        this.setState({
            [name]: value
        });
    }

    addComment = (id, note) => {
        partsAPI.updatePartsRequestNote(id, note)
            .then(res => {
                console.log(res);
            });
    }
    updateParts = (id) => {
        partsAPI.updatePartsRequestCompleted(id)
            .then(res => {
                console.log(res);
                this.props.loadPartsQuery(this.props.techID, "assigned")
            });
    };
    render() {
        return (
            <Accordion defaultKey="0">
                <Card>
                    <Accordion.Toggle
                        as={Card.Header} eventKey="0"
                    >
                        <Card.Header as="h5" style={{ background: '#ffff' }}>
                            <p style={{ fontSize: '.75rem', color: 'lightgrey' }}>
                                click box to expand/collapse</p>

                            {`Submitted: `}
                            <Moment format="LLLL">
                                {this.state.Query.createdAt}
                            </Moment><br />
                            Customer: {this.state.Query.firstName} {this.state.Query.lastName}<br />
                        </Card.Header>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <ListGroup className="list-group">
                                <ListGroup.Item>NAME: {this.state.Query.firstName} {this.state.Query.lastName}</ListGroup.Item>
                                <ListGroup.Item>PHONE: <a href={`sms://${this.state.Query.phoneNumber}`}>{this.state.Query.phoneNumber}</a></ListGroup.Item>
                                <ListGroup.Item>EMAIL: <a href={`mailto:${this.state.Query.email}`}>{this.state.Query.email}</a></ListGroup.Item>
                                <ListGroup.Item>VIN: {this.state.Query.vin}</ListGroup.Item>
                                <ListGroup.Item>YEAR: {this.state.Query.year}</ListGroup.Item>
                                <ListGroup.Item>MAKE: {this.state.Query.make}</ListGroup.Item>
                                <ListGroup.Item>MODEL: {this.state.Query.model}</ListGroup.Item>
                                <ListGroup.Item>
                                    ADDL INFO: {this.state.Query.message}
                                </ListGroup.Item>
                                <ListGroup.Item>TECH ASSIGNED: {this.state.Query.assigneeName}</ListGroup.Item>
                                <ListGroup.Item>
                                    <Form>
                                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>TECH NOTES: (adding a note will overwrite the last note)</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                rows="3"
                                                onChange={this.handleInputChange}
                                                label="note"
                                                name="note"
                                                value={this.state.note}
                                            //placeholder={(Query.note) ? Query.note.body : ""}
                                            />
                                        </Form.Group>
                                        <Button
                                            className="myButton"
                                            variant="primary"
                                            type="submit"
                                            onClick={() => this.addComment(this.state.Query._id, this.state.note)}
                                        >
                                            Submit
                                        </Button>
                                    </Form>
                                </ListGroup.Item>
                            </ListGroup>
                            <br></br>
                            <div className="align-middle">
                                {(this.state.Query.status === "completed") ? "COMPLETED" :
                                    <Button
                                        className="btn btn-primary myButton"
                                        size="sm"
                                        onClick={() => this.updateParts(this.state.Query._id)}
                                    >
                                        Complete Order
                                    </Button>}
                            </div>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        )
    }

};


export default TechQueryCard;