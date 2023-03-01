import React,{useEffect, useState,useRef, useMemo} from 'react'
import{ View, ActivityIndicator ,useWindowDimensions,Image,TextInput,Animated,TouchableOpacity}from 'react-native'
import { TabView, SceneMap } from 'react-native-tab-view'; 
import { useNavigation } from '@react-navigation/native';
import Doctor from './Doctor';
import Community from './Community';
import Speciality from './Speciality';
import Page from './Page';
const styelcss = require('../../../assets/css/style');
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import { getsearchSplData } from '../../../../redux/reducers/ALL_APIs';
import { getLocalData } from '../../../apis/GetLocalData';


const CommonSearchScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch(); 
  const refInput = useRef(null);
  const layout = useWindowDimensions();
  const [inputText,setInputText] = useState(null);
  const [userData,setUserData] = useState();
  const [index, setIndex] = useState(0);
  const [endNull, setEndNull] = useState();
  const [currentPage, setCurrentPage] = useState();
  const [bottumLoader, setBottumLoader] = useState(false);
  
  const [routes] = useState([
    { key: 'first',  title: 'Doctor'},
    // { key: 'second', title: 'Community'},
    { key: 'third',  title: 'Speciality' },
    // { key: 'fourth', title: 'page'},
  ]); 

  const [item, setItem] = useState();
  const [filteredDataSource, setFilteredDataSource] = useState();

  const handleRemove = (id) => {
    console.log(id);
      // const removed = filteredDataSource?.filter(o => o.id != id)
      // setFilteredDataSource(removed);
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
      setItem(result?.payload?.result);
      setFilteredDataSource(result?.payload?.result);
      setBottumLoader(false);
    });
  }

  const onChangeText = async (text) => {
    if (text) {
        setInputText(text);
        const tabData = index == 0 ? 'doctor' : 'speciality';
        const postData = {pageCounter:1,user_id:userData.id,type:tabData,search:text}
        const result = await dispatch(getsearchSplData(postData));
        setFilteredDataSource(result?.payload?.result);
      } else {
        setInputText(text);
        setFilteredDataSource(item);
      }
  }

  const handleLoadeMore = async () => {
    if(endNull !== null && currentPage){
      const page  = currentPage + 1;
      const tabData = index == 0 ? 'doctor' : 'speciality';
      const postData = {pageCounter:page,user_id:userData?.id,type:tabData};
      const result = await dispatch(getsearchSplData(postData));
      // console.log(result?.payload);
      if(result?.payload?.result !== null){
        setFilteredDataSource([...filteredDataSource, ...result?.payload?.result]);
        setCurrentPage(result?.payload?.pageCounter);
      }
      setEndNull(result?.payload?.result);
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
  
  const FirstRoute = () => {
    return(
      <Doctor 
        filteredDataSource={filteredDataSource} 
        handleRemove={handleRemove} 
        handleLoadeMore={handleLoadeMore} 
        renderLoader={renderLoader}
      />
    )
  };

  const SecondRoute = () => { 
    return(
      <Community/>
    )
  };
  
  const ThirdRoute = () => {
    return(
      <Speciality 
        filteredDataSource={filteredDataSource} 
        handleRemove={handleRemove}
        handleLoadeMore={handleLoadeMore} 
        renderLoader={renderLoader}
      />
    )
  };
  
  const fourthRoute = () => {
    return(
      <Page/>
    )
  }
  
  const renderScene = SceneMap({
    first  : FirstRoute,
    second : SecondRoute,
    third  : ThirdRoute,
    fourth : fourthRoute,
  });
  

  const renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return (
      <View style={styelcss.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.3
            ),
          });

          return (
            <TouchableOpacity
              style={styelcss.tabItem}
              onPress={() => setIndex(i)}>
                <Animated.Text style={{opacity,fontFamily:"Inter-SemiBold"}}>
                  {route.title}
                </Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };



  useEffect(() => {
    GetsearchData();
    // Voice.onSpeechError = onSpeechError;
    // Voice.onSpeechResults = onSpeechResults;
    // return () => {
    //   Voice.destroy().then(Voice.removeAllListeners);
    // }
  }, [index]);

  const onSpeechResults = (result) => {
    setResults(result.value);
  };

  const onSpeechError = (error) => {
    console.log(error);
  };

  
  const emptyField =  () =>{
    setInputText(null)
  }

  const startVoice = async () =>{
    refInput.current.focus();
    // await Voice.start("en-US");
    // console.log("startVoice");
  }

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
    
    <TabView 
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width, fontSize:10}}
      swipeEnabled={true}
      renderTabBar={renderTabBar}
    />
  </View>
)
}
export default CommonSearchScreen