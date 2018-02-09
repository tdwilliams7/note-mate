import axios from "axios";
export const BY_TAG = "BY_TAG";
export const BY_TEXT = "BY_TEXT";

const getUrl = "http://localhost:8080/notes";

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
        dispatch({ type: BY_TAG, payload: data });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
//
// export const filterByText = (text) => {
//   return dispatch => {
//     axios
//     .get(getUrl)
//     .then(({ data }) => {
//       data = data.filter(note )
//     })
//   }
// }
