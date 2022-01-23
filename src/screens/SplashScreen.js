import React, { useContext, useEffect, useMemo, useState } from 'react'
import { Image, StyleSheet, View, Text, ImageBackground, TouchableOpacity, TextInput, Dimensions } from 'react-native'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import Icons from "react-native-vector-icons/MaterialIcons";
import { theme } from '../core/theme'


const { width, height } = Dimensions.get('screen')


export default function SplashScreen({ navigation }) {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('StartScreen')
        }, 1500);
    }, [])

    return (

        <View style={{ height: height, width: width, flex: 1, justifyContent: 'center', backgroundColor: 'rgb(51, 79, 91)' }}>
            <View style={{ alignSelf: 'center' }}>
                <Image source={require('../assets/Mathslogo.png')} style={styles.image} />
            </View>
            <View >
            <Text style={{color:'rgb(124, 213, 247)', alignSelf:'center',fontSize:20,fontWeight:'bold'}}>Maths App</Text>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    image: {
        width: 210,
        height: 210,
        marginBottom: 8,
    }
})

