import { View, Text, SafeAreaView,TouchableOpacity,TextInput ,ScrollView,Image} from 'react-native';
import React, { useEffect, useState } from 'react'
import { styles } from './CommunityStyles';
import { Icon } from '../../navigation/ReuseLogics';
import SocketIOClient from 'socket.io-client';

const MessageScreen = ({navigation}) => {
  const [chatMessage, setChatMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [userChatList, setUserChatList] = useState();

  const connectWebSocketWatch = () => {
      console.log("socket");
      //put your backend serve url here  
      const socket = SocketIOClient('http://192.219.111.54:8800/');
      const get_message_ = //this is a provide by backend.
      socket.on('get_message_', data => {
        var userMessageData = JSON.parse(data);
        var chatDataArray = [...userChatList];
        let message = [userMessageData];
        let newChatArray = message.concat(chatDataArray);
        setUserChatList({
          userChatList: newChatArray,
          chatMessage: '',
        });
      });
  }
  

  useEffect(()=>{
      connectWebSocketWatch()
  },[]);

  const handleSend = () => {
    console.log(chatMessage);
  }

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
              <Text>skjdfhkjsd dsfhsdf hh hfdshf dshflhdfhd sdhfldsdfjn  sdfsdf sdfsdfs ef rgsg dfsdfsdjfnj dnhmhdsb dfskdvshjdsvhsjdbshfsadga asdgaskd gu bbbdkbsd bsjkdb gsadgsud  gasdggdgs asgdjagdj </Text>
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
      <View style={styles.UserComments}>
          <View style={styles.UserInnerComments}>
              <View style={styles.inputCont} >
              <Image source={require('../../assets/images/CommunityPPic3.png')} style={{width:50,height:50, borderRadius:50}}/>
              <TextInput
                  style={styles.input}
                  onChangeText={setChatMessage}
                  value={chatMessage}
                  placeholder="Message"
              />
              </View>
              <View style={styles.iconsContainer}>
                  {/* <TouchableOpacity>
                      {Icon("Feather", "paperclip",22,"#51668A")}
                  </TouchableOpacity>
                  <TouchableOpacity style={{marginHorizontal:15}}>
                      {Icon("Entypo","camera",22,"#51668A")}
                  </TouchableOpacity> */}
                  <TouchableOpacity onPress={() => handleSend()}>
                      {Icon("Ionicons","send",22,"#51668A")}
                  </TouchableOpacity>
              </View>
          </View>
      </View>
    </SafeAreaView>
  )
}

export default MessageScreen