import {
  ADD_STATE,
  DELETE_STATE,
  EDIT_STATE,
  ADD_LINK_TO_STATE
} from '../constants/ActionTypes'

const initialState = [
  {
    text: 'Double click to edit name',
    id: 0,
    references: []
  }
]

export default function stateItems(state = initialState, action) {

  switch (action.type) {

    case ADD_STATE:
      return [
        ...state,
        {
          id: state.reduce((maxId, state) => Math.max(state.id, maxId), -1) + 1,
          text: action.text,
          references: []
        }
      ]
    case DELETE_STATE:
      return state.filter(item =>
        item.id !== action.id
      )
        .map(item =>
          ({
            ...item,
            references: item.references.filter(ref => ref !== action.id.toString())
          })
        )
    case EDIT_STATE:
      return state.map(item =>
        item.id === action.id ?
          { ...item, text: action.text } :
          item
      )
    case ADD_LINK_TO_STATE:
      return state.map(item =>
        item.id === action.stateId ?
          {
            ...item,
            references:
              [...item.references, `${action.linkToId}`]
          } :
          item
      )
    default:
      return state
  }
}
