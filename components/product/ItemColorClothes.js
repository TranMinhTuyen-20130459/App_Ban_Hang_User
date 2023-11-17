import { TouchableOpacity } from "react-native";
import { Image, Text, View } from "react-native";

export const ItemColorClothes = (props) => {
  /**
   * source, name
   *
   */
  return (
    <View
      style={{
        width: "50%", // Hai sản phẩm trên một hàng
        padding: 5, // Khoảng cách giữa các sản phẩm
      }}
    >
      <TouchableOpacity
        style={{
          flexDirection: "row",
          borderColor: "blue",
          borderWidth: 1,
          width: "100%", // Đảm bảo rằng nó lấp đầy cả phần tử cha
          height: 75,
        }}
      >
        <View style={{ flex: 1 }}>
          <Image
            style={{ height: 75 }}
            source={{
              uri: "https://salt.tikicdn.com/cache/368x368/ts/product/f5/09/03/d4de9f3e1445d76780a47f6f233037a8.png.webp",
            }}
          />
        </View>
        <View
          style={{ flex: 1.5, alignItems: "center", justifyContent: "center" }}
        >
          <Text>màu đỏ sao vàng</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
