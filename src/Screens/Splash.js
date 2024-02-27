import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";

const Splash = () => {
  // const navigation = useNavigation();
  // useEffect(() => {
  //   setTimeout(() => {
  //     getData();
  //     //   navigation.navigate("Login");
  //   }, 3000);
  // }, []);

  // const getData = async () => {
  //   const email = await AsyncStorage.getItem("EMAIL");
  //   if (email !== null) {
  //     navigation.navigate("Home");
  //   } else {
  //     navigation.navigate("Login");
  //   }
  // };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Splash</Text>
      <Image
        source={require("../Images/logo.png")}
        style={{ width: 100, height: 100, borderRadius: 100 }}
      />
    </View>
  );
};

export default Splash;
