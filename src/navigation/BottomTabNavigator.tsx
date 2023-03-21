import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Home from '@Screens/home/Home';
import Profile from '@Screens/profile/Profile';
import Setting from '@Screens/setting/Setting';
import { Platform, StyleSheet, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { Image } from 'react-native';
import { Avatar } from 'react-native-paper';
import Notification from '@Screens/notification/Notification';

const Tab = createBottomTabNavigator();

function TabNavigation(props: any) {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {

            if (route.name === 'Où donner') {
                return <Entypo name='location' size={size} color={'#24C869'} />;
            } else if (route.name === 'Puis-je donner') {
                return <MaterialCommunityIcons name='chat-question-outline' size={size} color={'#24C869'} />;
            } else if(route.name === 'Mes RDV') {
                return <FontAwesome5 name='book-medical' size={size} color={'#24C869'} />;
            } else if(route.name === 'Notifications') {
              return <Ionicons name='notifications-outline' size={size} color={'#24C869'} />;
            }
            },
            tabBarActiveTintColor: '#fbc531',
            tabBarInactiveTintColor: '#24C869',
            ///tabBarStyle: { backgroundColor: '#e84118' },
        })}
    >
      <Tab.Screen name="Où donner" component={Home} options={{
        headerShown: false,
        //title:'Où donner',
        headerLeft: () => {
            return (
              <TouchableOpacity onPress={() => navigation.openDrawer()} activeOpacity={1} >
                <Avatar.Image size={50} source={require('../../assets/images/cnts.png')} />
              </TouchableOpacity>
            );
          },
     }} />
      <Tab.Screen name="Puis-je donner" component={Profile} options={{title:'Puis-je donner', headerShown: false}} />
      <Tab.Screen name="Notifications" component={Notification} options={{title:'Notifications', headerShown: false}} />
      <Tab.Screen name="Mes RDV" component={Setting} options={{title:'Mes RDV', headerShown: false}} />
    </Tab.Navigator> 
  );
}

export default function BottomTabNavigator() {
    return (
        <TabNavigation />
    )
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    borderRadius: 50
    },
});