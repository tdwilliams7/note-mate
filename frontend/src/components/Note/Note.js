import React from 'react';

const Note = props => {
  return (
    <div key={props.note.id}>
      <div>{props.note.title}</div>
      <div>{props.note.text}</div>
      <button onClick={() => props.deleteNoteHandler(props.note.id)}>delete</button>
    </div>
  )
}

export default Note;
