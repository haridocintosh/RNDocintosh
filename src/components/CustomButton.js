import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function CustomButton({label, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderRadius: 8,
        marginBottom: 30,
        backgroundColor:"#2C8892",
        height:48,
        width:"100%",
        lineHeight:48,
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: '600',
          fontSize: 16,
          color: '#fff',
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}