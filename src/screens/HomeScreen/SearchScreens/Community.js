import { View, Text,SafeAreaView ,ScrollView} from 'react-native'
import React from 'react';
const styelcss = require('../../../assets/css/style');

const Community = () => {
  return (
    <SafeAreaView style={styelcss.searchContainer} >
        <ScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnable={true}>
            <Text>
                Comming Soon ...
            </Text>
            
        </ScrollView>
    </SafeAreaView>
  )
}

export default Community