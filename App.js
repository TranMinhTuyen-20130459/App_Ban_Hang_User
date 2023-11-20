import * as React from 'react';
import {useEffect} from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import Maincontainer from './navigation/MainContainer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SettingScreen from './pages/SettingScreen';
import CartScreen from './pages/CartScreen';
import {colors} from './theme';
import {getCartFromAsyncStorage} from './utils/localStorage';
import {addCart} from './redux/slices/CartsSlice';
import OrderConfirmScreen from "./pages/Order/OrderConfirmScreen";

import { colors } from './theme';
import { getCartFromAsyncStorage } from './utils/localStorage';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { addAll, addCart } from './redux/slices/CartsSlice';
function App() {
    const Stack = createNativeStackNavigator()

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Gọi hàm để lấy dữ liệu từ AsyncStorage
                const carts = await getCartFromAsyncStorage();

                // Nếu có dữ liệu, dispatch action để cập nhật giỏ hàng trong Redux
                if (carts) {
                    carts.forEach(item => {
                        store.dispatch(addCart(item));
                    });
                }
            } catch (error) {
                console.error('Lỗi khi đọc giỏ hàng từ AsyncStorage:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Main"
                        component={Maincontainer}
                        options={{headerShown: false}}
                    />
                    {/* cấu hình các đường dẫn qua các trang khác */}
                    <Stack.Screen name="Setting" component={SettingScreen}/>
                    <Stack.Screen name="Cart" component={CartScreen}
                                  options={{
                                      title: 'Giỏ hàng',
                                      headerTitleAlign: 'center',
                                      headerStyle: {
                                          backgroundColor: colors.blueRoot,
                                      },
                                      headerTintColor: 'white',
                                  }}/>

                    <Stack.Screen name="OrderConfirm" component={OrderConfirmScreen}
                                  options={{
                                      title: 'Xác Nhận Đơn Hàng',
                                      headerTitleAlign: 'center',
                                      headerStyle: {
                                          backgroundColor: colors.blueRoot,
                                      },
                                      headerTintColor: 'white',
                                  }}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
    fetchData();

  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={Maincontainer}
            options={{ headerShown: false }}
          />
          {/* cấu hình các đường dẫn qua các trang khác */}
          <Stack.Screen name="Setting" component={SettingScreen} />
          <Stack.Screen name="Cart" component={CartScreen}
            options={{
              title: 'Giỏ hàng',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: colors.blueRoot,
              },
              headerTintColor: 'white',
            }} />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;