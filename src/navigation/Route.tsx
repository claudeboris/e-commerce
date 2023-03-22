import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "@Screens/login/Login";
import Splash from "@Screens/Splash";
import Register from "@Screens/register/Register";
import ResetPassword from "@Screens/resetPassword/ResetPassword"
import DrawerNavigator from "./DrawerNavigator";
import FaireDon from "@Screens/faireDon/FaireDon";

const MainStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator initialRouteName="Splash">
      <MainStack.Screen name="Splash" component={Splash} options={{title:'splash', headerShown: false}} />
      <MainStack.Screen name="Login" component={Login} options={{title:'login', headerShown: false}} />
      <MainStack.Screen name="Register" component={Register} options={{title:'register', headerShown: false}} />
      <MainStack.Screen name="ResetPassword" component={ResetPassword} options={{title:'ResetPassword', headerShown: false}} />
      <MainStack.Screen name="Or Donate" component={DrawerNavigator} options={{title:'OuDonner', headerShown: false}} />
      <MainStack.Screen name="Faire un don" component={FaireDon} options={{title:'Faire un don', headerShown: false}} />
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