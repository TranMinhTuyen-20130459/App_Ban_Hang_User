import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";
import { useEffect, useState } from "react";
import { HeaderProductDetail } from "../components/product/HeaderProductDetail";
import { ProductImage } from "../components/product/ProductImage";
import { ItemEvaluate } from "../components/product/evaluation/ItemEvaluate";
import { ButtonAction } from "../components/product/ButtonAction";
import { Policy } from "../components/product/Policy";

export const ProducDetail = ({ navigation }) => {
  const start_rating = Math.ceil(4.7);
  const quantity_sold = 500;
  const quantity_rating = 500;

  const [scrollY, setScrollY] = useState(0);

  const handleScroll = (event) => {
    console.log("Scroll event detected!");
    const newScrollY = event.nativeEvent.contentOffset.y;
    setScrollY(newScrollY);
  };
  useEffect(() => {
    console.log(scrollY);
  }, [scrollY]);

  return (
    <View style={styles.container}>
      <View
        style={[
          {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 9999,

            paddingHorizontal: 10,
            backgroundColor: scrollY == 0 ? "rgba(255, 255, 255, 0)" : "#FFF",
          },
        ]}
      >
        <HeaderProductDetail />
      </View>

      <ScrollView
        onScroll={handleScroll}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
        }}
        contentContainerStyle={{ paddingBottom: 70 }} // Để có không gian cuối ScrollView để hiển thị ButtonAction
      >
        <View>
          <ProductImage />
          <View style={styles.margin10}>
            <View>
              <View>
                <Text style={{ fontSize: 30 }}>
                  Áo đội tuyển quốc gia Việt Nam
                </Text>
                <Text style={{}}>
                  {start_rating}{" "}
                  {Array.from({ length: start_rating }, (v, i) => (
                    <Ionicons key={i} name="star" color={"gold"}></Ionicons>
                  ))}
                  {" ("}
                  {quantity_rating}
                  {") "}| Đã bán {quantity_sold}+
                </Text>
                <Text style={{ fontSize: 22, fontWeight: "bold" }}>
                  500.000 vnđ
                </Text>

                <TouchableOpacity
                  onPress={() => navigation.navigate("SelectSize")}
                  style={{
                    marginVertical: 10,
                    padding: 10,

                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",

                    height: 30,
                    borderColor: "gray",
                    borderWidth: 1,
                    borderRadius: 8,
                  }}
                >
                  <View>
                    <Text>Size M | Trắng</Text>
                  </View>
                  <Text style={{ color: "blue", fontWeight: "bold" }}>
                    Chọn
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={{ marginVertical: 8, backgroundColor: "white" }}>
          <Policy />
        </View>

        <View style={styles.margin10}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Thông tin sản phẩm
          </Text>
          <Text>
            development, the easiest way to get started is with Expo Go. Expo is
            a set of tools and services built around React Native and, while it
            has many features, the most relevant feature for us right now is
          </Text>
        </View>

        <View style={styles.margin10}>
          <Text style={{ fontSize: 20 }}>ĐÁNH GIÁ KHÁCH HÀNG</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 30, alignContent: "center" }}>
              {start_rating}
            </Text>

            <Text style={{ fontSize: 20, marginTop: 2 }}>
              {Array.from({ length: start_rating }, (v, i) => (
                <Ionicons
                  key={i}
                  name="star"
                  color={"gold"}
                  size={20}
                ></Ionicons>
              ))}{" "}
              <Text> {quantity_rating} Đánh giá</Text>
            </Text>
          </View>
          <View>
            <ItemEvaluate />
            <ItemEvaluate />
            <ItemEvaluate />
            <TouchableOpacity
              style={{
                flexDirection: "row",
                flex: 1,
                justifyContent: "center",

                borderWidth: 1,
                paddingVertical: 5,
                borderRadius: 5,
              }}
            >
              <Text>Xem thêm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 2000,
          paddingHorizontal: 10,
          backgroundColor: "white",
        }}
      >
        <ButtonAction />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 16,
    backgroundColor: "rgb(217 217 217)",
  },
  margin10: {
    padding: 10,
    backgroundColor: "white",
  },
});
