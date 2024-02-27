import React from "react";
import { useState, useEffect } from "react";
import { StyleSheet, Text, TextInput, View, Image } from "react-native";
import CustomButton from "../common/CustomButton";
import CustomTextInput from "../common/CustomTextInput";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loader from "../common/Loader";
const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [badEmail, setBadEmail] = useState(false);
  const [badPassword, setBadPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const validate = () => {
    setModalVisible(true);
    if (email == "") {
      setModalVisible(false);
      setBadEmail(true);
    } else {
      setBadEmail(false);

      if (password == "") {
        setModalVisible(false);
        setBadPassword(true);
      } else {
        setTimeout(() => {
          setBadPassword(false);
          getData();
        }, 2000);
      }
    }
  };

  const getData = async () => {
    const mEmail = await AsyncStorage.getItem("EMAIL");
    const mPassword = await AsyncStorage.getItem("PASSWORD");
    console.log(mEmail, mPassword);
    if (email == mEmail && password == mPassword) {
      setModalVisible(false);
      navigation.navigate("Home");
    } else {
      setModalVisible(false);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("../Images/logo.png")}
        style={{ width: 60, height: 60, alignSelf: "center", marginTop: 100 }}
      />

      <Text
        style={{
          color: "#000",
          fontWeight: "600",
          fontSize: 30,
          marginTop: 10,
          alignSelf: "center",
        }}
      >
        Login
      </Text>
      <CustomTextInput
        placeholder={"Enter email"}
        icon={require("../Images/logo.png")}
        value={email}
        onChangeText={(txt) => {
          setEmail(txt);
        }}
      />
      {badEmail === true && (
        <Text style={{ marginTop: 10, marginLeft: 30, color: "red" }}>
          Please Enter Email ID
        </Text>
      )}
      <CustomTextInput
        type={"password"}
        placeholder={"EnterPassword"}
        icon={require("../Images/logo.png")}
        value={password}
        onChangeText={(txt) => {
          setPassword(txt);
        }}
      />
      {badPassword === true && (
        <Text style={{ marginTop: 10, marginLeft: 30, color: "red" }}>
          Please Enter Email ID
        </Text>
      )}
      <CustomButton
        title={"Login"}
        bgColor={"#000"}
        textColor={"#fff"}
        onPress={() => {
          validate();
        }}
      />
      <Text
        style={{
          fontSize: 18,
          fontWeight: "800",
          alignSelf: "center",
          marginBottom: 100,
          textDecorationLine: "underline",
        }}
        onPress={() => {
          navigation.navigate("SignUp");
        }}
      >
        Create New Account
      </Text>
      <Loader modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
  );
};

export default Login;
