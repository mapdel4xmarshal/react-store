import * as actionType from '../actions/ActionType';

const initialState = {items: [], amount: 0}

const cartReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case actionType.ADD_ITEM:
            return handleAddItem(state, action)
        case actionType.REMOVE_ITEM:
            return newState = state - action.payload;
        case actionType.CONFIRM_PURCHASE:
            return newState = state - action.payload;
        default:
            return state
    }
}

function handleAddItem(state, action) {
    const newState = {items: [...state.items, action.item]}
    return {...state, ...newState}
}

export default cartReducer;
