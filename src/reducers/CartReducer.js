import * as actionType from '../actions/ActionType'

const initialState = {items: {}, totalAmount: 0, itemsCount: 0}

const cartReducer = (state = initialState, action) => {
  let newState
  switch (action.type) {
    case actionType.ADD_ITEM_TO_CART:
      return addItem(state, action)

    case actionType.REMOVE_ITEM_FROM_CART:
      return newState = state - action.payload

    case actionType.DELETE_ITEM_FROM_CART:
      return deleteItem(state, action)

    case actionType.CONFIRM_PURCHASE:
      return newState = state - action.payload

    default:
      return state
  }
}

const addItem = (state, action) => { console.log(state, action)
  const id = action.item.id
  if(state.items[id] && state.items[id].count >= state.items[id].quantityRemaining) return state

  let newState = {items: {...state.items, ...{[id]: action.item}}}

  newState = updateCart(id, state, newState)

  //return new state
  return {...state, ...newState}
}

const deleteItem = (state, action) => {
  let newState = {...state}
  newState.items[action.item.id] = null
  delete newState.items[action.item.id]

  newState = updateCart(action.item.id, state, newState)

  return newState
}

const updateCart = (id, state, newState) => {
  if (newState.items[id]) {
    const price = newState.items[id].price

    //Update item count
    newState.items[id].count = state.items[id] ? state.items[id].count + 1 : 1

    //Update item total
    newState.items[id].amount = state.items[id] ? (price * newState.items[id].count).toFixed(2) : price
  }

  //Update items count
  newState.itemsCount = Object.keys(newState.items).length

  //Update amount
  const totalAmount = getTotal(newState)
  newState.totalAmount = totalAmount.toFixed(2)

  return newState
}

const getTotal = (newState) => {
  let totalAmount = 0;
  for (const [, item] of Object.entries(newState.items)) {
    totalAmount += parseFloat(item.amount)
  }
  return totalAmount
}

export default cartReducer
