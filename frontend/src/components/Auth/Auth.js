import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./Auth.css";

class Auth extends Component {
  state = {
    authenticated: false,
    uName: "TroyW",
    uPass: "Open",
    username: "",
    password: "",
    attempted: false
  };

  inputChangeHandler = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };

  checkAuthorization = e => {
    e.preventDefault();
    if (
      this.state.username === this.state.uName &&
      this.state.password === this.state.uPass
    ) {
      this.setState({
        authenticated: true
      });
    }
    this.setState({
      attempted: true
    });
  };

  addNewUser = event => {
    this.setState({
      uName: this.state.username,
      uPass: this.state.password
    });
    this.checkAuthorization(event);
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
              type="password"
            />
          </div>
          <div className={this.state.attempted ? null : "hidden"}>
            <h4 className="hidden--text">
              Oh no! something isn't right, or create a new user with that
              Username and Password
            </h4>
          </div>
          <button>Log In</button>
        </form>
        <button onClick={this.addNewUser}>Create New user</button>
      </div>
    );
  }
}

export default Auth;
