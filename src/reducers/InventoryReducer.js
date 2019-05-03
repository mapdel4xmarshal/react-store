import * as actionType from '../actions/ActionType'
import inventoryItems from '../assets/store_items'

const initialState = {items: inventoryItems};

/**
 * Handles CRUD operations on inventory state
 * @param state
 * @param action
 * @returns {*}
 */
const inventoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD_ITEM_TO_INVENTORY:
            return addItem(state, action)

        case actionType.REMOVE_ITEMS_FROM_INVENTORY:
            return removeItems(state, action)
        default:
            return state
    }
}

/**
 * Adds an item to inventory
 * @param state
 * @param action
 * @returns {{[p: string]: *}}
 */
const addItem = (state, action) => {
    const newState = {...state}
    const id = action.item.id

    newState.items[id].quantityRemaining = state.items[id].quantityRemaining + action.item.count
    return newState
}

/**
 * Removes one or more items from the inventory
 * @param state
 * @param action
 * @returns {{[p: string]: *}}
 */
const removeItems = (state, action) => {
    const newState = {...state}
    for (const [, item] of Object.entries(action.items)) {
        newState.items[item.id].quantityRemaining = Math.max(item.quantityRemaining - item.count, 0)
    }
    return newState
}

export default inventoryReducer
