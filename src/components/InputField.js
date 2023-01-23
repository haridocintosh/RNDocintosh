import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

export default function InputField({
  label,
  icon,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
  hideShow
}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: "#6C81A6",
        padding: 8,
        borderRadius: 8,
        marginBottom: 25,
      }}>
      {icon}
      {inputType == 'password' ? (
        <TextInput
          placeholder={label}
          keyboardType={keyboardType}
          style={{width:"100%", paddingVertical: 0}}
          secureTextEntry={hideShow?true:false}
        />
      ) : (
        <TextInput
          placeholder={label}
          keyboardType={keyboardType}
          style={{flex: 1, paddingVertical: 0,}}
          autoCapitalize="none"
        />
      )}
      <TouchableOpacity onPress={fieldButtonFunction}>
        <Text style={{color: 'red', fontWeight: '700'}}></Text>
      </TouchableOpacity>
    </View>
  );
}