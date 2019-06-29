import React, { Component } from 'react';
import { Nav, Image } from 'react-bootstrap'
import partsAPI from "../utils/partsAPI";
import techAPI from "../utils/techsAPI";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Table from 'react-bootstrap/Table'
import Moment from 'react-moment';
import 'moment-timezone';
// import QueryCard from "./QueryCard"

class TechDashboard extends Component {

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
            <div className="containerFluid">
                <br />
                <Image
                    style={{width: '10rem', height: 'auto', marginLeft: '3%'}} 
                    alt={this.state.techObj.name}
                    src={this.state.techObj.image}
                    thumbnail
                />
                <h1 style={{marginLeft: '3%'}}>
                    {this.state.techObj.name}'s Dashboard
                </h1>
                <hr className="my-4"></hr>

                <Nav variant="tabs" defaultActiveKey="/assigned" style={{ background: 'url(./assets/img/partsBackdrop.jpg)'}}>
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
        
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Date Created</th>
                            <th>Customer Name</th>
                            <th>Customer Phone</th>
                            <th>Customer Email</th>
                            <th>VIN</th>
                            <th>Details</th>
                            <th>Complete Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.CusPartsQuery.map(Query => (
                            
                            <tr key={Query._id}>
                                <td className="align-middle">
                                    <Moment format="YYYY/MM/DD">
                                        {Query.createdAt}
                                    </Moment>
                                </td>
                                <td className="align-middle">{Query.firstName} {Query.lastName}</td>
                                <td className="align-middle">{Query.phoneNumber}</td>
                                <td className="align-middle">{Query.email}</td>
                                <td className="align-middle">{Query.vin}</td>
                                <td className="align-middle">
                                    {/* link to specific QueryCard */}
                                    <Link to="/WorkOrder">
                                        <Button variant="link"
                                            data-id={Query._id}>
                                            View Query
                                        </Button>
                                    </Link>
                                </td>
                                <td className="align-middle">
                                    {(Query.status === "completed") ? "" :

                                    <Button 
                                        className="btn btn-primary myButton" 
                                        size="sm"
                                        onClick={() => this.updateParts(Query._id)}
                                    >
                                        Complete Order
                                    </Button>}
                            
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        )
    }
};

export default TechDashboard;