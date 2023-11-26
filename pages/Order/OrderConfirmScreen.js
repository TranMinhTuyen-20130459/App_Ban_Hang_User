import {styles} from "./OrderConfirm.styles";
import {View, Text, TouchableOpacity, Image, ScrollView} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from "react";
import {colors} from "../../theme";
import {formatMoney, WINDOW_WIDTH} from "../../utils/Utils";
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";


const orderItems = [
    {
        id_product: 1,
        name_product: 'Giày Nike Pegasus 40',
        size: '41',
        color: '',
        price: 500000,
        discountPrice: 390000,
        quantity: 10,
        path_img: 'https://kingshoes.vn/data/upload/media/fy5943-giay-adidas-run-falcon-2.0-running-chinh-hang-gia-tot-den-king-shoes-1.jpg'
    },
    {
        id_product: 2,
        name_product: 'Giày Adidas Runner',
        size: '44',
        color: '',
        price: 100000,
        discountPrice: 410000,
        quantity: 1000,
        path_img: 'https://kingshoes.vn/data/upload/media/SNEAKER-315122-111-AIR-FORCE-1-07-NIKE-KINGSHOES.VN-TPHCM-TANBINH-17-logo-1551924204-.jpg'
    },
    {
        id_product: 3,
        name_product: 'Giày Jordan CR7',
        size: '39',
        color: '',
        price: 2500000,
        discountPrice: 999000,
        quantity: 3,
        path_img: 'https://kingshoes.vn/data/upload/media/fn7439-133-giay-nike-air-force-1-07-chinh-hang-gia-tot-den-king-shoes-13.jpeg'
    },
    {
        id_product: 1,
        name_product: 'Giày Nike Pegasus 40',
        size: '41',
        color: '',
        price: 500000,
        discountPrice: 390000,
        quantity: 10,
        path_img: 'https://kingshoes.vn/data/upload/media/fy5943-giay-adidas-run-falcon-2.0-running-chinh-hang-gia-tot-den-king-shoes-1.jpg'
    },
    {
        id_product: 2,
        name_product: 'Giày Adidas Runner',
        size: '44',
        color: '',
        price: 100000,
        discountPrice: 410000,
        quantity: 1000,
        path_img: 'https://kingshoes.vn/data/upload/media/SNEAKER-315122-111-AIR-FORCE-1-07-NIKE-KINGSHOES.VN-TPHCM-TANBINH-17-logo-1551924204-.jpg'
    },
    {
        id_product: 3,
        name_product: 'Giày Jordan CR7',
        size: '39',
        color: '',
        price: 2500000,
        discountPrice: 999000,
        quantity: 3,
        path_img: 'https://kingshoes.vn/data/upload/media/fn7439-133-giay-nike-air-force-1-07-chinh-hang-gia-tot-den-king-shoes-13.jpeg'
    }
]


export default function OrderConfirmScreen() {


    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.content}>
                    <AddressInfo></AddressInfo>
                    <OrderItems></OrderItems>
                    <Payments></Payments>
                    <OrderValue></OrderValue>
                </View>
            </ScrollView>
            <Footer></Footer>
        </View>
    );
}

function AddressInfo() {

    const navigation = useNavigation();

    // Sử dụng useSelector để lấy trạng thái của thông tin địa chỉ giao hàng
    const orderAddress = useSelector(state => state.address_order);

    const Information = () => (
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
                            {orderAddress.to_address.address},
                            {orderAddress.to_address.ward_name},
                            {orderAddress.to_address.district_name},
                            {orderAddress.to_address.province_name}
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
    );


    const Notification = (<Text>Không có địa chỉ đặt hàng</Text>)

    return (
        <>
            <View>
                <TouchableOpacity
                    style={styles.header}
                    onPress={() => navigation.navigate('OrderAddress')}>
                    {orderAddress ? <Information/> : <Notification/>}
                </TouchableOpacity>
            </View>
        </>
    )
}


function OrderItems() {

    return (
        <View style={styles.orderItems}>
            {
                orderItems.map((value, index) => (
                    <OrderItem key={index} data={value}></OrderItem>
                ))
            }
        </View>
    );
}

function OrderItem({data}) {
    return (
        <View style={styles.orderItem}>
            <View>
                <Image src={data.path_img} style={styles.imgProduct}></Image>
            </View>
            <View style={{maxHeight: 80}}>
                <View style={styles.infoOrderItem}>
                    <Text style={{minWidth: 150}}>{data.name_product}</Text>
                    <Text>x {data.quantity}</Text>
                </View>
                <View style={styles.infoOrderItem}>
                    <Text style={{minWidth: 150}}>Size: {data.size}</Text>
                    <Text style={{maxWidth: 80}}>{formatMoney(data.price)}</Text>
                </View>
            </View>
        </View>
    )
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

function OrderValue() {

    return (
        <View>
            <View style={styles.orderValue}>
                <View>
                    <View style={styles.infoOrderValue}>
                        <Text style={{fontSize: 15}}>Tạm tính</Text>
                        <Text style={{fontSize: 15}}>9.700.000 đ</Text>
                    </View>
                    <View style={styles.infoOrderValue}>
                        <Text style={{fontSize: 15}}>Phí vận chuyển</Text>
                        <Text style={{fontSize: 15}}>100.000 đ</Text>
                    </View>
                    <View style={styles.separatorHorizontal}></View>
                    <View style={styles.infoOrderValue}>
                        <Text style={{fontWeight: 'bold', fontSize: 16}}>Tổng tiền</Text>
                        <Text style={{fontWeight: 'bold', fontSize: 16}}>9.800.000 đ</Text>
                    </View>
                </View>
            </View>
            <View style={styles.footerOrderValue}>
                <Text>Bằng việc tiến hành đặt mua, bạn đồng ý với</Text>
                <Text style={{color: colors.blueRoot}}>Điều Kiện Giao Dịch Chung</Text>
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

