import React from 'react';
import { Button, Modal } from 'react-bootstrap';
const messagebird = require('messagebird')(`o1iRCJWUbe3c3smoFWogpPlwq`);
const axios = require("axios");
require("dotenv").config();

class ConfirmModal extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.confirmAndSendData = this.confirmAndSendData.bind(this);
        this.sendConfirmText = this.sendConfirmText.bind(this);
        this.sendConfirmEmail = this.sendConfirmEmail.bind(this);

        this.state = {
            show: false,
            showConfrim: false
        };
    }



    handleClose() {
        this.setState({ show: false });
        this.setState({ showConfrim: false })
    }

    handleShow() {

        this.setState({ show: true });
    }


    confirmAndSendData = () => {

        this.props.sendData();
        this.setState({ show: false });
        this.setState({ showConfrim: true })
        this.sendConfirmText();
        this.sendConfirmEmail();

    }

    sendConfirmText = () => {
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

    sendConfirmEmail = () => {

        axios({
            method: "POST",
            url: "/api/sendEmail",
            data: {
                firstName: this.props.formData.firstName,
                lastName: this.props.formData.lastName,
                phoneNumber: this.props.formData.phoneNumber,
                email: this.props.formData.email,
                vin: this.props.formData.vin,
                year: this.props.formData.year,
                make: this.props.formData.make,
                model: this.props.formData.model,
                message: this.props.formData.message
            }
        }).then((response) => {
            if (response.data.msg === 'success') {
                console.log("Message Sent.");

            } else if (response.data.msg === 'fail') {
                console.log("Message failed to send.")
            }
        })
    }

    render() {
        return (
            <>
                <Button className="confirmBtn myButton" 
                type="submit" 
                onClick={this.handleShow}
                disabled={!(
                    this.props.formData.firstName&& 
                    this.props.formData.lastName&&
                    this.props.formData.phoneNumber&&
                    this.props.formData.email&&
                    this.props.formData.vin&&
                    this.props.formData.year&&
                    this.props.formData.make&&
                    this.props.formData.model&&
                    this.props.formData.message
                    )}>
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

                <Modal show={this.state.showConfrim} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Thanks!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Thank you for your parts request!
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="myButton" variant="primary" onClick={this.handleClose}>
                            Close
              </Button>

                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default ConfirmModal;