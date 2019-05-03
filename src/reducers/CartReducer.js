import * as actionType from '../actions/ActionType'

const initialState = {items: {}, totalAmount: 0, itemsCount: 0}

/**
 * Handles CRUD operations on cart
 * @param state
 * @param action
 * @returns {*}
 */
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD_ITEM_TO_CART:
            return addItem(state, action)

        case actionType.CONFIRM_PURCHASE:
            return confirmPurchase(state)

        case actionType.DELETE_ITEM_FROM_CART:
            return deleteItem(state, action)

        case actionType.EMPTY_CHART:
            return emptyCart(state)

        case actionType.REMOVE_ITEM_FROM_CART:
            return removeItem(state, action)

        default:
            return state
    }
}

/**
 * Adds an item to the cart and also updates the cart totals
 * @param state
 * @param action
 * @returns {*}
 */
const addItem = (state, action) => {
    const id = action.item.id
    if (state.items[id] && state.items[id].count >= state.items[id].quantityRemaining) return state

    let newState = {items: {...state.items, ...{[id]: action.item}}}

    //Update item count
    newState.items[id].count = state.items[id] ? state.items[id].count + 1 : 1

    newState = updateCart(id, state, newState)

    //return new state
    return {...state, ...newState}
}

/**
 * Clears the cart upon successful purchase
 * @param state
 * @returns {*}
 */
const confirmPurchase = (state) => {
    return emptyCart(state)
}

/**
 * Deletes an instance of item from cart
 * @param state
 * @param action
 * @returns {*|{[p: string]: *}}
 */
const deleteItem = (state, action) => {
    let newState = {...state}
    newState.items[action.item.id] = null
    delete newState.items[action.item.id]

    newState = updateCart(action.item.id, state, newState)

    return newState
}

/**
 * Removes all items from cart
 * @param state
 * @returns {*}
 */
const emptyCart = (state) => {
    let newState = {...state}
    newState.items = {}
    return updateCart(null, state, newState)
}

/**
 * Removes an item from cart
 * @param state
 * @param action
 * @returns {{[p: string]: *}}
 */
const removeItem = (state, action) => {
    const id = action.item.id

    //Remove the last item type from cart
    if (state.items[id] && action.item.count === 1)
        return deleteItem(state, action)

    action.item.count--
    let newState = {items: {...state.items, ...{[id]: action.item}}}
    newState = updateCart(id, state, newState)

    //return new state
    return {...state, ...newState}
}

/**
 *
 * @param id
 * @param state
 * @param newState
 * @returns {*}
 */
const updateCart = (id, state, newState) => {
    if (id !== null && newState.items[id]) {
        const price = newState.items[id].price

        //Update item total
        newState.items[id].amount = state.items[id] ?
            (price * newState.items[id].count).toFixed(2) : price
    }

    //Update items count
    newState.itemsCount = Object.keys(newState.items).length

    //Update amount
    const totalAmount = getTotal(newState)
    newState.totalAmount = totalAmount.toFixed(2)

    return newState
}

/**
 * Computes the cart total amount
 * @param newState
 * @returns {number}
 */
const getTotal = (newState) => {
    let totalAmount = 0;
    for (const [, item] of Object.entries(newState.items)) {
        totalAmount += parseFloat(item.amount)
    }
    return totalAmount
}

export default cartReducer
