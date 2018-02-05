import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


// components
import NoteList from '../NoteList/NoteList';
import NoteInput from '../NoteInput/NoteInput';
import Auth from '../Auth/Auth';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Troy's Note List Project</h1>
        </header>
        <Router>
          <Switch>
            <Route exact path='/' component={Auth} />
            <Route path='/notes' component={NoteList} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
