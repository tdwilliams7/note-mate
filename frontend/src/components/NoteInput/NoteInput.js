import React, { Component } from "react";
import { connect } from "react-redux";
import { addNote } from "../../store/actions/actions";

class NoteInput extends Component {
  state = {
    title: "",
    text: ""
  };

  inputChangeHandler = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState({
      title: "",
      text: ""
    });
  };


  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <label htmlFor="title">Title</label>
          <input onChange={this.inputChangeHandler} name="title" id="title" value={this.state.title}/>

          <label htmlFor="text">Text</label>
          <input onChange={this.inputChangeHandler} name="text" id="text" value={this.state.text}/>

          <button>add</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { addNote })(NoteInput);
