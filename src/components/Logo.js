import React from 'react'
import { Image, StyleSheet,View ,Text} from 'react-native'
import { theme } from '../core/theme'

export default function Logo() {
  return <View style={{backgroundColor:theme.colors.primary, width: '100%',marginBottom: 8,}}>
    <Text style={{fontSize:30,color:'#fff',alignSelf:'center'}}>Maths App</Text>
  </View>
  // <Image source={require('../assets/logo.png')} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 210,
    height: 110,
    marginBottom: 8,
  },
})
