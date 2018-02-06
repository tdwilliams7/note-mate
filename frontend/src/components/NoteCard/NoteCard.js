import React from 'react';
import { Link } from 'react-router-dom';

const NoteCard = props => {
  return (
    <div key={props.note.id}>
      <Link to={`/note/${props.note.id}`}>
        <div>{props.note.title}</div>
        <div>{props.note.text}</div>
      </Link>
    </div>
  )
}

export default NoteCard;
