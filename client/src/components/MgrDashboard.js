import React, {Component} from "react";
import Nav from 'react-bootstrap/Nav'
import QueryCard from "./QueryCard";
import API from "../utils/partsAPI";

class MgrDashboard extends Component {
    state = {
        assignTech: []
    }
    componentDidMount() {
        this.loadQuery();
    }
    loadQuery = () => {
        API.getPartsRequests()
        .then(res=> {
            this.setState({assignTech: res.data})
        })
        .catch(err=> console.log(err));
    };
    render() {
        return(
            <div className="jumbotron">
                {/* <br /> */}
                <h1>Welcome Back (Insert Mgr Name)</h1>
                <hr className="my-4"></hr>
                <Nav variant="tabs" defaultActiveKey="/requested">
                    <Nav.Item>
                        <Nav.Link eventKey="requested" title="Requested">Requested</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="assigned" title="Assigned">Assigned</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="completed" title="Completed">Completed</Nav.Link>
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