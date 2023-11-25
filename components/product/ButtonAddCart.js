import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const ButtonAdd = () => {
  return (
    <>
      <TouchableOpacity
        style={[stylesAdd.button, stylesAdd.buttonAdd]}
        onPress={() => handleButtonPress("Thêm")}
      >
        <Text style={[stylesAdd.buttonText, { color: "white" }]}>
          Thêm vào giỏ
        </Text>
      </TouchableOpacity>
    </>
  );
};

const stylesAdd = StyleSheet.create({
  button: {
    height: 50,
    flex: 1,
    borderRadius: 5,
    alignItems: "center", // Added alignment property
    justifyContent: "center",
    marginBottom: 5,
  },
  buttonAdd: {
    backgroundColor: "red",
  },
  buttonText: {
    fontWeight: "bold", // Màu chữ của nút (thay đổi theo yêu cầu của bạn)
  },
});
