import {StyleSheet} from 'react-native'
import {colors} from "../../theme";

export const styles = StyleSheet.create({
        container: {
            backgroundColor: 'gray',
            flex: 1
        },
        content: {
            flex: 1,
        },
        header: {
            backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20
        },
        textNameAndPhoneCustomer: {
            flexDirection: 'row',
            marginBottom: 5,
            alignItems: 'center'
        },
        textName: {
            marginRight: 15,
            fontSize: 16
        },
        separatorVertical: {
            height: '80%',
            width: 1,
            backgroundColor: 'gray',
        },
        textPhone: {
            marginLeft: 15,
            fontSize: 16
        },
        textInfo: {
            marginLeft: 5,
            marginRight: 5
        },
        textAddress: {
            marginLeft: 10,
            fontSize: 15,
            color: 'gray'
        },
        iconLocation: {
            marginRight: 15
        },
        payments: {
            backgroundColor: 'white',
            padding: 15,
            marginTop: 8
        },
        methodPayment: {
            backgroundColor: 'rgba(5, 0, 245, 0.1)',
            height: 60,
            marginTop: 10,
            borderWidth: 0.8,
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly'
        },
        nameMethodPayment: {
            minWidth: 180
        },
        img: {
            width: 40,
            height: 40,
            marginHorizontal: 10
        },
        footer: {
            padding: 20,
            backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        btOrder: {
            backgroundColor: colors.bgButtonRed,
            borderWidth: 0.8,
            borderRadius: 5,
            paddingVertical: 5,
            paddingHorizontal: 10,
            marginRight: -10
        },
        orderValue: {
            backgroundColor: 'white',
            padding: 20,
            marginTop: 8,
            flexDirection: "column"
        },
        infoOrderValue: {
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 8
        },
        separatorHorizontal: {
            width: '100%',
            height: 1,
            backgroundColor: 'gray',
            marginVertical: 5
        },
        footerOrderValue: {
            backgroundColor: 'rgba(217, 217, 217, 1)',
            paddingHorizontal: 20,
            paddingVertical: 10
        },
        orderItems: {

            backgroundColor: 'white',
            padding: 15,
            marginTop: 8,
            flexDirection: 'column',
            justifyContent: 'space-between'

        },
        orderItem: {

            backgroundColor: 'rgba(230, 236, 243, 1)',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            borderRadius: 10,
            padding: 15,
            marginBottom: 20

        },
        imgProduct: {
            backgroundColor: 'white',
            width: 65,
            height: 65,
            marginRight: 5,
            borderRadius: 5
        },
        infoOrderItem: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 8
        }
    }
)