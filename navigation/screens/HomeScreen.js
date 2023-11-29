
import React, { useState } from "react";
import {
Dimensions,  
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CartIcon from "../../components/CartIcon";
import { colors } from "../../theme";
import Header from "../../components/home/Header";
import BannerGrid from "../../components/home/BannerGrid";
import CheckBox from "react-native-check-box";
import HotProduct from "../../components/home/HotProduct";
import NewProduct from "../../components/home/NewProduct";
import PromotionProduct from "../../components/home/PromotionProduct";
import SuggestedProduct from "../../components/home/SuggestedProduct";
function HomeScreen() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      <Header></Header>
      <ScrollView>
        <View style={styles.main}>
          <View style={styles.mainFormat}>
            <BannerGrid></BannerGrid>
            <HotProduct></HotProduct>
            <NewProduct></NewProduct>
            <PromotionProduct></PromotionProduct>
            <SuggestedProduct></SuggestedProduct>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    position: "sticky",
    top: 0,
    zIndex: 10,
  },
  mainFormat: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    backgroundColor: "#F5F5FA",
  },
});
export default HomeScreen;
