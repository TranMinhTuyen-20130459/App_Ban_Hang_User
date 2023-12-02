import { styles } from "./OrderConfirm.styles";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useState } from "react";
import { colors } from "../../theme";
import { formatMoney, WINDOW_WIDTH } from "../../utils/Utils";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { method_payments } from "../../redux/slices/PaymentSlice";
import { setSelectedPayment } from "../../redux/slices/PaymentSlice";

export default function OrderConfirmScreen() {
    const handleClickBtOrder = () => {

    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.content}>
                    <AddressInfoComponent></AddressInfoComponent>
                    <OrderItemsComponent></OrderItemsComponent>
                    <PaymentsComponent></PaymentsComponent>
                    <OrderValueComponent></OrderValueComponent>
                </View>
            </ScrollView>
            <FooterComponent handleClickBtOrder={handleClickBtOrder}></FooterComponent>
        </View>
    );
}

function AddressInfoComponent() {

    const navigation = useNavigation();

    // Sử dụng useSelector để lấy trạng thái của thông tin địa chỉ giao hàng
    const orderAddress = useSelector(state => state.address_order);

    const InformationComponent = () => (
        orderAddress && orderAddress.to_address && (
            <View style={styles.textInfo}>
                <View style={{
                    minWidth: 0.88 * WINDOW_WIDTH
                }}>
                    <View style={styles.textNameAndPhoneCustomer}>
                        <Ionicons name="location" size={25} color='#0a74e4' style={styles.iconLocation}></Ionicons>
                        <Text numberOfLines={1} style={styles.textName}>
                            {orderAddress.name_customer}
                        </Text>
                        <View style={styles.separatorVertical}></View>
                        <Text numberOfLines={1} style={styles.textPhone}>
                            {orderAddress.phone_number}
                        </Text>
                    </View>
                    <View>
                        <Text numberOfLines={2} style={styles.textAddress}>
                            {orderAddress.to_address.address}, {orderAddress.to_address.ward_name}
                            , {orderAddress.to_address.district_name}, {orderAddress.to_address.province_name}
                        </Text>
                    </View>
                </View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingHorizontal: 0.001 * WINDOW_WIDTH
                }}>
                    <Ionicons name="chevron-forward" size={25} color={colors.grey}></Ionicons>
                </View>
            </View>
        )
    )


    const NotificationComponent = () => (
        <View style={
            {
                flexDirection: 'row',
                flex: 1,
                paddingVertical: 15,
                paddingHorizontal: 10,
            }
        }>
            <Text style={{ fontSize: 16 }}>Bạn hãy chọn địa chỉ giao hàng</Text>
            <View style={{ flex: 5 }} />
            <Ionicons name="chevron-forward" size={25} color={colors.grey}></Ionicons>
        </View>
    )

    return (
        <>
            <View>
                <TouchableOpacity
                    style={styles.header}
                    onPress={() => navigation.navigate('OrderAddress')}>

                    {orderAddress ? <InformationComponent /> : <NotificationComponent />}

                </TouchableOpacity>
            </View>
        </>
    );
}


function OrderItemsComponent() {

    const orderItems = useSelector(state => state.carts)

    return (
        <View style={styles.orderItems}>
            {
                orderItems?.length > 0 && orderItems.map((value, index) => (
                    <OrderItem key={index} data={value}></OrderItem>
                ))
            }
        </View>
    );
}

function OrderItem({ data }) {
    return (
        <View style={styles.orderItem}>
            <View>
                <Image src={data.pathImg} style={styles.imgProduct}></Image>
            </View>
            <View style={{ maxHeight: 80 }}>
                <View style={styles.infoOrderItem}>
                    <Text style={{ minWidth: 150 }}>{data.title}</Text>
                    <Text>x {data.quantity}</Text>
                </View>
                <View style={styles.infoOrderItem}>
                    <Text style={{ minWidth: 150 }}>Size: {data.size}</Text>
                    <Text style={{ maxWidth: 80 }}>{formatMoney(data.price)}</Text>
                </View>
            </View>
        </View>
    )
}

function PaymentsComponent() {

    const dispatch = useDispatch()
    const selectedPayment = useSelector(state => state.payment)

    const handlePaymentClick = (payment_method) => {
        dispatch(setSelectedPayment(payment_method))
    }

    return (
        <View style={styles.payments}>
            <Text style={{ fontSize: 16 }}>Phương thức thanh toán</Text>

            <CashPaymentComponent
                selectedPayment={selectedPayment}
                handlePaymentClick={handlePaymentClick}
            />

            <ZaloPayComponent
                selectedPayment={selectedPayment}
                handlePaymentClick={handlePaymentClick}
            />
        </View>
    );
}

function CashPaymentComponent({ selectedPayment, handlePaymentClick }) {

    return (
        <TouchableOpacity
            style={[styles.methodPayment,
            selectedPayment === method_payments.CASH && { backgroundColor: 'rgba(5, 0, 245, 0.1)' }]}
            onPress={() => handlePaymentClick(method_payments.CASH)}>
            <Ionicons
                name="stop-circle-outline"
                size={30}
                color='#0a74e4'
                style={{ opacity: selectedPayment === method_payments.CASH ? 1 : 0 }}
            >
            </Ionicons>
            <Image source={require('./images/money.png')} style={styles.img}></Image>
            <Text style={styles.nameMethodPayment}>Thanh toán tiền mặt</Text>
        </TouchableOpacity>
    )
}

function ZaloPayComponent({ selectedPayment, handlePaymentClick }) {

    return (
        <TouchableOpacity
            style={[styles.methodPayment,
            selectedPayment === method_payments.ZaloPay && { backgroundColor: 'rgba(5, 0, 245, 0.1)' }]}
            onPress={() => handlePaymentClick(method_payments.ZaloPay)}>
            <Ionicons
                name="stop-circle-outline"
                size={30}
                color='#0a74e4'
                style={{ opacity: selectedPayment === method_payments.ZaloPay ? 1 : 0 }}
            >
            </Ionicons>
            <Image source={require('./images/ZaloPay.png')} style={styles.img}></Image>
            <Text style={styles.nameMethodPayment}>Ví ZaloPay</Text>
        </TouchableOpacity>
    )
}

function OrderValueComponent() {

    return (
        <View>
            <View style={styles.orderValue}>
                <View>
                    <View style={styles.infoOrderValue}>
                        <Text style={{ fontSize: 15 }}>Tạm tính</Text>
                        <Text style={{ fontSize: 15 }}>9.700.000 đ</Text>
                    </View>
                    <View style={styles.infoOrderValue}>
                        <Text style={{ fontSize: 15 }}>Phí vận chuyển</Text>
                        <Text style={{ fontSize: 15 }}>100.000 đ</Text>
                    </View>
                    <View style={styles.separatorHorizontal}></View>
                    <View style={styles.infoOrderValue}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Tổng tiền</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>9.800.000 đ</Text>
                    </View>
                </View>
            </View>
            <View style={styles.footerOrderValue}>
                <Text>Bằng việc tiến hành đặt mua, bạn đồng ý với</Text>
                <Text style={{ color: colors.blueRoot }}>Điều Kiện Giao Dịch Chung</Text>
            </View>
        </View>
    );
}

function FooterComponent({ handleClickBtOrder }) {

    return (
        <View style={styles.footer}>
            <View>
                <Text style={{ fontSize: 17, marginBottom: 10 }}>Tổng tiền</Text>
                <Text style={{ fontSize: 18, color: 'red', fontWeight: 'bold' }}>9.800.000 đ</Text>
            </View>
            <TouchableOpacity style={styles.btOrder}>
                <Text style={{ fontSize: 18, color: 'white', padding: 5 }}>Đặt Hàng</Text>
            </TouchableOpacity>
        </View>
    );
}

