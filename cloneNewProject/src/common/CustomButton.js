import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

function CustomButton({ title, onPress, textColor, bgColor, disabled }) {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <TouchableOpacity
        disabled={disabled}
        style={{
          backgroundColor: bgColor,
          justifyContent: "center",
          alignItems: "center",
          width: "85%",
          height: 50,
          borderRadius: 10,
          alignSelf: "center",
          marginTop: 50,
          marginBottom: 50,
        }}
        onPress={() => {
          onPress();
        }}
      >
        <Text style={{ color: textColor }}>{title}</Text>
      </TouchableOpacity>
    </GestureHandlerRootView>
  );
}

export default CustomButton;
