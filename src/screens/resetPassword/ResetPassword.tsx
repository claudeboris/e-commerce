import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Constants from 'expo-constants';
import { TextInput, Button, Avatar } from 'react-native-paper';

const ResetPassword = (props: any) => {

  const [email, setEmail] = useState('');

  const onResetPress = (e: any) => {
        props.navigation.navigate('Home')
    }

  return (
    <View style={styles.container}>
    <View style={styles.header}>
    </View>
    <View style={styles.footer}>
    <Avatar.Image style={styles.image} size={150} source={require('../../../assets/images/cnts.png')} />
        <View style={{marginTop: 55}}>
            <TextInput
            style={styles.textInput}
            label="Email"
            value=""
            theme={{ colors: { primary: '#fbc531', placeholder: '#fbc531', }, }}
            textColor="#fbc531"
            outlineColor="#fbc531"
            mode="outlined" 
            onChangeText={text => setEmail(text)}
            />
            <Button mode="contained" style={styles.resetPassword} buttonColor="#fbc531" onPress={onResetPress}>
                Soumettre
            </Button>
            <Button mode="outlined" style={styles.button_outlined} textColor="#fbc531" onPress={() => props.navigation.navigate('Login')}>
                Annuler
            </Button>
        </View>
    </View>
</View>
  )
}

export default ResetPassword

const styles = StyleSheet.create({
    container: {
      flex: 1,
     // marginTop: Constants.statusBarHeight,
      backgroundColor: '#F53920',
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
    resetPassword: {
        marginBottom: 20
    },
    textInput: {
        marginBottom: 20,
        backgroundColor: 'white'
    },
    button_outlined: {
        borderColor:'#fbc531'
    },
    forgot_passe: {
        display: 'flex',
        alignItems: 'flex-end',
        marginBottom: 10
    }
})