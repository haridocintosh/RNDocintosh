import { View, Text,Image,TouchableOpacity,FlatList } from 'react-native'
import React,{useState,useRef,Fragment} from 'react';
import Card from '../../utils/Card';
import { styles } from './CommunityStyles';
import Entypo from 'react-native-vector-icons/Entypo';
import { Icon } from '../../navigation/ReuseLogics';
import { useNavigation } from '@react-navigation/native';



const FocusGroup = ({modalVisible,setModalVisible}) => {
  const [focusData, setFocusData] = useState([]);
  const navigation = useNavigation()

  // const names = ["gagan",'pawan',"gagan","bansode","Hari","bansode"];
  // const unique = Array.from(new Set(names));
  // const newArr = [];
  // console.log(unique);
  // const mapUniq = names.filter((data,i) =>{
  //       const a = newArr.findIndex(x => x == data);
        
  // })
  // console.log("mapUniq",mapUniq);
  const ref = useRef(null);

  const onViewableItemsChanged = ({viewableItems}) => {
    viewableItems.map((data) => {
      setCurrentIndex(data.index);
    });
  };

  const viewabilityConfigCallbackPairs = useRef([
    { onViewableItemsChanged },
  ]);

  var _viewabilityConfig = {
    itemVisiblePercentThreshold: 50
  };

  const _listEmptyComponent = () => {
    return(
      <View style={styles.ListEmptyComponent}>
        <Image source={require('../../assets/images/CommingSoon.png')} 
          style={{width:'70%',height:300}}/>
        <Text style={styles.Title}>Opps!</Text>
        <Text style={styles.subTitle}>Looks Like no group created.</Text>

      </View>
    )
  }

  const renderItem = () => {
    return(
      <Card>
        <View style={styles.FocusPostUserDetailsContainer}>
          <View style={styles.FocusPostUserDetails}>
            <View style={{justifyContent:'center',alignItems:'center'}}>
              <Image source={require('../../assets/images/CommunityPPic2.png')} style={{borderRadius:50,width:60,height:60}}/>
            </View>
            <View style={styles.FocusPostUserDetailsTextContainer}>
                <Text style={styles.FocusPostPostName}>COVID Vaccine India</Text>
                <Text style={styles.ThreadPostPostSplty}>Created By Dr. Mahesh Gupta</Text>
                <Text style={styles.ThreadPostPostHospital}>AIMS Hospital</Text>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                  <View style={{flexDirection:'row'}}>
                  <Image source={require('../../assets/images/CommunityPPic1.png')} style={{borderRadius:50,width:20,height:20}}/>
                  <Image source={require('../../assets/images/CommunityPPic2.png')} style={{borderRadius:50,width:20,height:20,marginLeft:-7}}/>
                  <Image source={require('../../assets/images/CommunityPPic3.png')} style={{borderRadius:50,width:20,height:20,marginLeft:-7}}/>
                  </View>
                  <Text style={styles.ThreadPostPostJoinMembers}>160+ Members</Text>
                </View>
            </View>
          </View>
          <Entypo name='dots-three-vertical' size={25} color={'#51668A'}/>
        </View>
      </Card>
    )
  }
  return (
    <Fragment>
    <FlatList
        ref={ref}
        data={focusData}
        renderItem={renderItem}
        keyExtractor={(item,index) => index}
        // ListFooterComponent={renderLoader}
        // onEndReached={() => handleLoadeMore()}
        showsVerticalScrollIndicator={false}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        viewabilityConfig={_viewabilityConfig}
        ListEmptyComponent={_listEmptyComponent}
        // refreshing={refresh}
        // onRefresh={() => setRefresh(true)}
        onScrollBeginDrag={() => setModalVisible(false)}
    />
    <TouchableOpacity style={styles.plusContainer} onPress={() => navigation.navigate("CreateFocusGroup")}>
        {Icon('AntDesign','plus',40,'#fff')}
    </TouchableOpacity>
    {/* <Card>
      <View style={styles.FocusPostUserDetailsContainer}>
        <View style={styles.FocusPostUserDetails}>
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <Image source={require('../../assets/images/CommunityPPic3.png')} style={{borderRadius:50,width:60,height:60}}/>
            <Text style={styles.FocusLive}>Live</Text>
          </View>
          <View style={styles.FocusPostUserDetailsTextContainer}>
              <Text style={styles.FocusPostPostName}>COVID Vaccine India</Text>
              <Text style={styles.ThreadPostPostSplty}>Created By Dr. Mahesh Gupta</Text>
              <Text style={styles.ThreadPostPostHospital}>AIMS Hospital</Text>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <View style={{flexDirection:'row'}}>
                <Image source={require('../../assets/images/CommunityPPic1.png')} style={{borderRadius:50,width:20,height:20}}/>
                <Image source={require('../../assets/images/CommunityPPic2.png')} style={{borderRadius:50,width:20,height:20,marginLeft:-7}}/>
                <Image source={require('../../assets/images/CommunityPPic3.png')} style={{borderRadius:50,width:20,height:20,marginLeft:-7}}/>
                </View>
                <Text style={styles.ThreadPostPostJoinMembers}>160+ Members</Text>
              </View>
          </View>
        </View>
        <Entypo name='dots-three-vertical' size={25} color={'#51668A'}/>
      </View>

    </Card>
    <Card>
      <View style={styles.FocusPostUserDetailsContainer}>
        <View style={styles.FocusPostUserDetails}>
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <Image source={require('../../assets/images/CommunityPPic2.png')} style={{borderRadius:50,width:60,height:60}}/>
          </View>
          <View style={styles.FocusPostUserDetailsTextContainer}>
              <Text style={styles.FocusPostPostName}>COVID Vaccine India</Text>
              <Text style={styles.ThreadPostPostSplty}>Created By Dr. Mahesh Gupta</Text>
              <Text style={styles.ThreadPostPostHospital}>AIMS Hospital</Text>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <View style={{flexDirection:'row'}}>
                <Image source={require('../../assets/images/CommunityPPic1.png')} style={{borderRadius:50,width:20,height:20}}/>
                <Image source={require('../../assets/images/CommunityPPic2.png')} style={{borderRadius:50,width:20,height:20,marginLeft:-7}}/>
                <Image source={require('../../assets/images/CommunityPPic3.png')} style={{borderRadius:50,width:20,height:20,marginLeft:-7}}/>
                </View>
                <Text style={styles.ThreadPostPostJoinMembers}>160+ Members</Text>
              </View>
          </View>
        </View>
        <Entypo name='dots-three-vertical' size={25} color={'#51668A'}/>
      </View>

    </Card>
    <Card>
      <View style={styles.FocusPostUserDetailsContainer}>
        <View style={styles.FocusPostUserDetails}>
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <Image source={require('../../assets/images/CommunityPPic1.png')} style={{borderRadius:50,width:60,height:60}}/>
          </View>
          <View style={styles.FocusPostUserDetailsTextContainer}>
              <Text style={styles.FocusPostPostName}>COVID Vaccine India</Text>
              <Text style={styles.ThreadPostPostSplty}>Created By Dr. Mahesh Gupta</Text>
              <Text style={styles.ThreadPostPostHospital}>AIMS Hospital</Text>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <View style={{flexDirection:'row'}}>
                <Image source={require('../../assets/images/CommunityPPic1.png')} style={{borderRadius:50,width:20,height:20}}/>
                <Image source={require('../../assets/images/CommunityPPic2.png')} style={{borderRadius:50,width:20,height:20,marginLeft:-7}}/>
                <Image source={require('../../assets/images/CommunityPPic3.png')} style={{borderRadius:50,width:20,height:20,marginLeft:-7}}/>
                </View>
                <Text style={styles.ThreadPostPostJoinMembers}>160+ Members</Text>
              </View>
          </View>
        </View>
        <Entypo name='dots-three-vertical' size={25} color={'#51668A'}/>
      </View>
    </Card>
    <Card>
      <View style={styles.FocusPostUserDetailsContainer}>
        <View style={styles.FocusPostUserDetails}>
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <Image source={require('../../assets/images/CommunityPPic1.png')} style={{borderRadius:50,width:60,height:60}}/>
          </View>
          <View style={styles.FocusPostUserDetailsTextContainer}>
              <Text style={styles.FocusPostPostName}>COVID Vaccine India</Text>
              <Text style={styles.ThreadPostPostSplty}>Created By Dr. Mahesh Gupta</Text>
              <Text style={styles.ThreadPostPostHospital}>AIMS Hospital</Text>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <View style={{flexDirection:'row'}}>
                <Image source={require('../../assets/images/CommunityPPic1.png')} style={{borderRadius:50,width:20,height:20}}/>
                <Image source={require('../../assets/images/CommunityPPic2.png')} style={{borderRadius:50,width:20,height:20,marginLeft:-7}}/>
                <Image source={require('../../assets/images/CommunityPPic3.png')} style={{borderRadius:50,width:20,height:20,marginLeft:-7}}/>
                </View>
                <Text style={styles.ThreadPostPostJoinMembers}>160+ Members</Text>
              </View>
          </View>
        </View>
        <Entypo name='dots-three-vertical' size={25} color={'#51668A'}/>
      </View>
    </Card>
    <Card>
      <View style={styles.FocusPostUserDetailsContainer}>
        <View style={styles.FocusPostUserDetails}>
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <Image source={require('../../assets/images/CommunityPPic1.png')} style={{borderRadius:50,width:60,height:60}}/>
          </View>
          <View style={styles.FocusPostUserDetailsTextContainer}>
              <Text style={styles.FocusPostPostName}>COVID Vaccine India</Text>
              <Text style={styles.ThreadPostPostSplty}>Created By Dr. Mahesh Gupta</Text>
              <Text style={styles.ThreadPostPostHospital}>AIMS Hospital</Text>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <View style={{flexDirection:'row'}}>
                <Image source={require('../../assets/images/CommunityPPic1.png')} style={{borderRadius:50,width:20,height:20}}/>
                <Image source={require('../../assets/images/CommunityPPic2.png')} style={{borderRadius:50,width:20,height:20,marginLeft:-7}}/>
                <Image source={require('../../assets/images/CommunityPPic3.png')} style={{borderRadius:50,width:20,height:20,marginLeft:-7}}/>
                </View>
                <Text style={styles.ThreadPostPostJoinMembers}>160+ Members</Text>
              </View>
          </View>
        </View>
        <Entypo name='dots-three-vertical' size={25} color={'#51668A'}/>
      </View>
    </Card>
    <Card>
      <View style={styles.FocusPostUserDetailsContainer}>
        <View style={styles.FocusPostUserDetails}>
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <Image source={require('../../assets/images/CommunityPPic1.png')} style={{borderRadius:50,width:60,height:60}}/>
          </View>
          <View style={styles.FocusPostUserDetailsTextContainer}>
              <Text style={styles.FocusPostPostName}>COVID Vaccine India</Text>
              <Text style={styles.ThreadPostPostSplty}>Created By Dr. Mahesh Gupta</Text>
              <Text style={styles.ThreadPostPostHospital}>AIMS Hospital</Text>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <View style={{flexDirection:'row'}}>
                <Image source={require('../../assets/images/CommunityPPic1.png')} style={{borderRadius:50,width:20,height:20}}/>
                <Image source={require('../../assets/images/CommunityPPic2.png')} style={{borderRadius:50,width:20,height:20,marginLeft:-7}}/>
                <Image source={require('../../assets/images/CommunityPPic3.png')} style={{borderRadius:50,width:20,height:20,marginLeft:-7}}/>
                </View>
                <Text style={styles.ThreadPostPostJoinMembers}>160+ Members</Text>
              </View>
          </View>
        </View>
        <Entypo name='dots-three-vertical' size={25} color={'#51668A'}/>
      </View>
    </Card>
    <Card>
      <View style={styles.FocusPostUserDetailsContainer}>
        <View style={styles.FocusPostUserDetails}>
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <Image source={require('../../assets/images/CommunityPPic1.png')} style={{borderRadius:50,width:60,height:60}}/>
          </View>
          <View style={styles.FocusPostUserDetailsTextContainer}>
              <Text style={styles.FocusPostPostName}>COVID Vaccine India</Text>
              <Text style={styles.ThreadPostPostSplty}>Created By Dr. Mahesh Gupta</Text>
              <Text style={styles.ThreadPostPostHospital}>AIMS Hospital</Text>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <View style={{flexDirection:'row'}}>
                <Image source={require('../../assets/images/CommunityPPic1.png')} style={{borderRadius:50,width:20,height:20}}/>
                <Image source={require('../../assets/images/CommunityPPic2.png')} style={{borderRadius:50,width:20,height:20,marginLeft:-7}}/>
                <Image source={require('../../assets/images/CommunityPPic3.png')} style={{borderRadius:50,width:20,height:20,marginLeft:-7}}/>
                </View>
                <Text style={styles.ThreadPostPostJoinMembers}>160+ Members</Text>
              </View>
          </View>
        </View>
        <Entypo name='dots-three-vertical' size={25} color={'#51668A'}/>
      </View>
    </Card>
    <Card>
      <View style={styles.FocusPostUserDetailsContainer}>
        <View style={styles.FocusPostUserDetails}>
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <Image source={require('../../assets/images/CommunityPPic1.png')} style={{borderRadius:50,width:60,height:60}}/>
          </View>
          <View style={styles.FocusPostUserDetailsTextContainer}>
              <Text style={styles.FocusPostPostName}>COVID Vaccine India</Text>
              <Text style={styles.ThreadPostPostSplty}>Created By Dr. Mahesh Gupta</Text>
              <Text style={styles.ThreadPostPostHospital}>AIMS Hospital</Text>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <View style={{flexDirection:'row'}}>
                <Image source={require('../../assets/images/CommunityPPic1.png')} style={{borderRadius:50,width:20,height:20}}/>
                <Image source={require('../../assets/images/CommunityPPic2.png')} style={{borderRadius:50,width:20,height:20,marginLeft:-7}}/>
                <Image source={require('../../assets/images/CommunityPPic3.png')} style={{borderRadius:50,width:20,height:20,marginLeft:-7}}/>
                </View>
                <Text style={styles.ThreadPostPostJoinMembers}>160+ Members</Text>
              </View>
          </View>
        </View>
        <Entypo name='dots-three-vertical' size={25} color={'#51668A'}/>
      </View>
    </Card>
    <Card>
      <View style={styles.FocusPostUserDetailsContainer}>
        <View style={styles.FocusPostUserDetails}>
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <Image source={require('../../assets/images/CommunityPPic1.png')} style={{borderRadius:50,width:60,height:60}}/>
          </View>
          <View style={styles.FocusPostUserDetailsTextContainer}>
              <Text style={styles.FocusPostPostName}>COVID Vaccine India</Text>
              <Text style={styles.ThreadPostPostSplty}>Created By Dr. Mahesh Gupta</Text>
              <Text style={styles.ThreadPostPostHospital}>AIMS Hospital</Text>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <View style={{flexDirection:'row'}}>
                <Image source={require('../../assets/images/CommunityPPic1.png')} style={{borderRadius:50,width:20,height:20}}/>
                <Image source={require('../../assets/images/CommunityPPic2.png')} style={{borderRadius:50,width:20,height:20,marginLeft:-7}}/>
                <Image source={require('../../assets/images/CommunityPPic3.png')} style={{borderRadius:50,width:20,height:20,marginLeft:-7}}/>
                </View>
                <Text style={styles.ThreadPostPostJoinMembers}>160+ Members</Text>
              </View>
          </View>
        </View>
        <Entypo name='dots-three-vertical' size={25} color={'#51668A'}/>
      </View>
    </Card>
    <Card>
      <View style={styles.FocusPostUserDetailsContainer}>
        <View style={styles.FocusPostUserDetails}>
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <Image source={require('../../assets/images/CommunityPPic1.png')} style={{borderRadius:50,width:60,height:60}}/>
          </View>
          <View style={styles.FocusPostUserDetailsTextContainer}>
              <Text style={styles.FocusPostPostName}>COVID Vaccine India</Text>
              <Text style={styles.ThreadPostPostSplty}>Created By Dr. Mahesh Gupta</Text>
              <Text style={styles.ThreadPostPostHospital}>AIMS Hospital</Text>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <View style={{flexDirection:'row'}}>
                <Image source={require('../../assets/images/CommunityPPic1.png')} style={{borderRadius:50,width:20,height:20}}/>
                <Image source={require('../../assets/images/CommunityPPic2.png')} style={{borderRadius:50,width:20,height:20,marginLeft:-7}}/>
                <Image source={require('../../assets/images/CommunityPPic3.png')} style={{borderRadius:50,width:20,height:20,marginLeft:-7}}/>
                </View>
                <Text style={styles.ThreadPostPostJoinMembers}>160+ Members</Text>
              </View>
          </View>
        </View>
        <Entypo name='dots-three-vertical' size={25} color={'#51668A'}/>
      </View>
    </Card>
    <Card>
      <View style={styles.FocusPostUserDetailsContainer}>
        <View style={styles.FocusPostUserDetails}>
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <Image source={require('../../assets/images/CommunityPPic1.png')} style={{borderRadius:50,width:60,height:60}}/>
          </View>
          <View style={styles.FocusPostUserDetailsTextContainer}>
              <Text style={styles.FocusPostPostName}>COVID Vaccine India</Text>
              <Text style={styles.ThreadPostPostSplty}>Created By Dr. Mahesh Gupta</Text>
              <Text style={styles.ThreadPostPostHospital}>AIMS Hospital</Text>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <View style={{flexDirection:'row'}}>
                <Image source={require('../../assets/images/CommunityPPic1.png')} style={{borderRadius:50,width:20,height:20}}/>
                <Image source={require('../../assets/images/CommunityPPic2.png')} style={{borderRadius:50,width:20,height:20,marginLeft:-7}}/>
                <Image source={require('../../assets/images/CommunityPPic3.png')} style={{borderRadius:50,width:20,height:20,marginLeft:-7}}/>
                </View>
                <Text style={styles.ThreadPostPostJoinMembers}>160+ Members</Text>
              </View>
          </View>
        </View>
        <Entypo name='dots-three-vertical' size={25} color={'#51668A'}/>
      </View>
    </Card>
    <Card>
      <View style={styles.FocusPostUserDetailsContainer}>
        <View style={styles.FocusPostUserDetails}>
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <Image source={require('../../assets/images/CommunityPPic1.png')} style={{borderRadius:50,width:60,height:60}}/>
          </View>
          <View style={styles.FocusPostUserDetailsTextContainer}>
              <Text style={styles.FocusPostPostName}>COVID Vaccine India</Text>
              <Text style={styles.ThreadPostPostSplty}>Created By Dr. Mahesh Gupta</Text>
              <Text style={styles.ThreadPostPostHospital}>AIMS Hospital</Text>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <View style={{flexDirection:'row'}}>
                <Image source={require('../../assets/images/CommunityPPic1.png')} style={{borderRadius:50,width:20,height:20}}/>
                <Image source={require('../../assets/images/CommunityPPic2.png')} style={{borderRadius:50,width:20,height:20,marginLeft:-7}}/>
                <Image source={require('../../assets/images/CommunityPPic3.png')} style={{borderRadius:50,width:20,height:20,marginLeft:-7}}/>
                </View>
                <Text style={styles.ThreadPostPostJoinMembers}>160+ Members</Text>
              </View>
          </View>
        </View>
        <Entypo name='dots-three-vertical' size={25} color={'#51668A'}/>
      </View>
    </Card>
    <Card>
      <View style={styles.FocusPostUserDetailsContainer}>
        <View style={styles.FocusPostUserDetails}>
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <Image source={require('../../assets/images/CommunityPPic1.png')} style={{borderRadius:50,width:60,height:60}}/>
          </View>
          <View style={styles.FocusPostUserDetailsTextContainer}>
              <Text style={styles.FocusPostPostName}>COVID Vaccine India</Text>
              <Text style={styles.ThreadPostPostSplty}>Created By Dr. Mahesh Gupta</Text>
              <Text style={styles.ThreadPostPostHospital}>AIMS Hospital</Text>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <View style={{flexDirection:'row'}}>
                <Image source={require('../../assets/images/CommunityPPic1.png')} style={{borderRadius:50,width:20,height:20}}/>
                <Image source={require('../../assets/images/CommunityPPic2.png')} style={{borderRadius:50,width:20,height:20,marginLeft:-7}}/>
                <Image source={require('../../assets/images/CommunityPPic3.png')} style={{borderRadius:50,width:20,height:20,marginLeft:-7}}/>
                </View>
                <Text style={styles.ThreadPostPostJoinMembers}>160+ Members</Text>
              </View>
          </View>
        </View>
        <Entypo name='dots-three-vertical' size={25} color={'#51668A'}/>
      </View>
    </Card>
    <Card>
      <View style={styles.FocusPostUserDetailsContainer}>
        <View style={styles.FocusPostUserDetails}>
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <Image source={require('../../assets/images/CommunityPPic1.png')} style={{borderRadius:50,width:60,height:60}}/>
          </View>
          <View style={styles.FocusPostUserDetailsTextContainer}>
              <Text style={styles.FocusPostPostName}>COVID Vaccine India</Text>
              <Text style={styles.ThreadPostPostSplty}>Created By Dr. Mahesh Gupta</Text>
              <Text style={styles.ThreadPostPostHospital}>AIMS Hospital</Text>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <View style={{flexDirection:'row'}}>
                <Image source={require('../../assets/images/CommunityPPic1.png')} style={{borderRadius:50,width:20,height:20}}/>
                <Image source={require('../../assets/images/CommunityPPic2.png')} style={{borderRadius:50,width:20,height:20,marginLeft:-7}}/>
                <Image source={require('../../assets/images/CommunityPPic3.png')} style={{borderRadius:50,width:20,height:20,marginLeft:-7}}/>
                </View>
                <Text style={styles.ThreadPostPostJoinMembers}>160+ Members</Text>
              </View>
          </View>
        </View>
        <Entypo name='dots-three-vertical' size={25} color={'#51668A'}/>
      </View>
    </Card>
    <Card>
      <View style={styles.FocusPostUserDetailsContainer}>
        <View style={styles.FocusPostUserDetails}>
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <Image source={require('../../assets/images/CommunityPPic1.png')} style={{borderRadius:50,width:60,height:60}}/>
          </View>
          <View style={styles.FocusPostUserDetailsTextContainer}>
              <Text style={styles.FocusPostPostName}>COVID Vaccine India</Text>
              <Text style={styles.ThreadPostPostSplty}>Created By Dr. Mahesh Gupta</Text>
              <Text style={styles.ThreadPostPostHospital}>AIMS Hospital</Text>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <View style={{flexDirection:'row'}}>
                <Image source={require('../../assets/images/CommunityPPic1.png')} style={{borderRadius:50,width:20,height:20}}/>
                <Image source={require('../../assets/images/CommunityPPic2.png')} style={{borderRadius:50,width:20,height:20,marginLeft:-7}}/>
                <Image source={require('../../assets/images/CommunityPPic3.png')} style={{borderRadius:50,width:20,height:20,marginLeft:-7}}/>
                </View>
                <Text style={styles.ThreadPostPostJoinMembers}>160+ Members</Text>
              </View>
          </View>
        </View>
        <Entypo name='dots-three-vertical' size={25} color={'#51668A'}/>
      </View>
    </Card>
    <Card>
      <View style={styles.FocusPostUserDetailsContainer}>
        <View style={styles.FocusPostUserDetails}>
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <Image source={require('../../assets/images/CommunityPPic1.png')} style={{borderRadius:50,width:60,height:60}}/>
          </View>
          <View style={styles.FocusPostUserDetailsTextContainer}>
              <Text style={styles.FocusPostPostName}>COVID Vaccine India</Text>
              <Text style={styles.ThreadPostPostSplty}>Created By Dr. Mahesh Gupta</Text>
              <Text style={styles.ThreadPostPostHospital}>AIMS Hospital</Text>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <View style={{flexDirection:'row'}}>
                <Image source={require('../../assets/images/CommunityPPic1.png')} style={{borderRadius:50,width:20,height:20}}/>
                <Image source={require('../../assets/images/CommunityPPic2.png')} style={{borderRadius:50,width:20,height:20,marginLeft:-7}}/>
                <Image source={require('../../assets/images/CommunityPPic3.png')} style={{borderRadius:50,width:20,height:20,marginLeft:-7}}/>
                </View>
                <Text style={styles.ThreadPostPostJoinMembers}>160+ Members</Text>
              </View>
          </View>
        </View>
        <Entypo name='dots-three-vertical' size={25} color={'#51668A'}/>
      </View>
    </Card>
    <Card>
      <View style={styles.FocusPostUserDetailsContainer}>
        <View style={styles.FocusPostUserDetails}>
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <Image source={require('../../assets/images/CommunityPPic1.png')} style={{borderRadius:50,width:60,height:60}}/>
          </View>
          <View style={styles.FocusPostUserDetailsTextContainer}>
              <Text style={styles.FocusPostPostName}>COVID Vaccine India</Text>
              <Text style={styles.ThreadPostPostSplty}>Created By Dr. Mahesh Gupta</Text>
              <Text style={styles.ThreadPostPostHospital}>AIMS Hospital</Text>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <View style={{flexDirection:'row'}}>
                <Image source={require('../../assets/images/CommunityPPic1.png')} style={{borderRadius:50,width:20,height:20}}/>
                <Image source={require('../../assets/images/CommunityPPic2.png')} style={{borderRadius:50,width:20,height:20,marginLeft:-7}}/>
                <Image source={require('../../assets/images/CommunityPPic3.png')} style={{borderRadius:50,width:20,height:20,marginLeft:-7}}/>
                </View>
                <Text style={styles.ThreadPostPostJoinMembers}>160+ Members</Text>
              </View>
          </View>
        </View>
        <Entypo name='dots-three-vertical' size={25} color={'#51668A'}/>
      </View>
    </Card> */}
    
    </Fragment>
  )
}

export default FocusGroup