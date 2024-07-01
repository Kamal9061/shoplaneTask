import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './GetUserData/userSlice';
import cartReducer from "./GetCartData/cartSlice"
import productReducer from './GetProductData/reducer'

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    products: productReducer,
});

export default rootReducer;