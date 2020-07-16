import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Dimensions,
  Text
} from "react-native";
import TextUI from "../components/Text/TextUI";
import Colors from "../constants/Colors";
import Image from "react-native-scalable-image";
//import { Icon, Button } from 'native-base';
import { Icon } from 'react-native-elements';


const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  header: {
    height: 40,
    flexDirection: "row",
    paddingHorizontal: 18,
    alignItems: "center",
    marginTop: 18,
    backgroundColor: Colors.primaryColor,
    textAlign: "left"
  },
  commentContainer: {
    paddingHorizontal: 30,
    marginTop: 12,
  },
  marginBackBtn: {
    marginRight: 20
  }
});

export default (props, navigation) => {
  const { restaurantDetail } = props.route.params;
  return (
    <View style={{ flex: 1, backgroundColor: Colors.backgroundColor }}>
      <SafeAreaView />
        <View style={{...styles.header}}>
        {/* <Icon name='arrow-back' type='AntDesign' color='white' onPress={() => navigation.navigate("HomeScreen")} /> */}
        <Icon name='arrow-back' type='AntDesign' color='white' onPress={() => alert("Error Gabisa Navigate Ke HomeScreen")}/>
          <Text style={{ fontSize: 25, color: "white"}}> {restaurantDetail.restaurantName}</Text>
        </View>
        <Image style={{ maxHeight: 300 }} width={width} source={{ uri: restaurantDetail.image }}/>
        <View style={{ ...styles.commentContainer }}>
        <TextUI size="sm">
            Cuisine : {restaurantDetail.cuisine}
          </TextUI>
          <TextUI size="sm">
            Address : {restaurantDetail.address}
          </TextUI>
          <TextUI size="sm">
            Open Time : {restaurantDetail.openTime}.00
          </TextUI>
          <TextUI size="sm">
            Close Time : {restaurantDetail.closeTime}.00
          </TextUI>
          <TextUI size="sm">
            Cost For Two Person : {restaurantDetail.costForTwo}
          </TextUI>
          <TextUI size="sm">
            Currency : {restaurantDetail.currency}
          </TextUI>
          <TextUI size="sm">
            Created At : {restaurantDetail.createdAt}
          </TextUI>
          <TextUI size="sm">
            Update At : {restaurantDetail.updatedAt}
          </TextUI>
        </View>
    </View>
  );
};