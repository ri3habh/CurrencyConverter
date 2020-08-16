import React from 'react';

import {
    View, StyleSheet, StatusBar, Image, Dimensions
} from 'react-native';
import colors from '../constants/colors';

const styles = StyleSheet.create({
    container:{
    backgroundColor: colors.skyblue,
    flex: 1,
    justifyContent: "center",
    },
    logoContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
    },
    logoBackground: {
        width: screen.width * 0.45,
        height: screen.width * 0.45, 
    },
    logo: {
        position: 'absolute',
        width: screen.width * 0.25,
        height: screen.width * 0.25, 

    },
});

const screen = Dimensions.get('window');


export default () => {
    return (
        <View style= {styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={colors.skyBlue}/>
        <View style={styles.logoContainer}>
            <Image 
                source={require('../assets/images/background.png')}
                style={styles.logoBackground}
                resizeMode="contain"/>
            <Image 
                source={require("../assets/images/logo.png")} 
                style={styles.logo} 
                resizeMode="contain"/>
            </View>
        </View>
    );
};