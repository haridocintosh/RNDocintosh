import React,{useEffect, useState,useRef, useMemo} from 'react'
import{ View,Text, ActivityIndicator ,Image,TextInput,Animated,TouchableOpacity}from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Doctor from './Doctor';
import Speciality from './Speciality';
const styelcss = require('../../../assets/css/style');
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import { getsearchSplData } from '../../../../redux/reducers/ALL_APIs';
import { getLocalData } from '../../../apis/GetLocalData';
import {styles} from './CommonSearchScreenStyles'

const CommonSearchScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch(); 
  const refInput = useRef(null);
  const [inputText,setInputText] = useState(null);
  const [userData,setUserData] = useState();
  const [index, setIndex] = useState(0);
  const [endNull, setEndNull] = useState();
  const [currentPage, setCurrentPage] = useState();
  const [bottumLoader, setBottumLoader] = useState(false);
  const [activeTab, setActiveTab] = useState(true);
  const [filteredDataSource, setFilteredDataSource] = useState();

  const handleTab = (i) =>{
    setIndex(i)
    setActiveTab(!activeTab);
  }
  const handleRemove = (id) => {
      const removed = filteredDataSource?.filter(o => o.id != id)
      setFilteredDataSource(removed);
  }
  
  const GetsearchData =  () => {
    getLocalData('USER_INFO').then(async (res) => {
      setBottumLoader(true);
      const reData = res?.data;
      setUserData(reData);
      const tabData = index == 0 ? 'doctor' : 'speciality';
      const postData = {pageCounter:1,user_id:reData.id,type:tabData};
      const result = await dispatch(getsearchSplData(postData));
      setCurrentPage(result?.payload?.pageCounter);
      setFilteredDataSource(result?.payload?.result);
      setBottumLoader(false);
    });
  }

  const onChangeText = async (text) => {
        setInputText(text);
        const tabData = index == 0 ? 'doctor' : 'speciality';
        const postData = {pageCounter:1,user_id:userData.id,type:tabData,search:text}
        const result = await dispatch(getsearchSplData(postData));
        setFilteredDataSource(result?.payload?.result);
  }

  const handleLoadeMore = async () => {
    if(endNull !== null && currentPage){
      setBottumLoader(true);
      const page  = currentPage + 1;
      const tabData = index == 0 ? 'doctor' : 'speciality';
      const postData = {pageCounter:page,user_id:userData?.id,type:tabData};
      const result = await dispatch(getsearchSplData(postData));
      if(result?.payload?.result !== null){
        setFilteredDataSource([...filteredDataSource, ...result?.payload?.result]);
        setCurrentPage(result?.payload?.pageCounter);
      }
      setEndNull(result?.payload?.result);
      setBottumLoader(false);
    }
  };
  
  const renderLoader = () => {
    return (
      bottumLoader &&
        <View style={styelcss.loaderStyle}>
          <ActivityIndicator size="small" color="#1A7078"/>
        </View> 
    );
  };

  const emptyField =  () =>{
    setInputText(null)
  }

  const startVoice = async () =>{
    refInput.current.focus();
  }
  useEffect(() => {
    GetsearchData();
  }, [index]);


return (
  <View style={{flex:1}}>
    <View style={styelcss.headerContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
         <Ionicons name="arrow-back" size={25} color={"#fff"}/>
      </TouchableOpacity>
      <TouchableOpacity style={{flex:1,paddingHorizontal:10}}>
      <TextInput
          ref={refInput}
          placeholder={"Search"}
          style={{fontSize:18,color:"#fff"}}
          placeholderTextColor={'#fff'}
          onChangeText={onChangeText}
          value={inputText}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={inputText ? () => emptyField() : () => startVoice()}>
        <Ionicons name={inputText ? "close-outline":"search"} size={24} color={"#fff"}/>
      </TouchableOpacity>
    </View>

    <View style={styles.TabContainer}>
      <TouchableOpacity onPress={() => handleTab(0)} style={activeTab ?styles.TabBtnA : styles.TabBtnD}>
        <Text style={activeTab ?styles.TabBtnTxtA : styles.TabBtnTxtD}>Doctor</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTab(1)} style={activeTab ? styles.TabBtnD: styles.TabBtnA}>
        <Text style={activeTab ? styles.TabBtnTxtD : styles.TabBtnTxtA}>Community</Text>
      </TouchableOpacity>
    </View>

    {activeTab ?
    <Doctor 
      filteredDataSource={filteredDataSource} 
      handleRemove={handleRemove} 
      handleLoadeMore={handleLoadeMore} 
      renderLoader={renderLoader}
    />
    :
    <Speciality 
      filteredDataSource={filteredDataSource} 
      handleRemove={handleRemove}
      handleLoadeMore={handleLoadeMore} 
      renderLoader={renderLoader}
    />
    }
  </View>
)
}
export default CommonSearchScreen;