import React from 'react';
import{View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';


export default class DetailsScreen extends React.Component {

render(){

    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.goBack()} title="Go back to Login" />
      </View>
    )
}


}


const styles = StyleSheet.create({ 
container:{
    flex:1,
    marginTop:5,
    backgroundColor:"cyan"
},
text:{
    color:"yellow",
    textAlign:"center",
    fontSize:"50px",
    fontWeight:"bold",
  }


})