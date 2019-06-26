import React from 'react';
import { Button, Modal } from 'react-bootstrap';
const messagebird = require('messagebird')(`o1iRCJWUbe3c3smoFWogpPlwq`);
const nodemailer = require("nodemailer");
require("dotenv").config();

class ConfirmModal extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.confirmAndSendData = this.confirmAndSendData.bind(this);
        this.sendConfrimText = this.sendConfrimText.bind(this);
        this.sendConfirmEmail = this.sendConfirmEmail.bind(this);

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
        this.sendConfirmEmail();

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

    sendConfirmEmail = () => {
        console.log("email: " + process.env.EMAIL_USER);
        console.log("pass: " + process.env.EMAIL_PASS);

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "smtp.elasticemail.com",
            port: 2525,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.EMAIL_USER, // generated ethereal user
                pass: process.env.EMAIL_PASS // generated ethereal password
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        // send mail with defined transport object
        let info = transporter.sendMail({
            from: '"High 5 Productions!" <gutleberb@gmail.com>', // sender address
            to: this.props.formData.email, // list of receivers
            subject: "Parts Request Recieved ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>" // html body
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }


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