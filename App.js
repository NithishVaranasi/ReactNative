import React from 'react';
import { View,ImageBackground,StyleSheet } from 'react-native';
import Weather from './src/Weather';
import { styles } from './src/styles';
 
const App = () => {
    return (
        <View style={styles.container}>
             <ImageBackground
        source={require('./assets/city.png')}
        style={StyleSheet.absoluteFillObject}
      />
            <Weather />
        </View>
    );
};
 
export default App;