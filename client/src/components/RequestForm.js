import React, { Component } from 'react';
import PartsSpecCard from "./PartsSpecCard";
import PartsSpec from "../PartsSpec.json";
import Contacts from "./Contacts";


class RequestForm extends Component {

    state = {

        firstName: "",
        lastName: "",
        phoneNum: "",
        email: "",
        VIN: "",
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

    render() {
        return (
            <div>
                <div className="row pt-4" >
                    <div className="col-md-8 pt-4 d-flex flex-wrap justify-content-around">

                        <div className="jumbotron">
                            <h1 class="display-4">Parts Request Form</h1>
                            <p class="lead">Enter your contact and vehicle information below and a parts specicalist will get back to your shortly.</p>
                            <hr class="my-4"></hr>
                                <form>

                                    <div class="form-group">
                                        <label for="firstName">First Name</label>
                                        <input type="firstName" class="form-control" id="firstName" placeholder="First Name"></input>
                                    </div>

                                    <div class="form-group">
                                        <label for="lastName">Last Name</label>
                                        <input type="lastName" class="form-control" id="firstName" placeholder="First Name"></input>
                                    </div>

                                    <div class="form-group">
                                        <label for="email">Email address</label>
                                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"></input>
                                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>

                                    <div class="form-group">
                                        <label for="vin">Vin Number</label>
                                        <input type="vin" class="form-control" id="vin" placeholder="VIN #"></input>
                                    </div>

                                    <div class="form-group">
                                        <label for="message">Write your message here...</label>
                                        <textarea class="form-control" id="message" rows="4"></textarea>
                                    </div>

                                    <button type="submit" class="btn btn-primary">Submit</button>
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