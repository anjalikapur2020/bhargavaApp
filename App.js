import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import { StyleSheet, Text, View } from 'react-native';
import MyDrawer from './Navigation/Drawer';

export default class App extends React.Component {

  render(){
    return(
      <NavigationContainer>
        <MyDrawer/>
              </NavigationContainer>
    )
  }


}


const styles= StyleSheet.create({
container:{
  flex:1,
  margin:5,
backgroundColor:"purple"},
  text:{
    color:"red",
    textAlign:"center",
    fontSize:"50px",
    fontWeight:"bold"
  }

})


