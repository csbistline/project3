import React, { Component } from 'react';
import Contacts from "./Contacts";
import axios from "axios";
// import Wrapper from "./Wrapper";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



class LoginForm extends Component {

    state = {

        loggedIn: false,
        username: "",
        password: ""

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
        this._login(this.state.username)
    };

    // componentDidMount() {
    //     axios.get('/auth/user').then(response => {
    //         console.log(response.data)
    //         if (!!response.data.user) {
    //             console.log('THERE IS A USER')
    //             this.setState({
    //                 loggedIn: true,
    //                 user: response.data.user
    //             })
    //         } else {
    //             this.setState({
    //                 loggedIn: false,
    //                 user: null
    //             })
    //         }
    //     })
    // };

    // _logout(event) {
    //     event.preventDefault()
    //     console.log('logging out')
    //     axios.post('/api/logout').then(response => {
    //         console.log(response.data)
    //         if (response.status === 200) {
    //             this.setState({
    //                 loggedIn: false,
    //                 user: null
    //             })
    //         }
    //     })
    // };

    _login(username) {
        axios
            .get('/api/login/?contact=' + username)
            .then(response => {
                console.log(response)
                sessionStorage.setItem("user", response.data[0]._id);
                console.log(sessionStorage.getItem("user"));
            })
    };


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