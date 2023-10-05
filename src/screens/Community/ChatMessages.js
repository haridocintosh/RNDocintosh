import { View, Text,Image } from 'react-native'
import React from 'react'
import { styles } from './CommunityStyles';


const ChatMessages = ({data}) => {
  return (
        <View style={data?.own ? styles.OwnChatContainer : styles.OtherChatContainer}>
            <Image 
                source={require('../../assets/images/p1.png')} 
                style={{width:40,height:40}}
            />
            <View style={data?.own ? styles.OwnChatText :styles.OtherChatText}>
                <Text>{data.text}</Text>
            </View>
        </View>
  )
}

export default ChatMessages