import React, { Component} from "react";
import API from "../utils/partsAPI";
import ListGroup from 'react-bootstrap/ListGroup'
import Card from "react-bootstrap/Card";
import SelectTechModal from './SelectTechModal';

class QueryCard extends Component {
    state = {
        assignTech: []
    }
    componentDidMount() {
        this.loadQueryId();
    }
    loadQueryId = () => {
        API.getPartsRequest(id)
        .then(res=> {
            this.setState({assignTech: res.data})
        })
        .catch(err=> console.log(err));
    };
    render() {
    return(
        <Card className="QueryCard">
            <Card.Header as="h5"></Card.Header>
                <Card.Body>
                    <Card.Title as="h5">Customer Parts Query</Card.Title>
                    <ListGroup className="list-group-flush">
                    {this.state.assignTech.map(AsgTech=>(
                        <ListGroup.Item key={AsgTech._id}></ListGroup.Item>
                        <ListGroup.Item>NAME:{AsgTech.firstName}{AsgTech.lastName}</ListGroup.Item>
                        <ListGroup.Item>PHONE:{AsgTech.phoneNumber}</ListGroup.Item>
                        <ListGroup.Item>EMAIL:{AsgTech.email}</ListGroup.Item>
                        <ListGroup.Item>VIN:{AsgTech.vin}</ListGroup.Item>
                        <ListGroup.Item>YEAR:{AsgTech.year}</ListGroup.Item>
                        <ListGroup.Item>MAKE:{AsgTech.make}</ListGroup.Item>
                        <ListGroup.Item>MODEL:{AsgTech.model}</ListGroup.Item>
                        <ListGroup.Item>
                            ADDL INFO:{Query.message}
                        </ListGroup.Item>
                        <ListGroup.Item>TECH ASSIGNED:</ListGroup.Item>
                    ))} 
                    </ListGroup>
                        <br></br>
                    <SelectTechModal />
            </Card.Body>
        </Card>
    )}};

    export default QueryCard;