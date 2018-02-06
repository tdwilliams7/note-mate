import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleNote, deleteNote, updateNote } from '../../store/actions/actions';
import { browserHistory } from 'react-router-dom';
import axios from 'axios';

class Note extends Component {
  state = {
    title: '',
    text: '',
    id: '',
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getSingleNote(id);
    this.props.notes.filter(note => {
      if (note.id === Number(id)) {
        return this.setState({
          title: note.title,
          text: note.text,
          id,
        })
      }
    })
  }

  updateNoteHandler = (event) => {
    event.preventDefault();
    const note = this.state;
    this.props.updateNote(note);
    this.props.history.push('/notes');
  }

  deleteNoteHandler = (id, history) => {
    console.log(id);
    this.props.deleteNote(id);
    this.props.history.push('/notes');
  }

  inputChangeHandler = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };

  render(){
    return (
      <div>
        {console.log(this.props.notes)}
        {this.props.notes.map(note => {
          return (
            <div key={note.id}>
              <h2>{this.state.title}</h2>
              <div>{this.state.text}</div>
              <button onClick={() => this.deleteNoteHandler(note.id)}>Delete</button>
            </div>
          )
        })}

        <form onSubmit={this.updateNoteHandler}>
          <input onChange={this.inputChangeHandler} value={this.state.title} name='title'></input>
          <input onChange={this.inputChangeHandler} value={this.state.text}
          name="text"
          ></input>
          <button >update</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
  }
}

export default connect(mapStateToProps, { getSingleNote, deleteNote, updateNote })(Note);
