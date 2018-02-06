import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNotes, deleteNote } from '../../store/actions/actions';
import NoteCard from '../NoteCard/NoteCard';
import NoteInput from '../NoteInput/NoteInput';

class NoteList extends Component {

  componentDidMount() {
    this.props.getNotes();
  }

  deleteNoteHandler = id => {
    console.log(id);
    this.props.deleteNote(id);

  }

  render() {
    return (
      <div>
        <h1>Note List Component</h1>
        <NoteInput />
        {this.props.notes.map(note => <NoteCard note={note} deleteNoteHandler={this.deleteNoteHandler} />)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
  }
}


export default connect(mapStateToProps, { getNotes, deleteNote })(NoteList);
