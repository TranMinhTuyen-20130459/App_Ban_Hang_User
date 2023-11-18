import * as React from "react";
import Maincontainer from "./navigation/MainContainer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingScreen from "./pages/SettingScreen";
import CartScreen from "./pages/CartScreen";
import { colors } from "./theme";
import { ProducDetail } from "./pages/ProductDetail";
import { SelectSize } from "./pages/SelectSize";
import ProductReview from "./pages/ProductReview";
function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={Maincontainer}
          options={{ headerShown: false }}
        />
        {/* cấu hình các đường dẫn qua các trang khác */}
        <Stack.Screen name="Setting" component={SettingScreen} />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{
            title: "Giỏ hàng",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: colors.blueRoot,
            },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProducDetail}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: colors.blueRoot,
            },
          }}
        />
        <Stack.Screen
          name="SelectSize"
          component={SelectSize}
          options={{
            title: "Lựa chọn thuộc tính",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: colors.blueRoot,
            },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="ProductReview"
          component={ProductReview}
          options={{
            title: "Đánh giá sản phẩm",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: colors.blueRoot,
            },
            headerTintColor: "white",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
