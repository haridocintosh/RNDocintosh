import { View, Text,SafeAreaView ,TextInput,Image,TouchableOpacity,Modal,ImageBackground, ScrollView,Animated,Share} from 'react-native'
import React,{useState, useRef,useEffect} from 'react';
import {styles} from './CommunityStyles'
import LinearGradient from 'react-native-linear-gradient';
import { Button } from 'react-native-elements';
import Threads from './Threads';
import FocusGroup from './FocusGroup';
import CommunityPageOptionsModal from './CommunityPageOptionsModal';
import { Icon } from '../../navigation/ReuseLogics';
import {BottomSheetModal, BottomSheetModalProvider,BottomSheetScrollView} from "@gorhom/bottom-sheet";
import { SvgUri } from 'react-native-svg';
import { getLocalData } from '../../apis/GetLocalData';
import { addUserCommunityAPI } from './JoinCommunitySlice';
import { useDispatch } from 'react-redux';

const JionCommunity = ({navigation,route}) => {
    const [text , setText] = useState();
    const [index , setIndex] = useState(true);
    const [reportSelect,setReportSelect] = useState();
    const [modalVisible, setModalVisible] = useState(false);
    const [cmtyPageOptions , setCmtyPageOptions] = useState(false);
    const [threadOptionModal,setThreadOptionModal] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isJoin, setIsJoin] = useState(false);
    const dispatch = useDispatch()
    const {data,getCommunityList} = route?.params;

    const scrollPosition = useRef(new Animated.Value(0)).current;
    const minHeaderHeight = 0;
    const maxHeaderHeight = 270;

    const bottomSheetModalRef = useRef(null);
    const snapPoints = ["1%","70%"];

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
    
    const handleCommunityModal = () => {
        setCmtyPageOptions(!cmtyPageOptions);
    }

    useEffect(() => {
        
        const arr = [data?.userlist.split(",")];
        arr[0].includes(data?.user_id) ? setIsJoin(false): setIsJoin(true);
    },[])

    const handleOnScroll = () => {
        setCmtyPageOptions(false);
        setThreadOptionModal(false);
    } 

    function handlePresentModal() {
        bottomSheetModalRef.current?.present();
        setCmtyPageOptions(false)
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

    const handleSelect = (val) => {
        switch (val) {
            case '1':
                setReportSelect("Harassment or Bullying");
                break;
            case '2':
                setReportSelect("Hate Speech");
                break;
            case '3':
                setReportSelect("Spams");
                break;
            case '4':
                setReportSelect("Voilation");
                break;
            case '5':
                setReportSelect("Nudity or Sexual Activity");
                break;
            case '6':
                setReportSelect("False Information");
                break;
            case '7':
                setReportSelect("Unauthorized Sales");
                break;
            default:
                break;
        }
        setModalVisible(true);
    }

    const handleSend = async() => {
        navigation.navigate("ReportTrack", {reportSelect});
    }
    const handleJoin = (data) => {
        setIsJoin(!isJoin)
        getLocalData("USER_INFO").then(async(res) => {
            const postData = {community_id:data?.id,user_id:res?.data?.id}
            const result = await dispatch(addUserCommunityAPI(postData));
            console.log("result",result?.payload);
            getCommunityList()
        })
    }

  return (
    <SafeAreaView style={{ backgroundColor: "#ecf2f6", flex: 1, }}>
        <Animated.View style={{height:headerHeight,opacity:opacity}}>
            
            <ImageBackground source={{uri:data?.coverImage}} style={[styles.RectangleBgImage]}>
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
                {data?.groupImage?.includes(".svg") ?
                    <SvgUri
                        uri={data?.groupImage}
                        style={styles.CommunityProfilePic}
                    />
                    :
                    <Image 
                        source={{uri:data?.groupImage}} 
                        style={styles.CommunityProfilePic}
                    />
                  }
                    <Text style={styles.communityNameText}>{data?.community_name}</Text>
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
                {isJoin?
                <Button title={"Join"}
                    onPress={() => handleJoin(data)}
                    buttonStyle={{
                        width:100,
                        borderRadius:15/2,
                        backgroundColor:'#2C8892',
                    }}
                    disabled={false}
                    titleStyle={{
                        color:'#fff',
                    }}/>
                    :
                    <Button title={"Joined"}
                    onPress={() => handleJoin(data)}
                    buttonStyle={{
                        width:100,
                        borderRadius:15/2,
                        backgroundColor:'#fff',
                        borderColor:'#2C8892',
                        borderWidth:2,
                    }}
                    titleStyle={{
                        color:'#2C8892',
                    }}/>
                }
            </View>
        </Animated.View>
        <CommunityPageOptionsModal modalVisible={cmtyPageOptions} setModalVisible={setCmtyPageOptions} handleReport={handlePresentModal} data={data}/>
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
                        setModalVisible={setThreadOptionModal}/> 
                : 
                    <FocusGroup
                        modalVisible={threadOptionModal}
                        setModalVisible={setThreadOptionModal}/>
                }
            </View>
        </ScrollView>

        <TouchableOpacity style={styles.UserComments} onPress={() => navigation.navigate('SharepostCommunity',{communityID:data?.id})}>
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
        </TouchableOpacity>
        <BottomSheetModalProvider>
            <BottomSheetModal
                ref={bottomSheetModalRef}
                index={1}
                snapPoints={snapPoints}
                backgroundStyle={{borderRadius: 30}}
                onDismiss={() => setIsOpen(true)}>
                    <BottomSheetScrollView keyboardShouldPersistTaps='handled'>
                        <View style={styles.JCBScontainer}>
                            <Text style={styles.JCBSTitle}>What’s going wrong?</Text>
                            <TouchableOpacity style={styles.JCBSreportSelectContainer} onPress={() =>handleSelect("1")}>
                                <Text style={styles.JCBSreportSelect}>Harassment or Bullying</Text>
                                {Icon("Entypo","chevron-thin-right",25,'#071B36')}
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.JCBSreportSelectContainer} onPress={() =>handleSelect("2")}>
                                <Text style={styles.JCBSreportSelect}>Hate Speech</Text>
                                {Icon("Entypo","chevron-thin-right",25,'#071B36')}
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.JCBSreportSelectContainer} onPress={() =>handleSelect("3")}>
                                <Text style={styles.JCBSreportSelect}>Spams</Text>
                                {Icon("Entypo","chevron-thin-right",25,'#071B36')}
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.JCBSreportSelectContainer} onPress={() =>handleSelect("4")}>
                                <Text style={styles.JCBSreportSelect}>Voilation</Text>
                                {Icon("Entypo","chevron-thin-right",25,'#071B36')}
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.JCBSreportSelectContainer} onPress={() =>handleSelect("5")}>
                                <Text style={styles.JCBSreportSelect}>Nudity or Sexual Activity</Text>
                                {Icon("Entypo","chevron-thin-right",25,'#071B36')}
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.JCBSreportSelectContainer} onPress={() =>handleSelect("6")}>
                                <Text style={styles.JCBSreportSelect}>False Information</Text>
                                {Icon("Entypo","chevron-thin-right",25,'#071B36')}
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.JCBSreportSelectContainer} onPress={() =>handleSelect("7")}>
                                <Text style={styles.JCBSreportSelect}>Unauthorized Sales</Text>
                                {Icon("Entypo","chevron-thin-right",25,'#071B36')}
                            </TouchableOpacity>
                        </View>
                    </BottomSheetScrollView>
            </BottomSheetModal>
        </BottomSheetModalProvider>
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                <Text style={styles.textBold}>Are You Sure?</Text>
                <Text style={styles.textNormal}>Dou you what report on this post?</Text>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity 
                    style={[styles.buttonsDesign,styles.leftButtonsDesign]} 
                    onPress={() =>{setModalVisible(false)}}>
                    <Text style={[styles.textBold,styles.leftText]}>Cancel</Text>
                    </TouchableOpacity>
                    <Text>{"        "}</Text>
                    <TouchableOpacity 
                    style={[styles.buttonsDesign,styles.RightButtonsDesign]}
                    onPress={() => handleSend()}>
                    <Text style={[styles.textBold,styles.RightText]}>send</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </View>
        </Modal>
    </SafeAreaView>
  )
}

export default JionCommunity