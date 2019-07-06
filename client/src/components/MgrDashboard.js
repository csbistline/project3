import React, { Component } from "react";
import { Nav, Image, Button } from 'react-bootstrap'
import QueryCard from "./QueryCard";
import partsAPI from "../utils/partsAPI";
import techAPI from "../utils/techsAPI";


class MgrDashboard extends Component {
    state = {
        techID: sessionStorage.getItem("techID"), //Michael Scot
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
            <div  >
                <hr className="my-4"></hr>
                <div className="d-flex flex-wrap">
                    <Image
                        style={{ width: '7rem', height: '7rem', margin: '2%' }}
                        alt={this.state.techObj.name}
                        src={this.state.techObj.image2}
                        thumbnail
                    />
                    <h1 style={{ marginTop: '5%' }}>
                        {this.state.techObj.name}'s Dashboard
                </h1>
                    <hr className="my-4"></hr>
                </div>
                <Nav variant="tabs" defaultActiveKey="requested" style={{ background: 'url(./assets/img/partsBackdrop.jpg)' }}>
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
                    <Nav.Item className='tabs'>
                        <Button 
                            variant="outline-primary" 
                            size="sm" 
                            href="/login2"
                            style={{padding: '.5%'}}>Sign Off
                        </Button>
                    </Nav.Item>
                </Nav>
                {this.state.assignTech.map(Query => (
                    <QueryCard
                        _id={Query._id}
                        status={Query.status}
                        assignee={Query.assignee}
                        assigneeName={Query.assigneeName}
                        createdAt={Query.createdAt}
                        updatedAt={Query.updatedAt}
                        firstName={Query.firstName}
                        lastName={Query.lastName}
                        phoneNumber={Query.phoneNumber}
                        email={Query.email}
                        vin={Query.vin}
                        year={Query.year}
                        make={Query.make}
                        model={Query.model}
                        message={Query.message}
                        note={(Query.note && Query.note.body) ? Query.note.body : ""}
                        key={Query._id}
                        loadQuery={this.loadQuery}
                    />
                ))}
            </div>
        );
    }
};

export default MgrDashboard;