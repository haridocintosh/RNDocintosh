import { View, Text, SafeAreaView,TouchableOpacity,TextInput,Image } from 'react-native'
import React , {useState,useRef}from 'react';
import { styles } from './CommunityStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const Community = ({navigation}) => {
const [viewInput, setViewInput] = useState(false);
const [inputText,setInputText] = useState(null);
const refInput = useRef(null);

  const InputView = () => {
    setViewInput(!viewInput);
    // refInput.current.focue();
  } 

  // console.log("refInput.current.focue()",refInput?.current?.focue());

  const onChangeText = async (text) => {
    setInputText(text)
  }

  return (
    <SafeAreaView style={{ backgroundColor: "#ecf2f6", flex: 1 }}>
      <View style={styles.headerView}>
        <View style={styles.headerTitle}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons name="reorder-three-outline" size={34} color="#fff"  />
          </TouchableOpacity>
          {viewInput ? 
            <TextInput
              ref={refInput}
              placeholder={"Search"}
              style={{fontSize:18,color:"#fff"}}
              placeholderTextColor={'#fff'}
              onChangeText={onChangeText}
              value={inputText}
            />
            :
            <Text style={styles.headerText}>Community</Text>}
        </View>
        <TouchableOpacity onPress={() => InputView()}>
          <Ionicons name={viewInput ? "close-outline" : "search"} size={24} color={"#fff"} styles={{marginRight:15}}/>
        </TouchableOpacity>
      </View>
      <View style={styles.bodyView}>
        <Text style={styles.recomandedText}>Recommandations</Text>
        
        <View style={styles.recomandedUsers}>
          <View style={styles.recomandedUsersPic}>
          <Image source={require('../../assets/images/CommunityPPic1.png')} style={styles.UsersProfilePic}/>
            <View style={styles.userInfo}>
              <Text style={styles.hospitalName}>AIMS Hospital </Text>
              <Text style={styles.groupsText}>3 Groups</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("JionCommunity")}>
            <Text style={styles.joinText}><Entypo name="plus" size={13} color="#2376E5"/> Join</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.recomandedUsers}>
          <View style={styles.recomandedUsersPic}>
          <Image source={require('../../assets/images/CommunityPPic2.png')} style={styles.UsersProfilePic}/>
            <View style={styles.userInfo}>
              <Text style={styles.hospitalName}>AIMS Hospital </Text>
              <Text style={styles.groupsText}>3 Groups</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("JionCommunity")}>
            <Text style={styles.joinText}><Entypo name="plus" size={13} color="#2376E5"/> Join</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.recomandedUsers}>
          <View style={styles.recomandedUsersPic}>
          <Image source={require('../../assets/images/CommunityPPic3.png')} style={styles.UsersProfilePic}/>
            <View style={styles.userInfo}>
              <Text style={styles.hospitalName}>AIMS Hospital </Text>
              <Text style={styles.groupsText}>3 Groups</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("JionCommunity")}>
            <Text style={styles.joinText}><Entypo name="plus" size={13} color="#2376E5"/> Join</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  )
}

export default Community