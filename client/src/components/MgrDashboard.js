import React, { Component } from "react";
import { Nav, Image, Row, Col } from 'react-bootstrap'
import QueryCard from "./QueryCard";
import partsAPI from "../utils/partsAPI";
import techAPI from "../utils/techsAPI";


class MgrDashboard extends Component {
    state = {
        techID: "5d0bedf59fd8049a01950f58", //Michael Scot
        techObj: {},
        assignTech: []
    }
    componentDidMount() {
        this.loadTech(this.state.techID);
        this.loadQuery("requested");
    }
    loadQuery = (status) => {
        partsAPI.getPartsRequests(status)
            .then(res => {
                this.setState({ assignTech: res.data })
            })
            .catch(err => console.log(err));
    };

    loadTech = (tech) => {
        techAPI.getTech(tech)
            .then(res => {
                console.log(res.data);
                this.setState({ techObj: res.data })
            })
    };

    render() {
        return (
            <div style={{ marginTop: '5%'}} >
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
               
                <Nav variant="tabs" defaultActiveKey="/requested" style={{background:'url(./assets/img/partsBackdrop.jpg)'}}>
                    <Nav.Item className="tabs">
                        <Nav.Link
                            eventKey="requested"
                            title="Requested"
                            onClick={() => this.loadQuery("requested")}
                        >
                            Requested
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="tabs">
                        <Nav.Link
                            eventKey="assigned"
                            title="Assigned"
                            onClick={() => this.loadQuery("assigned")}
                        >
                            Assigned
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="tabs">
                        <Nav.Link
                            eventKey="completed"
                            title="Completed"
                            onClick={() => this.loadQuery("completed")}
                        >
                            Completed
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                {this.state.assignTech.map(Query => (
                    <QueryCard
                        {...Query}
                        key={Query._id}
                    />
                ))}
            </div>
        );
    }
};

export default MgrDashboard;