import React, { useEffect, useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import Header from "../common/Header";
import { products } from "../Products";
import {
  FlatList,
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import MyProductItem from "../common/MyProductItem";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, addToWishlist } from "../redux/actions/Actions";

const Main = () => {
  const dispatch = useDispatch();
  const [categoryList, setCategoryList] = useState([]);
  const [tshirtList, setTshirtList] = useState([]);
  const [jeansList, setJeansList] = useState([]);
  const [shoesList, setShoesList] = useState([]);

  useEffect(() => {
    //console.log(products);
    let tempCategory = [];
    products.category.map((item) => {
      tempCategory.push(item);
    });
    setCategoryList(tempCategory);
    setTshirtList(products.category[0].data);
    setJeansList(products.category[1].data);
    setShoesList(products.category[2].data);
  }, []);

  const items = useSelector((state) => state);
  console.log(items);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Header />
          <Image
            source={require("../Images/logo.png")}
            style={{
              width: "90%",
              height: 200,
              borderRadius: 10,
              alignSelf: "center",
              marginTop: 10,
            }}
          />
          <View style={{ marginTop: 20 }}>
            <FlatList
              data={categoryList}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity
                    style={{
                      padding: 10,
                      borderWidth: 1,
                      marginLeft: 20,
                      borderRadius: 20,
                    }}
                  >
                    <Text style={{ color: "#000" }}>{item.category}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <Text
            style={{
              marginTop: 20,
              marginLeft: 20,
              color: "#000",
              fontSize: 16,
              fontWeight: "600",
            }}
          >
            New T Shirts
          </Text>

          <View style={{ marginTop: 20 }}>
            <FlatList
              data={tshirtList}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => {
                return (
                  <MyProductItem
                    item={item}
                    onAddWishlist={(x) => {
                      dispatch(addToWishlist(x));
                    }}
                    onAddToCart={(x) => {
                      dispatch(addItemToCart(x));
                    }}
                  />
                );
              }}
            />
          </View>

          <Text
            style={{
              marginTop: 20,
              marginLeft: 20,
              color: "#000",
              fontSize: 16,
              fontWeight: "600",
            }}
          >
            Jeans
          </Text>

          <View style={{ marginTop: 20 }}>
            <FlatList
              data={jeansList}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => {
                return (
                  <MyProductItem
                    item={item}
                    onAddWishlist={(x) => {
                      dispatch(addToWishlist(x));
                    }}
                    onAddToCart={(x) => {
                      dispatch(addItemToCart(x));
                    }}
                  />
                );
              }}
            />
          </View>

          <Text
            style={{
              marginTop: 20,
              marginLeft: 20,
              color: "#000",
              fontSize: 16,
              fontWeight: "600",
            }}
          >
            Shoes
          </Text>

          <View style={{ marginTop: 20, marginBottom: 30 }}>
            <FlatList
              data={shoesList}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => {
                return (
                  <MyProductItem
                    item={item}
                    onAddWishlist={(x) => {
                      dispatch(addToWishlist(x));
                    }}
                    onAddToCart={(x) => {
                      dispatch(addItemToCart(x));
                    }}
                  />
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default Main;
