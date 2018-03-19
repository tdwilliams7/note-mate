import axios from 'axios';
export const GETTING_NOTES = 'GETTING_NOTES';
export const RECEIVED_NOTES = 'RECEIVED_NOTES';
export const ADDING_NOTE = 'ADDING_NOTE';
export const NOTE_ADDED = 'NOTE_ADDED';
export const DELETING_NOTE = 'DELETING_NOTE';
export const NOTE_DELETED = 'NOTE_DELETED';
export const UPDATING_NOTE = 'UPDATING_NOTE';
export const UPDATED_NOTE = 'UPDATED_NOTE';
export const BY_TAG = 'BY_TAG';
export const BY_TEXT = 'BY_TEXT';
export const ADD_USER = 'ADD_USER';
export const VALIDATE = 'VALIDATE';
export const SIGNOUT = 'SIGNOUT';

const getUrl = 'http://localhost:8080/notes';
const postUrl = 'http://localhost:8080/notes';
const deleteUrl = 'http://localhost:8080/notes';

export const getNotes = () => {
  return dispatch => {
    dispatch({ type: GETTING_NOTES });
    axios
      .get(getUrl)
      .then(({ data }) => {
        dispatch({ type: RECEIVED_NOTES, payload: data });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const addNote = newNote => {
  return dispatch => {
    dispatch({ type: ADDING_NOTE });
    axios
      .post(postUrl, newNote)
      .then(({ data }) => {
        dispatch({ type: NOTE_ADDED, payload: data });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const deleteNote = id => {
  return dispatch => {
    dispatch({ type: DELETING_NOTE });
    axios
      .delete(deleteUrl, { data: { id: id } })
      .then(({ data }) => {
        dispatch({ type: NOTE_DELETED, payload: data });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const getSingleNote = id => {
  const url = `http://localhost:8080/notes/${id}`;
  return dispatch => {
    axios
      .get(url)
      .then(({ data }) => {
        dispatch({ type: RECEIVED_NOTES, payload: data });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const updateNote = note => {
  const id = note.id;
  const url = `http://localhost:8080/note/${id}`;
  return dispatch => {
    dispatch({ type: UPDATING_NOTE });
    axios
      .put(url, { data: { note } })
      .then(({ data }) => {
        dispatch({ type: UPDATED_NOTE, payload: data });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const filterByText = text => {
  return dispatch => {
    console.log(text);
    axios
      .get(getUrl)
      .then(({ data }) => {
        data = data.filter(note => {
          const newLength = text.length;
          const noteTitle = note.title.toLowerCase();
          if (noteTitle.substring(0, newLength) === text) {
            return note;
          }
          return undefined;
        });
        dispatch({ type: RECEIVED_NOTES, payload: data });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const filterByTag = tag => {
  return dispatch => {
    axios
      .get(getUrl)
      .then(({ data }) => {
        data = data.filter(note => {
          if (note.tag.toString() === tag) {
            return note;
          }
          return undefined;
        });
        dispatch({ type: RECEIVED_NOTES, payload: data });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const addUser = (email, password) => {
  const addUserUrl = 'http://localhost:8080/user/new';
  return dispatch => {
    axios
      .post(addUserUrl, { email, password })
      .then(({ data }) => {
        dispatch({ type: ADD_USER, payload: data._id });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const login = (email, password) => {
  const checkUserUrl = 'http://localhost:8080/user';
  return dispatch => {
    axios
      .post(checkUserUrl, { email, password })
      .then(({ data }) => {
        dispatch({ type: VALIDATE, payload: data });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const signout = () => {
  return dispatch => {
    dispatch({ type: SIGNOUT, user: null, authenticated: false });
  };
};
