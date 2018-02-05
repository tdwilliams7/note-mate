import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class Auth extends Component {

  checkAuthorization = (event) => {
    event.preventDefault();
    let flag = false;
    if (this.state.username.length > 4 && this.state.password.length > 4) {
      flag = true;
    }
    if (flag) {
      <Redirect to={'/notes'} />
    }
  }

  render() {
    return (
      <div>
        <h1>Auth component</h1>
        <form>
          <div>
            <input placeholder='user name'></input>
          </div>
          <div>
            <input placeholder='password'></input>
          </div>
          <button onSubmit={this.checkAuthorization}>Log In</button>
        </form>
      </div>
    )
  }
}

export default Auth;
