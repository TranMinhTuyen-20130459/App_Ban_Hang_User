import { useState } from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
export const HeaderProductDetail = (prop) => {
  const [isScrollTop, setIsScrollTop] = useState(true);
  const handleCart = () => {
    alert("Cart");
  };
  const handleBack = () => {
    alert("Back to home");
  };
  const handleViewOver = () => {
    alert("Optional");
  };

  return (
    <>
      <View
        style={[
          styles.headerContainer,
          isScrollTop ? { backgroundColor: "transparent" } : null,
        ]}
      >
        <TouchableOpacity
          onPress={handleBack}
          style={[styles.exit, styles.backgroundRadiusIcon]}
        >
          <Ionicons
            name="chevron-back-outline"
            size={26}
            color={"#FFF"}
          ></Ionicons>
        </TouchableOpacity>
        <View style={styles.iconCart}>
          <TouchableOpacity
            onPress={handleCart}
            style={styles.backgroundRadiusIcon}
          >
            <Ionicons name="cart-outline" size={26} color={"#FFF"} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleViewOver}
            style={styles.backgroundRadiusIcon}
          >
            <Ionicons
              name="ellipsis-horizontal-outline"
              size={26}
              color={"#FFF"}
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
    color: "white",

    justifyContent: "center",
    alignItems: "center",
  },
});
