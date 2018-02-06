import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Auth extends Component {
  state = {
    authenticated: false,
    username: "",
    password: ""
  };

  inputChangeHandler = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };

  checkAuthorization = e => {
    e.preventDefault();
    if (this.state.username.length > 4 && this.state.password.length > 4) {
      this.setState({
        authenticated: true
      });
    }
  };

  render() {
    if (this.state.authenticated) {
      return <Redirect to="/notes" />;
    }
    return (
      <div>
        <h1>Auth component</h1>
        <form onSubmit={this.checkAuthorization}>
          <div>
            <input
              onChange={this.inputChangeHandler}
              placeholder="user name"
              value={this.state.username}
              name="username"
            />
          </div>
          <div>
            <input
              onChange={this.inputChangeHandler}
              placeholder="password"
              value={this.state.password}
              name="password"
            />
          </div>
          <button>Log In</button>
        </form>
      </div>
    );
  }
}

export default Auth;
