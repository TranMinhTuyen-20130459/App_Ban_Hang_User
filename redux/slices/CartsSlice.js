import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: "carts",
    initialState: [],
    reducers: {
        addCart: (state, action) => {
            const id = action.payload.id;
            const title = action.payload.title
            const price = action.payload.price
            const discountPrice = action.payload.discountPrice
            const size = action.payload.size
            const color = action.payload.color
            const quantity = action.payload.quantity
            const newCartItem = {
                id: id,
                title: title,
                price: price,
                discountPrice: discountPrice,
                size: size,
                color: color,
                quantity: quantity
            }
            state.push(newCartItem);
        },
        removeCart: (state, action) => {
            const itemId = action.payload;
            return state.filter((item) => item.id !== itemId);
        },
        updateCart: (state, action) => {
            const { id, quantity } = action.payload;
            const updatedState = state.map(item => {
                if (item.id === id) {
                    return { ...item, quantity: quantity };
                }
                return item;
            });
            return updatedState;
        },

    },
});

export const { addCart, removeCart, updateCart } = cartSlice.actions;
export default cartSlice.reducer;