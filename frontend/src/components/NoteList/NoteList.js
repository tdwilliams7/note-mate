import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getNotes, deleteNote } from "../../store/actions/actions";
//import NoteCard from '../NoteCard/NoteCard';
import NoteInput from "../NoteInput/NoteInput";

class NoteList extends Component {
  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    return (
      <div>
        <h1>Note List Component</h1>
        <NoteInput />
        {this.props.notes.map(note => <NoteCard key={note.id} note={note} />)}
      </div>
    );
  }
}

const NoteCard = props => {
  return (
    <div key={props.note.id}>
      <Link to={`/note/${props.note.id}`}>
        <div>{props.note.title}</div>
      </Link>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

export default connect(mapStateToProps, { getNotes, deleteNote })(NoteList);
