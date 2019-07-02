import React, { Component } from 'react';
import { Nav, Image, ListGroup, Accordion, Card, Button} from 'react-bootstrap'
import partsAPI from "../utils/partsAPI";
import techAPI from "../utils/techsAPI";
// import { Link } from "react-router-dom";
import Moment from 'react-moment';
import 'moment-timezone';
// import QueryCard from "./QueryCard"

class TechDashboard2 extends Component {

    state = {
        techID: "5d0bedf59fd8049a01950f59",
        techObj: {},
        CusPartsQuery: []
    };

    componentDidMount() {
        this.loadTech(this.state.techID);
        this.loadPartsQuery(this.state.techID, "assigned");
    };

    loadPartsQuery = (tech, status) => {
        partsAPI.getPartsRequestsByTechAndStatus(tech, status)
            .then(res => {
                this.setState({ CusPartsQuery: res.data })
            })
            .catch(err => console.log(err))
    };

    loadTech = (tech) => {
        techAPI.getTech(tech)
            .then(res => {
                console.log(res.data);
                this.setState({ techObj: res.data })
            })
    };

    updateParts = (id) => {
        partsAPI.updatePartsRequestCompleted(id)
          .then(res => {
              console.log(res);
          });
      };

    render() {
        
        return (
            <div className="containerFluid"  style={{marginTop: '5%'}}>
                <div className="d-flex flex-wrap">
                <br />
                <Image
                    style={{width: '5rem', height: 'auto', margin: '.5%'}} 
                    alt={this.state.techObj.name}
                    src={this.state.techObj.image2}
                    roundedCircle
                />
                <h1 style={{marginLeft: '1%', marginTop: '2%'}}>
                    {this.state.techObj.name}'s Dashboard
                </h1>
                <hr className="my-4"></hr>
                </div>
                <Nav variant="tabs" defaultActiveKey="assigned" style={{ background: 'url(./assets/img/partsBackdrop.jpg)'}}>
                    <Nav.Item className="tabs">
                        <Nav.Link
                            eventKey="assigned"
                            title="Assigned"
                            onClick={() => this.loadPartsQuery(this.state.techID, "assigned")}
                        >
                            Assigned
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item className="tabs">
                        <Nav.Link
                            eventKey="completed"
                            title="Completed"
                            onClick={() => this.loadPartsQuery(this.state.techID, "completed")}
                        >
                            Completed
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
               
                {this.state.CusPartsQuery.map(Query => (
                <Accordion defaultKey="0">
                <Card>
                    <Accordion.Toggle
                     as={Card.Header} eventKey="0"
                     >
                        <Card.Header as="h5" style={{background: '#ffff'}}>
                        Customer: {Query.firstName} {Query.lastName}<br /> 
                        {`Submitted: `} 
                            <Moment format="LLLL">
                            {Query.createdAt}
                            </Moment>
                            <p style={{fontSize: '.75rem', color: 'lightgrey'}}>
                                click box to expand/collapse</p>
                        </Card.Header>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <ListGroup className="list-group">
                                <ListGroup.Item>NAME: {Query.firstName} {Query.lastName}</ListGroup.Item>
                                <ListGroup.Item>PHONE: {Query.phoneNumber}</ListGroup.Item>
                                <ListGroup.Item>EMAIL: {Query.email}</ListGroup.Item>
                                <ListGroup.Item>VIN: {Query.vin}</ListGroup.Item>
                                <ListGroup.Item>YEAR: {Query.year}</ListGroup.Item>
                                <ListGroup.Item>MAKE: {Query.make}</ListGroup.Item>
                                <ListGroup.Item>MODEL: {Query.model}</ListGroup.Item>
                                <ListGroup.Item>
                                    ADDL INFO: {Query.message}
                                </ListGroup.Item>
                                <ListGroup.Item>TECH ASSIGNED: {Query.assigneeName}</ListGroup.Item>
                             </ListGroup>
                                <br></br>
                                <div className="align-middle">
                                    {(Query.status === "completed") ? "COMPLETED" :
                                    <Button 
                                        className="btn btn-primary myButton" 
                                        size="sm"
                                        onClick={() => this.updateParts(Query._id)}
                                    >
                                        Complete Order
                                    </Button>}
                                </div>   
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            ))}
        </div>



            
        )
    }
};


export default TechDashboard2;