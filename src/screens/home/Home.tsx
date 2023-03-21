import React, { useState } from "react";
import { Text, View, ScrollView, StyleSheet, TouchableOpacity, StatusBar } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

const cities = [
    { name: 'Abidjan', latitude: 5.359952, longitude: -4.008256 },
    { name: 'Bouaké', latitude: 7.693193, longitude: -5.030323 },
    { name: 'Yamoussoukro', latitude: 6.819, longitude: -5.276 },
    // Ajoutez les autres villes ici...
  ];

export default function Home({navigation}) {
      
      /*const cityHospitals = hospitals.reduce((acc, hospital) => {
        acc[hospital.city] = [...(acc[hospital.city] || []), hospital];
        return acc;
      }, {});*/
      

    return (
        <>
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
                    <Text>Où donner</Text>
                </View>
            </View>
            <View style={{flex: 1}}>
                <MapView style={{ flex: 1 }}>
                    {cities.map(city => (
                        <Marker
                        key={city.name}
                        coordinate={{ latitude: city.latitude, longitude: city.longitude }}
                        title={city.name}
                        />
                    ))}
                </MapView>
            </View>
            <View style={[styles.footer,{borderRadius: 10, paddingVertical: 10}]}>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
                    <Text style={{color: 'red'}}><EvilIcons name="location" size={20} color="red" />Maison de don</Text>
                    <Text><Entypo name="drop" size={20} color="red" /> sang</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center', paddingVertical: 10}}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text_button}>Prendre un rendez-vous</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
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
        width: '100%',
        height: '100%',
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
        //fontSize: 20
    }
})