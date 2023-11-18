import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import CartIcon from "../../components/CartIcon";
import { colors } from "../../theme";
import CheckBox from "react-native-check-box";

function HomeScreen({ navigation }) {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <CartIcon
        sizeIcon={26}
        colorIcon="#000"
        activeBGColor={true}
        bGQuantity={colors.redHeart}
        colorQuantity="#fff"
      />

      <TouchableOpacity onPress={() => navigation.navigate("ProductDetail")}>
        <Text>Go to product detail</Text>
      </TouchableOpacity>
      <Text>Input</Text>
      {/* <TextInput textContentType='addressCity' style={{width: 100, height: 40, backgroundColor: 'red'}}  /> */}
      {/* <CheckBox
        isChecked={isChecked}
        onClick={() => setIsChecked(!isChecked)}
        rightText='Dancing'
      /> */}
    </View>
  );
}

export default HomeScreen;
