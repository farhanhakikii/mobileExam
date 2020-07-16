import React from "react";
import { StyleSheet, View, ImageBackground, Button, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import { useSelector, useDispatch } from "react-redux";
import TextUI from "../components/Text/TextUI";
import ProfileBG from "../../assets/images/profilePage.jpg"
import AsyncStorage from "@react-native-community/async-storage"

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  bgImage: {
    flex: 1
  },
  btnRad: {
    borderRadius: 12
  }
});

export default ({ navigation }) => {
  const userSelector = useSelector((state) => state.user);
  const dispatch = useDispatch()

  const logoutHandler = () => {
    AsyncStorage.removeItem("userData")
      .then((result) => {
        AsyncStorage.removeItem("userData");
        dispatch({
          type:"USER_LOGOUT"
        }) 
        console.log("Logout");
      })
      .catch((err) => {
        console.log("Error")
      })
  }

  return (
    <ImageBackground source={ProfileBG} style={{...styles.bgImage}}>
      <View style={{ ...styles.container}}>
        <TextUI size="lg" accent bold>
          {userSelector.username}
        </TextUI>
          <Button title="Logout" color={Colors.primaryColor} onPress={logoutHandler}/>
        </View>
    </ImageBackground>
  );
};