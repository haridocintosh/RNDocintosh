import { View, Text,StyleSheet } from 'react-native';
import React from 'react';

const Card = ({children}) => {
  return (
    <View style={[styles.CartContainer, styles.elevation]}>
      {children}
    </View>
  )
}

export default Card;

export const styles = StyleSheet.create({
    CartContainer:{
      backgroundColor:'#fff',
      borderRadius:10,
      padding:10,
      marginBottom:15
    },
})