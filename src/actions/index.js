import * as actionType from './ActionType'

export const addItem = (item) => ({
    type: actionType.ADD_ITEM,
    item
})
