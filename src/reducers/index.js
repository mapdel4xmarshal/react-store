import { combineReducers } from 'redux'
import cartReducer from './CartReducer'

const storeApp = combineReducers({
    cartReducer
})

export default storeApp
