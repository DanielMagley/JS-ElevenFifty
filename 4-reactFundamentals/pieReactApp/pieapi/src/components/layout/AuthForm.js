import React from "react";

const AuthForm = props => {
  return (
    <div>
      <form>
        <h1>{props.formName}</h1>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="emailField"
            name="email"
            classname="input-field"
            onChange={props.changeInputs}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="passwordField"
            name="password"
            classname="input-field"
            onChange={props.changeInputs}
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AuthForm;
