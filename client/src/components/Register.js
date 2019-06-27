import React, { Component } from 'react';
import Contacts from "./Contacts";
import axios from "axios";


class Register extends Component {

  state = {

      name: "",
      image: "",
      specialty: "",
      contact: "",
      permission: "",
      password: ""

  }

  handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value
    })
  };

  handleSubmit(event) {
    event.preventDefault()
    // TODO - validate!
    axios
        .post('/auth/signup', {
            username: this.state.contact,
            password: this.state.password,
            specialty: this.state.specialty,
            name: this.state.name,
            permission: this.state.permission,
            image: this.state.image
        })
        .then(response => {
            console.log(response)
            if (!response.data.errmsg) {
                console.log('youre good')
                this.setState({
                    redirectTo: '/login'
                })
            } else {
                console.log('duplicate')
                console.log(response.data.errmsg);
                
            }
        })
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
                                  <label htmlFor="Email">Email</label>
                                  <input type="text"
                                      className="form-control"
                                      name="contact"
                                      value={this.state.contact}
                                      onChange={(event) => {
                                          this.handleChange(event)
                                      }}
                                      id="contact"
                                      placeholder="Email">

                                  </input>
                              </div>

                              <div className="form-group">
                                  <label htmlFor="password">Password</label>
                                  <input type="password"
                                      className="form-control new-password"
                                      name="password"
                                      value={this.state.password}
                                      onChange={(event) => {
                                        this.handleChange(event)
                                    }}
                                      id="password"
                                      placeholder="Password">

                                  </input>
                              </div>

                              <div className="form-group">
                                  <label htmlFor="Name">Name</label>
                                  <input type="text"
                                      className="form-control"
                                      name="name"
                                      value={this.state.name}
                                      onChange={(event) => {
                                        this.handleChange(event)
                                    }}
                                      id="name"
                                      placeholder="Name">

                                  </input>
                              </div>

                              <div className="form-group">
                                  <label htmlFor="Specialty">Specialty</label>
                                  <input type="text"
                                      className="form-control"
                                      name="specialty"
                                      value={this.state.specialty}
                                      onChange={(event) => {
                                        this.handleChange(event)
                                    }}
                                      id="specialty"
                                      placeholder="Specialty">

                                  </input>
                              </div>

                              <div className="form-group">
                                  <label htmlFor="role">Role</label>
                                  <input type="text"
                                      className="form-control"
                                      name="permission"
                                      value={this.state.permission}
                                      onChange={(event) => {
                                        this.handleChange(event)
                                    }}
                                      id="permission"
                                      placeholder="Tech, Admin">

                                  </input>
                              </div>

                              <div className="form-group">
                                  <label htmlFor="image">Image</label>
                                  <input type="text"
                                      className="form-control"
                                      name="image"
                                      value={this.state.image}
                                      onChange={(event) => {
                                        this.handleChange(event)
                                    }}
                                      id="image"
                                      placeholder="i.e. './assets/img/PartsMgr.jpg'">

                                  </input>
                              </div>

                              <button type="submit"
                                  className="btn btn-primary myButton"
                                  // do we want to have the button disabled if all fields are not filled in? disabled={}
                                  onClick={(event) => {
                                    this.handleSubmit(event)
                                }}
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

export default Register;