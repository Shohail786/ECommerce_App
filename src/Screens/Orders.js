import React from "react";
import { View, Text, Image, SafeAreaView, FlatList } from "react-native";
import { useSelector } from "react-redux";

const Orders = () => {
  const orders = useSelector((state) => state.OrderReducers);
  console.log("orders", orders);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <FlatList
          data={orders}
          renderItem={({ item, index }) => {
            return (
              <View style={{ width: "100%", height: 100 }}>
                {item.items.map((item1) => {
                  return (
                    <Image
                      source={item1.image}
                      style={{ width: 50, height: 50 }}
                    />
                  );
                })}
                {/* <FlatList
                  horizontal
                  data={item.items}
                  renderItem={({ item1, index1 }) => {
                    return (
                      <Image
                        source={item1.image}
                        style={{ width: 50, height: 50 }}
                      />
                    );
                  }}
                /> */}
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Orders;
