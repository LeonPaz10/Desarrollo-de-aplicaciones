import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTittle}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header:{
        backgroundColor:"#fed9b7",
        height:90, 
        paddingTop:36,
        alignItems:'center',
        justifyContent:"center"
    },
    headerTittle:{
        color: 'black',
        fontSize:22,
    }
})