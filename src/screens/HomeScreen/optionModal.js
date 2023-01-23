import { View, Text, StyleSheet, TouchableOpacity,Modal } from 'react-native'
import React, { useState } from 'react';
import {MaterialCommunityIcons,Feather,Entypo,MaterialIcons } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import { deletePost } from '../../../redux/reducers/postAction';
import { useDispatch } from 'react-redux';
import { coinTransfer } from '../../../redux/reducers/coinSlice';
import { BlockUserApi, followApi, SavePostApi } from '../../../redux/reducers/ALL_APIs';
import {Ionicons} from '@expo/vector-icons';

const OptionModal = ({modalVisible,item,deletePostID,BlockId,setModalVisible,resData}) => {
  const [toggle, setToggle] = useState(false);
  const [savedPost, setSavedPost] = useState(item?.saved_status);
  const [follow, setFollow] = useState(item?.follow_status);
  const [okay, setOkayCondition] = useState(null);

  const dispatch    = useDispatch();
  const navigation  = useNavigation();

  const handleDeletePost = async ()=>{
    setOkayCondition("delete");
    setModalVisible(false);
    setToggle(true);
  }

  const handleOkay = async () =>{
    if(okay == "delete"){
      const postDetails = {post_id:item?.post_id}
      const result      = await dispatch(deletePost(postDetails));
      if(result.payload.status  == 'Success'){
        const coinDetails = {task:15, receiverId:0, senderId:item?.id} 
        const coinResult  = await dispatch(coinTransfer(coinDetails));
        if(coinResult.payload.status  == 'Success'){
          deletePostID(item?.post_id);
          setToggle(false);
        }
      }
   }else if(okay == "block"){
    const postDetails = {fromuserid:resData?.id,touserid:item?.id};
    const blockPostResult  = await dispatch(BlockUserApi(postDetails));
    if(blockPostResult?.payload?.status == "Success"){
      setToggle(false);
      BlockId(item?.id);
    }
   }
  }

  const SavedPostHandle = async () => {
    const postDetails = {user_id:resData?.id, post_id:item?.post_id};
    const savedPostResult = await dispatch(SavePostApi(postDetails));
    if(savedPostResult.payload.status == "Saved"){
      setSavedPost(true);
    }else{
      setSavedPost(false);
    }
  }

  const handleReport = () => {
    setModalVisible(false);
    navigation.navigate('ReportPost', {postId: item?.post_id, id: item?.id})
  }

  const handleUnfollow = async () => {
    const postDetails = {follow_from:resData?.id, follow_to:item?.id};
    const followResult  = await dispatch(followApi(postDetails));
    console.log("followApi",followResult.payload);
    if(followResult.payload.status){
      setFollow(false);
    }else{
      setFollow(true);
    }
  }

  const BlockPostHandle = async () => {
    setOkayCondition("block");
    setModalVisible(false);
    setToggle(true);
  }

// console.log("savedPost",savedPost);
  return (
    <View>
    {modalVisible &&
    <View style={styles.optionModal}>
      {resData?.id === item?.id ?
      <TouchableOpacity style={styles.optionList} onPress={() =>{handleDeletePost()}}>
        <MaterialCommunityIcons name='delete-outline' size={23} color={'#45B5C0'}/>
        <Text style={styles.optionListText}>Delete Post</Text>
      </TouchableOpacity>
      :
      <View>
        <TouchableOpacity style={styles.optionList} onPress={() => SavedPostHandle()}>
        <Ionicons name={ savedPost ? 'bookmark':'bookmark-outline'} size={24} color={"#45B5C0"} style={styles.optionListIcon}/>
            <Text style={styles.optionListText}>
              {savedPost ? "Saved": "Save Post"}
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionList} onPress={()=> handleReport()}>
            <MaterialIcons name="report-problem" size={24} color="#45B5C0" style={styles.optionListIcon}/>
            <Text style={styles.optionListText}>Report Post</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionList} onPress={()=> handleUnfollow()}>
        <Feather name={follow ? "user-minus": "user-plus"} size={24} color="#45B5C0" style={styles.optionListIcon} />
            <Text style={styles.optionListText}>
              {follow ? "Follow" : "Unfollow" }
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionList} onPress={() => BlockPostHandle()}>
        <Entypo name="block" size={24} color="#45B5C0" style={styles.optionListIcon}/>
            <Text style={styles.optionListText}>Block User</Text>
        </TouchableOpacity>
      </View>
    }
    </View>
  }

  <Modal animationType="fade" transparent={true} visible={toggle} >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.textBold}>Are you sure,</Text>
          <Text style={styles.textNormal}> Do you want to {okay == "block" ? "Block This user" : "Delete This post"}?</Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity 
              style={[styles.buttonsDesign,styles.leftButtonsDesign]} 
              onPress={() =>{setToggle(false)}}>
            <Text style={[styles.textBold,styles.leftText]}>Cancel</Text>
            </TouchableOpacity>
            <Text>{"            "}</Text>
            <TouchableOpacity 
              style={[styles.buttonsDesign,styles.RightButtonsDesign]}
              onPress={() => handleOkay()}>
            <Text style={[styles.textBold,styles.RightText]}>Okay</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
  </Modal>
  </View>
  )
}

export default OptionModal;

export const styles = StyleSheet.create({
optionModal:{
    width:150,
    backgroundColor:'#fff',
    position:'absolute',
    right:0,
    top:-10,
    borderRadius:5,
    justifyContent:"center",
    // alignItems:'center',
    paddingHorizontal:15,
    paddingVertical:10,
    zIndex:2,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2},
    shadowRadius: 10,
    elevation: 3,
    backgroundColor: 'white'
  },
  optionList:{
    paddingVertical:7,
    flexDirection:'row'
  },
  optionListText:{
    color:'#071B36',
    fontFamily:"Inter-Regular",
  },
  optionListImage:{
    width:15.5,
    height:20.7,
    marginRight:7
  },
  optionListIcon:{
    marginRight:7
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'rgba(0,0,0,0.4)'  
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textBold:{
    fontFamily:'Inter-SemiBold',
  },
  textNormal:{
    fontFamily:"Inter-Regular",
  },
  buttonsContainer:{
    flexDirection:'row',
  },
  buttonsDesign:{
    borderWidth:1,
    paddingHorizontal:25,
    borderRadius:5,
    paddingVertical:7,
    marginTop:20
  },
  leftButtonsDesign:{
    borderColor:'#1A7078'
  },
  RightButtonsDesign:{
    borderColor:'#1A7078',
    backgroundColor:'#1A7078'
  },
  leftText:{
    color:'#1A7078'
  },
  RightText:{
    color:'#fff'
  },
  });