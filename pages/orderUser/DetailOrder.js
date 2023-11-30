import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, ScrollView,ProgressBarAndroid, TouchableOpacity, StyleSheet } from 'react-native';
import { ProgressBar } from 'react-native-progress';
const OrderDetailsScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.card}>
      
        <Text style={styles.cardHeader}>My Orders / Tracking</Text>
        <View style={styles.cardBody}>
          <Text style={styles.orderId}>Order ID: OD45345345435</Text>
          <View style={styles.card}>
            <View style={styles.cardBodyRow}>
              <Text style={styles.col}>
                <Text style={styles.strong}>Estimated Delivery time:</Text>{"\n"}29 nov 2019
              </Text>
              <Text style={styles.col}>
                <Text style={styles.strong}>Shipping BY:</Text>{"\n"}BLUEDART, |{" "}
           
                +1598675986
              </Text>
              <Text style={styles.col}>
                <Text style={styles.strong}>Status:</Text>{"\n"}Picked by the courier
              </Text>
              <Text style={styles.col}>
                <Text style={styles.strong}>Tracking #:</Text>{"\n"}BD045903594059
              </Text>
            </View>
          </View> 
         <View style={styles.track}>
            <View style={[styles.step, styles.activeStep]}>
            <Text style={styles.text}>Xác nhận</Text>
              <Text style={styles.icon}>✔️</Text>
            
            </View>
            <View style={[styles.step, styles.activeStep]}>
            <Text style={styles.text}>Đang vận chuyển</Text>
              <Text style={styles.icon}>👤</Text>
              
            </View>
            <View style={styles.step}>
            <Text style={styles.text}>Đang giao</Text>
              <Text style={styles.icon}>🚚</Text>
              
            </View>
            <View style={styles.step}>
            <Text style={styles.text}>Đã nhận</Text>
              <Text style={styles.icon}>📦</Text>
            
            </View>
          </View> 
        
          <View style={styles.example}>
        
        <ProgressBarAndroid
          color="#2196F3"
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.5}
        />
      </View>
            
          </View>  
           <View style={styles.hr} />
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.productList}>
              <TouchableOpacity onPress={() => console.log("Product Pressed")}>
                <View style={styles.productItem}>
                  <Image
                    source={{ uri: "https://i.imgur.com/iDwDQ4o.png" }}
                    style={styles.productImage}
                  />
                  <Text style={styles.productTitle}>
                    Dell Laptop with 500GB HDD {"\n"} 8GB RAM
                  </Text>
                  <Text style={styles.textMuted}>$950</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => console.log("Product Pressed")}>
                <View style={styles.productItem}>
                  <Image
                    source={{ uri: "https://i.imgur.com/tVBy5Q0.png" }}
                    style={styles.productImage}
                  />
                  <Text style={styles.productTitle}>
                    HP Laptop with 500GB HDD {"\n"} 8GB RAM
                  </Text>
                  <Text style={styles.textMuted}>$850</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => console.log("Product Pressed")}>
                <View style={styles.productItem}>
                  <Image
                    source={{ uri: "https://i.imgur.com/Bd56jKH.png" }}
                    style={styles.productImage}
                  />
                  <Text style={styles.productTitle}>
                    ACER Laptop with 500GB HDD {"\n"} 8GB RAM
                  </Text>
                  <Text style={styles.textMuted}>$650</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>  
           <View style={styles.hr} />
          <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
            <Text style={styles.btnText}>
              
              Back to orders
            </Text>
          </TouchableOpacity> 
          <View style={styles.example}>
        
        </View>
      </View>
      
    </View>
    
  );
};

const styles = StyleSheet.create({
    example: {
        color: "#fff",
     
      },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#eeeeee',
   
  },
  card: {
    position: 'relative',
    minWidth: 0,
    wordWrap: 'break-word',
    backgroundColor: '#fff',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    marginBottom: 20,
   
  },
  cardHeader: {
    padding: 15,
    marginBottom: 0,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 3,
    fontSize: 18,
    fontWeight: 'bold',
   
  },
  cardBody: {
    padding: 15,
   
  },
  orderId: {
    fontSize: 16,
    marginBottom: 10,
   
  },
  cardBodyRow: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15,
   
  },
  col: {
    flex: 1,
    marginRight: 10,
   
  },
  strong: {
    fontWeight: 'bold',
   
  },
  phoneIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    marginRight: 5,
  },
  track: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
   
  },
  step: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
   
  },
  activeStep: {
    color: '#28a745',
  },
  icon: {
    fontSize: 24,
    marginBottom: 5,
   
  },
  text: {
    fontSize: 12,
   
  },
  hr: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    marginBottom: 15,
   
  },
  productList: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 15,
   
  },
  productItem: {
    marginRight: 15,
   
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: 5,
   
  },
  productTitle: {
    fontSize: 14,
    marginBottom: 5,
   
  },
  textMuted: {
    fontSize: 12,
    color: '#868e96',
   
  },
  btn: {
    backgroundColor: '#ffc107',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
   
  },
  btnText: {
    color: '#000',
    fontSize: 16,
   
  },
  btnIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    marginRight: 5,
  },
});

export default OrderDetailsScreen;
