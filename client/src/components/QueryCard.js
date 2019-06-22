import React, { Component} from "react";
import ListGroup from 'react-bootstrap/ListGroup'
import Card from "react-bootstrap/Card";
import SelectTechModal from './SelectTechModal';


class QueryCard extends Component {

// insert Data from CusDataTable (view query/assign tech link)
    render() {
    return(
        <Card>
            <Card.Header as="h5"></Card.Header>
                <Card.Body>
                    <Card.Title as="h5">Customer Parts Query</Card.Title>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item key={Query._id}></ListGroup.Item>
                            <ListGroup.Item>NAME:{Query.firstName}{Query.lastName}</ListGroup.Item>
                            <ListGroup.Item>PHONE:{Query.phoneNumber}</ListGroup.Item>
                            <ListGroup.Item>EMAIL:{Query.email}</ListGroup.Item>
                            <ListGroup.Item>VIN:{Query.vin}</ListGroup.Item>
                            <ListGroup.Item>YEAR:{Query.year}</ListGroup.Item>
                            <ListGroup.Item>MAKE:{Query.make}</ListGroup.Item>
                            <ListGroup.Item>MODEL:{Query.model}</ListGroup.Item>
                            <ListGroup.Item>
                                ADDL INFO:{Query.message}
                            </ListGroup.Item>
                            <ListGroup.Item>TECH ASSIGNED:</ListGroup.Item>
                        </ListGroup>
                        <br></br>
                        {/* INSERT MODAL TRIGGER  */}
                        <SelectTechModal />
                {/* <Button variant="primary">Assign Tech</Button> */}
            </Card.Body>
        </Card>

    )}};

    export default QueryCard;