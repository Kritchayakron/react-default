/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Provider as ReduxProvider} from 'react-redux';
import UserList from './components/UserList';
import store from './store';
import { StyleSheet, Text, View, AppRegistry } from "react-native";
import { NativeRouter, Routes,Route, Link } from "react-router-native";
import RoutesPath from './RoutesPath';


function App(): JSX.Element {
  //console.log("test-debug");
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ReduxProvider store={store}>
          {/* <Text></Text>
          <UserList /> */}
          
          <NativeRouter>
          
          <View style={styles.container}>
            <View style={styles.nav}>
              <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
                <Text>Home</Text>
              </Link>
              <Link
                to="/about"
                underlayColor="#f0f4f7"
                style={styles.navItem}
              >
                <Text>About</Text>
              </Link>
              
            </View>
            <RoutesPath />
           
            </View>
          </NativeRouter>
        </ReduxProvider>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  },
  header: {
    fontSize: 20
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  subNavItem: {
    padding: 5
  },
  topic: {
    textAlign: "center",
    fontSize: 15
  }
});

export default App;