import axios from 'axios';
export const GETTING_NOTES = 'GETTING_NOTES';
export const RECEIVED_NOTES = 'RECEIVED_NOTES';
export const ADDING_NOTE = 'ADDING_NOTE';
export const NOTE_ADDED = 'NOTE_ADDED';

const getUrl = 'http://localhost:8080/notes';
const postUrl = 'http://localhost:8080/notes';

export const getNotes = () => {
  return dispatch => {
    dispatch({ type: GETTING_NOTES});
    axios.get(getUrl)
      .then(({ data }) => {
        dispatch({ type: RECEIVED_NOTES, payload: data })
      })
      .catch(err => {
        console.log(err);
      })
  }
}

export const addNote = newNote => {
  return dispatch => {
    dispatch({ type: ADDING_NOTE });
    axios.post(postUrl, newNote)
      .then(({ data }) => {
        dispatch({ type: NOTE_ADDED, payload: data })
      })
      .catch(err => {
        console.log(err);
      })
  }
}
