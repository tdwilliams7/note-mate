import React from 'react';

const Note = props => {
  return (
    <div key={props.note.id}>
      <div>{props.note.title}</div>
      <div>{props.note.text}</div>
    </div>
  )
}

export default Note;
