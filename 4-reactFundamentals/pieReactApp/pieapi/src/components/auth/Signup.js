import React from "react";
import AuthForm from "../layout/AuthForm";

class SignUp extends React.Component {
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div>
        <AuthForm formName="Signup" changeInput={this.handleChange} />
        <h6>
          Log In
          <button onClick={this.props.toggleForm}>HERE</button>
          if you already have an account
        </h6>
      </div>
    );
  }
}
export default SignUp;
