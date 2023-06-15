import { View, Text,SafeAreaView ,TextInput,Image,TouchableOpacity,ImageBackground, ScrollView,Animated,Share} from 'react-native'
import React,{useState, useRef} from 'react';
import {styles} from '../CommunityStyles'
import LinearGradient from 'react-native-linear-gradient';
import CreateCommunityPageOptionsModal from './CreateCommunityPageOptionsModal';
import { Icon } from '../../../navigation/ReuseLogics';
import CreateCommunityThreads from './CreateCommunityThreads';
import CreateCommunityFocusGroup from './CreateCommunityFocusGroup';

const CommunityDetailsPages = ({navigation}) => {
    const [text , setText] = useState();
    const [index , setIndex] = useState(true);
    const [cmtyPageOptions , setCmtyPageOptions] = useState(false);
    const [threadOptionModal,setThreadOptionModal] = useState(false);

    const scrollPosition = useRef(new Animated.Value(0)).current;
    const minHeaderHeight = 0;
    const maxHeaderHeight = 280;

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
    }
    const handleCommunityModal = () => {
        setCmtyPageOptions(!cmtyPageOptions);
    }
    // useEffect(() => {
    //     navigation.setOptions({ title: ''});
    // },[])

    const handleOnScroll = () => {
        setCmtyPageOptions(false);
        setThreadOptionModal(false);
    } 

    const onShare = async (post_id) => {
        try {
          const result = await Share.share({
            message:`https://docintosh.com/app-share/${post_id}`,
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      };
  return (
    <SafeAreaView style={{ backgroundColor:"#ecf2f6", flex: 1}}>
        <Animated.View style={{height:headerHeight,opacity:opacity}}>
            <ImageBackground source={require("../../../assets/images/RectangleBgImage.png")} style={[styles.RectangleBgImage]}>
                <LinearGradient colors={["#000", "transparent"]}>
                    <View style={styles.joinHeaderView}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            {Icon('Ionicons','arrow-back',25,'#fff')}
                        </TouchableOpacity>
                        <View style={{flexDirection:'row'}}>
                            <TouchableOpacity style={{marginRight:15}}>
                                {Icon('AntDesign','search1',25,'#fff')}
                            </TouchableOpacity>
                            <TouchableOpacity  onPress={() => handleCommunityModal()}>
                                {Icon('Entypo','dots-three-vertical',25,'#fff')}
                            </TouchableOpacity>
                        </View>
                    </View>
                </LinearGradient>
            </ImageBackground>
           
            <View style={styles.communityName}>
                <View>
                    <Image 
                        source={require('../../../assets/images/CommunityPPic3.png')} 
                        style={styles.CommunityProfilePic}/>
                        <Text style={styles.communityNameText}>AIMS Hospital</Text>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Text style={styles.communityNameMembersCount}>2.2k </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Members')}>
                                <Text style={styles.communityNameMembers}>Member</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{marginLeft:10}} onPress={() => onShare("item?.post_id")}>
                                {Icon('FontAwesome5','share',20,'#51668A')}
                            </TouchableOpacity>
                        </View>
                </View>
                {/* <Button title={"Join"}
                    buttonStyle={{
                        width:100,
                        borderRadius:15/2,
                        backgroundColor:'#2C8892',
                        color:'#fff',
                    }}
                    titleStyle={{
                        color:'#fff',
                    }}/> */}
            </View>
        </Animated.View>
        <CreateCommunityPageOptionsModal modalVisible={cmtyPageOptions} setModalVisible={setCmtyPageOptions}/>
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
                    <CreateCommunityThreads 
                        modalVisible={threadOptionModal}
                        setModalVisible={setThreadOptionModal}
                    /> 
                  : 
                    <CreateCommunityFocusGroup
                        modalVisible={threadOptionModal}
                        setModalVisible={setThreadOptionModal}
                    />
                }
            </View>
        </ScrollView>


        {/* <TouchableOpacity style={styles.UserComments} onPress={() => navigation.navigate('SharepostCommunity')}>
            <View style={styles.UserInnerComments}>
                <View style={styles.inputCont} >
                <Image source={require('../../../assets/images/CommunityPPic3.png')} style={{width:50,height:50, borderRadius:50}}/>
                <TextInput
                    style={styles.input}
                    onChangeText={setText}
                    value={text}
                    placeholder="Message"
                />
                </View>
                <View style={styles.iconsContainer}>
                    <TouchableOpacity>
                        {Icon('Feather','paperclip',22,'#51668A')}
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal:15}}>
                        {Icon('Entypo','camera',22,'#51668A')}
                    </TouchableOpacity>
                    <TouchableOpacity>
                        {Icon('Ionicons','send',22,'#51668A')}
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity> */}

    </SafeAreaView>
  )
}

export default CommunityDetailsPages