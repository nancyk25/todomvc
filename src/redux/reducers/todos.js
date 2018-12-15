import { ADD_TODO, TOGGLE_TODO } from "../actionTypes";

const initialState = {
  allIds: [],
}
export default function ( state = initialState, action ) {
  switch ( action.type ) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      return {
        ...state,
        addIds: [ ...state.allIds, id ],
      }
    }
    default:
      return state;
  }
}