import { View, Text,SafeAreaView ,TextInput,Image,TouchableOpacity,ImageBackground, ScrollView,Animated} from 'react-native'
import React,{useEffect, useState, useRef} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import {styles} from './CommunityStyles'
import LinearGradient from 'react-native-linear-gradient';
import { Button } from 'react-native-elements';
import Threads from './Threads';
import FocusGroup from './FocusGroup';
import CommunityPageOptionsModal from './CommunityPageOptionsModal';


const JionCommunity = ({navigation}) => {
    const [text , setText] = useState();
    const [index , setIndex] = useState(true);
    const [cmtyPageOptions , setCmtyPageOptions] = useState(false);
    const [threadOptionModal,setThreadOptionModal] = useState(false);

    const scrollPosition = useRef(new Animated.Value(0)).current;
    const minHeaderHeight = 0;
    const maxHeaderHeight = 270;

    const headerHeight = scrollPosition.interpolate({
        inputRange: [0, 500],
        outputRange: [maxHeaderHeight, minHeaderHeight],
        extrapolate: 'clamp',
    });

    const opacity = scrollPosition.interpolate({
        inputRange: [0, 100, 200,300,400],
        outputRange: [1, 0.8, 0.6, 0.4, 0],
        extrapolate: 'clamp',
    });

    const handleTab = (val) => {
        console.log(val);
    }
    const handleCommunityModal = () => {
        console.log("val");
        setCmtyPageOptions(!cmtyPageOptions);
    }
    // useEffect(() => {
    //     navigation.setOptions({ title: ''});
    // },[])

    const handleOnScroll = () => {
        setCmtyPageOptions(false);
        setThreadOptionModal(false);
    } 
  return (
    <SafeAreaView style={{ backgroundColor: "#ecf2f6", flex: 1, }}>
        <Animated.View style={{height:headerHeight,opacity:opacity}}>
            <ImageBackground source={require("../../assets/images/RectangleBgImage.png")} style={[styles.RectangleBgImage]}>
                <LinearGradient colors={["#000", "transparent"]}>
                    <View style={styles.joinHeaderView}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Ionicons name='arrow-back' size={25} color={'#fff'}/>
                        </TouchableOpacity>
                        <View style={{flexDirection:'row'}}>
                            <TouchableOpacity>
                                <AntDesign name='search1' size={25} color={'#fff'} style={{marginRight:15}}/>
                            </TouchableOpacity>
                            <TouchableOpacity  onPress={() => handleCommunityModal()}>
                                <Entypo name='dots-three-vertical' size={25} color={'#fff'}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </LinearGradient>
            </ImageBackground>
           
            <View style={styles.communityName}>
                <View>
                    <Image 
                        source={require('../../assets/images/CommunityPPic3.png')} 
                        style={styles.CommunityProfilePic}/>
                        <Text style={styles.communityNameText}>AIMS Hospital</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Members')}>
                            <Text style={styles.communityNameMembers}>
                                <Text style={styles.communityNameMembersCount}>2.2k </Text>
                                Member
                            </Text>
                        </TouchableOpacity>
                </View>
                <Button title={"Join"}
                    buttonStyle={{
                        width:100,
                        borderRadius:15/2,
                        backgroundColor:'#2C8892',
                        color:'#fff',
                    }}
                    titleStyle={{
                        color:'#fff',
                    }}/>
            </View>
        </Animated.View>
        <CommunityPageOptionsModal modalVisible={cmtyPageOptions} setModalVisible={setCmtyPageOptions}/>
        <View style={styles.CommunityTabContainer}>
            <TouchableOpacity onPress={() => setIndex(true)}>
                <Text style={index ? styles.CommunityActiveTabText : styles.CommunityTabText}>Threads</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setIndex(false)}>
                <Text style={index ? styles.CommunityTabText : styles.CommunityActiveTabText}>Focus Group</Text>
            </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnable={true} onScroll={Animated.event(
                  [{nativeEvent: {contentOffset: {y: scrollPosition}}}],
                  {useNativeDriver: false},
                )} onScrollBeginDrag={() => handleOnScroll()}>
            <View style={{padding:15,marginBottom:80}}>
                {index ? 
                    <Threads 
                        modalVisible={threadOptionModal}
                        setModalVisible={setThreadOptionModal}
                    /> 
                : 
                    <FocusGroup/>
                }
            </View>
        </ScrollView>


        <TouchableOpacity style={styles.UserComments} onPress={() => navigation.navigate('SharepostCommunity')}>
            <View style={styles.UserInnerComments}>
                <View style={styles.inputCont} >
                <Image source={require('../../assets/images/CommunityPPic3.png')} style={{width:50,height:50, borderRadius:50}}/>
                <TextInput
                    style={styles.input}
                    onChangeText={setText}
                    value={text}
                    placeholder="Message"
                />
                </View>
                <View style={styles.iconsContainer}>
                    <TouchableOpacity>
                        <Feather name='paperclip' size={22}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Entypo name='camera' size={22} style={{marginHorizontal:15}}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name='send' size={22}/>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>

    </SafeAreaView>
  )
}

export default JionCommunity