import React from "react";
import { Text, View } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomTabNavigator from "./BottomTabNavigator";
import Color from "@Utils/Color";

const Drawer = createDrawerNavigator();

function DrawerNavigate() {
  return (
    <Drawer.Navigator screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: Color.primary,
        drawerActiveTintColor: Color.white,
        drawerLabelStyle: {
          marginLeft: -20,
        },
      }}>
      <Drawer.Screen name="Home" component={BottomTabNavigator} options={{
          title: 'Home',
          drawerIcon: ({focused, color, size}) => (
            <Icon name="home-sharp" size={18} color={color} />
          ),
        }} />
    </Drawer.Navigator>
  );
}

export default function DrawerNavigator() {
    return (
        <DrawerNavigate />
    )
}