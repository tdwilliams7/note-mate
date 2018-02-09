import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getNotes, deleteNote } from "../../store/actions/actions";
import NoteInput from "../NoteInput/NoteInput";
import { Card, CardBody, CardTitle, Button, Row, Col, Input } from "reactstrap";
import Moment from "moment";
import "./NoteList.css";

class NoteList extends Component {
  // consstructor(props) {
  //   super(props);
  //   this.
  // }
  state = {
    notes: [],
    tag: "",
    searchText: "",
    filtered: false
  };

  componentDidMount() {
    this.props.getNotes();
    this.setState({
      notes: this.props.notes
    });
  }

  inputChangeHandler = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };

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

  searchByTag = () => {
    const target = this.state.tag.toString();
    const notes = this.props.notes.filter(note => {
      if (note.tag === target) {
        return note;
      }
      return undefined;
    });
    console.log("filtered notes: ", notes);
    this.setState({
      notes,
      filtered: true
    });
    console.log("Prop Notes: ", this.props.notes);
  };

  searchByText = () => {
    const target = this.state.searchText.toLowerCase();
    const newLength = target.length;
    const notes = this.props.notes.filter(note => {
      //cosnt;
      if (note.title.substring(0, newLength) === target) {
        return note;
      }
      return undefined;
    });
    this.setState({});
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
          <div>
            <label htmlFor="tagSearch">Search by tag</label>
            <Input type="select" name="tag" onChange={this.inputChangeHandler}>
              <option defaultValue>Work</option>
              <option>Random</option>
              <option>School</option>
              <option>Home</option>
            </Input>
            <Button onClick={this.searchByTag}>Search</Button>
          </div>

          <div className="NoteList">
            {this.state.filtered
              ? this.state.notes.map(note => (
                  <NoteCard key={note.id} note={note} />
                ))
              : this.props.notes.map(note => (
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
        <div>{props.note.tag}</div>
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
