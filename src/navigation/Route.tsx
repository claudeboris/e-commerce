import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "@Screens/login/Login";
import Splash from "@Screens/Splash";
import Register from "@Screens/register/Register";
import DrawerNavigator from "./DrawerNavigator";

const MainStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator initialRouteName="Splash">
      <MainStack.Screen name="Splash" component={Splash} options={{title:'splash', headerShown: false}} />
      <MainStack.Screen name="Login" component={Login} options={{title:'login', headerShown: false}} />
      <MainStack.Screen name="Register" component={Register} options={{title:'register', headerShown: false}} />
      <MainStack.Screen name="Home" component={DrawerNavigator} options={{title:'Home', headerShown: false}} />
    </MainStack.Navigator>
  );
}


export default function Route(): JSX.Element {
    return (
        <NavigationContainer>
            <MainStackScreen />
        </NavigationContainer>
    )
}