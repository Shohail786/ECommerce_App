import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import Main from "../bottom/Main";
import Search from "../bottom/Search";
import Wishlist from "../bottom/Wishlist";
import Profile from "../bottom/Profile";
import Cart from "../bottom/Cart";
import { useSelector } from "react-redux";

const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const data = useSelector((state) => state);
  return (
    <View style={{ flex: 1 }}>
      {selectedTab == 0 ? (
        <Main />
      ) : selectedTab == 1 ? (
        <Search />
      ) : selectedTab == 2 ? (
        <Cart />
      ) : selectedTab == 3 ? (
        <Wishlist />
      ) : (
        <Profile />
      )}
      <View
        style={{
          width: "100%",
          height: 70,
          backgroundColor: "#fff",
          position: "absolute",
          bottom: 0,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <GestureHandlerRootView style={{ flex: 1 }}>
          <TouchableOpacity
            style={{
              width: "20%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              setSelectedTab(0);
            }}
          >
            <Image
              source={require("../Images/home.png")}
              style={{
                width: 24,
                height: 24,
                tintColor: selectedTab == 0 ? "#000" : "#8e8e8e",
              }}
            ></Image>
          </TouchableOpacity>
        </GestureHandlerRootView>

        <GestureHandlerRootView style={{ flex: 1 }}>
          <TouchableOpacity
            style={{
              width: "20%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              setSelectedTab(1);
            }}
          >
            <Image
              source={require("../Images/search-interface-symbol.png")}
              style={{
                width: 24,
                height: 24,
                tintColor: selectedTab == 1 ? "#000" : "#8e8e8e",
              }}
            ></Image>
          </TouchableOpacity>
        </GestureHandlerRootView>
        <View
          style={{ width: "20%", height: "100%", justifyContent: "center" }}
        >
          <GestureHandlerRootView>
            <TouchableOpacity
              style={{
                width: 40,
                height: 40,
                backgroundColor: selectedTab == 2 ? "green" : "#8e8e8e",
                borderRadius: 20,
                alignItems: "center",
              }}
              onPress={() => {
                setSelectedTab(2);
              }}
            >
              <Image
                source={require("../Images/home.png")}
                style={{ width: 24, height: 24, tintColor: "#fff" }}
              ></Image>

              <View
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: "red",
                  borderRadius: 7,
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: 5,
                  right: 5,
                }}
              >
                <Text style={{ color: "#fff", fontWeight: "600" }}>
                  {data.Reducers1.length}
                </Text>
              </View>
            </TouchableOpacity>
          </GestureHandlerRootView>
        </View>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <TouchableOpacity
            style={{
              width: "20%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              setSelectedTab(3);
            }}
          >
            <Image
              source={require("../Images/wishlist.png")}
              style={{
                width: 24,
                height: 24,
                tintColor: selectedTab == 3 ? "#000" : "#8e8e8e",
              }}
            ></Image>

            <View
              style={{
                width: 20,
                height: 20,
                backgroundColor: "red",
                borderRadius: 7,
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                top: 15,
                right: -2,
              }}
            >
              <Text style={{ color: "#fff", fontWeight: "600" }}>
                {data.Reducers2.length}
              </Text>
            </View>
          </TouchableOpacity>
        </GestureHandlerRootView>

        <GestureHandlerRootView style={{ flex: 1 }}>
          <TouchableOpacity
            style={{
              width: "20%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              setSelectedTab(4);
            }}
          >
            <Image
              source={require("../Images/user.png")}
              style={{
                width: 24,
                height: 24,
                tintColor: selectedTab == 4 ? "#000" : "#8e8e8e",
              }}
            ></Image>
          </TouchableOpacity>
        </GestureHandlerRootView>
      </View>
    </View>
  );
};

export default Home;
