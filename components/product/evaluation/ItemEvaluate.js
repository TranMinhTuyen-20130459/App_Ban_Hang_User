import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
export const ItemEvaluate = (prop) => {
  prop = {
    quantity_star: 5,
    rank: "Cực kỳ hài lòng",
    content: "Sản phẩm này ok phết",
    fullname: "Nguyễn Văn Lênh",
  };

  const handleLike = () => {};
  const handleComment = () => {};
  const handleShare = () => {};

  return (
    <View styles={styles.container}>
      <View style={styles.horizontal}>
        <Text style={{ marginRight: 5 }}>
          {Array.from({ length: prop.quantity_star }, (v, i) => (
            <Ionicons key={i} name="star" color={"gold"}></Ionicons>
          ))}
        </Text>
        <Text style={{ fontWeight: "bold" }}>{prop.rank}</Text>
      </View>
      <View style={{}}>
        <Text>{prop.content}</Text>
      </View>
      <View style={styles.horizontal}>
        <Text style={{ marginRight: 5, fontSize: 15 }}>{prop.fullname}</Text>
        <Text
          style={{
            backgroundColor: "rgb(209 209 219)",
            paddingHorizontal: 3,
            borderRadius: 6,
          }}
        >
          <Ionicons
            name="checkmark-circle"
            style={{ color: "green" }}
            size={15}
          ></Ionicons>
          Đã mua hàng
        </Text>
      </View>
      <View style={[styles.actionEvalu, styles.horizontal]}>
        <View style={{ fontSize: 50 }}>
          <TouchableOpacity style={{ fontSize: 30 }} onPress={handleLike}>
            <Ionicons name="thumbs-up-outline" size={18} color={"gray"}>
              {" "}
              <Text>Hữu ích</Text>
            </Ionicons>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={{ fontSize: 30 }} onPress={handleComment}>
            <Ionicons name="chatbubble-outline" size={18} color={"gray"}>
              {" "}
              <Text>Bình luận</Text>
            </Ionicons>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={{ fontSize: 30 }} onPress={handleShare}>
            <Ionicons name="share-social-outline" size={18} color={"gray"}>
              {" "}
              <Text>Chia sẻ</Text>
            </Ionicons>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 35,
    fontWeight: "300",
  },
  horizontal: {
    flexDirection: "row",
  },
  actionEvalu: {
    justifyContent: "space-between",
    paddingVertical: 10,
  },
});
