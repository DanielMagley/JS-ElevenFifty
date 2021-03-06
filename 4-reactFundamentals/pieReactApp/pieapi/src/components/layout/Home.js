import React, { Component } from "react";
import Login from "../auth/Login";
import SignUp from "../auth/Signup";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      isUser: false
    };
  }

  changeUserStatus = () => this.setState({ isUser: !this.state.isUser });

  authViewShow = () => {
    if (this.state.isUser) {
      return <Login toggleForm={this.changeUserStatus} />;
    } else {
      return <SignUp toggleForm={this.changeUserStatus} />;
    }
  };

  render() {
    return <div>{this.authViewShow()}</div>;
  }
}
