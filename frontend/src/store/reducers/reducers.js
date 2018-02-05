import { GETTING_NOTES, RECEIVED_NOTES } from '../actions/actions';

const initialState = {
  notes: [],
  gettingNotes: false,
  receivedNote: false,
  addingItem: false,
  addedItem: false,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GETTING_NOTES:
      return { ...state, gettingNotes: true };
    case RECEIVED_NOTES:
      return { ...state, gettingNotes: false, notes: action.payload };
    default:
      return state;
  }

}
