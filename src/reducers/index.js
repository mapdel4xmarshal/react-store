import { combineReducers } from 'redux'
import cartReducer from './CartReducer'
import inventoryReducer from "./InventoryReducer";

const storeApp = combineReducers({
    cartReducer,
    inventoryReducer
})

export default storeApp
