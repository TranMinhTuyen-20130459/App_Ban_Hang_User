import { configureStore } from "@reduxjs/toolkit";
import cartsReducer from "./slices/CartsSlice";

const store = configureStore({
    reducer: {
        carts: cartsReducer,
    }
})

export default store;