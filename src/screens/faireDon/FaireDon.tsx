import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'


const FaireDon = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
        <View style={styles.header}>
            <FontAwesome name="chevron-left" size={30} color="black" onPress={() => navigation.navigate('OuDonner')}/>
            <View style={{flexDirection: 'row'}}>
                <Entypo name="drop" size={20} color="red" />
                <Text>Sauver des vies</Text>
            </View>
        </View> 
    </View>
  )
}

export default FaireDon

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