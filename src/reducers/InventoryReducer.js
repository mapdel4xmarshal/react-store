import * as actionType from '../actions/ActionType'
import inventoryItems from '../assets/store_items'

const initialState = {items: inventoryItems};

const inventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_ITEM_TO_INVENTORY:
      return addItem(state, action)

    case actionType.REMOVE_ITEM_FROM_INVENTORY:
      return removeItem(state, action)
    default:
      return state
  }
}

const addItem = (state, action) => {
  const newState =  {...state}
  const id = action.item.id

  newState.items[id].quantityRemaining = state.items[id].quantityRemaining + action.item.count
  return newState
}

const removeItem = (state, action) => {
  const newState =  {...state}
  newState.items[action.item.id].quantityRemaining = Math.max(action.item.quantityRemaining - 1, 0)
  return newState
}

export default inventoryReducer
