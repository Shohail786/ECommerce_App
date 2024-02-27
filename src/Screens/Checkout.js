import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
// import { UseSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../common/CustomButton";
import RazorpayCheckout from "react-native-razorpay";
import { useNavigation } from "@react-navigation/native";

const Checkout = () => {
  const cartData = useSelector((state) => state.Reducers1);
  const dispatch = useDispatch();
  const addressList = useSelector((state) => state.AddressReducers);
  const [selectedAddress, setSelectedAddress] = useState("");
  const navigation = useNavigation();
  const getData = () => {
    let tempTotal = 0;
    carData.map((item) => {
      tempTotal = tempTotal + item.price;
    });
    return tempTotal;
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View>
          <FlatList
            data={cartData}
            renderItem={({ item, index }) => {
              return (
                <View
                  style={{ width: "100%", height: 70, flexDirection: "row" }}
                >
                  <Image
                    source={item.image}
                    style={{ width: 70, height: 70, marginLeft: 10 }}
                  />
                  <View style={{ padding: 10 }}>
                    <Text style={{ marginTop: 10 }}>{item.name}</Text>
                    <Text style={{ marginTop: 10 }}>{item.price}</Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: 20,
            paddingRight: 20,
            marginTop: 30,
            height: 50,
            borderTopWidth: 0.5,
            borderTopColor: "#8e8e8e",
          }}
        >
          <Text>Total :</Text>
          <Text>{getTotal}</Text>
        </View>
        <View>
          <FlatList
            data={addressList}
            renderItem={({ item, index }) => {
              return (
                <View
                  style={{
                    width: "100%",

                    borderWidth: 0.2,
                    borderColor: "#8e8e8e",
                    alignSelf: "center",

                    justifyContent: "center",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <View>
                    <Text style={{ marginLeft: 20 }}>
                      {"City: " + item.city}
                    </Text>
                    <Text style={{ marginLeft: 20 }}>
                      {"Building: " + item.building}
                    </Text>
                    <Text style={{ marginLeft: 20, marginBottom: 10 }}>
                      {"Pincode: " + item.pincode}
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={{ borderWidth: 0.2, padding: 7, marginRight: 20 }}
                    onPress={() => {
                      setSelectedAddress(
                        "City :" +
                          item.city +
                          " " +
                          ",Building :" +
                          item.building +
                          " " +
                          ",Pincode :" +
                          item.pincode
                      );
                    }}
                  >
                    <Text>Select Address</Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
        <Text style={{ margin: 20, fontSize: 18 }}>Select Address</Text>
        <Text style={{ margin: 20, fontSize: 18 }}>
          {selectedAddress == ""
            ? "Please Select Address From Above List"
            : { selectedAddress }}
        </Text>
        <CustomButton
          bgColor={"#000"}
          textColor={"#fff"}
          title={"Place Order"}
          onPress={() => {
            var options = {
              description: "Credits towards consultation",
              image: "https://i.imgur.com/3g7nmJC.png",
              currency: "INR",
              key: "", // Your api key
              amount: "" + parseInt(getTotal() * 100) + "",
              name: "foo",
              prefill: {
                email: "rayugaaldrago786@gmail.com",

                contact: "9191919191",
                name: "Razorpay Software",
              },
              theme: { color: "#F37254" },
            };
            RazorpayCheckout.open(options)
              .then((data) => {
                // handle success
                alert(`Success: ${data.razorpay_payment_id}`);
                dispatch(
                  addOrder({
                    items: cartData,
                    total: getTotal,
                    address: selectedAddress,
                  })
                );
                navigation.navigate("OrderSuccess", {
                  status: "success",
                });
              })
              .catch((error) => {
                // handle failure
                // alert(`Error: ${error.code} | ${error.description}`);
                navigation.navigate("OrderSuccess", {
                  status: "failed",
                });
              });
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Checkout;
