import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";
import { useIsFocused, useNavigation } from "@react-navigation/native";
// import TouchableOpacity from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import AddressReducers from "../redux/reducers/AddressReducers";
import { deleteAddress } from "../redux/actions/Actions";

let addressList = [];

const MyAddress = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const addressList = useSelector((state) => state.AddressReducers);
  const dispatch = useDispatch();

  useEffect(() => {}, [isFocused]);
  return (
    <SafeAreaView style={{ flex: 1 }}>
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
            My Address
          </Text>
          <TouchableOpacity
            style={{
              marginRight: 20,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 0.2,
              padding: 5,
              borderRadius: 10,
            }}
            onPress={() => {
              navigation.navigate("AddAddress");
            }}
          >
            <Text>Add Address</Text>
          </TouchableOpacity>
        </View>
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
                  <Text style={{ marginLeft: 20 }}>{"City: " + item.city}</Text>
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
                    dispatch(deleteAddress(index));
                  }}
                >
                  <Text>Delete Address</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default MyAddress;
