import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


// components
import NoteList from '../NoteList/NoteList';
import NoteInput from '../NoteInput/NoteInput';
import Note from '../Note/Note';
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
            <Route path='/note/:id' component={Note} />
            <Route path='/notes' component={NoteList} />
            <Route exact path='/' component={Auth} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
