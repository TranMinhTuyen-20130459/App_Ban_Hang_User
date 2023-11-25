import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useEffect, useState } from "react";
import { HeaderProductDetail } from "../components/product/HeaderProductDetail";
import { ProductImage } from "../components/product/ProductImage";
import { ItemEvaluate } from "../components/product/evaluation/ItemEvaluate";
import { ButtonAction } from "../components/product/ButtonAction";
import { Policy } from "../components/product/Policy";
import { colors } from "../theme";

export const ProducDetail = ({ navigation, id }) => {
  const quantity_sold = 500;
  const quantity_rating = 500;
  const [selectSize, setSelectSize] = useState(false);
  id = 1;
  const link =
    "http://tmt020202ccna-001-site1.atempurl.com/api/products/infor-product?id=" +
    id;
  // formart Tiền tệ
  const formatCurrency = (value) => {
    // Kiểm tra nếu giá trị không phải là số
    if (isNaN(value)) {
      return "Invalid input";
    }

    // Sử dụng hàm toLocaleString để định dạng số tiền thành chuỗi tiền tệ
    return value.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  };
  const calculateDiscountPercentage = (listedPrice, promotionalPrice) => {
    // Kiểm tra nếu giá trị không phải là số
    if (isNaN(listedPrice) || isNaN(promotionalPrice)) {
      return "Invalid input";
    }
    // Tính phần trăm giảm giá
    const discountPercentage =
      ((listedPrice - promotionalPrice) / listedPrice) * 100;
    // Làm tròn đến 2 chữ số thập phân
    const roundedPercentage = Math.round(discountPercentage * 100) / 100;

    return roundedPercentage + "%";
  };

  // Sử dụng hàm

  // xử lý thay đổi màu trên header
  const [scrollY] = useState(new Animated.Value(0));

  const headerBackgroundColor = scrollY.interpolate({
    inputRange: [0, 10],
    outputRange: ["rgba(255, 255, 255, 0)", colors.white],
    extrapolate: "clamp",
  });
  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: false } // Make sure to set useNativeDriver to false
  );
  // fetch data
  const [productData, setProductData] = useState(null);
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
  // nếu fecth chưa hết thì hiển thị loading..
  if (!productData) {
    return (
      <View>
        <ActivityIndicator
          size="large"
          color="#0000ff"
          hidesWhenStopped={true}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.fixedHeaderProductDetail,
          { backgroundColor: headerBackgroundColor },
        ]}
      >
        <HeaderProductDetail navigation={navigation} />
      </Animated.View>
      <ScrollView
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={
          {
            // top: 0,
            // left: 0,
            // right: 0,
            // zIndex: 1000,
          }
        }
        contentContainerStyle={{ paddingBottom: 70 }} // Để có không gian cuối ScrollView để hiển thị ButtonAction
      >
        <View>
          <ProductImage list={productData.list_image} />
          <View style={styles.margin10}>
            <View>
              <View>
                <Text style={{ fontSize: 30 }}>{productData.name_product}</Text>
                <Text>
                  {productData.star_review}{" "}
                  <View style={styles.starContainer}>
                    {Array.from({ length: 5 }, (v, i) => (
                      <Ionicons
                        key={i}
                        name={
                          i < productData.star_review ? "star" : "star-outline"
                        }
                        color={i < productData.star_review ? "gold" : "gray"}
                      />
                    ))}
                  </View>
                  {" ("}
                  {quantity_rating}
                  {") "}| Đã bán {quantity_sold}+
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 22, fontWeight: "bold" }}>
                    {formatCurrency(productData.listed_price)}
                  </Text>
                  <Text
                    style={{
                      marginLeft: 3,
                      backgroundColor: colors.borderGray,
                      borderRadius: 5,
                    }}
                  >
                    {calculateDiscountPercentage(100, 25)}
                  </Text>
                </View>

                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("SelectSize", {
                      id: productData.id_product,
                    })
                  }
                  style={styles.btnSelect}
                >
                  <View>
                    <Text>
                      Size{" "}
                      {selectSize ? "" : productData.list_size[0].name_size} |
                      Trắng
                    </Text>
                  </View>
                  <Text style={{ color: colors.blueRoot, fontWeight: "bold" }}>
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
              {productData.star_review}
            </Text>

            <Text style={{ fontSize: 20, marginTop: 2 }}>
              <View style={styles.starContainer}>
                {Array.from({ length: 5 }, (v, i) => (
                  <Ionicons
                    key={i}
                    name={i < productData.star_review ? "star" : "star-outline"}
                    size={20}
                    color={i < productData.star_review ? "gold" : "gray"}
                  />
                ))}
              </View>
              <Text style={{ color: colors.grayLight }}>
                {" "}
                {quantity_rating} Đánh giá
              </Text>
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("ProductReview")}
            style={{
              borderWidth: 1,
              borderColor: colors.borderGray,
              padding: 10,
              color: colors.white,
            }}
          >
            <Text>Đánh giá</Text>
          </TouchableOpacity>
          <View>
            <ItemEvaluate navigation={navigation} />
            <ItemEvaluate navigation={navigation} />
            <ItemEvaluate navigation={navigation} />
            <ItemEvaluate navigation={navigation} />
            <TouchableOpacity style={styles.btnMore}>
              <Text>Xem thêm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          position: "absolute",
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
    backgroundColor: colors.borderGray,
  },
  starContainer: {
    flexDirection: "row",
  },
  fixedHeaderProductDetail: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 9999,
    height: 90,
    paddingTop: 30,
    paddingHorizontal: 10,
  },
  margin10: {
    padding: 10,
    backgroundColor: "white",
  },
  btnSelect: {
    marginVertical: 10,
    padding: 10,

    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",

    height: 45,
    borderColor: colors.borderGray,
    borderWidth: 1,
    borderRadius: 8,
  },
  btnMore: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",

    borderWidth: 1,
    borderColor: colors.borderGray,
    paddingVertical: 5,
    borderRadius: 5,
  },
});
