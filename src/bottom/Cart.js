import React, { useState } from "react";
import { View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import CartItem from "../common/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromCart } from "../redux/actions/Actions";
import CustomButton from "../common/CustomButton";
// import { useNavigate } from "react-router-dom";
import { useNavigation } from "@react-navigation/native";
import RazorpayCheckout from "react-native-razorpay";

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const cartData = useSelector((state) => state.Reducers1);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  // setCartList(cartData);

  return (
    <View style={{ flex: 1 }}>
      {cartData.length > 0 ? (
        <FlatList
          data={cartData}
          renderItem={({ item, index }) => {
            return (
              <CartItem
                onAddWishlist={(x) => {
                  dispatch(addToWishlist(x));
                }}
                item={item}
                onRemoveItem={() => {
                  dispatch(removeFromCart(index));
                }}
              />
            );
          }}
        />
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>No Items Added in Cart</Text>
        </View>
      )}
      {cartData.length > 0 ? (
        <View style={{ marginBottom: 80 }}>
          <CustomButton
            bgColor={"green"}
            textColor={"#fff"}
            title={"CheckOut"}
            onPress={() => {
              navigation.navigate("Checkout");
            }}
          ></CustomButton>
        </View>
      ) : null}
    </View>
  );
};

export default Cart;
