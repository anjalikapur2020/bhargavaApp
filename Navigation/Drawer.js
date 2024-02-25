import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator,DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer';

import { StyleSheet, Text, View } from 'react-native';
import DetailsScreen from '../Screens/Details';
import LoginScreen from '../Screens/Login';

const Drawer=createDrawerNavigator()

export default function MyDrawer(){
    return(
        <Drawer.Navigator initialRouteName='Details'>
            <Drawer.Screen name="Details" component={DetailsScreen}/>
            <Drawer.Screen name="Login" component={LoginScreen}/>
        </Drawer.Navigator>
    )
}
  
//   npm install @react-navigation/native
// npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
// npm install @react-navigation/drawer




