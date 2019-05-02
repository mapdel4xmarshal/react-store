import * as actionType from '../actions/ActionType'
import inventoryItems from '../assets/store_items'

const initialState = {items: inventoryItems};

const inventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_ITEM_TO_INVENTORY:
      return handleRemoveItem(state, action)
    case actionType.REMOVE_ITEM_FROM_INVENTORY:
      return handleRemoveItem(state, action)
    default:
      return state
  }
}

function handleRemoveItem(state, action) {
  const newState =  {...state}
  newState.items[action.item.id].quantityRemaining = Math.max(action.item.quantityRemaining - 1, 0)
  console.log(newState)
  return newState
}

export default inventoryReducer
