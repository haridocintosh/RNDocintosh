import { View, Text,StyleSheet ,Image,TouchableOpacity} from 'react-native'
import React,{ useState,useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import PublicReactions from './PublicReactions';
import Svg, {Path} from 'react-native-svg';
import {Ionicons,MaterialCommunityIcons,FontAwesome5} from '@expo/vector-icons';
import { styles } from './Homestyle';
import moment from "moment";
import OptionModal from './optionModal';

const PostsScreen = ({route}) => {
    const [userData, setUserData] =useState([]);
    const [postId, setPostId] =useState();
    const [optionModal, setOptionModal]   = useState(false);
    const { singleItem } = route?.params;
    const navigation = useNavigation();

    const handleOption = (post_id) => {
      setPostId(post_id);
      if(postId == post_id){
        setOptionModal(!optionModal);
        return;
      }
      setOptionModal(true);
    }
    useEffect(() => {
        navigation.setOptions({ title: `${singleItem?.first_name}'s Post` });
        setUserData(singleItem?.attach_array)
    }, [])



  return (
    <View style={styles.PostContainer}>

    {userData.map((data,index) => {
        return(
            <View style={styles.singlePost} key={index}>
                <View style={styles.userDetails}>
                    <View style={styles.picContainer}>
                      <Image source={{uri:singleItem.profileimage}} onPress={() => navigation.navigate('ProfileScreen2')} style={{width:38, height:38,marginRight:5,borderRadius:50,}} ></Image>
                      <View >
                        <Text style={{fontSize:14, fontWeight:'400', fontFamily:"Inter-Regular"}}>
                            {singleItem.role =='4' ? 'Dr.' : ''} { singleItem.first_name && singleItem.first_name} {singleItem.last_name && singleItem.last_name + ' '}  
                            <MaterialCommunityIcons name="check-decagram" size={12} color="#0F9C69" style={{marginLeft:15}}/>
                        </Text>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Text style={{marginHorizontal:5}}>
                                <FontAwesome5 name="users" size={17} color="#45B5C0" />  
                            </Text>
                            <View style={styles.dot}/>
                            <Text style={{fontSize:12, fontWeight:'400',color:'#2376E5',fontFamily:"Inter-Regular"}}>{singleItem.speciality && singleItem.speciality}</Text>
                            <Text style={{marginHorizontal:5}}>
                                <Ionicons name="time-outline" size={19} color="#51668A" />  
                            </Text>
                            <Text style={{fontSize:12, paddingRight:5, fontWeight:'400',color:'#51668A',fontFamily:"Inter-Regular"}}>{moment(singleItem?.created_at).fromNow()}</Text>
                            {/* {item.post_date}  */}
                        </View>
                       </View> 
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => handleOption(singleItem?.post_id)} style={{padding:10,right:-10,top:-10}}>
                        <Svg width="7" height="20" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M3.5 1.55552C3.5 0.696472 2.82839 0 2 0C1.17161 0 0.5 0.696472 0.5 1.55552C0.5 2.41458 1.17161 3.11105 2 3.11105C2.82839 3.11105 3.5 2.41458 3.5 1.55552ZM3.5 8C3.5 7.14095 2.82839 6.44448 2 6.44448C1.17161 6.44448 0.5 7.14095 0.5 8C0.5 8.85905 1.17161 9.55552 2 9.55552C2.82839 9.55552 3.5 8.85905 3.5 8ZM3.5 14.4445C3.5 13.5854 2.82839 12.889 2 12.889C1.17161 12.889 0.5 13.5854 0.5 14.4445C0.5 15.3035 1.17161 16 2 16C2.82839 16 3.5 15.3035 3.5 14.4445Z" fill="#51668A"/>
                        </Svg>
                        </TouchableOpacity>
                        {singleItem?.post_id == postId && <OptionModal modalVisible={optionModal}/>}
                    </View>
                </View>
                <Image source={{uri:data?.filename}} style={{width:"100%",height:300,borderRadius:3,marginVertical:10}}/>
                <View>
                    <PublicReactions item={singleItem}/>
                </View>
            </View>
        )
    })}
        
    </View>
  )
}

export default PostsScreen;
