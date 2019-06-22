import React, { Component } from 'react';
import Contacts from "./Contacts";
import VinModal from "./vinModal";
import partsAPI from "../utils/partsAPI"
import ConfirmModal from "./ConfirmModal"


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
        message: ""

    }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;

        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

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
            message: this.state.firstName
            
        })
        .then(res => {
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
    /*
        showConfirmModal = event => {
            event.preventDefault();
    
            <ConfirmModal show={true} />
    
    
        }
    */

    render() {
        return (
            <div>
                <div className="row pt-4" >
                    <div className="col-md-8 pt-4 d-flex flex-wrap justify-content-around">

                        <div className="jumbotron">
                            <h1 className="display-4">Parts Request Form</h1>
                            <p className="lead">Enter your contact and vehicle information below and a Parts Specialist will get back to you shortly.</p>
                            <hr className="my-4"></hr>
                            <form>

                                <div className="form-group">
                                    <label htmlFor="firstName">First Name</label>
                                    <input type="text"
                                        className="form-control"
                                        name="firstName"
                                        value={this.state.firstName || ""}
                                        onChange={this.handleInputChange}
                                        id="firstName"
                                        placeholder="First Name">

                                    </input>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input type="text"
                                        className="form-control"
                                        name="lastName"
                                        value={this.state.lastName}
                                        onChange={this.handleInputChange}
                                        id="firstName"
                                        placeholder="Last Name">

                                    </input>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phoneNumber">Phone Number</label>
                                    <input type="text"
                                        className="form-control"
                                        name="phoneNumber"
                                        value={this.state.phoneNumber}
                                        onChange={this.handleInputChange}
                                        id="phoneNumber"
                                        placeholder="(555) 555 - 5555">

                                    </input>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email address</label>
                                    <input type="email"
                                        className="form-control"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.handleInputChange}
                                        id="email"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter email">

                                    </input>
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="vin">Vin Number</label>
                                    {/* insert modal link */}
                                    <VinModal />
                                    <input type="text"
                                        className="form-control"
                                        name="vin"
                                        value={this.state.vin}
                                        onChange={this.handleInputChange}
                                        id="vin"
                                        placeholder="VIN #">

                                    </input>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="vin">Vehicle Year</label>
                                    <input type="number"
                                        className="form-control"
                                        name="year"
                                        value={this.state.year}
                                        onChange={this.handleInputChange}
                                        id="year"
                                        placeholder="Year">

                                    </input>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="make">Vehicle Make</label>
                                    <input type="text"
                                        className="form-control"
                                        name="make"
                                        value={this.state.make}
                                        onChange={this.handleInputChange}
                                        id="make"
                                        placeholder="Make">

                                    </input>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="model">Vehicle Model</label>
                                    <input type="text"
                                        className="form-control"
                                        name="model"
                                        value={this.state.model}
                                        onChange={this.handleInputChange}
                                        id="model"
                                        placeholder="Model">

                                    </input>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Write your message here...</label>
                                    <textarea className="form-control"
                                    name="message"
                                    value={this.state.message}
                                    onChange={this.handleInputChange} 
                                    id="message" 
                                    rows="4"></textarea>
                                </div>

                                <ConfirmModal formData={this.state} sendData={this.sendFormData} />
                            </form>

                        </div>
                    </div>
                    <div className="col-md-4 pt-4">
                        <Contacts />
                    </div>
                </div>
            </div>
        );
    }
}

export default RequestForm;