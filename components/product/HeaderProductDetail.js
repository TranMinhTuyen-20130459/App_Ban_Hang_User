import { useState } from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { colors } from "../../theme";
import Ionicons from "react-native-vector-icons/Ionicons";
export const HeaderProductDetail = ({ navigation }) => {
  const handleViewOver = () => {
    alert("Chia sẻ");
  };

  return (
    <>
      <View style={[styles.headerContainer]}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={[styles.exit, styles.backgroundRadiusIcon]}
        >
          <Ionicons
            name="chevron-back-outline"
            size={26}
            color={colors.white}
          ></Ionicons>
        </TouchableOpacity>
        <View style={styles.iconCart}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Cart")}
            style={styles.backgroundRadiusIcon}
          >
            <Ionicons name="cart-outline" size={26} color={colors.white} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleViewOver}
            style={styles.backgroundRadiusIcon}
          >
            <Ionicons
              name="ellipsis-horizontal-outline"
              size={26}
              color={colors.white}
            ></Ionicons>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 30,
    paddingVertical: 10,
  },
  exit: {
    // flex: 0.8,
  },
  iconCart: {
    flexDirection: "row",
    flex: 0.3,
    justifyContent: "space-between",
  },
  backgroundRadiusIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,

    backgroundColor: "gray",
    color: colors.white,

    justifyContent: "center",
    alignItems: "center",
  },
});
