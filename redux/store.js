import {configureStore} from "@reduxjs/toolkit";
import cartsReducer from "./slices/CartsSlice";
import addressReducer from "./slices/OrderAddressSlice";

const store = configureStore({
    reducer: {
        carts: cartsReducer,
        address_order: addressReducer //=> địa chỉ giao hàng
    }
})

export default store;