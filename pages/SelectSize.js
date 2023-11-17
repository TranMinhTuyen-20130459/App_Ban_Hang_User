import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { ItemColorClothes } from "../components/product/ItemColorClothes";
import { ItemSize } from "../components/product/ItemSize";
import { ButtonAdd } from "../components/product/ButtonAddCart";

export const SelectSize = (prop) => {
  /**
   * short decription
   * image primary
   * price
   * list size
   * list color
   * vendor
   *
   */

  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            padding: 8,
          }}
        >
          <Image
            style={{ flex: 1 }}
            source={{
              uri: "https://salt.tikicdn.com/cache/368x368/ts/product/f5/09/03/d4de9f3e1445d76780a47f6f233037a8.png.webp",
            }}
          ></Image>
          <View
            style={{
              flex: 2,
              padding: 5,
            }}
          >
            <View>
              <Text numberOfLines={2}>
                {" "}
                This page will help you install and build your first React
                Native app. If you are new to mobile development, the easiest
                way to get
              </Text>
              <Text>Size:M</Text>
              <Text>Cung cấp bởi: VN sport</Text>
              <Text maxFontSizeMultiplier={20}>150000</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 10,
          }}
        >
          <View>
            <View>
              <Text>Màu: </Text>
              <View
                style={{
                  flexWrap: "wrap",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <ItemColorClothes />
                <ItemColorClothes />
                <ItemColorClothes />
                <ItemColorClothes />
              </View>
            </View>
          </View>
          <View>
            <View>
              <Text>Size: </Text>
              <View
                style={{
                  flexWrap: "wrap",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <ItemSize name="M" />
                <ItemSize name="L" />
                <ItemSize name="XL" />
                <ItemSize name="XXL" />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "white",
          paddingHorizontal: 10,
          height: 70,

          flex: 1,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <ButtonAdd />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
