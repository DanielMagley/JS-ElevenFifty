import React from "react";
import AuthForm from "../layout/AuthForm";

class Login extends React.Component {
  handleChange = e => {
    this.setState({
      [e.targeth.name]: e.target.value
    });
  };
  render() {
    return (
      <div>
        <AuthForm formName="Login" changeInput={this.handleChange} />
        <h6>
          Register
          <button onClick={this.props.toggleForm}>HERE</button>
          if you dont have an acoount already
        </h6>
      </div>
    );
  }
}
export default Login;
