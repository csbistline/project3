import React, { Component } from 'react';
import Contacts from "./Contacts";
import axios from "axios"
import Wrapper from "./Wrapper";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



class LoginForm extends Component {

  state = {

    loggedIn: false,
    user: null

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
		this.props._login(this.state.username, this.state.password)
		this.setState({
			redirectTo: '/'
		})
    };
    
    componentDidMount() {
        axios.get('/auth/user').then(response => {
            console.log(response.data)
            if (!!response.data.user) {
                console.log('THERE IS A USER')
                this.setState({
                    loggedIn: true,
                    user: response.data.user
                })
            } else {
                this.setState({
                    loggedIn: false,
                    user: null
                })
            }
        })
    };
    
    _logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/auth/logout').then(response => {
            console.log(response.data)
            if (response.status === 200) {
                this.setState({
                    loggedIn: false,
                    user: null
                })
            }
        })
    };
    
    _login(username, password) {
        axios
            .post('/auth/login', {
                username,
                password
            })
            .then(response => {
                console.log(response)
                if (response.status === 200) {
                    // update the state
                    this.setState({
                        loggedIn: true,
                        user: response.data.user
                    })
                }
            })
    };
      /*partsAPI.savePartsRequest({
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
          .catch(err => console.log(err));*/



  render() {
      return (
          <div>
              <div className="row pt-4" >
                  <div className="col-md-8 pt-4 d-flex flex-wrap justify-content-around">

                      <div className="jumbotron">
                          <h1 className="display-4">Team Login Form</h1>
                          <p className="lead">Enter your username/password below to login.</p>
                          <hr className="my-4"></hr>
                          <form>

                              <div className="form-group">
                                  <label htmlFor="username">First Name</label>
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
                                  <label htmlFor="password">Last Name</label>
                                  <input type="password"
                                      className="form-control"
                                      name="password"
                                      value={this.state.password}
                                      onChange={this.handleInputChange}
                                      id="password"
                                      placeholder="Password">

                                  </input>
                              </div>

                                                                <div className="App">
                                                                    <Wrapper user={this.state.user} />
                                                                    {/* LINKS to our different 'pages' */}
                                                                    <Wrapper _logout={this._logout} loggedIn={this.state.loggedIn} />
                                                                    {/*  ROUTES */}
                                                                    {/* <Route exact path="/" component={Home} /> */}
                                                                    <Route exact path="/" render={() => <Wrapper user={this.state.user} />} />
                                                                    <Route
                                                                        exact
                                                                        path="/login"
                                                                        render={() =>
                                                                            <LoginForm
                                                                                _login={this._login}
                                                                            />}
                                                                    />
                                                                    {/* <Route exact path="/signup" component={SignupForm} /> */}
                                                                    {/* <LoginForm _login={this._login} /> */}
                                                                </div>

                              <button type="submit"
                                  className="btn btn-primary myButton"
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



render() {
    return (
        
        )
    }
};

export default LoginForm;