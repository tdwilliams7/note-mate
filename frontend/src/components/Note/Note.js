import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleNote } from '../../store/actions/actions';
import axios from 'axios';

class Note extends Component {
  state = {
    note: null,
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getSingleNote(id);
    console.log(this.props)
  }

  render(){
    return (
      <div>
        <h1>Note Component</h1>
        {/* <div>{this.props}</div> */}
        {this.props.notes.map(note => {
          return <div>{note.title}</div>
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

export default connect(mapStateToProps, { getSingleNote })(Note);
