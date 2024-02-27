import React, { useEffect } from "react";
import { View, Text, Image, TextInput, ScrollView } from "react-native";
import CustomTextInput from "../common/CustomTextInput";
import CustomButton from "../common/CustomButton";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import AsyncStorage from "@react-native-async-storage/async-storage";
const SignUp = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setconfPassword] = useState("");
  const [mobile, setMobile] = useState();
  const [badEmail, setBadEmail] = useState(false);
  const [badMobile, setBadMobile] = useState(false);
  const [badName, setBadName] = useState(false);
  const [badconfPassword, setBadconfPassword] = useState(false);
  const [badPassword, setBadPassword] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const validate = () => {
    setButtonDisabled(true);
    if (name == "") {
      setBadName(true);
      setButtonDisabled(false);
    } else {
      setBadName(false);
      if (email == "") {
        setBadEmail(true);
        setButtonDisabled(false);
      } else {
        setBadEmail(false);
        if (mobile == "") {
          setBadMobile(true);
          setButtonDisabled(false);
        } else {
          setBadMobile(false);
          if (password == "") {
            setBadPassword(true);
            setButtonDisabled(false);
          } else {
            setBadPassword(false);
            if (confPassword == "") {
              setBadconfPassword(true);
              setButtonDisabled(false);
            } else {
              setBadconfPassword(false);

              setTimeout(() => {
                saveData();
              }, 3000);
            }
          }
        }
      }
    }
  };

  const saveData = async () => {
    if (
      badName == false &&
      badEmail == false &&
      badMobile == false &&
      badPassword == false &&
      badconfPassword == false
    ) {
      await AsyncStorage.setItem("NAME", name);
      await AsyncStorage.setItem("EMAIL", email);
      await AsyncStorage.setItem("MOBILE", mobile);
      await AsyncStorage.setItem("PASSWORD", password);
      navigation.goBack();
    }
  };

  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <View style={{ flex: 1 }}>
        <Image
          source={require("../Images/logo.png")}
          style={{ width: 60, height: 60, alignSelf: "center", marginTop: 50 }}
        />
        <Text
          style={{
            marginTop: 50,
            alignSelf: "center",
            fontSize: 24,
            fontWeight: "600",
            color: "#000",
          }}
        >
          Create New Account
        </Text>
        <CustomTextInput
          type={"text"}
          placeholder={"Enter your Name"}
          icon={require("../Images/logo.png")}
          value={name}
          onChangeText={(txt) => {
            setName(txt);
          }}
        />
        {badName === true && (
          <Text style={{ marginTop: 10, marginLeft: 30, color: "red" }}>
            Please Enter Name
          </Text>
        )}
        <CustomTextInput
          type={"email"}
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
          type={"number"}
          placeholder={"Enter your Phone Number"}
          keyboardType={"number-pad"}
          icon={require("../Images/logo.png")}
          value={mobile}
          onChangeText={(txt) => {
            setMobile(txt);
          }}
        />
        {badMobile === true && (
          <Text style={{ marginTop: 10, marginLeft: 30, color: "red" }}>
            Please Enter Mobile Number
          </Text>
        )}
        <CustomTextInput
          type={"password"}
          placeholder={"Enter your Password"}
          icon={require("../Images/logo.png")}
          value={password}
          onChangeText={(txt) => {
            setPassword(txt);
          }}
        />
        {badPassword === true && (
          <Text style={{ marginTop: 10, marginLeft: 30, color: "red" }}>
            Please Enter Correct Password
          </Text>
        )}
        <CustomTextInput
          type={"password"}
          placeholder={"Enter your Confirm Password"}
          icon={require("../Images/logo.png")}
          value={confPassword}
          onChangeText={(txt) => {
            setconfPassword(txt);
          }}
        />
        {badconfPassword === true && (
          <Text style={{ marginTop: 10, marginLeft: 30, color: "red" }}>
            Please Enter Confirm Password
          </Text>
        )}
        <CustomButton
          title={"SignUp"}
          bgColor={"#000"}
          textColor={"#fff"}
          onPress={() => {
            validate();
          }}
          disabled={buttonDisabled}
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
            navigation.goBack();
          }}
        >
          Already Have Account
        </Text>
      </View>
    </ScrollView>
  );
};

export default SignUp;
