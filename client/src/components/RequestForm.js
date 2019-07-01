import React, { Component } from 'react';
import Contacts from "./Contacts";
import VinModal from "./vinModal";
import partsAPI from "../utils/partsAPI"
import ConfirmModal from "./ConfirmModal"
import { ValidatorForm } from 'react-form-validator-core';
import TextValidator from "./TextValidate"
import { isString } from 'util';
const unirest = require("unirest");


class RequestForm extends Component {

    state = {

        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        vin: "",
        year: "",
        make: "",
        model: "",
        message: "",
        errors: {
            firstName: "",
            lastName: "",
            phoneNumber: "",
            email: "",
            vin: "",
            year: "",
            make: "",
            model: "",
            message: ""
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

    sendFormData = event => {
        event.preventDefault();
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
                            onSubmit={this.sendFormData}
                        >
                            First Name
                                <TextValidator
                                onChange={this.handleInputChange}
                                label="firstName"
                                name="firstName"
                                value={this.state.firstName}
                                validators={['required']}
                                errorMessages={['Please enter your first name']}
                            />
                            Last Name
                                <TextValidator
                                onChange={this.handleInputChange}
                                label="lastName"
                                name="lastName"
                                value={this.state.lastName}
                                validators={['required', 'isString']}
                                errorMessages={['Please enter your last name']}
                            />
                            Phone Number
                                <TextValidator
                                onChange={this.handleInputChange}
                                label="phoneNumber "
                                name="phoneNumber"
                                value={this.state.phoneNumber}
                                validators={['required', 'matchRegexp:^[0-9]$']}
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
                                validators={['required', 'matchRegexp:^[0-9]$']}
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
                                <textarea className="form-control"
                                    name="message"
                                    value={this.state.message}
                                    onChange={this.handleInputChange}
                                    id="message"
                                    rows="4"></textarea>
                            </div>


                            <button className="btn-primary" type="submit">submit</button>
                        </ValidatorForm>


                    </div>
                </div>

                <div className="col-md-4 pt-4">
                    <Contacts />
                </div>
            </div>

        );
    }
}

export default RequestForm;