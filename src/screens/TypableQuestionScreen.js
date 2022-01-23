import React from 'react'
import { Image, StyleSheet, View, Text, ImageBackground, TouchableOpacity, TextInput } from 'react-native'
import Background from '../components/Background'
import MainLogo from '../components/MainLogo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import Icons from "react-native-vector-icons/MaterialIcons";
import { theme } from '../core/theme'

export default function TypableQuestionScreen({ navigation }) {
    return (
        <View
            // source={require('../assets/background_dot.png')}
            // resizeMode="repeat"
            style={{ height: '100%', width: '100%',backgroundColor:theme.colors.secondary }}
        >
            <MainLogo />
            <View style={{ paddingHorizontal: 10, }}>

                <View style={styles.card}>

                    <TextInput
                        style={{ height: 200,color:theme.colors.secondary }}
                        placeholder={'Type Your Question Here...'}
                        placeholderTextColor={theme.colors.secondary}
                        multiline
                        scrollEnabled={true}
                    >
                    </TextInput>

                    <View style={{ flexDirection: 'row', borderTopWidth: 1,borderColor: "rgb(0, 0, 139)", justifyContent: 'flex-end', paddingVertical: 10 }}>
                        <TouchableOpacity><Icons style={{ alignSelf: 'center', marginRight: 10 }} name={'mic'} size={25} color={'rgb(0, 0, 139)'}></Icons></TouchableOpacity>
                        <TouchableOpacity><Icons style={{ alignSelf: 'center', marginRight: 10 }} name={'camera-enhance'} size={25} color={'rgb(0, 0, 139)'}></Icons></TouchableOpacity>
                        <TouchableOpacity><Text style={{ alignSelf: 'center', marginRight: 10 , fontWeight:'bold' ,color:"rgb(0, 0, 139)"}}>Calculate</Text></TouchableOpacity>
                    </View>
                </View>
                <View style={{marginVertical:20}}></View>

                <View style={styles.card}>

                    <Text style={{marginLeft:10,fontWeight:'bold',paddingVertical:20,color:theme.colors.secondary}}>Your Answer is :</Text>
                </View>

            </View>
        </View>
    )
    }
    const styles = StyleSheet.create({
        card : {
            borderWidth: 1, borderColor: "rgb(0, 0, 139)", 
            backgroundColor: theme.colors.surface ,
            borderRadius:20 
        }
    })

