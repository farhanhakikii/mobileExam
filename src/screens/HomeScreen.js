import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Dimensions, FlatList, SafeAreaView } from "react-native";
import H1 from "../components/Text/H1";
import TextUI from "../components/Text/TextUI";
import Axios from "axios";
import { API_URL } from "../constants/API";
import RestaurantCard from "./RestaurantCard";
import Colors from "../constants/Colors";
import { useSelector } from "react-redux";
import { Icon } from "native-base";

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  header: {
    height: 35,
    flexDirection: "row",
    paddingHorizontal: 18,
    alignItems: "center",
    marginTop: 25,
    justifyContent: "space-between",
    backgroundColor: Colors.backgroundColor
  }
});

export default ({ navigation }) => {
  const [restaurantList, setRestaurantList] = useState([]);
  const userSelector = useSelector((state) => state.user);

  useEffect(() => {
    Axios.get(`${API_URL}/restaurants`)
      .then((res) => {
        console.log(res.data);
        setRestaurantList(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderRestaurants = ({ item }) => {
    return <RestaurantCard navigation={navigation} data={item} />;
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.primaryColor }}>
      <SafeAreaView />
        {/* <TextUI style={{textAlign: "right", ...styles.header }}>
        </TextUI> */}
          <View style={{...styles.header}}>
            <Icon type="AntDesign" name="user" style={{color: "white"}}/>
            <Text style={{ fontSize: 25, color: "white" }}>Halo, {userSelector.username}</Text>
          </View>
      <FlatList
        ListHeaderComponent={() => {
          return <H1 bold>List Restaurant</H1>;
        }}
        ListHeaderComponentStyle={{ marginHorizontal: 15 }}
        contentContainerStyle={{ marginTop: 5 }}
        data={restaurantList}
        renderItem={renderRestaurants}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};