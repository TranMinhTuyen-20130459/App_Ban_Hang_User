import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HistorySell = () => {
  const [purchaseHistory, setPurchaseHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Lấy dữ liệu từ API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'http://tmt020202ccna-001-site1.atempurl.com/api/history/lich-su-mua-hang?phoneNumber=0123456789&page=1&pageSize=9'
        );
        const jsonData = await response.json();
        if (jsonData.succeeded) {
          setPurchaseHistory(jsonData.data);
        } else {
          console.error('Lỗi khi lấy lịch sử mua hàng:', jsonData.message);
        }
        setIsLoading(false);
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderPurchaseItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => console.log('Đã nhấn vào mục')}
      style={styles.purchaseItem}
    >
      <View style={styles.productDetails}>
        <Text style={styles.productTitle}>{item.name_status_order}</Text>
        <View style={styles.purchaseInfo}>
          <Text style={styles.purchaseText}>
            Mã đơn hàng: <Text style={styles.purchaseValue}>{item.id_order}</Text>
          </Text>
          <Text style={styles.purchaseText}>
            Thời gian: <Text style={styles.purchaseValue}>{item.time_order}</Text>
          </Text>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.detailButton}>
          <Text style={styles.buttonText}>Xem chi tiết</Text>
        </TouchableOpacity>
        
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        {/* Xóa chữ và icon trong phần này */}
      </View>

      {isLoading ? (
        <Text>Đang tải...</Text>
      ) : (
        <FlatList
          data={purchaseHistory}
          keyExtractor={(item) => item.id_order.toString()}
          renderItem={renderPurchaseItem}
        />
      )}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    margin: 20, 
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center', // Thay đổi từ 'space-between' thành 'center'
    marginBottom: 20,
    position: 'relative',
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
  purchaseTime: {
    color: '#333',
    fontSize: 14,
    marginTop: 5,
  },
  purchaseText: {
    color: '#333',
    fontSize: 14,
    marginTop: 5,
  },
  purchaseValue: {
    fontWeight: 'bold',
  },
});


export default HistorySell;
