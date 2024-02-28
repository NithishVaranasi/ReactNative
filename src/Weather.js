import React, { useState } from 'react';
import { View, Text, Pressable, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { styles } from './styles';
import { getWeather } from './api';
 
const Weather = () => {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };
 
    const handleGetWeather = () => {
        getWeather(city, setWeatherData);
    };
    const handleContainerPress = () => {
        Keyboard.dismiss(); // Dismiss the keyboard
        setIsFocused(false); // Remove focus from TextInput
    };
 
    return (
        <TouchableWithoutFeedback onPress={handleContainerPress}>
        <View style={styles.centeredContent}>
            <Text style={styles.title}>Weather App</Text>
                <Text style={styles.subtitle}>Know U R CITY Weather</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter city name"
                placeholderTextColor="white"
                value={city}
                onChangeText={setCity}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                caretHidden={!isFocused}
            />
 
            <Pressable
                onPress={handleGetWeather}
                style={({ pressed }) => [
                    styles.button,
                    {
                        backgroundColor: pressed ? 'green' : 'red',
                    },
                ]}
            >
                <Text style={styles.buttonText}>Get Weather</Text>
            </Pressable>
            <Text> </Text>
 
            {weatherData && (
                <View style={styles.weatherInfo}>
                    <Text style={styles.weatherText}>
                        <Text style={styles.heading}>
                            Temperature:
                        </Text> {weatherData.temperature} °C
                    </Text>
                    
                </View>
            )}
        </View>
        </TouchableWithoutFeedback>
    );
};
 
export default Weather;