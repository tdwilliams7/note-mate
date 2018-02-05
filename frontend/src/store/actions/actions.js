import axios from 'axios';
export const GETTING_NOTES = 'GETTING_NOTES';
export const RECEIVED_NOTES = 'RECEIVED_NOTES';

const getUrl = 'http://localhost:8080/notes'

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
