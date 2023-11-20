import {StyleSheet} from 'react-native'
import {colors} from "../../theme";
import {WINDOW_WIDTH} from "../../assets/utils";

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
        separator: {
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
        }
    }
)