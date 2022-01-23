import React from 'react'
import { Image, StyleSheet,View ,Text,ImageBackground, TouchableOpacity} from 'react-native'
import Background from '../components/Background'
import MainLogo from '../components/MainLogo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import Icons from "react-native-vector-icons/MaterialIcons";
import { theme } from '../core/theme'

export default function Dashboard({ navigation }) {
  return (
    <ImageBackground
    source={require('../assets/background_dot.png')}
    resizeMode="repeat"
    style={{height:'100%',width:'100%'}}
  >
      <MainLogo />
      <View style={{paddingHorizontal:10}}>
    
      {/* <Header>Let’s start</Header> */}
      <TouchableOpacity 
      onPress={()=>navigation.navigate('TypableQuestionScreen')}
      style={{borderRadius:50,backgroundColor:theme.colors.secondary,flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20,marginTop:30}}>
        <Text style={{alignSelf:'center' ,color:'#fff' , fontWeight:'bold'}}> Quadratic equation </Text>
      <Icons style={{color:'#fff'}} name={'arrow-right-alt'} size={45} color={'#fff'}></Icons>
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={()=>navigation.navigate('TypableQuestionScreen')}
      style={{borderRadius:50,backgroundColor:theme.colors.secondary,flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20,marginTop:30}}>
        <Text style={{alignSelf:'center' ,color:'#fff' , fontWeight:'bold'}}> Matrices </Text>
      <Icons style={{color:'#fff'}} name={'arrow-right-alt'} size={45} color={'#fff'}></Icons>
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={()=>navigation.navigate('TypableQuestionScreen')}
      style={{borderRadius:50,backgroundColor:theme.colors.secondary,flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20,marginTop:30}}>
        <Text style={{alignSelf:'center' ,color:'#fff' , fontWeight:'bold'}}> Cramer Rule </Text>
      <Icons style={{color:'#fff'}} name={'arrow-right-alt'} size={45} color={'#fff'}></Icons>
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={()=>navigation.navigate('TypableQuestionScreen')}
      style={{borderRadius:50,backgroundColor:theme.colors.secondary,flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20,marginTop:30}}>
        <Text style={{alignSelf:'center' ,color:'#fff' , fontWeight:'bold'}}> Fractions </Text>
      <Icons style={{color:'#fff'}} name={'arrow-right-alt'} size={45} color={'#fff'}></Icons>
      </TouchableOpacity>
    
      </View>



      {/* <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
      >
        Logout
      </Button> */}
    </ImageBackground>
  )
}
