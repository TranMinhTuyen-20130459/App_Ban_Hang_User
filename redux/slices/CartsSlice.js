import { createSlice } from "@reduxjs/toolkit";
import { clearCart, removeFromCart, updateCartItemQuantity } from "../../utils/localStorage";
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
                quantity: quantity,
                isChecked: false
            }

            state.push(newCartItem);
        },
        removeCart: (state, action) => {
            const id = action.payload;
            // gọi xuống storage xóa sản phẩm
            removeFromCart(id)
            return state.filter((item) => item.id !== id);
        },
        updateCart: (state, action) => {
            const { id, quantity } = action.payload;
            const updatedState = state.map(item => {
                if (item.id === id) {
                    return { ...item, quantity: quantity };
                }
                return item;
            });
            // Gọi hàm cập nhật số lượng sản phẩm trong giỏ hàng và lưu vào AsyncStorage
            updateCartItemQuantity(id, quantity);
            return updatedState;
        },
        removeAllCart: () => {
            // gọi xuống storage xóa hết sản phẩm
            clearCart()
            return [];
        }

    },
});

export const { addCart, addAll, removeCart, updateCart, removeAllCart } = cartSlice.actions;
export default cartSlice.reducer;