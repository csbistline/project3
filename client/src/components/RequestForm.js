import React, { Component } from 'react';
import Contacts from "./Contacts";
import VinModal from "./vinModal";
import API from "../../../routes/api/books"


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

    sendFormData = event => {
        event.preventDefault();

        API.sendData({
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
}

render() {
    return (
        <div>
            <div className="row pt-4" >
                <div className="col-md-8 pt-4 d-flex flex-wrap justify-content-around">

                    <div className="jumbotron">
                        <h1 class="display-4">Parts Request Form</h1>
                        <p class="lead">Enter your contact and vehicle information below and a Parts Specialist will get back to you shortly.</p>
                        <hr class="my-4"></hr>
                        <form>

                            <div class="form-group">
                                <label for="firstName">First Name</label>
                                <input type="firstName"
                                    class="form-control"
                                    name="firstName"
                                    value={this.state.firstName}
                                    onChange={this.handleInputChange}
                                    id="firstName"
                                    placeholder="First Name">

                                </input>
                            </div>

                            <div class="form-group">
                                <label for="lastName">Last Name</label>
                                <input type="lastName"
                                    class="form-control"
                                    name="lastName"
                                    value={this.state.lastName}
                                    onChange={this.handleInputChange}
                                    id="firstName"
                                    placeholder="Last Name">

                                </input>
                            </div>

                            <div class="form-group">
                                <label for="phoneNum">Phone Number</label>
                                <input type="phoneNum"
                                    class="form-control"
                                    name="phoneNum"
                                    value={this.state.phoneNum}
                                    onChange={this.handleInputChange}
                                    id="phoneNum"
                                    placeholder="(555) 555 - 5555">

                                </input>
                            </div>

                            <div class="form-group">
                                <label for="email">Email address</label>
                                <input type="email"
                                    class="form-control"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleInputChange}
                                    id="email"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter email">

                                </input>
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>

                            <div class="form-group">
                                <label for="vin">Vin Number</label>
                                {/* insert modal link */}
                                <VinModal />
                                <input type="vin"
                                    class="form-control"
                                    name="vin"
                                    value={this.state.vin}
                                    onChange={this.handleInputChange}
                                    id="vin"
                                    placeholder="VIN #">

                                </input>
                            </div>

                            <div class="form-group">
                                <label for="vin">Vehicle Year</label>
                                <input type="year"
                                    class="form-control"
                                    name="year"
                                    value={this.state.year}
                                    onChange={this.handleInputChange}
                                    id="year"
                                    placeholder="Year">

                                </input>
                            </div>

                            <div class="form-group">
                                <label for="make">Vehicle Make</label>
                                <input type="make"
                                    class="form-control"
                                    name="make"
                                    value={this.state.make}
                                    onChange={this.handleInputChange}
                                    id="make"
                                    placeholder="Make">

                                </input>
                            </div>

                            <div class="form-group">
                                <label for="model">Vehicle Model</label>
                                <input type="model"
                                    class="form-control"
                                    name="model"
                                    value={this.state.model}
                                    onChange={this.handleInputChange}
                                    id="model"
                                    placeholder="Model">

                                </input>
                            </div>

                            <div class="form-group">
                                <label for="message">Write your message here...</label>
                                <textarea class="form-control" id="message" rows="4"></textarea>
                            </div>

                            <button type="submit"
                                class="btn btn-primary"
                                className="myButton"
                                {/* do we want to have the button disabled if all fields are not filled in? disabled={}*/}
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