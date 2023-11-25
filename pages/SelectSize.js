import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { ItemColorClothes } from "../components/product/ItemColorClothes";
import { ItemSize } from "../components/product/ItemSize";
import { ButtonAdd } from "../components/product/ButtonAddCart";
import { useRoute } from "@react-navigation/native";
import { useState } from "react";
import { useEffect } from "react";

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
  const [productData, setProductData] = useState(null);
  const route = useRoute();
  const { id } = route.params;
  const link =
    "http://tmt020202ccna-001-site1.atempurl.com/api/products/infor-product?id=" +
    id;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(link);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setProductData(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const handleColorPress = (color) => {
    setSelectedColor(color);
  };

  const handleSizePress = (size) => {
    setSelectedSize(size);
  };

  if (!productData) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <View style={[styles.container]}>
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
              uri: productData.list_image[0].path_image,
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
              <Text>Size:{selectedSize ? selectedSize : ""}</Text>
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
            <Text>Màu: </Text>
            <View style={styles.flexWrap}>
              {productData.list_image
                ? productData.list_image.map((image) => {
                    return (
                      <ItemColorClothes
                        key={image.id_image}
                        color={image.path_image}
                        link={image.path_image}
                        selected={selectedColor === image.path_image}
                        onPress={() => handleColorPress(image.path_image)}
                      />
                    );
                  })
                : "không có ảnh!"}
            </View>
            <View>
              <Text>Size: </Text>
              <View style={styles.flexWrap}>
                {productData.list_size
                  ? productData.list_size.map((size, i) => {
                      return (
                        <ItemSize
                          key={i}
                          name={size.name_size}
                          selected={selectedSize === size.name_size}
                          onPress={() => handleSizePress(size.name_size)}
                        />
                      );
                    })
                  : ""}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.fixedBottom}>
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
  flexWrap: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  fixedBottom: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    paddingHorizontal: 10,
    height: 70,

    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
});
