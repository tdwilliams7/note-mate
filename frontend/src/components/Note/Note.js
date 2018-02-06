import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleNote, deleteNote } from '../../store/actions/actions';
import { browserHistory } from 'react-router-dom';
import axios from 'axios';

class Note extends Component {


  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getSingleNote(id);
    console.log(this.props)
  }

  deleteNoteHandler = (id, history) => {
    console.log(id);
    this.props.deleteNote(id);
    this.props.history.push('/notes');
  }
  render(){
    return (
      <div>
        <h1>Note Component</h1>
        {this.props.notes.map(note => {
          return (
            <div>
              {note.title}
              <button onClick={() => this.deleteNoteHandler(note.id)}>Delete</button>
            </div>
          )
        })}
      </div>

    )
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
  }
}

export default connect(mapStateToProps, { getSingleNote, deleteNote })(Note);
