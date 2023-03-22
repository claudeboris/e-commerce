import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function PuiJeDonner({navigation}) {
    return (
        <View style={{flex: 1}}>
            <View style={styles.header}>
                <FontAwesome name="user-circle-o" size={30} color="black" onPress={() => navigation.openDrawer()}/>
                <View style={{flexDirection: 'row'}}>
                    <Entypo name="drop" size={20} color="red" />
                    <Text>Sauver des vies</Text>
                </View>
            </View> 
            <View style={styles.critere}>
                <View style={styles.formheader}>
                    <Text style={styles.sideform}>1</Text>
                    <Text style={styles.sideform}>2</Text>
                    <Text style={styles.sideform}>3</Text>
                    <Text style={styles.sideform}>4</Text>
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
    critere: {
        backgroundColor: "red",
       // height: 80,
    },
    formheader: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
    },
    sideform: {
        color: 'white',
        fontSize: 20,
        borderWidth: 1,
        //padding: 7,
        borderRadius: 50,
        width: 30,
        height: 30,
        paddingHorizontal: 8
    }
})