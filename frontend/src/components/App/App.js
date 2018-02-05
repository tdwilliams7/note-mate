import React, { Component } from 'react';
import NoteList from '../NoteList/NoteList';
import NoteInput from '../NoteInput/NoteInput';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Troy's Note List Project</h1>
          <NoteInput />
        </header>
        <NoteList />
      </div>
    );
  }
}

export default App;
