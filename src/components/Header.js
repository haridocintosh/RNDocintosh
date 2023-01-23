import React from 'react';
import {View, Text, FlatList} from 'react-native';

export default function Header({title}) {
  
  ListHeader = ()=>{
    <View style={{  width: '100%', height: 85, marginTop : 0, backgroundColor: '#efefef', }}>
    <Text style={{  color: '#000', fontSize: 25, marginTop: 15, padding: 20,}}>{title}</Text>
    </View>
  }
  return (
    <View>
        <FlatList ListHeaderComponent={ListHeader} />
    </View>
  
  );
}
