import * as actionType from '../actions/ActionType'

const initialState = {items: []}

const cartReducer = (state = initialState, action) => {
  let newState
  switch (action.type) {
    case actionType.ADD_ITEM_TO_INVENTORY:
      return handleAddItem(state, action)
    case actionType.REMOVE_ITEM_FROM_INVENTORY:
      return newState = state - action.payload
    default:
      return state
  }
}

function handleAddItem(state, action) {
  const newState = {items: [...state.items, action.item]}
  return {...state, ...newState}
}

export default cartReducer
