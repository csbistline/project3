import React, { Component } from 'react';
import { Nav, Image } from 'react-bootstrap'
import partsAPI from "../utils/partsAPI";
import techAPI from "../utils/techsAPI";
// import { Link } from "react-router-dom";
import Moment from 'react-moment';
import 'moment-timezone';
import TechQueryCard from "./TechQueryCard"

class TechDashboard2 extends Component {

    state = {
        techID: sessionStorage.getItem("techID"),
        techObj: {},
        CusPartsQuery: []
        //note: ""
    };

    /*handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;

        // Updating the input's state
        this.setState({
            [name]: value
        });
    }*/

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

    /*updateParts = (id) => {
        partsAPI.updatePartsRequestCompleted(id)
          .then(res => {
              console.log(res);
          });
      };

    addComment = (id,note) => {
        partsAPI.updatePartsRequestNote(id,note)
          .then(res => {
              console.log(res);
          });
    }*/

    render() {

        return (
            <div >
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
                <Nav variant="tabs" defaultActiveKey="assigned" style={{ background: 'url(./assets/img/partsBackdrop.jpg)' }}>
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
                    <TechQueryCard
                        key={Query._id}
                        loadPartsQuery={this.loadPartsQuery}
                        techID={this.state.techID}
                    >
                        {Query}
                    </TechQueryCard>
                ))}
            </div>




        )
    }
};


export default TechDashboard2;