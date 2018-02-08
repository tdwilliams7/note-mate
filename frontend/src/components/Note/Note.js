import React, { Component } from "react";
import { connect } from "react-redux";
import Checklist from "../Checklist/Checklist";
import {
  getSingleNote,
  deleteNote,
  updateNote
} from "../../store/actions/actions";
import "./Note.css";

class Note extends Component {
  state = {
    title: "",
    text: "",
    id: "",
    newTodo: "",
    checklist: []
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getSingleNote(id);
    this.props.notes.filter(note => {
      if (note.id === Number(id)) {
        return this.setState({
          title: note.title,
          text: note.text,
          id,
          checklist: note.checklist
        });
      }
      return note;
    });
  }

  updateNoteHandler = event => {
    event.preventDefault();
    const note = this.state;
    this.props.updateNote(note);
    this.props.history.push("/notes");
  };

  deleteNoteHandler = (id, history) => {
    console.log(id);
    this.props.deleteNote(id);
    this.props.history.push("/notes");
  };

  inputChangeHandler = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };

  render() {
    return (
      <div>
        {this.props.notes.map(note => {
          return (
            <div key={note.id} className="Note">
              <h2>{this.state.title}</h2>
              <div>{this.state.text}</div>
              <button onClick={() => this.deleteNoteHandler(note.id)}>
                Delete
              </button>
              <Checklist
                checklist={note.checklist}
                routeId={this.props.match.params.id}
                getSingleNote={this.props.getSingleNote}
                // inputChangeHandler={this.inputChangeHandler}
                // addTodoHandler={this.addTodoHandler}
                // newTodo={this.state.newTodo}
                // toggleCompleteHandler={this.toggleCompleteHandler}
              />
            </div>
          );
        })}

        <form onSubmit={this.updateNoteHandler}>
          <input
            onChange={this.inputChangeHandler}
            value={this.state.title}
            name="title"
          />
          <input
            onChange={this.inputChangeHandler}
            value={this.state.text}
            name="text"
          />
          <button>update</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

export default connect(mapStateToProps, {
  getSingleNote,
  deleteNote,
  updateNote
})(Note);
