import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Constants from 'expo-constants';
import { TextInput, Button, Avatar } from 'react-native-paper';

export default function Register(props: any) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
            </View>
            <View style={styles.footer}>
                <Avatar.Image style={styles.image} size={150} source={require('../../../assets/favicon.png')} />
                <View style={{marginTop: 35}}>
                <TextInput
                    style={styles.textInput}
                    label="Name"
                    value=""
                    textColor="#e84118"
                    outlineColor="#e84118"
                    mode="outlined" 
                    //onChangeText={text => setText(text)}
                    />
                    <TextInput
                    style={styles.textInput}
                    label="Email"
                    value=""
                    textColor="#e84118"
                    outlineColor="#e84118"
                    mode="outlined" 
                    //onChangeText={text => setText(text)}
                    />
                    <TextInput
                    style={styles.textInput}
                    label="Password"
                    value=""
                    textColor="#e84118"
                    outlineColor="#e84118"
                    mode="outlined" 
                    //onChangeText={text => setText(text)}
                    />
                    <Button mode="contained" style={styles.textInput} buttonColor="#e84118" onPress={() => console.log('Pressed')}>
                        S'inscrire
                    </Button>
                    <Button mode="outlined" style={styles.button_outlined} textColor="#e84118"  onPress={() => props.navigation.navigate('Login')}>
                        Se connecter
                    </Button>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
      backgroundColor: '#e84118',
    },
    header: {
        flex: .7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        //marginTop: 250,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        top: -80,
        left: '35%',
        elevation: 4
        //marginBottom: 20
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30,
        //elevation: 1,
    },
    textInput: {
        marginBottom: 20
    },
    button_outlined: {
        borderColor:'#e84118'
    },
    forgot_passe: {
        display: 'flex',
        alignItems: 'flex-end',
        marginBottom: 10
    }
})