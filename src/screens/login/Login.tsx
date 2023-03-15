import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Constants from 'expo-constants';
import { TextInput, Button, Avatar } from 'react-native-paper';

export default function Login(props: any) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isTextVisible, setIsTextVisible] = useState(false);

    const resetPass =  () => {
        props.navigation.navigate("ResetPassword")
    }

    const onLoginPress = (e: any) => {
        props.navigation.navigate('OuDonner')
    }

    const handleIconPress = () => {
        setIsTextVisible(!isTextVisible);
    };

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
                    //value={email}
                    theme={{ colors: { primary: '#fbc531', placeholder: '#fbc531', }, }}
                    textColor="#fbc531 "
                    outlineColor="#fbc531"
                    mode="outlined" 
                    onChangeText={text => setEmail(text)}
                    />
                    <TextInput
                    style={styles.textInput}
                    label="Password"
                    //value={password}
                    textColor="#fbc531"
                    outlineColor="#fbc531"
                    theme={{ colors: { primary: '#fbc531', placeholder: '#fbc531', }, }}
                    mode="outlined" 
                    secureTextEntry={!isTextVisible} // masquer ou afficher le texte saisi en fonction de l'état
                    right={<TextInput.Icon icon={isTextVisible ? 'eye-off' : 'eye'} onPress={handleIconPress} />}
                    onChangeText={text => setPassword(text)}
                    /> 
                    <View style={styles.forgot_passe}>
                    <Text onPress={resetPass}>Mot de passe oublié?</Text>
                    </View>
                    <Button mode="contained" style={styles.connection} buttonColor="#fbc531" onPress={onLoginPress}>
                        Se connecter
                    </Button>
                    <Button mode="outlined" style={styles.button_outlined} textColor="#fbc531" onPress={() => props.navigation.navigate('Register')}>
                        S'inscrire
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
    connection: {
        marginBottom: 20,
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