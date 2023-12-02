import { configureStore } from "@reduxjs/toolkit";
import cartsReducer from "./slices/CartsSlice";
import addressReducer from "./slices/OrderAddressSlice";
import CategoryReducer from "./slices/CategorySlice";

const store = configureStore({
    reducer: {
        carts: cartsReducer,
        address_order: addressReducer, //=> địa chỉ giao hàng
        category: CategoryReducer
    }
})

export default store;