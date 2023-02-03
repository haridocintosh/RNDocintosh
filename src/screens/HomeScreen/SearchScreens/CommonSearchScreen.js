import React,{useEffect, useState} from 'react'
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

const CommonSearchScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch(); 
  const refInput = React.useRef(null);
  const layout = useWindowDimensions();
  const [inputText,setInputText] = useState(null);
  const [index, setIndex] = React.useState(0);
  const [endNull, setEndNull] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [bottumLoader, setBottumLoader] = useState(false);

  const [routes] = React.useState([
    { key: 'first',  title: 'Doctor'},
    { key: 'second', title: 'Community' },
    { key: 'third',  title: 'Speciality' },
    { key: 'fourth', title: 'page' },
  ]); 
  const [item, setItem] = useState();
  const [filteredDataSource, setFilteredDataSource] = useState();

  console.log("item",item?.length);
  console.log("filteredDataSource",filteredDataSource?.length);

  const handleRemove = (id) => {
      const removed = filteredDataSource?.filter(o => o.id != id)
      setFilteredDataSource(removed);
  }
  const onChangeText =  (text) =>{
    if (text) {
        const newData = item?.filter((data) => {
          const itemData = `${data?.username + data?.speciality}`;
          const textData = text;
          return itemData.indexOf(textData) > -1;
        });
        setFilteredDataSource(newData);
        setInputText(text);
      } else {
        setFilteredDataSource(item);
        setInputText(text);
      }
  }

  const handleLoadeMore = () => {
    if(endNull !== null){
      LoadPost(currentPage + 1);
    }
  };

  const LoadPost = async (page) => {
    console.log("page",page);
    setBottumLoader(true);
    const result = await dispatch(getsearchSplData({pageCounter:page}));
    setEndNull(result?.payload?.result)
    if(result?.payload?.result !== null){
      setCurrentPage(prev => prev + 1);
      setItem([...filteredDataSource, ...result?.payload?.result])
      setFilteredDataSource([...filteredDataSource, ...result?.payload?.result]);
    }
    setBottumLoader(false);
  }
  
  const renderLoader = () => {
    return (
      bottumLoader ?
        <View style={styelcss.loaderStyle}>
          <ActivityIndicator size="small" color="#1A7078" />
        </View> : null
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
                <Animated.Text style={{ opacity,fontFamily:"Inter-SemiBold"}}>
                  {route.title}
                </Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  const GetsearchData = async () => {
      const result = await dispatch(getsearchSplData({pageCounter:0}));
      console.log("result?.payload",result);
      setItem(result?.payload?.result);
      setFilteredDataSource(result?.payload?.result);
  }

  useEffect(() => {
    GetsearchData();
    // Voice.onSpeechError = onSpeechError;
    // Voice.onSpeechResults = onSpeechResults;
    // return () => {
    //   Voice.destroy().then(Voice.removeAllListeners);
    // }
  }, []);

  const onSpeechResults = (result) => {
    setResults(result.value);
  };

  const onSpeechError = (error) => {
    console.log(error);
  };

  
  const emptyField =  () =>{
    setInputText(null)
  }
  // const startVoice = async () =>{
  //   refInput.current.focus();
  //   // await Voice.start("en-US");
  //   // console.log("startVoice");
  // }

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