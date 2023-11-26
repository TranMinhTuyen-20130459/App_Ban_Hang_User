import {KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import {styles} from "./OrderAddress.styles";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {setAddress} from "../../redux/slices/OrderAddressSlice"
import {colors} from "../../theme";
import {getLabelFromValue} from "./util/Utils";
import {useNavigation} from "@react-navigation/native";
import {
    returnValueErrorOfNameCustomer,
    returnValueErrorOfPhoneNumber,
    returnValueErrorAddressDetail
} from "./util/CheckValid"

export default function OrderAddressScreen() {

    const dispatch = useDispatch();
    const navigation = useNavigation();

    const [name_customer, setNameCustomer] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [address_detail, setAddressDetail] = useState('');

    const [province_name, setProvinceName] = useState('');
    const [district_name, setDistrictName] = useState('');
    const [ward_name, setWardName] = useState('');

    const [province_id, setProvinceId] = useState('');
    const [district_id, setDistrictId] = useState('');
    const [ward_id, setWardId] = useState('');

    const [isOpenDropDownCity, setIsOpenDropDownCity] = useState(false);
    const [isOpenDropDownDistrict, setIsOpenDropDownDistrict] = useState(false);
    const [isOpenDropDownWard, setIsOpenDropDownWard] = useState(false);

    const [errorNameCustomer, setErrorNameCustomer] = useState(null)
    const [errorPhoneNumber, setErrorPhoneNumber] = useState(null)
    const [errorAddressDetail, setErrorAddressDetail] = useState(null);

    const handleClickBtConfirm = () => {

        // Nếu Họ Tên hợp lệ thì errorNameCustomer được cập nhật giá trị null
        const valueErrorOfNameCustomer = returnValueErrorOfNameCustomer(name_customer);
        setErrorNameCustomer(valueErrorOfNameCustomer);

        // Nếu Số Điện Thoại hợp lệ thì errorPhoneNumber được cập nhật giá trị null
        const valueErrorOfPhoneNumber = returnValueErrorOfPhoneNumber(phone_number);
        setErrorPhoneNumber(valueErrorOfPhoneNumber)

        // Nếu Địa chỉ nhận hàng hợp lệ thì errorAddressDetail được cập nhật giá trị null
        const valueErrorAddressDetail = returnValueErrorAddressDetail(address_detail);
        setErrorAddressDetail(valueErrorAddressDetail)

        // TH: Form không hợp lệ
        if (valueErrorOfNameCustomer != null
            || valueErrorOfPhoneNumber != null
            || valueErrorAddressDetail != null) return;

        // Cập nhật địa chỉ giao hàng mới
        dispatch(setAddress(orderAddress))

        navigation.navigate('OrderConfirm')

    };

    const orderAddress = {
        name_customer: name_customer,
        phone_number: phone_number,
        to_address: {
            address: address_detail,
            ward_name: ward_name,
            district_name: district_name,
            province_name: province_name,
            ward_id: ward_id,
            district_id: district_id,
            province_id: province_id,
        }
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{flex: 1}}>
            <View style={styles.container}>
                <View style={styles.content}>

                    {/*<View style={styles.label_name_customer}>*/}
                    {/*    <Text>{name_customer}</Text>*/}
                    {/*    <Text>{phone_number}</Text>*/}
                    {/*    <Text>{address_detail}</Text>*/}
                    {/*</View>*/}

                    {/*<View style={styles.label_name_customer}>*/}
                    {/*    <Text>{province_name}</Text>*/}
                    {/*    <Text>{district_name}</Text>*/}
                    {/*    <Text>{ward_name}</Text>*/}
                    {/*</View>*/}

                    <MainComponent
                        setNameCustomer={setNameCustomer}
                        setPhoneNumber={setPhoneNumber}
                        setAddressDetail={setAddressDetail}

                        setProvinceName={setProvinceName}
                        setProvinceId={setProvinceId}
                        province_id={province_id}

                        setDistrictName={setDistrictName}
                        setDistrictId={setDistrictId}
                        district_id={district_id}

                        setWardName={setWardName}
                        setWardId={setWardId}
                        ward_id={ward_id}

                        isOpenDropDownCity={isOpenDropDownCity}
                        isOpenDropDownDistrict={isOpenDropDownDistrict}
                        isOpenDropDownWard={isOpenDropDownWard}

                        setIsOpenDropDownCity={setIsOpenDropDownCity}
                        setIsOpenDropDownDistrict={setIsOpenDropDownDistrict}
                        setIsOpenDropDownWard={setIsOpenDropDownWard}

                        errorNameCustomer={errorNameCustomer}
                        errorPhoneNumber={errorPhoneNumber}

                        setErrorNameCustomer={setErrorNameCustomer}
                        setErrorPhoneNumber={setErrorPhoneNumber}

                        errorAddressDetail={errorAddressDetail}
                        setErrorAddressDetail={setErrorAddressDetail}
                    />
                </View>
                <Footer handleClickBtConfirm={handleClickBtConfirm}/>
            </View>
        </KeyboardAvoidingView>
    );
}

function MainComponent(
    {
        setNameCustomer,
        setPhoneNumber,
        setAddressDetail,

        setProvinceName,
        setProvinceId,
        province_id,

        setDistrictName,
        setDistrictId,
        district_id,

        setWardName,
        setWardId,
        ward_id,

        isOpenDropDownCity,
        isOpenDropDownDistrict,
        isOpenDropDownWard,

        setIsOpenDropDownCity,
        setIsOpenDropDownDistrict,
        setIsOpenDropDownWard,

        errorNameCustomer,
        errorPhoneNumber,

        setErrorNameCustomer,
        setErrorPhoneNumber,

        errorAddressDetail,
        setErrorAddressDetail
    }) {

    const cityData = [
        {label: 'Hà Nội', value: '1'},
        {label: 'Hồ Chí Minh', value: '2'},
        {label: 'Đà Nẵng', value: '3'},
        {label: 'Hà Nội', value: '4'},
        {label: 'Hồ Chí Minh', value: '5'},
        {label: 'Đà Nẵng', value: '6'},
        {label: 'Hà Nội', value: '7'},
        {label: 'Hồ Chí Minh', value: '8'},
        {label: 'Đà Nẵng', value: '9'},
        {label: 'Hà Nội', value: '10'}
    ];

    return (
        <View style={styles.mainContent}>

            <View style={{marginBottom: 10}}>
                <Text style={{fontSize: 16}}>Nhập địa chỉ mới</Text>
            </View>

            {/* Component này chứa các ô text_input để người dùng nhập Họ,tên và Số điện thoại */}
            <TextInputComponent
                setNameCustomer={setNameCustomer}
                setPhoneNumber={setPhoneNumber}

                errorNameCustomer={errorNameCustomer}
                errorPhoneNumber={errorPhoneNumber}

                setErrorNameCustomer={setErrorNameCustomer}
                setErrorPhoneNumber={setErrorPhoneNumber}
            />

            <View style={styles.view_contain_text}>
                <Text style={styles.fontSizeText}>Tỉnh/ Thành phố</Text>
            </View>
            <View>
                <DropDownPicker
                    placeholder='Chọn Tỉnh/Thành Phố'

                    open={isOpenDropDownCity}

                    setOpen={(value) => {
                        console.log('DropDownCity: ' + value)
                        setIsOpenDropDownCity(value)
                    }}

                    items={cityData}

                    value={province_id}

                    setValue={(value) => setProvinceId(value)}

                    onChangeValue={() => {
                        const provinceName = getLabelFromValue(cityData, province_id);
                        setProvinceName(provinceName);
                        // console.log(provinceName);
                    }}

                    style={styles.drop_down}
                />

                {/*<Text style={{color: colors.redHeart, fontSize: 20}}>Giá trị đã*/}
                {/*    chọn: {province_id === '' ? 'null' : province_id}</Text>*/}

            </View>
            <View style={styles.view_contain_text}>
                <Text style={styles.fontSizeText}>Quận/ Huyện</Text>
            </View>
            <View>
                {isOpenDropDownCity === false && <DropDownPicker
                    placeholder='Chọn Quận/Huyện'

                    open={isOpenDropDownDistrict}

                    setOpen={(value) => {
                        console.log('DropDownDistrict: ' + value)
                        setIsOpenDropDownDistrict(value)
                    }}

                    items={cityData}

                    value={district_id}

                    setValue={(value) => setDistrictId(value)}

                    onChangeValue={
                        () => {
                            const districtName = getLabelFromValue(cityData, district_id)
                            setDistrictName(districtName)
                            // console.log(districtName)
                        }
                    }

                    style={styles.drop_down}
                />
                }
            </View>
            <View style={styles.view_contain_text}>
                <Text style={styles.fontSizeText}>Phường/ Xã</Text>
            </View>
            <View>
                {isOpenDropDownCity === false && isOpenDropDownDistrict === false && <DropDownPicker

                    placeholder='Chọn Phường/Xã'

                    open={isOpenDropDownWard}

                    setOpen={setIsOpenDropDownWard}

                    items={cityData}

                    value={ward_id}

                    setValue={(value) => setWardId(value)}

                    onChangeValue={() => {

                        const wardName = getLabelFromValue(cityData, ward_id)
                        setWardName(wardName)
                        // console.log(wardName)

                    }}

                    style={styles.drop_down}
                />
                }
            </View>
            <View style={styles.view_contain_text}>
                <Text style={styles.fontSizeText}>Địa chỉ nhận hàng</Text>
            </View>
            <View style={styles.view_contain_text_input}>
                <TextInput
                    placeholder="Tòa nhà, số nhà, tên đường"
                    onChangeText={(text) => {
                        setAddressDetail(text)
                        setErrorAddressDetail(null)
                    }}
                />
                {errorAddressDetail && <Text style={{color: 'red'}}>{errorAddressDetail}</Text>}
            </View>
        </View>
    );
}

function TextInputComponent(
    {
        setNameCustomer,
        setPhoneNumber,

        errorNameCustomer,
        errorPhoneNumber,

        setErrorNameCustomer,
        setErrorPhoneNumber
    }) {

    return (
        <View>
            <View style={[styles.label_name_customer, styles.view_contain_text]}>
                <Text style={styles.fontSizeText}>Tên người nhận</Text>
                <Text style={[styles.fontSizeText, {color: 'gray'}]}>0/50</Text>
            </View>
            <View style={styles.view_contain_text_input}>
                <TextInput placeholder="Nhập Họ Tên"
                           onChangeText={
                               (text) => {
                                   setNameCustomer(text)
                                   setErrorNameCustomer(null)
                               }
                           }
                />
            </View>
            {errorNameCustomer && <Text style={{color: 'red'}}>{errorNameCustomer}</Text>}
            <View style={styles.view_contain_text}>
                <Text style={styles.fontSizeText}>Số điện thoại</Text>
            </View>
            <View style={styles.view_contain_text_input}>
                <TextInput keyboardType="numeric"
                           placeholder="Nhập Số điện thoại"
                           onChangeText={
                               (text) => {
                                   setPhoneNumber(text)
                                   setErrorPhoneNumber(null)
                               }
                           }
                />
            </View>
            {errorPhoneNumber && <Text style={{color: 'red'}}>{errorPhoneNumber}</Text>}
        </View>
    );
}

function Footer({handleClickBtConfirm}) {

    return (
        <View style={styles.footer}>
            <TouchableOpacity style={styles.btConfirm} onPress={handleClickBtConfirm}>
                <Text style={[{fontSize: 16}, styles.text_in_button]}>Xác Nhận</Text>
            </TouchableOpacity>
        </View>
    );
}