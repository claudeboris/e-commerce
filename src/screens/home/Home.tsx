import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, StyleSheet, TouchableOpacity, StatusBar, Dimensions, KeyboardAvoidingView, Platform    } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
///import Icon from 'react-native-vector-icons/FontAwesome'
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
//import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Constants from "expo-constants"
import {API_KEY} from '@env'
import ci from '../../data/ci.json'


const { width, height } = Dimensions.get("window");


const INITIAL_POSITION = {
    latitude: 7.539989,
    longitude: -5.54708,
    latitudeDelta: 8,
    longitudeDelta: 8,
};

export default function Home({navigation}) {

    const [hospitals, setHospitals] = useState([]);

    const goBack = () => {
        navigation.navigate('FaireDon')
    }

    /*useEffect(() => {
        const fetchHospitals = async () => {
          const response = await fetch(
            'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=5.357529,-3.959830&radius=50000&type=hospital&key=' + API_KEY
          );
          const data = await response.json();
          setHospitals(data.results);
        };
        fetchHospitals();
      }, []);*/

    return (
        <View style={{flex: 1}}>
            <StatusBar
                animated={true}
                backgroundColor="#61dafb"
                //barStyle={statusBarStyle}
                //showHideTransition={statusBarTransition}
                //hidden={hidden}
            />
             <View style={styles.header}>
                <FontAwesome name="user-circle-o" size={30} color="black" onPress={() => navigation.openDrawer()}/>
                <View style={{flexDirection: 'row'}}>
                    <Entypo name="drop" size={20} color="red" />
                    <Text>Sauver des vies</Text>
                </View>
            </View> 
            <ScrollView>
                <View >
                    <MapView
                        style={styles.map}
                        initialRegion={{
                            latitude: 7.539989,
                            longitude: -5.54708,
                            latitudeDelta: 8,
                            longitudeDelta: 8,
                        }}>
                        {ci.map((city, index) => (
                            <Marker
                            key={index}
                            coordinate={{ latitude: Number(city.lat), longitude: Number(city.lng) }}
                            title={city.admin_name}
                            icon={() => <FontAwesome name="map-marker" size={24} color="#F00" />}
                            />
                        ))}
                    </MapView>
                   {/*  <View style={styles.searchContainer}>
                        <GooglePlacesAutocomplete
                            styles={{ textInput: styles.input }}
                            placeholder='Recherche...'
                            onPress={(data, details = null) => {
                                // 'details' is provided when fetchDetails = true
                                console.log(data, details);
                            }}
                            query={{
                                key: 'YOUR API KEY',
                                language: 'fr',
                            }}
                        />
                    </View> */}
                </View>
            </ScrollView>
             <View style={[styles.footer,{borderRadius: 10, paddingVertical: 10}]}>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
                    <Text style={{color: 'red'}}><EvilIcons name="location" size={20} color="red" />Maison de don</Text>
                    <Text><Entypo name="drop" size={20} color="red" /> sang</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center', paddingVertical: 10}}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Puis-je donner')}  activeOpacity={1}>
                           <Text style={styles.text_button}>Faire un don</Text>
                    </TouchableOpacity>
                </View>
            </View> 
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        backgroundColor: "#fff",
        height: 60,
        paddingTop: 20,
        paddingHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    map: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
      },
      searchContainer: {
        position: "absolute",
        width: "90%",
        backgroundColor: "white",
        shadowColor: "black",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 4,
        padding: 8,
        borderRadius: 8,
        top: Constants.statusBarHeight,
        left: Constants.statusBarHeight
      },
      input: {
        borderColor: "#888",
        borderWidth: 1,
      },
    footer: {
        backgroundColor: '#fff',
        shadowOpacity: 0.2,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        elevation: 2,
    },
    cityName: {
        fontWeight: 'bold',
        marginVertical: 8,
    },
    button: {
        borderRadius: 2,
        borderWidth: 1,
        width: 200,
        padding: 10,
        backgroundColor: '#fbc531',
        borderColor: '#fbc531',
        marginTop: 2
    },
    text_button: {
        color:'white',
        textAlign: 'center'
        //fontSize: 20
    }
})