import React, { Component } from 'react';
import Contacts from "./Contacts";
import axios from "axios";
import { Redirect } from 'react-router';

// import Wrapper from "./Wrapper";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



class LoginForm extends Component {

    state = {
        loggedIn: false,
        username: "",
        password: "",
        loggedInUser: {}
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
        console.log('handleSubmit')
        console.log(this.state.username);
        console.log(this.state.password);
        this._login(this.state.username, this.state.password)
    };

    _login(username, password) {
        axios
            .get('/api/login/?contact=' + username + '&password=' + password)
            .then(response => {
                console.log(response.data)
                if (!response.data.length) {
                    alert("Incorrect username or password")
                } else {
                    this.setState({
                        loggedIn: true,
                        loggedInUser: response.data[0]
                    })
                }
            })
            .then(res => {
                console.log("in redirect phase");
                this.renderRedirect();
            })
    };

    renderRedirect = () => {
        if (this.state.loggedIn) {
            console.log("redirecting to tech dashboard");
            if (this.state.loggedInUser.permission === "tech") {
                this.props.history.push("/TechDashboard2")
            } else if (this.state.loggedInUser.permission === "admin") {
                this.props.history.push("/MgrDashboard")
            }            
        }
    }


    render() {
        return (
            <div>
                <div className="row pt-4" >
                    <div className="col-md-8 pt-4 d-flex flex-wrap justify-content-around  animated bounceInUp">

                        <div className="jumbotron">
                            <h1 className="display-4"><b>Team Login Form</b></h1>
                            <p className="lead">Enter your username/password below to login.</p>
                            <hr className="my-4"></hr>
                            <form>

                                <div className="form-group">

                                    <label htmlFor="username">UserName</label>

                                    <input type="text"
                                        className="form-control"
                                        name="username"
                                        value={this.state.username}
                                        onChange={this.handleInputChange}
                                        id="username"
                                        placeholder="Username">

                                    </input>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password">Password</label>

                                    <input type="password"

                                        className="form-control"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.handleInputChange}
                                        id="password"
                                        placeholder="Password">

                                    </input>
                                </div>

                                <button type="submit"
                                    className="btn btn-primary myButton"
                                    // do we want to have the button disabled if all fields are not filled in? disabled={}
                                    onClick={this.sendFormData}
                                >Submit</button>
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




};

export default LoginForm;