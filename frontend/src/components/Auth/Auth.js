import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class Auth extends Component {
  state = {
    authenticated: false,
  }
  checkAuthorization = (event) => {
    event.preventDefault();
    let flag = false;
    if (this.state.username.length > 4 && this.state.password.length > 4) {
      this.setState({
        authenticated: true,
      })
    }
  }

  render() {
    if (this.state.authenticated) {
      return (
        <Redirect to='/notes' />
      )
    }
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
          <Link to={"/notes"}>
            <button >Log In</button>
          </Link>
        </form>
      </div>
    )
  }
}

export default Auth;
