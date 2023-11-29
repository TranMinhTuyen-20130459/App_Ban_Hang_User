import {configureStore} from "@reduxjs/toolkit";
import cartsReducer from "./slices/CartsSlice";
import addressReducer from "./slices/OrderAddressSlice";
import paymentReducer from './slices/PaymentSlice'

const store = configureStore({
    reducer: {
        carts: cartsReducer,
        address_order: addressReducer,
        payment: paymentReducer
    }
})

export default store;