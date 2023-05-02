import { View, Text, SafeAreaView,TouchableOpacity ,ScrollView,Image} from 'react-native';
import React from 'react'
import { styles } from './CommunityStyles';
import { Icon } from '../../navigation/ReuseLogics';

const MessageScreen = ({navigation}) => {

  return (
    <SafeAreaView style={{backgroundColor:"#ecf2f6", flex: 1}}>
      
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          {Icon('Ionicons',"arrow-back",30,'#fff')}
        </TouchableOpacity>
        <Text style={styles.headerTitleText}>
          communityName...
        </Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          {Icon('Ionicons',"ios-search",25,'#fff')}
        </TouchableOpacity>
      </View>

      <View style={styles.chatContainer}>
        <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnable={true}>
          <View style={styles.OtherChatContainer}>
            <Image source={require('../../assets/images/p1.png')} style={{width:40,height:40}}/>
            <View style={styles.OtherChatText}>
              <Text>skjdfhkjsd dsfhsdf hh hfdshf dshflhdfhd sdhflds</Text>
            </View>
          </View>
          <View style={styles.OwnChatContainer}>
            <View style={styles.OwnChatText}>
              <Text>skjdfhkjsd dsfhsdf hh hfdshf dshflhdfhd sdhfldsdfjn sdjfnj dnhmhdsb dfskdvshjdsvhsjdbshfsadga asdgaskd gu bbbdkbsd bsjkdb gsadgsud  gasdggdgs asgdjagdj </Text>
            </View>
            <Image source={require('../../assets/images/p2.png')} style={styles.ImagePic}/>
          </View>
          <View style={styles.OtherChatContainer}>
            <Image source={require('../../assets/images/p1.png')} style={{width:40,height:40}}/>
            <View style={styles.OtherChatText}>
              <Text>lorem erojwlf jfbhkdbfkjdhfh</Text>
            </View>
          </View>
          <View style={styles.OwnChatContainer}>
            <View style={styles.OwnChatText}>
              <Text>hgvjhfdgfhhjbjhvhj</Text>
            </View>
            <Image source={require('../../assets/images/p2.png')} style={styles.ImagePic}/>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default MessageScreen