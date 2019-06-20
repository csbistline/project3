import React, { Component } from 'react';
import Contacts from "./Contacts";
import VinModal from "./vinModal";
//import techsAPI from "../utils/techsAPI"


class RequestForm extends Component {

    state = {

        firstName: "",
        lastName: "",
        phoneNum: "",
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
/*
    sendFormData = event => {
        event.preventDefault();

        techsAPI.sendData({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phoneNum: this.state.phoneNum,
            email: this.state.email,
            vin: this.state.vin,
            year: this.state.year,
            make: this.state.make,
            model: this.state.model,
            message: this.state.firstName
        })
            .catch(err => console.log(err));
    };
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

                                <div classNames="form-group">
                                    <label forHTML="firstName">First Name</label>
                                    <input type="firstName"
                                        classclassName="form-control"
                                        name="firstName"
                                        value={this.state.firstName}
                                        onChange={this.handleInputChange}
                                        id="firstName"
                                        placeholder="First Name">

                                    </input>
                                </div>

                                <div classclassName="form-group">
                                    <label forHTML="lastName">Last Name</label>
                                    <input type="lastName"
                                        className="form-control"
                                        name="lastName"
                                        value={this.state.lastName}
                                        onChange={this.handleInputChange}
                                        id="firstName"
                                        placeholder="Last Name">

                                    </input>
                                </div>

                                <div className="form-group">
                                    <label forHTML="phoneNum">Phone Number</label>
                                    <input type="phoneNum"
                                        className="form-control"
                                        name="phoneNum"
                                        value={this.state.phoneNum}
                                        onChange={this.handleInputChange}
                                        id="phoneNum"
                                        placeholder="(555) 555 - 5555">

                                    </input>
                                </div>

                                <div className="form-group">
                                    <label forHTML="email">Email address</label>
                                    <input type="email"
                                        className="form-control"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.handleInputChange}
                                        id="email"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter email">

                                    </input>
                                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>

                                <div className="form-group">
                                    <label forHTML="vin">Vin Number</label>
                                    {/* insert modal link */}
                                    <VinModal />
                                    <input type="vin"
                                        className="form-control"
                                        name="vin"
                                        value={this.state.vin}
                                        onChange={this.handleInputChange}
                                        id="vin"
                                        placeholder="VIN #">

                                    </input>
                                </div>

                                <div className="form-group">
                                    <label forHTML="vin">Vehicle Year</label>
                                    <input type="year"
                                        className="form-control"
                                        name="year"
                                        value={this.state.year}
                                        onChange={this.handleInputChange}
                                        id="year"
                                        placeholder="Year">

                                    </input>
                                </div>

                                <div className="form-group">
                                    <label forHTML="make">Vehicle Make</label>
                                    <input type="make"
                                        className="form-control"
                                        name="make"
                                        value={this.state.make}
                                        onChange={this.handleInputChange}
                                        id="make"
                                        placeholder="Make">

                                    </input>
                                </div>

                                <div className="form-group">
                                    <label forHTML="model">Vehicle Model</label>
                                    <input type="model"
                                        className="form-control"
                                        name="model"
                                        value={this.state.model}
                                        onChange={this.handleInputChange}
                                        id="model"
                                        placeholder="Model">

                                    </input>
                                </div>

                                <div className="form-group">
                                    <label forHTML="message">Write your message here...</label>
                                    <textarea className="form-control" id="message" rows="4"></textarea>
                                </div>

                                <button type="submit"
                                    className="btn btn-primary"
                                    className="myButton"
                                    // do we want to have the button disabled if all fields are not filled in? disabled={}
                                    onClick={this.sendFormData}
                                >Submit</button>
                            </form>

                        </div>
                    </div>
                    <div className="col-sm-4 pt-4">
                        <Contacts />
                    </div>
                </div>
            </div>
        );
    }
}

export default RequestForm;