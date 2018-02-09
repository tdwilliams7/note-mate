import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Button, Container } from "reactstrap";

// components
import NoteList from "../NoteList/NoteList";
import Note from "../Note/Note";
import Auth from "../Auth/Auth";

import "./App.css";

class App extends Component {
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

  signOutHandler = () => {
    this.setState({
      authenticated: false
    });
  };

  render() {
    if (!this.state.authenticated) {
      return (
        <div className="App">
          <header className="App-header">
            <h1>Troy's Note List Project</h1>
            Sign in to do stuff
          </header>
          <Auth
            state={this.state}
            addNewUser={this.addNewUser}
            checkAuthorization={this.checkAuthorization}
            inputChangeHandler={this.inputChangeHandler}
          />
        </div>
      );
    }
    return (
      <div className="App">
        <Container>
          <header className="App-header">
            <h1>Troy's Note List Project</h1>
            <Button onClick={this.signOutHandler}>Sign out</Button>
          </header>
          <Router>
            <div>
              <Route path="/notes" component={NoteList} />
              <Route path="/note/:id" component={Note} />
            </div>
          </Router>
        </Container>
      </div>
    );
  }
}

export default App;
