import React, { Component } from 'react';
import Contacts from "./Contacts";
import VinModal from "./vinModal";
import partsAPI from "../utils/partsAPI"
import { Button, Modal } from 'react-bootstrap';
import ConfirmModal from "./ConfirmModal"
import { ValidatorForm } from 'react-form-validator-core';
import TextValidator from "./TextValidate"
require("dotenv").config();
const unirest = require("unirest");


class RequestForm extends Component {


    constructor(props, context) {
        super(props, context);

        this.handleClose = this.handleClose.bind(this);

        this.state = {
            firstName: "",
            lastName: "",
            phoneNumber: "",
            email: "",
            vin: "",
            year: "",
            make: "",
            model: "",
            message: "",
            vinInvalid: false
        }
    }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;

        // Updating the input's state
        this.setState({
            [name]: value
        });
    }

    handleClose() {
        this.setState({ vinInvalid: false })
    }


    vinCheck = () => {

        unirest.get(`https://vindecoder.p.rapidapi.com/decode_vin?vin=${this.state.vin}`)
            .header("X-RapidAPI-Host", "vindecoder.p.rapidapi.com")
            .header("X-RapidAPI-Key", "8da2207bdbmsh250beb71e2b17aep1c86a9jsn3a30757a482c")
            .end((result) => {
                if (result.body.success === true) {
                    this.setState({ year: result.body.specification.year })
                    this.setState({ make: result.body.specification.make })
                    this.setState({ model: result.body.specification.model })
                    this.setState({ vinInvalid: false })
                    return true
                } else {
                    this.setState({ vinInvalid: true })
                    return false
                }
            });
    }

    sendFormData = () => {

        partsAPI.savePartsRequest({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phoneNumber: this.state.phoneNumber,
            email: this.state.email,
            vin: this.state.vin,
            year: this.state.year,
            make: this.state.make,
            model: this.state.model,
            message: this.state.message

        })
            .then(res => {
                // clears form fields
                this.setState({ firstName: "" });
                this.setState({ lastName: "" });
                this.setState({ phoneNumber: "" });
                this.setState({ email: "" });
                this.setState({ vin: "" });
                this.setState({ year: "" });
                this.setState({ make: "" });
                this.setState({ model: "" });
                this.setState({ message: "" });
            })
            .catch(err => console.log(err));
    };

    render() {
        return (

            <div className="row pt-4 " >
                <div className="col-md-8 pt-4 d-flex flex-wrap justify-content-around animated bounceInLeft">
                    <div className="jumbotron">
                        <h1 className="display-4"><b>Parts Request Form</b></h1>
                        <p className="lead">Enter your contact and vehicle information below and a Parts Specialist will get back to you shortly.</p>
                        <hr className="my-4"></hr>

                        <ValidatorForm
                            ref="form"

                        //onError={alert("Errors")}

                        >
                            First Name
                                <TextValidator
                                onChange={this.handleInputChange}
                                label="firstName"
                                name="firstName"
                                value={this.state.firstName}
                                validators={['required', 'isString']}
                                errorMessages={['Please enter your first name', 'not a valid name']}
                            />
                            Last Name
                                <TextValidator
                                onChange={this.handleInputChange}
                                label="lastName"
                                name="lastName"
                                value={this.state.lastName}
                                validators={['required', 'isString']}
                                errorMessages={['Please enter your last name', 'not a valid name']}
                            />
                            Phone Number
                                <TextValidator
                                onChange={this.handleInputChange}
                                label="phoneNumber "
                                name="phoneNumber"
                                value={this.state.phoneNumber}
                                validators={['required', 'isNumber']}
                                errorMessages={['Please enter your phone number', 'number is not valid']}
                            />
                            Email
                                <TextValidator
                                onChange={this.handleInputChange}
                                label="email"
                                name="email"
                                value={this.state.email}
                                validators={['required', 'isEmail']}
                                errorMessages={['this field is required', 'email is not valid']}
                            />
                            VIN # <VinModal></VinModal>
                            <TextValidator
                                onChange={this.handleInputChange}
                                onBlur={this.vinCheck}
                                label="vin "
                                name="vin"
                                value={this.state.vin}
                                validators={['required',]}
                                errorMessages={['Please enter your vin number']}
                            />
                            Vehicle Year
                                <TextValidator
                                onChange={this.handleInputChange}
                                label="year"
                                name="year"
                                value={this.state.year}
                                validators={['required', 'isNumber']}
                                errorMessages={['Please enter your vehicles year', 'year is not valid']}
                            />
                            Vehicle Make
                                <TextValidator
                                onChange={this.handleInputChange}
                                label="make"
                                name="make"
                                value={this.state.make}
                                validators={['required']}
                                errorMessages={['Please enter your vehicles make']}
                            />
                            Vehicle Model
                                <TextValidator
                                onChange={this.handleInputChange}
                                label="model"
                                name="model"
                                value={this.state.model}
                                validators={['required']}
                                errorMessages={['Please enter your vehicles model']}
                            />
                            <div className="form-group">
                                <label htmlFor="message">Write your message here...</label>
                                <textarea style={{ borderRadius: '5px', padding: '.5%', boxShadow: '-1px -1px #696969' }} className="form-control"
                                    name="message"
                                    value={this.state.message}
                                    onChange={this.handleInputChange}
                                    id="message"
                                    rows="4"></textarea>
                            </div>
                            {!(
                                this.state.firstName &&
                                this.state.lastName &&
                                this.state.phoneNumber &&
                                this.state.email &&
                                this.state.vin &&
                                this.state.year &&
                                this.state.make &&
                                this.state.model &&
                                this.state.message
                            ) &&
                                <div style={{ color: 'red' }}
                                > * all fields are required</div>}
                            <ConfirmModal type="submit" formData={this.state} sendData={this.sendFormData} />

                        </ValidatorForm>

                    </div>
                </div>

                <div className="col-md-4 pt-4">
                    <Contacts />
                </div>


                <Modal show={this.state.vinInvalid} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Vin number not found.</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        We could not find any records of that vin number. Please enter in a valid vin number.
                        This ensures we are finding the correct parts for your vehicle
</Modal.Body>
                    <Modal.Footer>
                        <Button className="myButton" variant="primary" onClick={this.handleClose}>
                            Close
</Button>

                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default RequestForm;