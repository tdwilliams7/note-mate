import React, { Component } from 'react';

class NoteInput extends Component {
  state = {
    title: '',
    text: '',
  }

  inputChangeHandler = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    })
  }

  submitHandler = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Note Input Component</h1>
        <form onSubmit={this.submitHandler}>
          <label for="title">Title</label>
          <input onChange={this.inputChangeHandler}name="title" id="title"></input>

          <label for="text">Text</label>
          <input onChange={this.inputChangeHandler}name="text" id="text"></input>

          <button>add</button>
        </form>
      </div>

    )
  }
}

export default NoteInput;
