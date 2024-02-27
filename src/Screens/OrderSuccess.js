import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

const OrderSuccess = () => {
  const order = useSelector((state) => state.OrderReducers);
  console.log(orders);
  const route = useRoute();
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        source={
          route.params.status == "success"
            ? require("../Images/check.png")
            : require("../Images/cancel.png")
        }
        style={{ width: 50, height: 50 }}
      />
      <Text style={{ marginTop: 20, fontSize: 20 }}>
        {route.params.status == "success"
          ? "Your Order Placed Successfully"
          : "Order Failed"}
      </Text>
      <TouchableOpacity
        style={{
          width: 200,
          height: 50,
          marginTop: 50,
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 0.5,
        }}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text>Go To Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderSuccess;
