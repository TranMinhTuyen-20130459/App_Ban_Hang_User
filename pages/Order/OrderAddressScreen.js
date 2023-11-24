import {KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import {styles} from "./OrderAddress.styles";
import {useState} from "react";

export default function OrderAddressScreen() {

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{flex: 1}}>
            <View style={styles.container}>
                <View style={styles.content}>
                    <MainComponent/>
                </View>
                <Footer/>
            </View>
        </KeyboardAvoidingView>
    );
}

function MainComponent() {

    const [isOpenDropDownCity, setIsOpenDropDownCity] = useState(false);
    const [isOpenDropDownDistrict, setIsOpenDropDownDistrict] = useState(false);
    const [isOpenDropDownWard, setIsOpenDropDownWard] = useState(false);

    const [selectedCity, setSelectedCity] = useState(null);
    const [selectedDistrict, setSelectedDistrict] = useState(null);
    const [selectedWard, setSelectedWard] = useState(null);

    const cityData = [
        {label: 'Hà Nội', value: 'hanoi'},
        {label: 'Hồ Chí Minh', value: 'hochiminh'},
        {label: 'Đà Nẵng', value: 'danang'},
        {label: 'Hà Nội', value: 'hanoi1'},
        {label: 'Hồ Chí Minh', value: 'hochiminh1'},
        {label: 'Đà Nẵng', value: 'danang1'},
        {label: 'Hà Nội', value: 'hanoi2'},
        {label: 'Hồ Chí Minh', value: 'hochiminh2'},
        {label: 'Đà Nẵng', value: 'danang2'},
        {label: 'Hà Nội', value: 'hanoi3'},
        {label: 'Hồ Chí Minh', value: 'hochiminh3'},
        {label: 'Đà Nẵng', value: 'danang3'},
        {label: 'Hà Nội', value: 'hanoi4'},
        {label: 'Hồ Chí Minh', value: 'hochiminh4'},
        {label: 'Đà Nẵng', value: 'danang4'},
        {label: 'Hà Nội', value: 'hanoi5'},
        {label: 'Hồ Chí Minh', value: 'hochiminh5'},
        {label: 'Đà Nẵng', value: 'danang5'},
    ];


    return (
        <View style={styles.mainContent}>
            <View style={{marginBottom: 10}}>
                <Text style={{fontSize: 16}}>Nhập địa chỉ mới</Text>
            </View>

            <TextInputComponent/>

            <View style={styles.view_contain_text}>
                <Text style={styles.fontSizeText}>Tỉnh/ Thành phố</Text>
            </View>
            <View>
                <DropDownPicker
                    placeholder='Chọn Tỉnh/Thành Phố'
                    open={isOpenDropDownCity}
                    setOpen={(value) => {
                        console.log(value)
                        setIsOpenDropDownCity(value)
                        setIsOpenDropDownDistrict(false)
                        setSelectedWard(false)
                    }}
                    items={cityData}
                    value={selectedCity}
                    setValue={(value) => setSelectedCity(value)}
                    style={styles.drop_down}
                />
                {/*<Text style={{color: colors.redHeart, fontSize: 20}}>Giá trị đã*/}
                {/*    chọn: {selectedCity == null ? 'null' : selectedCity}</Text>*/}
            </View>
            <View style={styles.view_contain_text}>
                <Text style={styles.fontSizeText}>Quận/ Huyện</Text>
            </View>
            <View>
                {isOpenDropDownCity === false && <DropDownPicker
                    placeholder='Chọn Quận/Huyện'
                    open={isOpenDropDownDistrict}
                    setOpen={(value) => {
                        console.log(value)
                        setIsOpenDropDownDistrict(value)
                        setIsOpenDropDownWard(false)
                    }}
                    items={cityData}
                    value={selectedDistrict}
                    setValue={(value) => setSelectedDistrict(value)}
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
                    value={selectedWard}
                    setValue={(value) => setSelectedWard(value)}
                    style={styles.drop_down}
                />
                }
            </View>
            <View style={styles.view_contain_text}>
                <Text style={styles.fontSizeText}>Địa chỉ nhận hàng</Text>
            </View>
            <View style={styles.view_contain_text_input}>
                <TextInput placeholder="Tòa nhà, số nhà, tên đường"/>
            </View>
        </View>
    );
}

function TextInputComponent() {

    return (
        <View>
            <View style={[styles.label_name_customer, styles.view_contain_text]}>
                <Text style={styles.fontSizeText}>Tên người nhận</Text>
                <Text style={[styles.fontSizeText, {color: 'gray'}]}>0/50</Text>
            </View>
            <View style={styles.view_contain_text_input}>
                <TextInput placeholder="Nhập Họ Tên"/>
            </View>
            <View style={styles.view_contain_text}>
                <Text style={styles.fontSizeText}>Số điện thoại</Text>
            </View>
            <View style={styles.view_contain_text_input}>
                <TextInput keyboardType="numeric" placeholder="Nhập Số điện thoại"/>
            </View>
        </View>
    );
}

function Footer() {

    return (
        <View style={styles.footer}>
            <TouchableOpacity style={styles.btOrder}>
                <Text style={[{fontSize: 16}, styles.text_in_button]}>Xác Nhận</Text>
            </TouchableOpacity>
        </View>
    );
}