import React from "react";
import { View, Dimensions, Image, TouchableOpacity } from "react-native";
import TextUI from "../components/Text/TextUI";
import Tagline from "../components/Text/Tagline";
import Colors from "../constants/Colors";
import ImageScale from "react-native-scalable-image";

const { width } = Dimensions.get("screen");

export default ({ navigation, data }) => {
  console.log(data.User);
  return (
    <TouchableOpacity onPress={() => {
      navigation.navigate("DetailScreen", {restaurantDetail: data})
    }}>
      <View 
          style={{ 
              backgroundColor: Colors.backgroundColor, 
              width: width - 30, 
              marginHorizontal: 15, 
              borderRadius: 6, 
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 3 },
              shadowOpacity: 0.5, 
              shadowRadius: 8, 
              elevation: 6, 
              marginVertical: 10 }}>
        <ImageScale source={{ uri: data.image }} style={{ borderTopLeftRadius: 6, borderTopRightRadius: 6 }} width={width - 30}/>
        <View style={{ paddingHorizontal: 13 }}>
          <View
            style={{ flexDirection: "row", alignItems: "center", marginTop: 11 }}>
            <View style={{ marginLeft: 10 }}>
            <TextUI style={{ marginBottom: 4 }}>
                {data.restaurantName}
              </TextUI>
              <TextUI style={{ marginBottom: 8 }}>
                Rating : {data.rating} / 5
              </TextUI>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};