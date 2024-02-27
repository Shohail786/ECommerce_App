import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

let name = "";
const Profile = () => {
  const navigation = useNavigation();

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    name = await AsyncStorage.getItem("NAME");
  };

  return (
    <GestureHandlerRootView>
      <View style={{ flex: 1 }}>
        <View
          style={{
            width: "100%",
            height: 70,
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Text style={{ fontWeight: "600", fontSize: 20, marginLeft: 15 }}>
            Profile
          </Text>
          <TouchableOpacity
            style={{
              width: 30,
              height: 30,
              marginRight: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../Images/settings.png")}
              style={{ width: 24, height: 24 }}
            ></Image>
          </TouchableOpacity>
        </View>
        <Image
          source={require("../Images/user.png")}
          style={{ width: 80, height: 80, alignSelf: "center", marginTop: 30 }}
        ></Image>
        <Text style={{ alignSelf: "center", marginTop: 20, fontSize: 18 }}>
          {name}
        </Text>
        <TouchableOpacity
          style={{
            width: "90%",
            height: 50,
            borderBottomWidth: 0.3,
            marginTop: 20,
            borderBottomColor: "#8e8e8e",
            justifyContent: "center",
          }}
          onPress={() => {
            navigation.navigate("MyAddress");
          }}
        >
          <Text style={{}}>My Address</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "90%",
            height: 50,
            borderBottomWidth: 0.3,

            borderBottomColor: "#8e8e8e",
            justifyContent: "center",
          }}
          onPress={() => {
            navigation.navigate("Orders");
          }}
        >
          <Text style={{}}>My Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "90%",
            height: 50,
            borderBottomWidth: 0.3,

            borderBottomColor: "#8e8e8e",
            justifyContent: "center",
          }}
        >
          <Text style={{}}>Offers</Text>
        </TouchableOpacity>
      </View>
    </GestureHandlerRootView>
  );
};

export default Profile;
