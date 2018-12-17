import * as types from '../constants/ActionTypes'

export const addState = text => ({ type: types.ADD_STATE, text })
export const deleteState = id => ({ type: types.DELETE_STATE, id })
export const editState = (id, text) => ({ type: types.EDIT_STATE, id, text })
export const addLinkToState = (stateId, linkToId) => ({
  type: types.ADD_LINK_TO_STATE,
  stateId,
  linkToId
})
