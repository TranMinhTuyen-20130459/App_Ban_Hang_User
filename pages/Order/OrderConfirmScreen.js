import {styles} from "./OrderConfirm.styles";
import {View, Text, TouchableOpacity, Image, Button} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from "react";
import {colors} from "../../theme";

export default function OrderConfirmScreen() {

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <AddressInfo></AddressInfo>
                <Payments></Payments>
            </View>
            <Footer></Footer>
        </View>
    );
}

function AddressInfo() {

    return (
        <View>
            <TouchableOpacity style={styles.header}>
                <View style={styles.textInfo}>
                    <View style={styles.textNameAndPhoneCustomer}>
                        <Ionicons name="location" size={25} color='#0a74e4' style={styles.iconLocation}></Ionicons>
                        <Text style={styles.textName}>Trần Minh Tuyên</Text>
                        <View style={styles.separator}></View>
                        <Text style={styles.textPhone}>0927042108</Text>
                    </View>
                    <Text style={styles.textAddress}>Cư xá A, đại học Nông Lâm, Phường Linh Trung, Quận Thủ Đức, Hồ Chí
                        Minh</Text>
                </View>
                <Ionicons name="chevron-forward" size={25}
                          color={colors.grey}>
                </Ionicons>
            </TouchableOpacity>
        </View>
    );
}

function OrderItems() {

    return ({});
}

function OrderItem() {
    return ({})
}

function Payments() {
    return (
        <View style={styles.payments}>
            <Text style={{fontSize: 16}}>Phương thức thanh toán</Text>
            <View style={styles.methodPayment}>
                <Ionicons name="stop-circle-outline" size={30} color='#0a74e4'></Ionicons>
                <Image source={require('./images/money.png')} style={styles.img}></Image>
                <Text style={styles.nameMethodPayment}>Thanh toán tiền mặt</Text>
            </View>
            <View style={styles.methodPayment}>
                <Ionicons name="stop-circle-outline" size={30} color='#0a74e4'></Ionicons>
                <Image source={require('./images/ZaloPay.png')} style={styles.img}></Image>
                <Text style={styles.nameMethodPayment}>Ví ZaloPay</Text>
            </View>
        </View>
    );
}

function Footer() {

    return (
        <View style={styles.footer}>
            <View>
                <Text style={{fontSize: 17, marginBottom: 10}}>Tổng tiền</Text>
                <Text style={{fontSize: 18, color: 'red', fontWeight: 'bold'}}>9.800.000 đ</Text>
            </View>
            <TouchableOpacity style={styles.btOrder}>
                <Text style={{fontSize: 18, color: 'white', padding: 5}}>Đặt Hàng</Text>
            </TouchableOpacity>
        </View>

    );
}

