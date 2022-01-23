import React from 'react'
import { Image, StyleSheet,View ,Text} from 'react-native'
import { theme } from '../core/theme'

export default function MainLogo() {

  return ( 
<View style={{flexDirection:'row' , height:60,justifyContent:'flex-start',paddingHorizontal:20,width:'100%',marginBottom:10,backgroundColor:theme.colors.secondary}}>
<Image source={require('../assets/Mathslogo.png')} style={styles.image} />
<Text style={{color:'rgb(124, 213, 247)', alignSelf:'center',fontSize:20,fontWeight:'bold',marginLeft:10}}>MathsApp</Text>
</View>
)
}
//   <View style={{backgroundColor:theme.colors.primary, width: '100%',marginBottom: 8,}}>
//     <Text style={{fontSize:30,color:'#fff',alignSelf:'center'}}>Maths App</Text>
//   </View>
 

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    alignSelf:'center'
  },
})
