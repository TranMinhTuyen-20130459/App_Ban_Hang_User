import { configureStore } from "@reduxjs/toolkit";
import cartsReducer from "./slices/CartsSlice";
import addressReducer from "./slices/OrderAddressSlice";
import CategoryReducer from "./slices/CategorySlice";
import paymentReducer from './slices/PaymentSlice'
import orderProductReducer from "./slices/OrderProductSlice";

const store = configureStore({
    reducer: {
        carts: cartsReducer,
        address_order: addressReducer, //=> địa chỉ giao hàng
        category: CategoryReducer,
        address_order: addressReducer,
        payment: paymentReducer,
        orderProducts: orderProductReducer
    }
})

export default store;