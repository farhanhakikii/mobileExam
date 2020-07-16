import React from "react";
import { StyleSheet, View, ImageBackground, Dimensions } from "react-native";
import WelcomeBG from "../../assets/images/welcomePage.jpeg";
import H1 from "../components/Text/H1";
import TextUI from "../components/Text/TextUI";
import Button from "../components/Button/Button";
import DarkOverlay from "../components/General/DarkOverlay";
import { Icon } from 'native-base';
import { Colors } from "react-native/Libraries/NewAppScreen";

const { height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginTop: height * (314 / 812),
    alignItems: "center"
  },
  bgImage: {
    flex: 1,
  },
});

export default ({ navigation }) => {
  return (
    <ImageBackground style={{ ...styles.bgImage }} source={WelcomeBG}>
      <DarkOverlay />
      <View style={styles.container}>
        <H1 style={{ fontSize: 44, lineHeight: 50 }} bold>
          TomatoApp
        </H1>
        <Icon type="FontAwesome5" name="pizza-slice" style={{fontSize: 100, color: "white", marginTop: 20}}/>
        <Button
          onPress={() => navigation.navigate("Login")}
          size="lg"
          type="secondary"
          containerStyle={{ marginTop: 44, marginBottom: 10 }}
        >
          Log In
        </Button>
      </View>
    </ImageBackground>
  );
};