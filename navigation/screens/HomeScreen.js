import React, {useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import CartIcon from '../../components/CartIcon';
import {colors} from '../../theme';
import Header from "../../components/home/Header";
import BannerGrid from "../../components/home/BannerGrid";
import CheckBox from 'react-native-check-box';

function HomeScreen() {
    const [isChecked, setIsChecked] = useState(false)
    return (

        <View style={{flex: 1}}>
            <Header></Header>
            <ScrollView>
                <View style= {styles.main}>
                    <View style={styles.mainFormat}>
                        <BannerGrid></BannerGrid>

                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        position: 'sticky',
        top: 0,
        zIndex: 10,
    },
    mainFormat: {
        display: "flex",
        flexDirection: "column",
        gap: 8,
        backgroundColor: "#F5F5FA",
    }
})
export default HomeScreen