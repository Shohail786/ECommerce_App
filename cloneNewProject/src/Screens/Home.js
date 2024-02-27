import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import Main from "../bottom/Main.js";
import Search from "../bottom/Search.js";
import Cart from "../bottom/Cart.js";
import Wishlist from "../bottom/Wishlist.js";
import Profile from "../bottom/Profile.js";
import { useSelector } from "react-redux";

const Home = () => {
  const [selectTab, setSelectTab] = useState(0);
  const data = useSelector((state) => state);
  return (
    <View style={{ flex: 1 }}>
      {selectTab == 0 ? (
        <Main />
      ) : selectTab == 1 ? (
        <Search />
      ) : selectTab == 2 ? (
        <Cart />
      ) : selectTab == 3 ? (
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
              setSelectTab(0);
            }}
          >
            <Image
              source={require("../Images/home.png")}
              style={{
                width: 24,
                height: 24,
                tintColor: selectTab == 0 ? "#000" : "#8e8e8e",
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
              setSelectTab(0);
            }}
          >
            <Image
              source={require("../Images/search-interface-symbol.png")}
              style={{
                width: 24,
                height: 24,
                tintColor: selectTab == 1 ? "#000" : "#8e8e8e",
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
                backgroundColor: selectTab == 2 ? "green" : "#8e8e8e",
                borderRadius: 20,
                alignItems: "center",
              }}
              onPress={() => {
                setSelectTab(2);
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
              setSelectTab(3);
            }}
          >
            <Image
              source={require("../Images/wishlist.png")}
              style={{
                width: 24,
                height: 24,
                tintColor: selectTab == 3 ? "#000" : "#8e8e8e",
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
              setSelectTab(4);
            }}
          >
            <Image
              source={require("../Images/user.png")}
              style={{
                width: 24,
                height: 24,
                tintColor: selectTab == 4 ? "#000" : "#8e8e8e",
              }}
            ></Image>
          </TouchableOpacity>
        </GestureHandlerRootView>
      </View>
    </View>
  );
};

export default Home;
