import 'react-native-gesture-handler';
import Route from '@Navigation/Route';
import { View, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';


export default function App() {

  const [loaded] = useFonts({
    POPPINS_BLACK: require('./assets/fonts/Poppins-Black.ttf'),
    POPPINS_BOLD: require('./assets/fonts/Poppins-Bold.ttf'),
    POPPINS_EXTRA_BOLD: require('./assets/fonts/Poppins-ExtraBold.ttf'),
    POPPINS_EXTRA_LIGHT: require('./assets/fonts/Poppins-ExtraLight.ttf'),
    POPPINS_LIGHT: require('./assets/fonts/Poppins-Light.ttf'),
    POPPINS_MEDIUM: require('./assets/fonts/Poppins-Medium.ttf'),
    POPPINS_REGULAR: require('./assets/fonts/Poppins-Regular.ttf'),
    POPPINS_SEMI_BOLD: require('./assets/fonts/Poppins-SemiBold.ttf'),
    POPPINS_THIN: require('./assets/fonts/Poppins-Thin.ttf')
  })

  if(!loaded) {
    return null
  }

  return (
    <>
      <Route />
    </>
  );
}

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 */