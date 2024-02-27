import React from "react";
import { View, Text } from "react-native";
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from "react-native-gesture-handler";

const Header = () => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          width: "100%",
          height: 70,
          justifyContent: "center",
          borderBottomWidth: 0.2,
          borderBottomColor: "#8e8e8e",
          backgroundColor: "#fff",
          position: "absolute",
          top: 0,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontWeight: "600",
            fontSize: 20,
            color: "#000",
            marginLeft: 20,
          }}
        >
          ShoppingApp
        </Text>
        <GestureHandlerRootView>
          <TouchableOpacity
            style={{
              marginRight: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Mode
            </Text>
          </TouchableOpacity>
        </GestureHandlerRootView>
      </View>
    </View>
  );
};

export default Header;
