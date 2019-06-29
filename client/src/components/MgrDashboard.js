import React, {Component} from "react";
import {Nav} from 'react-bootstrap'
import QueryCard from "./QueryCard";
import API from "../utils/partsAPI";

class MgrDashboard extends Component {
    state = {
        assignTech: []
    }
    componentDidMount() {
        this.loadQuery("requested");
    }
    loadQuery = (status) => {
        API.getPartsRequests(status)
        .then(res=> {
            this.setState({assignTech: res.data})
        })
        .catch(err=> console.log(err));
    };
    render() {
        return(
            <div >
                <br />
                <h1>Welcome Back</h1>
                <hr className="my-4"></hr>
             
                <Nav variant="tabs" defaultActiveKey="/requested" style={{background:"#ececec"}}>
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
                {this.state.assignTech.map(Query =>(
                <QueryCard
                    {...Query}
                    // id={Query._id}
                    // firstName={Query.firstName}
                    // lastName={Query.lastName}
                    // phoneNumber={Query.phoneNumber}
                    // email={Query.email}
                    // vin={Query.vin}
                    // year={Query.year}
                    // make={Query.make}
                    // model={Query.model}
                    // message={Query.message}
                />
            ))}
        </div>
        );
    }
};

    export default MgrDashboard;