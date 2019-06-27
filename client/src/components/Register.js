import React, { Component } from 'react';
import Contacts from "./Contacts";

class LoginForm extends Component {

  state = {

      name: "",
      image: "",
      specialty: "",
      contact: "",
      permission: "",
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
  };


  render() {
      return (
          <div>
              <div className="row pt-4" >
                  <div className="col-md-8 pt-4 d-flex flex-wrap justify-content-around  animated bounceInUp">

                      <div className="jumbotron">
                          <h1 className="display-4">Register new user</h1>
                          <p className="lead">Fill out all details to create new user</p>
                          <hr className="my-4"></hr>
                          <form>

                              <div className="form-group">
                                  <label htmlFor="username">Email</label>
                                  <input type="text"
                                      className="form-control"
                                      name="contact"
                                      value={this.state.contact}
                                      onChange={this.handleInputChange}
                                      id="contact"
                                      placeholder="Email">

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

                              <div className="form-group">
                                  <label htmlFor="password">Name</label>
                                  <input type="text"
                                      className="form-control"
                                      name="name"
                                      value={this.state.name}
                                      onChange={this.handleInputChange}
                                      id="name"
                                      placeholder="Name">

                                  </input>
                              </div>

                              <div className="form-group">
                                  <label htmlFor="password">Specialty</label>
                                  <input type="text"
                                      className="form-control"
                                      name="specialty"
                                      value={this.state.specialty}
                                      onChange={this.handleInputChange}
                                      id="specialty"
                                      placeholder="Specialty">

                                  </input>
                              </div>

                              <div className="form-group">
                                  <label htmlFor="password">Role</label>
                                  <input type="text"
                                      className="form-control"
                                      name="permission"
                                      value={this.state.permission}
                                      onChange={this.handleInputChange}
                                      id="permission"
                                      placeholder="Tech, Admin">

                                  </input>
                              </div>

                              <div className="form-group">
                                  <label htmlFor="password">Image</label>
                                  <input type="text"
                                      className="form-control"
                                      name="image"
                                      value={this.state.image}
                                      onChange={this.handleInputChange}
                                      id="image"
                                      placeholder="i.e. './assets/img/PartsMgr.jpg'">

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
}

export default LoginForm;