import "react-native-gesture-handler";
import React from "react";
import { StyleSheet } from "react-native";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { Provider} from "react-redux";
import reducers from "./src/redux/reducers";
import RootNavigator from "./src/navigators/RootNavigator";

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});