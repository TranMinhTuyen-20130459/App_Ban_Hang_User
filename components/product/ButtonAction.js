import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { ButtonAdd } from "./ButtonAddCart";
import { ButtonBuy } from "./ButtonBuyNow";

export const ButtonAction = ({ handleAddToCart, handleByNow }) => {
  const handleAdd = () => {
    handleAddToCart();
  };
  const handleBuy = () => {
    handleByNow();
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <ButtonBuy handleByNow={handleBuy} />
        <View style={{ flex: 0.1 }}></View>
        <ButtonAdd handleAddToCart={handleAdd} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  buttonContainer: {
    flexDirection: "row", // Corrected spelling of "flexDirection"
    justifyContent: "space-between",
    backgroundColor: "white",
    paddingTop: 5,
  },
});
