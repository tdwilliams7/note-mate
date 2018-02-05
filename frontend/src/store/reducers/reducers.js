import {
  GETTING_NOTES,
  RECEIVED_NOTES,
  ADDING_NOTE,
  NOTE_ADDED
} from "../actions/actions";

const initialState = {
  notes: [],
  gettingNotes: false,
  receivedNote: false,
  addingItem: false,
  addedItem: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GETTING_NOTES:
      return { ...state, gettingNotes: true };
    case RECEIVED_NOTES:
      return { ...state, gettingNotes: false, notes: action.payload };
    case ADDING_NOTE:
      return { ...state, addingItem: true };
    case NOTE_ADDED:
      return { ...state, addingItem: false, notes: action.payload };
    default:
      return state;
  }
};
