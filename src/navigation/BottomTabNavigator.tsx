import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '@Screens/home/Home';
import Profile from '@Screens/profile/Profile';
import Setting from '@Screens/setting/Setting';
import { Platform, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function TabNavigation(props: any) {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {

            if (route.name === 'Home') {
                return <Ionicons name='ios-home-outline' size={size} color={'white'} />;
            } else if (route.name === 'Setting') {
                return <Ionicons name='ios-settings-outline' size={size} color={'white'} />;
            } else if(route.name === 'Profile') {
                return <AntDesign name='user' size={size} color={'white'} />;
            }
            },
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'white',
            tabBarStyle: { backgroundColor: '#e84118' },
        })}
    >
      <Tab.Screen name="Home" component={Home} options={{
        title:'Home',
        headerRight: () => {
            return (
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Icon
                  name={Platform.OS === 'ios' ? 'ios-menu' : 'md-menu'}
                  size={30}
                  color={'black'}
                  style={{marginRight: 10}}
                />
              </TouchableOpacity>
            );
          },
     }} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator> 
  );
}

export default function BottomTabNavigator() {
    return (
        <TabNavigation />
    )
}