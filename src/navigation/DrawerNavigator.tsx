import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
//import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo'
import BottomTabNavigator from "./BottomTabNavigator";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Color from "@Utils/Color";
import { Avatar, Caption, Switch, Title, TouchableRipple, useTheme } from "react-native-paper";
import FaireDon from "@Screens/faireDon/FaireDon";

const Drawer = createDrawerNavigator();

function Article() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Article Screen</Text>
    </View>
  );
}

function CustomDrawerContent(props: any) {
  const paperTheme = useTheme();

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView >
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection:'row',marginTop: 15, marginBottom: 10}}>
               <Avatar.Image size={80} source={require('../../assets/images/cnts.png')} />
               <View style={{marginLeft:15, flexDirection:'column'}}>
                  <Title style={styles.title}>John Doe</Title>
                  <Caption style={styles.caption}>john@gmail.com</Caption>
              </View>
            </View>
          </View>
          {/* <DrawerItemList {...props} />   */}
          <View>
           <View style={{paddingVertical: 50}}>
            <DrawerItem 
                icon={({color, size}) => (
                  <Entypo name="drop" size={20} color="black" /> 
                )}
                label="Faire un don"
                onPress={() => {props.navigation.navigate('Faire un don')}}
            />
            <DrawerItem 
                icon={({color, size}) => (
                    <AntDesign 
                    name="setting" 
                    color={color}
                    size={size}
                    />
                )}
                label="Paramètre"
                onPress={() => {props.navigation.navigate('Home')}}
            />
          </View>
          </View>
          <View>
              <Text style={{marginLeft: 5}}>Preférences</Text>
              <View style={styles.preference}>
                  <Text>Couleur noir</Text>
                  <View pointerEvents="none">
                      <Switch value={paperTheme.dark}/>
                  </View>
              </View>
            </View>
          {/* <TouchableRipple onPress={() => console.log('ok')}>
            <View>
              <Text>Preferences</Text>
              <View style={styles.preference}>
                  <Text>Dark Theme</Text>
                  <View pointerEvents="none">
                      <Switch value={paperTheme.dark}/>
                  </View>
              </View>
            </View>
          </TouchableRipple> */}
        </View>
      </DrawerContentScrollView>
      <View style={styles.bottomDrawerSection}>
        <DrawerItem 
            icon={({color, size}) => (
                <MaterialCommunityIcons 
                name="exit-to-app" 
                color={color}
                size={size}
                />
            )}
            label="Déconnexion"
            onPress={() => console.log('logout')}
        />
      </View>
    </View>
  );
}
function DrawerNavigate() {
  return (
    <Drawer.Navigator 
    drawerContent={(props) => <CustomDrawerContent {...props} />}
    screenOptions={{
      headerShown: false,
      drawerActiveBackgroundColor: Color.primary,
      drawerActiveTintColor: Color.white,
      drawerLabelStyle: {
        marginLeft: -20,
      },
      }}>
      <Drawer.Screen name="OuDonner" component={BottomTabNavigator} options={{
          title: 'OuDonner',
          drawerIcon: ({focused, color, size}) => (
            <Ionicons name="home-sharp" size={18} color={color} />
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

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
    borderTopColor: '#f4f4f4',
    borderBottomWidth: 0.5,
    //marginBottom: 50
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    marginTop: 5
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1
},
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
})