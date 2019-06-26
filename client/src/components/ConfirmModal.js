import React from 'react';
import { Button, Modal } from 'react-bootstrap';
const messagebird = require('messagebird')(`26lIXcDBIE9CNKO9iMWe6qeb0`);
require("dotenv").config();

class ConfirmModal extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.confirmAndSendData = this.confirmAndSendData.bind(this);
        this.sendConfrimText = this.sendConfrimText.bind(this);

        this.state = {
            show: false,
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        if (this.validate())
            this.setState({ show: true });
    }

    validate() {
        if (
            this.props.formData.firstName.trim() !== "" &&
            this.props.formData.lastName.trim() !== "" &&
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.props.formData.email)
        ) {
            return true;
        }
        return false;
    }

    confirmAndSendData = event => {
        event.preventDefault();

        this.props.sendData();
        this.setState({ show: false });
        this.sendConfrimText();


    }

    sendConfrimText = () => {
        messagebird.messages.create({
            originator: '+17328564308',
            recipients: `+17328564308`,
            body: 'We have recieved your parts request!'
        },
            function (err, response) {
                if (err) {
                    console.log("ERROR:");
                    console.log(err);
                } else {
                    console.log("SUCCESS:");
                    console.log(response);
                }
            });
    }
/*
    sendConfirmEmail = () => {

        Email.send({
            Host: "smtp.elasticemail.com",
            Username: `${process.env.email_user}`,
            Password: `${process.env.email_pass}`,
            To: `${this.props.formData.email}`,
            From: `gutlberb@gmail.com`,
            Subject: `Parts Request Confirmation`,
            Body: `The parts team has recieved your request and we reach you to you as soon as possible.`
        }).then(
            message => alert(message)
        );

    }
*/
    render() {
        return (
            <>
                <Button className="confirmBtn myButton" onClick={this.handleShow}>
                    submit
          </Button>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Confirm your information.</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p><b>First Name: </b>{this.props.formData.firstName}</p>
                        <p><b>Last Name: </b>{this.props.formData.lastName}</p>
                        <p><b>Phone Number: </b>{this.props.formData.phoneNumber}</p>
                        <p><b>Email: </b>{this.props.formData.email}</p>
                        <p><b>VIN #: </b>{this.props.formData.vin}</p>
                        <p><b>Vehicle Year: </b>{this.props.formData.year}</p>
                        <p><b>Vehicle Make: </b>{this.props.formData.make}</p>
                        <p><b>Vehicle Model: </b>{this.props.formData.model}</p>
                        <p><b>Message: </b>{this.props.formData.message}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.confirmAndSendData}>
                            Confirm
              </Button>
                        <Button variant="danger" onClick={this.handleClose}>
                            Cancel
              </Button>

                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default ConfirmModal;