import React, { Component } from "react";
import Title from "./Title";
import UserForm from "./UserForm";
import AllUsers from "./AllUsers";
import Greet from "./Greet";

class Main extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Title />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 ">
            <div className="row">
              <UserForm />
            </div>
            <div className="row greeting-box">
              <Greet />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <AllUsers />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
