import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function CustomButton({label,onPress,style}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderRadius: 8,
        marginBottom: 10,
        backgroundColor:"#2C8892",
        height:48,
        width:"100%",
        lineHeight:48,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        alignSelf:'center',
        ...style
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: '600',
          fontSize: 16,
          color: '#fff',
          fontFamily: 'Inter-Bold',
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}