import React from "react";
import { View, Text } from "react-native";
import { addItemToCart, removeFromWishlist } from "../redux/actions/Actions";
import { useState } from "react";
import CartItem from "../common/CartItem";
// import { UseSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch, useSelector } from "react-redux";
// import { useSelector } from "react-redux/es/hooks/useSelector";
import Reducers2 from "../redux/reducers/Reducers2";
import { FlatList } from "react-native-gesture-handler";

const Wishlist = () => {
  const [wishList, setWishList] = useState([]);

  const cartData = useSelector((state) => state.Reducers2);
  const dispatch = useDispatch();
  // setCartList(cartData);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={cartData}
        renderItem={({ item, index }) => {
          return (
            <CartItem
              item={item}
              isWishList={"swe"}
              onRemoveFromWishlist={() => {
                dispatch(removeFromWishlist(index));
              }}
              onAddToCart={(x) => {
                dispatch(addItemToCart(x));
              }}
            />
          );
        }}
      />
    </View>
  );
};

export default Wishlist;
