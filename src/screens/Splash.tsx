import React, {useState, useEffect, useRef} from "react";
import { Text, View, StyleSheet, Button} from "react-native";
import LottieView from 'lottie-react-native';

export default function Splash(props: any) {

    const [authLoaded, setAuthLoaded] = useState(false);
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
    }, [authLoaded, animationLoaded, props.navigation]);

    return (
        <View style={styles.animationContainer}>
            <LottieView
            ref={animation => {
                ref.current = animation;
              }}
                source={require('../data/welcome.json')}
                autoPlay
                loop={false}
                onAnimationFinish={onAnimationFinish}
            />
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
    buttonContainer: {
      paddingTop: 20,
    },
});