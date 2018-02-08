import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getNotes, deleteNote } from "../../store/actions/actions";
import NoteInput from "../NoteInput/NoteInput";
import { Card, CardText, CardBody, CardTitle, Button } from "reactstrap";
import "./NoteList.css";

class NoteList extends Component {
  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    return (
      <div>
        <NoteInput />
        <div className="NoteList">
          {this.props.notes.map(note => <NoteCard key={note.id} note={note} />)}
        </div>
      </div>
    );
  }
}

const NoteCard = props => {
  return (
    <Card className="NoteCard" key={props.note.id}>
      <CardBody>
        <CardTitle>{props.note.title}</CardTitle>
        <Link to={`/note/${props.note.id}`}>
          <Button>...</Button>
        </Link>
      </CardBody>
    </Card>
  );
};

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

export default connect(mapStateToProps, { getNotes, deleteNote })(NoteList);
