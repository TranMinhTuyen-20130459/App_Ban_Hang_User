import AsyncStorage from '@react-native-async-storage/async-storage';

// Lưu thông tin giỏ hàng vào AsyncStorage
export const saveCartToAsyncStorage = async (cartData) => {
    try {
        const jsonCartData = JSON.stringify(cartData);
        await AsyncStorage.setItem('cart', jsonCartData);
        console.log('Giỏ hàng đã được lưu thành công');
    } catch (error) {
        console.error('Lỗi khi lưu giỏ hàng:', error);
    }
};

// Đọc thông tin giỏ hàng từ AsyncStorage
export const getCartFromAsyncStorage = async () => {
    try {
        const jsonCartData = await AsyncStorage.getItem('cart');
        return jsonCartData != null ? JSON.parse(jsonCartData) : null;
    } catch (error) {
        console.error('Lỗi khi đọc giỏ hàng:', error);
        return null;
    }
};

// Thêm một sản phẩm vào giỏ hàng và lưu vào AsyncStorage
export const addToCart = async (product) => {
    try {
        // Đọc thông tin giỏ hàng từ AsyncStorage
        const existingCart = await getCartFromAsyncStorage();

        // Nếu giỏ hàng đã tồn tại, thêm sản phẩm vào
        if (existingCart) {
            const updatedCart = [...existingCart, product];
            await saveCartToAsyncStorage(updatedCart);
            console.log('Sản phẩm đã được thêm vào giỏ hàng');
        } else {
            // Nếu giỏ hàng chưa tồn tại, tạo giỏ hàng mới và thêm sản phẩm vào
            const newCart = [product];
            await saveCartToAsyncStorage(newCart);
            console.log('Sản phẩm đã được thêm vào giỏ hàng');
        }
    } catch (error) {
        console.error('Lỗi khi thêm sản phẩm vào giỏ hàng:', error);
    }
};

// Xóa sản phẩm khỏi giỏ hàng và lưu vào AsyncStorage
export const removeFromCart = async (productId) => {
    try {
        // Đọc thông tin giỏ hàng từ AsyncStorage
        const existingCart = await getCartFromAsyncStorage();

        // Nếu giỏ hàng không tồn tại, không cần thực hiện gì cả
        if (!existingCart) {
            console.log('Giỏ hàng không tồn tại');
            return;
        }

        // Lọc ra các sản phẩm khác sản phẩm cần xóa
        const updatedCart = existingCart.filter(product => product.id !== productId);

        // Lưu giỏ hàng mới vào AsyncStorage
        await saveCartToAsyncStorage(updatedCart);
        console.log('Sản phẩm đã được xóa khỏi giỏ hàng');
    } catch (error) {
        console.error('Lỗi khi xóa sản phẩm khỏi giỏ hàng:', error);
    }
};

// Xóa tất cả sản phẩm khỏi giỏ hàng và lưu vào AsyncStorage
export const clearCart = async () => {
    try {
        // Xóa thông tin giỏ hàng từ AsyncStorage
        await AsyncStorage.removeItem('cart');
        console.log('Tất cả sản phẩm đã được xóa khỏi giỏ hàng');
    } catch (error) {
        console.error('Lỗi khi xóa giỏ hàng:', error);
    }
};

// Cập nhật số lượng của sản phẩm trong giỏ hàng và lưu vào AsyncStorage
export const updateCartItemQuantity = async (productId, newQuantity) => {
    try {
        // Đọc thông tin giỏ hàng từ AsyncStorage
        const existingCart = await getCartFromAsyncStorage();

        // Nếu giỏ hàng không tồn tại, không cần thực hiện gì cả
        if (!existingCart) {
            console.log('Giỏ hàng không tồn tại');
            return;
        }

        // Cập nhật số lượng cho sản phẩm cụ thể
        const updatedCart = existingCart.map(product => {
            if (product.id === productId) {
                return { ...product, quantity: newQuantity };
            }
            return product;
        });

        // Lưu giỏ hàng mới vào AsyncStorage
        await saveCartToAsyncStorage(updatedCart);
        console.log('Số lượng sản phẩm đã được cập nhật trong giỏ hàng');
    } catch (error) {
        console.error('Lỗi khi cập nhật số lượng sản phẩm trong giỏ hàng:', error);
    }
};
