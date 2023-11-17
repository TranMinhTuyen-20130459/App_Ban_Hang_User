import { TouchableOpacity } from "react-native";
import { Text, View } from "react-native";

export const ItemSize = (prop) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "rgb(189 182 182)",
        justifyContent: "center",
        alignItems: "center",
        width: 55,
        height: 35,
        borderRadius: 6,
      }}
    >
      <Text>{prop.name}</Text>
    </TouchableOpacity>
  );
};
