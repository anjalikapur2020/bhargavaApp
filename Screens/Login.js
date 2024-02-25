import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';


import { StyleSheet, Text, View,Button } from 'react-native';

export default class LoginScreen extends React.Component {

  render(){
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => navigation.navigate('Details')}
          title="Go to Detail"
        />
      </View>
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


