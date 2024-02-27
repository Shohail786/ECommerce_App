import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
//import TouchableOpacity from "react-native-gesture-handler";
import CustomTextInput from "../common/CustomTextInput";
import CustomButton from "../common/CustomButton";
import { useDispatch } from "react-redux";
import { addAddress } from "../redux/actions/Actions";
import { useState } from "react";

const AddAddress = () => {
  const navigation = useNavigation();
  const [city, setCity] = useState("");
  const [building, setBuilding] = useState("");
  const [pin, setPin] = useState("");
  const dispatch = useDispatch();

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
          <TouchableOpacity
            style={{
              width: 30,
              height: 30,
              marginLeft: 20,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 0.2,
              padding: 5,
              borderRadius: 10,
            }}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Image
              source={require("../Images/back.png")}
              style={{ width: 24, height: 24 }}
            ></Image>
          </TouchableOpacity>
        </View>
        <CustomTextInput
          placeholder={"Enter City Name"}
          icon={require("../Images/city.png")}
          value={city}
          onChangeText={(txt) => {
            setCity(txt);
          }}
        />

        <CustomTextInput
          placeholder={"Enter Building Name"}
          icon={require("../Images/building.png")}
          value={building}
          onChangeText={(txt) => {
            setBuilding(txt);
          }}
        />

        <CustomTextInput
          placeholder={"Enter Pincode"}
          icon={require("../Images/password.png")}
          value={pin}
          onChangeText={(txt) => {
            setPin(txt);
          }}
        />
        <CustomButton
          title={"Save Address"}
          bgColor={"#000"}
          textColor={"#fff"}
          onPress={() => {
            if (city !== "" && building !== "" && pin !== "") {
              dispatch(
                addAddress({ city: city, building: building, pincode: pin })
              );
              navigation.goBack();
            }
          }}
        />
      </View>
    </GestureHandlerRootView>
  );
};

export default AddAddress;
