import {View, Text, TouchableOpacity, StatusBar, StyleSheet, Modal} from 'react-native'
import React, {useEffect, useState} from 'react'
import {useIsFocused, useNavigation} from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {WINDOW_WIDTH, formatMoney} from '../assets/utils';
import CheckBox from 'react-native-check-box';
import {colors} from '../theme';
import CartItemsList from '../components/CartItemsList';

export default function CartScreen() {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    useEffect(() => {
        if (isFocused) {
            StatusBar.setBarStyle('light-content');
        } else {
            StatusBar.setBarStyle('dark-content');
        }
    }, [isFocused]);

    const [cartItems, setCartItems] = useState([
        {
            id: '1',
            title: 'Apple iPhone 14 Pro 128BG Bạc',
            price: 10000000,
            discountPrice: 9000000,
            quantity: 2,
            isChecked: false,
        },
        {
            id: '2',
            title: 'Áp Polo nam KokaFaschion vải Contton cá sấu cao cấp xuất xịn xuất khẩu',
            price: 25000,
            discountPrice: 200000,
            quantity: 1,
            isChecked: false,
        },
        {
            id: '3',
            title: 'Sản phẩm 3',
            price: 50,
            discountPrice: 45,
            quantity: 1,
            isChecked: false,
        },
        {
            id: '4',
            title: 'Sản phẩm 4',
            price: 50,
            discountPrice: 45,
            quantity: 1,
            isChecked: false,
        },
        {
            id: '5',
            title: 'Sản phẩm 5',
            price: 50,
            discountPrice: 45,
            quantity: 1,
            isChecked: false,
        }
        // Thêm các sản phẩm khác vào đây
    ]);
    const [checkAll, setCheckAll] = useState(false)
    const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
    const [itemToDeleteId, setItemToDeleteId] = useState(null);
    const [titleModel, setTitleModel] = useState("");
    const [itemToDeleteAll, setItemToDeleteAll] = useState(null);

    const [totalPrice, setTotalPrice] = useState(calculateTotalPrice());
    const [totalSelectedQuantity, setTotalSelectedQuantity] = useState(calculateTotalQuantity());

    useEffect(() => {
        setTotalPrice(calculateTotalPrice());
        setTotalSelectedQuantity(calculateTotalQuantity());
    }, [cartItems]);

    const toggleItemSelection = (itemId) => {
        const updatedCartItems = cartItems.map((item) => {
            if (item.id === itemId) {
                return {
                    ...item,
                    isChecked: !item.isChecked,
                };
            }
            return item;
        });
        setCartItems(updatedCartItems);
        // Cập nhật trạng thái của checkbox "Chọn tất cả"
        const isAllItemsChecked = updatedCartItems.every((item) => item.isChecked);
        setCheckAll(isAllItemsChecked);
    };

    const deleteAllItems = () => {
        setTitleModel("Bạn có muốn xóa toàn bộ sản phẩm")
        setItemToDeleteAll(1)
        setDeleteModalVisible(true);
    }
    const toggleCheckAll = () => {
        const newCheckAllState = !checkAll;
        setCheckAll(newCheckAllState);
        // Cập nhật trạng thái của tất cả các checkbox item
        const updatedCartItems = cartItems.map((item) => ({
            ...item,
            isChecked: newCheckAllState,
        }));
        setCartItems(updatedCartItems);
    };

    const increaseItemQuantity = (itemId) => {
        const updatedCartItems = cartItems.map((item) => {
            if (item.id === itemId) {
                return {
                    ...item,
                    quantity: item.quantity + 1,
                };
            }
            return item;
        });
        setCartItems(updatedCartItems);
    };

    const decreaseItemQuantity = (itemId) => {
        const updatedCartItems = cartItems.map((item) => {
            if (item.id === itemId && item.quantity > 1) {
                return {
                    ...item,
                    quantity: item.quantity - 1,
                };
            }
            return item;
        });
        setCartItems(updatedCartItems);
    };

    const deleteItem = (itemId) => {
        const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
        setCartItems(updatedCartItems);
        setItemToDeleteId(null)
    };
    const deleteAllItem = () => {
        setCartItems([])
        setItemToDeleteAll(null)
    }

    // Hàm hiển thị modal xác nhận xóa
    const showDeleteModal = (itemId) => {
        setTitleModel("Bạn có muốn xóa sản phẩm đang chọn")
        setItemToDeleteId(itemId);
        setDeleteModalVisible(true);
    };

    // Hàm ẩn modal xác nhận xóa
    const hideDeleteModal = () => {
        setDeleteModalVisible(false);
        setItemToDeleteId(null)
        setItemToDeleteAll(null)
    };

    // Hàm xác nhận xóa mặt hàng
    const confirmDeleteItem = () => {
        if (itemToDeleteAll) {
            deleteAllItem()
            hideDeleteModal();
        }
        if (itemToDeleteId) {
            deleteItem(itemToDeleteId);
            hideDeleteModal();
        }
    };

    function calculateTotalPrice() {
        let totalPrice = 0;
        for (const item of cartItems) {
            if (item.isChecked) {
                // Nếu sản phẩm đã được chọn, thì cộng giá tiền vào tổng
                totalPrice += item.discountPrice * item.quantity;
            }
        }
        return totalPrice;
    };

    function calculateTotalQuantity() {
        let totalQuantity = 0;
        for (const item of cartItems) {
            if (item.isChecked) {
                totalQuantity += 1;
            }
        }
        return totalQuantity;
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Setting')}
                    style={styles.containerAddress}
                >
                    <Ionicons name="location" size={18} color='#0a74e4'></Ionicons>
                    <Text numberOfLines={1} style={styles.textAddress}>Xã Quảng Ngạn, Huyện Quảng Điền, Thừa Thiên
                        Huế</Text>
                    <Ionicons name="chevron-forward" size={18} color={colors.grey}></Ionicons>
                </TouchableOpacity>
                <View style={styles.checkAll}>
                    <View style={{flexDirection: 'row'}}>
                        <CheckBox
                            isChecked={checkAll}
                            onClick={() => toggleCheckAll()}
                            checkBoxColor={colors.grey}
                            checkedCheckBoxColor={colors.blueRoot}
                        ></CheckBox>
                        <Text style={{marginLeft: 12}}>{`Tất cả (${cartItems.length} sản phẩm)`}</Text>
                    </View>

                    <TouchableOpacity
                        onPress={() => deleteAllItems()}
                    >
                        <Ionicons name="trash-outline" size={22} color={colors.grey}></Ionicons>
                    </TouchableOpacity>
                </View>
            </View>
            <CartItemsList
                data={cartItems}
                showCheckBox={true}
                showQuantity={true}
                toggleItemSelection={toggleItemSelection}
                deleteAllItems={deleteAllItems}
                increaseItemQuantity={increaseItemQuantity}
                decreaseItemQuantity={decreaseItemQuantity}
                showDeleteModal={showDeleteModal}
            />
            <View style={styles.footer}>
                <View style={{flexDirection: 'column', padding: 16}}>
                    <Text style={{fontSize: 14}}>Tổng cộng</Text>
                    <Text style={{fontSize: 22, color: colors.redPrice, fontWeight: 600, marginTop: 4}}>
                        {
                            !totalPrice ? (
                                    <Text style={{fontSize: 14, color: colors.redPrice, fontWeight: 400}}>Vui lòng chọn sản
                                        phẩm</Text>)
                                : formatMoney(totalPrice)
                        }
                    </Text>
                </View>
                <View style={{padding: 16}}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: colors.bgButtonRed,
                            paddingHorizontal: 18,
                            paddingVertical: 10,
                            borderRadius: 4
                        }}
                        onPress={() => navigation.navigate('OrderConfirm')}
                    >
                        <Text style={{color: "#fff", fontSize: 18}}>Mua hàng ({totalSelectedQuantity})</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Modal
                visible={isDeleteModalVisible}
                transparent={true}
                animationType="fade"
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>
                            {titleModel}
                        </Text>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            textAlign: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <TouchableOpacity
                                onPress={hideDeleteModal}
                                style={styles.modalButton}
                            >
                                <Text style={styles.modalButtonText}>Không</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={confirmDeleteItem}
                                style={styles.modalButton}
                            >
                                <Text style={styles.modalButtonText}>Xóa</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        position: 'relative',
    },
    upperHeaderPlaceholder: {
        // height: '80%',
        marginTop: 102,
    },
    upperFooterPlaceholder: {
        height: 80,
        backgroundColor: 'red'
    },

    header: {
        position: 'absolute',
        zIndex: 10,
        flex: 1,

    },
    containerAddress: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 12,
        paddingHorizontal: 12,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        width: WINDOW_WIDTH,

    },
    textAddress: {
        color: colors.grey,
        paddingHorizontal: 6,
        flexWrap: 'wrap',
        width: '90%'
    },
    checkAll: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12,
        backgroundColor: '#fff',
        marginVertical: 8,
        alignItems: 'center',
        alignContent: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        borderRadius: 14,
        width: 300,
        overflow: 'hidden',
    },
    modalText: {
        fontSize: 16,
        marginBottom: 10,
        paddingTop: 20,
        paddingBottom: 10,
        paddingHorizontal: 20,
        textAlign: 'center'
    },
    modalButton: {
        padding: 12,
        width: '50%',
        borderColor: '#e5e5e5',
        borderWidth: 1,
    },
    modalButtonText: {
        color: colors.blueRoot,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    footer: {
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0,
        height: 80,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }


});