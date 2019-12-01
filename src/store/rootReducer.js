import {combineReducers} from 'redux'
import cartReducer from './cartReducer'
import productLikeReducer from './productLikeReducer'


const rootReducer = combineReducers({
    productsInCart:cartReducer,
    productsLikeState:productLikeReducer,
})

export default rootReducer
