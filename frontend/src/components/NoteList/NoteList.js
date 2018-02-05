import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNotes } from '../../store/actions/actions';
import Note from '../Note/Note';

class NoteList extends Component {

  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    return (
      <div>
        <h1>Note List Component</h1>
        {this.props.notes.map(note => <Note note={note} />)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
  }
}


export default connect(mapStateToProps, { getNotes })(NoteList);
