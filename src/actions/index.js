import * as actionType from './ActionType'

export const addItemToCart = (item) => ({
    type: actionType.ADD_ITEM_TO_CART,
    item
})

export const addItemToInventory = (id, count) => ({
    type: actionType.ADD_ITEM_TO_INVENTORY,
    item: {
        id,
        count
    }
})

export const confirmPurchase = (item) => ({
    type: actionType.CONFIRM_PURCHASE,
    item
})

export const deleteItemFromCart = (item) => ({
    type: actionType.DELETE_ITEM_FROM_CART,
    item
})

export const emptyCart = () => ({
    type: actionType.EMPTY_CHART
})

export const removeItemFromCart = (item) => ({
    type: actionType.REMOVE_ITEM_FROM_CART,
    item
})

export const removeItemsFromInventory = (items) => ({
    type: actionType.REMOVE_ITEMS_FROM_INVENTORY,
    items
})
