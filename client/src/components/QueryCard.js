import React from "react";
import Card from "react-bootstrap/Card"


function QueryCard(props) {
    return(
        <Card>
            <Card.Header as="h5"></Card.Header>
                <Card.Body>
                    <Card.Title></Card.Title>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

    )};