import { View, Text,SafeAreaView,Image } from 'react-native';
import React from 'react';
import { Card } from 'react-native-paper';
import { styles } from './PollsStyles';


const Polls = () => {
  return (
    <SafeAreaView>
      <Card style={styles.pollsCart}>
        <View style={styles.TrendMcqs}>
          <View style={styles.popular}>
            <Text style={styles.popularText}>Popular</Text>
          </View>
          <Image source={require('../../assets/images/newPoll.png')} style={{width:24, height:24}}/>
        </View>
      </Card>
    </SafeAreaView>
  )
}

export default Polls