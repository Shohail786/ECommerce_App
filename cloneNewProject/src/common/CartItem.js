import React from "react";
import { Text, View, TouchableOpacity } from "react-redux";
import { GestureHandlerRootView } from "react-native-gesture-handler";

function CartItem({
  item,
  onRemoveItem,
  onAddWishlist,
  isWishList,
  onRemoveFromWishList,
  onAddToCart,
}) {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View
        style={{
          width: "90%",
          height: 200,
          borderRadius: 10,
          elevation: 5,
          backgroundColor: "#fff",
          marginLeft: 20,
          marginBottom: 10,
        }}
      >
        <Image
          source={item.image}
          style={{
            width: "100%",
            height: "50%",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        />
        <Text
          style={{
            marginLeft: 10,
            marginTop: 10,
            fontSize: 18,
            fontWeight: "600",
          }}
        >
          {item.name}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingLeft: 10,
            paddingRight: 10,
          }}
        >
            <Text style={{ fontSize:18,fontWeight:"600"}}>{item.price}</Text>

            {isWishList ? (
                <TouchableOpacity
                  style={{
                    borderWidth:1,
                    borderRadius:10,
                    paddingLeft:10,
                    paddingRight:10,
                    paddingBottom:5,
                    paddingTop:5,
                  }}
                  onPress={()=>{
                    onAddToCart(item)
                  }}
                >
                <Text style={{color:"#000"}}>Add to Cart</Text>
                </TouchableOpacity>
            ):(
                <TouchableOpacity
                style={{
                    borderWidth:1,
                    borderRadius:10,
                    paddingLeft:10,
                    paddingRight:10,
                    paddingBottom:5,
                    paddingTop:5,
                }}
                onPress={()=>{
                    onRemoveItem()
                }}
                >
                <Text>Remove Item</Text>
                </TouchableOpacity>
            )}
        </View>
        {wishList?(
            <TouchableOpacity 
            style={{
                width:40,
                height:40,
                backgroundColor:"#fff",
                borderRadius:20,
                elevation:5,
                position:"absolute",
                top:10,
                right:10,
                justifyContent:"center",
                alignItems:"center"
                }}
                onPress={()=>{
                    onRemoveFromWishList(item);
                }}
            >
                <Image></Image>
            </TouchableOpacity>
        ):(null)}
      </View>
    </GestureHandlerRootView>
  );
}

export default CartItem;
