import React, { useState } from "react";
import { StyleSheet, View, ImageBackground, TextInput, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView } from "react-native";
import Button from "../components/Button/Button";
import LoginBG from "../../assets/images/loginPage.jpg"
import DarkOverlay from "../components/General/DarkOverlay";
import TextUI from "../components/Text/TextUI";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-community/async-storage";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
  },
  contentContainer: {
    paddingHorizontal: 30,
  },
  welcomeText: {
    fontSize: 34,
    height: 40,
  },
  loginText: {
    marginTop: 12,
  },
});

export default (props) => {
  const [username, setUsername] = useState("");

  const dispatch = useDispatch();
  const userSelector = useSelector((state) => state.user);

  const loginBtnHandler = () => {
    //const { isLogin } = userSelector
    //if(userSelector.username == username){
        AsyncStorage.setItem("userData", JSON.stringify({ username, isLogin: true }))
        dispatch({
            type: "USER_LOGIN",
            payload: { username, isLogin: true }
        });
    //} else {
    //    alert("Username Salah.")
    //}
  };

  return (
    <ImageBackground source={LoginBG} style={{ ...styles.bgImage }}>
      <DarkOverlay />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView behavior="padding" style={{ justifyContent: "center", flex: 1 }}>
          <View style={{ ...styles.contentContainer }}>
            <TextUI style={{ ...styles.welcomeText }}>
              Welcome Back
            </TextUI>
            <TextUI style={{ ...styles.loginText }}>
              Login to your account
            </TextUI>
            <View style={{ borderRadius: 22, paddingVertical: 11, paddingHorizontal: 20, justifyContent: "center", marginTop: 58 }}>
              <View style={{ backgroundColor: "white", opacity: 0.2, borderRadius: 22, ...StyleSheet.absoluteFillObject }}/>
                <TextInput
                    autoCapitalize="none"
                    placeholderTextColor="lightgrey"
                    style = {{
                        fontSize: 17,
                        color: "white",
                        lineHeight: 19,
                    }}
                    placeholder="Username"
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                />
            </View>
            <Button onPress={loginBtnHandler} containerStyle={{ marginTop: 40 }} size="lg">
              <TextUI style={{...styles.loginText}}>LOGIN</TextUI>
            </Button>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};