import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cart_redux'

export default configureStore({
    reducer: {
        cart: cartReducer,
    }
})