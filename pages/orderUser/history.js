import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView, Image, TextInput,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HistorySell = () => {
  const [purchaseHistory, setPurchaseHistory] = useState([
    { id: 1, product: 'Giày Nike', price: '250.000 đ'},
    { id: 2, product: 'Giày Air', price: '305.000 đ'},
   
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  const renderPurchaseItem = ({ item }) => (
    <View style={styles.purchaseItem}>
      <View style={styles.productDetails}>
        <Text style={styles.productTitle}>{item.product}</Text>
        <View style={styles.purchaseInfo}>
          <Text style={styles.purchaseQuantity}>Số lượng: 1</Text>
          <Text style={styles.purchasePrice}>{item.price}</Text>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.detailButton}>
          <Text style={styles.buttonText}>Xem chi tiết</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buyAgainButton}>
          <Text style={styles.buttonText}>Mua lại</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rateButton}>
          <Text style={styles.buttonText}>Đánh giá sản phẩm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Icon name="arrow-left" size={30} color="#333" style={styles.backIcon} />
        <Text style={styles.header}>Lịch Sử Mua Hàng</Text>
       
      </View>
      <FlatList
        data={purchaseHistory}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderPurchaseItem}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    margin: 20,  // Thay vì sử dụng padding, sử dụng margin để thêm khoảng trắng xung quanh khung
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  purchaseItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 15,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#000',
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  deliveredText: {
    color: 'green',
    fontWeight: 'bold',
    marginTop: 5,
  },
  ratingText: {
    color: 'orange',
    fontWeight: 'bold',
    marginTop: 5,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    justifyContent: 'center',
    position: 'relative',
  },
  backIcon: {
    position: 'absolute',
    left: 0,
    top: 0,
    padding: 10,
    borderRadius: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  detailButton: {
    backgroundColor: 'transparent',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 5,
    borderWidth: 1,
    borderColor: '#3498db',
  },
  buyAgainButton: {
    backgroundColor: 'transparent',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 5,
    borderWidth: 1,
    borderColor: '#2ecc71',
  },
  rateButton: {
    backgroundColor: 'transparent',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    borderWidth: 1,
    borderColor: '#e74c3c',
  },
  buttonText: {
    color: '#3498db',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  purchaseQuantity: {
    color: 'gray',
    fontSize: 14,
    marginTop: 5,
  },
  purchaseInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    padding: 15, // Đặt padding ở đây nếu bạn muốn có khoảng trắng xung quanh nội dung bên trong
  },
});


export default HistorySell;
