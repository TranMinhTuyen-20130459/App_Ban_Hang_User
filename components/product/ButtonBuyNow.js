import { StyleSheet, Text, TouchableOpacity } from "react-native";
export const ButtonBuy = () => {
  return (
    <>
      <TouchableOpacity
        style={[stylesBuy.button, stylesBuy.buttonBuy]}
        onPress={() => handleButtonPress("Mua")}
      >
        <Text style={[stylesBuy.buttonText, { color: "blue" }]}>Mua ngay</Text>
      </TouchableOpacity>
    </>
  );
};
const stylesBuy = StyleSheet.create({
  button: {
    height: 50,
    flex: 1,
    borderRadius: 5,
    alignItems: "center", // Added alignment property
    justifyContent: "center",
    marginBottom: 5,
  },
  buttonText: {
    fontWeight: "bold", // Màu chữ của nút (thay đổi theo yêu cầu của bạn)
  },
  buttonBuy: {
    color: "blue", // Setting text color
    borderColor: "blue", // Màu viền của nút "Buy"
    borderWidth: 1,
    backgroundColor: "white",
  },
  buttonText: {
    fontWeight: "bold", // Màu chữ của nút (thay đổi theo yêu cầu của bạn)
  },
});
