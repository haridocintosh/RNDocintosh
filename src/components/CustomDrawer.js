import React,{useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  useDrawerStatus,
} from '@react-navigation/drawer';
import profilePicture from '../assets/images/profilePicture.png';
import { Button } from 'react-native-elements';
import { useNavigation,DrawerActions} from '@react-navigation/native';
import { storeData } from '../apis/Apicall';
import { useDispatch, useSelector } from 'react-redux';
import { getLocalData } from '../apis/GetLocalData';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Icon } from '../navigation/ReuseLogics';
import { CDrawerDoctor,CDrawerUser } from './CustomDrawerJson';
import FastImage from 'react-native-fast-image'


const CustomDrawer = (props) => { 
  const navigation = useNavigation();
  const [logoutdata, setlogoutdata] = useState();
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  // const profile_url="https://docintosh-assets.s3.us-west-2.amazonaws.com/IMAUP/profile/2021_03_17_04_46_55maledefault.png?response-content-disposition=attachment%3B%20filename%3D%222021_03_17_04_46_55maledefault.png%22&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIATI7R7JS76FDN7AZB%2F20220908%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220908T080043Z&X-Amz-SignedHeaders=host&X-Amz-Expires=518400&X-Amz-Signature=8d3da3b8bec2f627811e1c90332193b36525941c260202c7fbbde63af8adf7ab";
  const [userdata, setuserdata] = useState({fullname : "", profile : "", speciality : ""});
  // const isFocused = useIsFocused();
  // const Drawer = createDrawerNavigator();
  const drawerStatus = useDrawerStatus();

  // console.log("CDrawer",CDrawer);

  // const userInfo = useSelector((state) => state.userLocalData.localData);
  // console.log("userInfo",userInfo);

  const asyncFetchDailyData = async () => {
    const value = await AsyncStorage.getItem('profileImage');
    getLocalData('USER_INFO').then((res) => {
      const reData = res?.data;
      setlogoutdata(reData);
      setuserdata({ ...userdata, 
        fullname: `${reData?.first_name} ${reData?.last_name}`,
        speciality: `${reData?.speciality}`,
        role:`${reData?.role}`,
        profile: value,
      });
    });
    }
  
  useEffect(() => {
    if(drawerStatus == "open"){
      asyncFetchDailyData();
    }
  }, [drawerStatus])
  
  const removeData = async () => {
    setLoader(true)
    try {
      storeData('USER_INFO',JSON.stringify({
        login:false,
        data:logoutdata
      }))
      // setTimeout(()=>{
        navigation.dispatch(DrawerActions.closeDrawer());
        navigation.navigate('Login')
      // },1000)
    }catch(e) {
    }
    setLoader(false)
  }
  
  return (
    <View style={styles.DrowerContainer}>
        <View style={styles.DocLogo}>
          <Image source={require('../assets/dr-icon/docintoshlogo.png')} style={styles.logoImg}/>
          <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
            {Icon("AntDesign",'close',25,'#fff')}
          </TouchableOpacity>
        </View>

        <View style={styles.profoleDetailsContainer}>
          <View style={styles.profoleDetails}>
            <TouchableOpacity  onPress={() => navigation.navigate('ProfileScreen')} style={styles.forwardIcon}>
              {Icon("MaterialIcons","arrow-forward-ios",16,'#fff')}
            </TouchableOpacity>
            <FastImage
                  style={styles.profilePic}
                  source={userdata.profile && {
                      uri:userdata.profile,
                      priority: FastImage.priority.normal,
                  }}
              />
            {/* <Image source={userdata.profile ? {uri:userdata.profile}:profilePicture} style={styles.profilePic}/> */}
            <Text style={styles.userName}>{userdata?((userdata.role<='4')?'Dr.':''):''} {userdata['fullname']}</Text>
            <Text style={styles.userProfession}> {userdata['speciality']} |</Text>
          </View>
        </View>
        {userdata?((userdata.role == '4' )?  
          <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor : '#071B36'}}>
            <View style={styles.drowerChilds}>
              <DrawerItemList {...props} />
              {CDrawerDoctor?.map((data,i) => {
                return(
                  <TouchableOpacity style={styles.sideDrawerComp} onPress={() => {navigation.navigate(data.redirect)}} key={i}>
                    {Icon(data?.provider,data?.icon,25,'#fff')}
                    <Text style={styles.sideDrawerName}>{data.name}</Text>
                  </TouchableOpacity>
                )
              })}
            </View>
          </DrawerContentScrollView>
        :
        <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor: '#071B36',}}>
        <View style={styles.drowerChilds}>
          <DrawerItemList {...props} />
          {CDrawerUser?.map((data,i) => {
              return(
                <TouchableOpacity style={styles.sideDrawerComp} onPress={() => {navigation.navigate(data.redirect)}} key={i}>
                  {Icon(data?.provider,data?.icon,25,'#fff')}
                  <Text style={styles.sideDrawerName}>{data.name}</Text>
                </TouchableOpacity>
              )
            })}
        </View>
      </DrawerContentScrollView>
        ): ''}
        <View style={styles.deviderLine}/>
        <View style={{paddingHorizontal: 20,}}>
          <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15 }}>
            <View style={{flexDirection: 'row', alignItems: 'center',paddingRight:10}}>
              {Icon('Feather','phone',20,'#fff')}
              <Text style={styles.drawerText}> Contact us</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15,}}>
            <View style={{flexDirection: 'row', alignItems:'center',paddingRight:10}}>
              {Icon('Feather','info',20,'#fff')}
              <Text style={styles.drawerText}> Support </Text>
            </View>
          </TouchableOpacity>
            <View style={{marginVertical:15}}>
            <Button
              onPress={() => removeData()}
                title={"Logout"}
                type="outline"
                buttonStyle={{
                  borderColor: '#2C8892',
                  borderRadius:15/2
                }}
                titleStyle={{
                  color:'#2C8892'
                }}/>
            </View>
        </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  DrowerContainer:{
    flex: 1,  
    width:325,
    position:'relative',
    marginTop:28
  },
  DocLogo:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:10,
    marginTop:15
  },
  logoImg:{
    width:40,
    height:35
  },
  profoleDetails:{
    backgroundColor:'#001127', 
    borderRadius:20 /2,
    width:"100%",
    padding:20
  },
  profilePic:{
    height: 64, 
    width: 64, 
    borderRadius: 40,
    marginTop: -10,
    alignSelf:'center'
  },
  userName:{
    alignSelf:'center',
    color:'#fff',
    fontSize:16,
    fontWeight:'600',
    marginTop:5
  },
  userProfession:{
    alignSelf:'center', 
    fontSize:12,
    fontWeight:'400',
    color:"#CCCCCC"
  },
  drowerChilds:{
    flex: 1, 
    backgroundColor: '#071B36', 
  },
  sideDrawerComp:{
    borderColor:'#ccc',
    // height:45,
    marginHorizontal:10,
    marginVertical:4,
    borderRadius:5,
    flexDirection:'row',
    alignItems:'center',
    padding:10,
  },
  profoleDetailsContainer:{
    margin:10
  },
  sideDrawerName:{
    color:"#fff",
    fontFamily:'Inter-Regular',
    fontSize: 16,
    marginLeft:10
  },
  forwardIcon:{
    position:'absolute',
    right:0,
    padding:20
  },
  drawerText:{
    fontFamily:'Inter-Regular',
    marginLeft: 5,
    fontSize:14,
    color:'#FFFFFF'
  },
  deviderLine:{
    height:1, 
    marginHorizontal:20,
    backgroundColor:'rgba(224, 224, 224, 0.2)',
    borderRadius:10
  },
  DrowerNotch:{
    width:25,
    height:50,
    backgroundColor:"#071B36",
    position:'absolute',
    top:60,
    right:-22,
    borderTopRightRadius:50,
    borderBottomRightRadius:50,
    justifyContent:'center',
    alignItems:'center'
  },
  notchIcons:{
    width:"100%",
    height:'100%',
    alignItems:'center',
    justifyContent:'center'}
})