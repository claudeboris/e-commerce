import React, {useState, useEffect, useRef} from "react";
import { Text, View, StyleSheet, Button} from "react-native";
import LottieView from 'lottie-react-native';
import { Image } from "react-native";

export default function Splash(props: any) {

  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate("Login")
    }, 2000);
  }, [])

    /* const [authLoaded, setAuthLoaded] = useState(false);
    const [animationLoaded, setAnimationLoaded] = useState(false);

    const ref = useRef(null);

    useEffect(() => {
        setTimeout(() => {
        setAuthLoaded(true);
        }, 1000);
    }, []);

    const onAnimationFinish = () => {
        setAnimationLoaded(true);
    };

    useEffect(() => {
        if (authLoaded && animationLoaded) {
          props.navigation.replace('Login');
        }
    }, [authLoaded, animationLoaded, props.navigation]); */

    return (
        <View style={styles.animationContainer}>
            <Image source={require('../../assets/images/image3.jpg')} style={styles.image}/>
            <Text style={{fontFamily: 'POPPINS_LIGHT'}}>
               Le don de sang est un geste simple, 
            </Text>
            <Text style={{color: 'red', fontWeight: '900', fontFamily: 'POPPINS_LIGHT'}}>mais tellement important</Text>
            {/* <LottieView
            ref={animation => {
                ref.current = animation;
              }}
                source={require('../data/welcome.json')}
                autoPlay
                loop={false}
                onAnimationFinish={onAnimationFinish}
            /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    animationContainer: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
    image: {
      width: 200,
      height: 200
    },
    buttonContainer: {
      paddingTop: 20,
    },
});