import {  View,
  Text, ActivityIndicator,
  StyleSheet,
  FlatList,
  TextInput } from 'react-native'
import React, {useState, useEffect, useRef } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from '../components/CustomButton';
import { mainApi } from '../apis/constant';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from "react-redux";
import { addCircle, getInterestSpl } from '../../redux/reducers/circleSlice';
const styelcss = require('../assets/css/style');
import Toast from 'react-native-simple-toast';




const SelectInterest = ({route}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [selectitem,setselectitem]=useState('');
  const [loader, setLoader] = useState(true);

  // const user_id ='229533';
  // const specialityId ='59';
  const {user_id, specialityId} = route.params;
  console.log(user_id, specialityId)
  const getItem = (item) => {
   // alert(item.speciality);
    // Function for click on an item
    let spl=item.speciality_id;
    let copy=[...selectitem];
    copy =[...copy,spl]
   setselectitem(copy)
  const newItem = filteredDataSource.map((val)=>{
    if(val.speciality_id===item.speciality_id){
      return {...val, isSelected:!val.isSelected }
    }else{
      return val
    }
  })
  setFilteredDataSource(newItem);

  var array = [...selectitem]; // make a separate copy of the array
  var index = array.indexOf(spl)
    if(index !== -1) {
      array.splice(index, 1);
      setselectitem(array);
    }
    fetchPostData(spl)
  };

  const fetchPostData = async (speciality_id)=>{
    const postDetails = {speciality_id:speciality_id,id:user_id}
    const result = await dispatch(addCircle(postDetails));
 }


 const getInterestSplData = async () => {
  const postDetails = {speciality_id:specialityId}
  const result = await dispatch(getInterestSpl(postDetails));
  setFilteredDataSource(result?.payload);
  setMasterDataSource(result?.payload);
  setLoader(false)
 }

  useEffect(() => {
    getInterestSplData()
  }, []);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        // Applying filter for the inserted text in search bar
        const itemData = item.speciality
          ? item.speciality.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({ item }) => {
    return (
      // Flat List Item
    <View style={styles.item}>
      <Text style={[styles.itemStyle, item.isSelected ? { borderColor:"#E6E6E6", backgroundColor:"transparent",color:"#51668A"} : { borderColor:"#45B5C0", backgroundColor:"#F6FBFC", color:"#071B36"} ]} onPress={() => getItem(item)}> 
        {'#'}{item.speciality }{ item.isSelected?"":"    "}
      </Text>
      <Text style={{position:"absolute",top:11,right:4}}>{ item.isSelected ?'':<Ionicons style={{width:40, right:100,marginBottom:0}} name="close-circle" size={20} color="#45B5C0"/> } </Text>
    </View>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.6,
          width: '100%',
          margin: 1
        }}
      />
    );
  };

  const handleSubmit = ()=>{
    if(selectitem == ''){
      Toast.show('Please Select Your Interest');
    }else{
      navigation.navigate('ContactPermission'); 
    }
  }

    if(loader){
      return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center' }} >
          <ActivityIndicator size={'large'} color={"#2C8892"}/>
      </View>)
    }
  return (
    <View style={{paddingTop:0,height:"100%",backgroundColor:"#fff"}}>
  
      <View style={styles.container}>
        <Ionicons style={styles.searchIcon} name="ios-search" size={20} color="#51668A"/>
          <TextInput
            style={[styles.textInputStyle,{ fontFamily:"Inter-Regular"}]}
            onChangeText={(text) => searchFilterFunction(text)}
            value={search}
            underlineColorAndroid="transparent"
            placeholder="Search Here"
            placeholderTextColor='#51668A'
          />
      </View>
      <View style={{marginTop:0, paddingHorizontal:15,paddingVertical:20 }}>
     
        <FlatList
          columnWrapperStyle={styles.tagView}
          data={filteredDataSource}
          showsVerticalScrollIndicator={true}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
         // contentContainerStyle={{ flexDirection: 'column',height:"100%" , width:"100%" }}
         numColumns={2}
        // nestedScrollEnabled={false}
        />
      </View>

      <View style={{marginTop:0,zIndex:1,width:"100%",backgroundColor:"#fff",position:"absolute",bottom:0,paddingHorizontal:20}}>
          <CustomButton label={'Continue'} onPress={() => handleSubmit()}   />
      </View>
      </View>
  );

}

const styles = StyleSheet.create({
  container: {
  marginTop:6,
  marginHorizontal:20,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius:8,
    borderLeftWidth:1,
    borderTopWidth:1,
    borderBottomWidth:1,
    borderColor:"#D5DEED"

    
  },
  itemStyle: {
    display:"flex",
    paddingHorizontal:16,
    paddingVertical:8,
    marginVertical:4,
   // marginLeft:10,
    //color: "#51668A",
    width:"100%",
    height:"auto",
  //   backgroundColor:"transparent",
    borderRadius:52,
    borderWidth:1,
   // borderColor:"#45B5C0",
  //  position:"relative",
    justifyContent:"space-between",
    fontSize:14,
    fontFamily:"Inter-Regular",
   alignItems:"center"
  },
  item:{
    marginLeft:10,
    flexWrap:"wrap",
    position:"relative"

  },

  tagView: {
    flexWrap: "wrap",
    },

  textInputStyle: {
   flex: 1,
   paddingTop: 10,
   paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#51668A',
    borderRadius:8,
    borderRightWidth:1,
    borderColor:"#D5DEED",
    fontSize:16
  },
  searchIcon: {
    padding: 10,
},
searchIconCross:{
  backgroundColor:"red",

}


});



export default SelectInterest