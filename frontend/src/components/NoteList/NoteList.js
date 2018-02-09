import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getNotes, deleteNote } from "../../store/actions/actions";
import NoteInput from "../NoteInput/NoteInput";
import { Card, CardBody, CardTitle, Button, Row, Col } from "reactstrap";
import Moment from "moment";
import "./NoteList.css";

class NoteList extends Component {
  state = {
    notes: []
  };

  componentDidMount() {
    this.props.getNotes();
    this.setState({
      notes: this.props.notes
    });
  }

  sortHighLow = () => {
    const notes = this.props.notes.sort((a, b) => {
      return b.rank - a.rank;
    });
    this.setState({
      notes
    });
  };

  sortLowHigh = () => {
    const notes = this.props.notes.sort((a, b) => {
      return a.rank - b.rank;
    });
    this.setState({
      notes
    });
  };

  render() {
    return (
      <Row>
        <Col xs="3">
          <NoteInput />
        </Col>
        <Col xs="9">
          <Button onClick={this.sortLowHigh}>Sort low to high</Button>
          <Button onClick={this.sortHighLow}>Sort High to low</Button>
          <div className="NoteList">
            {this.props.notes.map(note => (
              <NoteCard key={note.id} note={note} />
            ))}
          </div>
        </Col>
      </Row>
    );
  }
}

const NoteCard = props => {
  return (
    <Card className="NoteCard" key={props.note.id}>
      <CardTitle>{props.note.title}</CardTitle>
      <CardBody>
        <div>
          <p>{`${props.note.text.substring(0, 10)}...`}</p>
          <p>{Moment(props.note.createdOn).fromNow()}</p>
          <Link to={`/note/${props.note.id}`}>
            <Button>...</Button>
          </Link>
          <span>{props.note.rank}</span>
        </div>
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
