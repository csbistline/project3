import React from "react";
import Card from "react-bootstrap/Card";

function PartsSpecCard(props) {
    return (
        <Card className="m-1" style={{ width: "20rem", height: "auto" }}>
            <Card.Img variant="top" alt={props.name} src={props.image} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Subtitle>{props.specialty}</Card.Subtitle>
                <Card.Text>Contact: {props.contact}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default PartsSpecCard;



