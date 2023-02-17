  import React,{useState,useEffect } from 'react';
  import { View, Text ,Image,SafeAreaView, ScrollView,TouchableOpacity,ActivityIndicator} from 'react-native';
  import { Card } from 'react-native-paper';
  import Feather from 'react-native-vector-icons/Feather';
  import Entypo from 'react-native-vector-icons/Entypo';
  import AntDesign from 'react-native-vector-icons/AntDesign';
  import { getLocalData } from '../../apis/GetLocalData';
  import {styles} from './EditProfileStyles';
  import LocationModal from './Modals/LocationModal';
  import MobileNumberModal from './Modals/MobileNumberModal';
  import EmailModal from './Modals/EmailModal';
  import AboutMeModal from './Modals/AboutMeModal';
  import WorkExperienceModal from './Modals/WorkExperienceModal';
  import QualificationModal from './Modals/QualificationModal';
  import AwardsModal from './Modals/AwardsModal';
  import PublicationModal from './Modals/PublicationModal';
  import AchievementsModal from './Modals/AchievementsModal';
  import IntrestsModal from './Modals/IntrestsModal';
  import { SingleImage } from '../../navigation/ReuseLogics';
  import GetProfile from './Modals/GetProfile';
  import { useDispatch } from 'react-redux';
  import { getSelectedInterest } from '../../../redux/reducers/postData';
  import { useIsFocused } from '@react-navigation/native';
  import { getAwardAPI, getWorkExpAPI } from '../../../redux/reducers/profileSlice';
  import moment from "moment";
  import EditWorkExperienceModal from './Modals/EditWorkExperienceModal';
  import AwardsEditModal from './Modals/AwardsEditModal';
  
  

  const EditProfileScreen = ({route,navigation}) => {
    const [userdata,setuserdata] = useState([]);
    const [locationModal, setLocationModal] = useState(false);
    const [mobileNumber, setMobileNumber] = useState(false);
    const [emailid, setemailid] = useState(false);
    const [workExp, setWorkExp] = useState(false);
    const [editWorkExp, setEditWorkExp] = useState(false);
    const [passWorkExp, setPassWorkExp] = useState(undefined);
    const [aboutMe, setaboutMe] = useState(false);
    const [qualification, setQualification] = useState(false);
    const [awards, setAwards] = useState(false);
    const [editAwards, setEditAwards] = useState(false);
    const [publication, setPublication] = useState(false);
    const [achievement, setAchievement] = useState(false);
    const [Interests, setInterests] = useState(false);
    const [profile, setProfile] = useState(false);
    const [interestsData, setInterestsData] = useState(null);
    const [allInterestsData, setAllInterestsData] = useState(null);
    const [workResult, setWorkResult] = useState(null);
    const [loader, setLoader] = useState(false);
    const [workShowAll, setWorkShowAll] = useState(2);
    const [getAward, setGetAward] = useState(null);
    const [passAwardData, setPassAwardData] = useState(null);
    
    const dispatch = useDispatch();

    const toggleModal = () => {
      setLocationModal(!locationModal);
    };
    const mobileModal = () => {
      setMobileNumber(!mobileNumber);
    };
    const emailModal = () => {
      setemailid(!emailid);
    };
    const WorkExpModal = () => {
      setWorkExp(!workExp);
    };
    const WorkExpEditModal = async (data) => {
      data.start_date = await new Date(moment(data?.start_date).format("MM/DD/YYYY"))
      data.end_date = await new Date(moment(data?.end_date).format("MM/DD/YYYY"))
      setPassWorkExp(data)
      setEditWorkExp(!editWorkExp)
    };
    const aboutMeModal = () => {
      setaboutMe(!aboutMe);
    };
    const qualificationModal = () => {
      setQualification(!aboutMe);
    };
    const awardsModal = () => {
      setAwards(!awards);
    };
    const awardsEditModal = async (data) => {
      data.awardyear = await new Date(moment(data?.awardyear).format("MM/DD/YYYY"))
      setPassAwardData(data);
      setEditAwards(!editAwards);
    };
    const publicationModal = () => {
      setPublication(!publication);
    };
    const AchievementModal = () => {
      setAchievement(!achievement);
    };
    const InterestsModal = () => {
      setInterests(!Interests);
    };
    const handleProfile = () => {
      setProfile(!profile);
    };

    const changeProfile = (arg) => {
      SingleImage(arg).then((res) => {
        setProfile(!profile)
        navigation.navigate("ProfilePictureCrop",{pucUrl : res.assets[0]})
      })
    }

    const isValidmobileNoRegex = /^[0]?[789]\d{9}$/; 
    
    const asyncFetchDailyData = () => {
      navigation.setOptions({ title:'Edit Profile'});
      getLocalData('USER_INFO').then(async (res) => {
        setLoader(true);
        const reData = res?.data;
        setuserdata(reData);
        const result = await dispatch(getSelectedInterest({user_id : reData.id}));
        setAllInterestsData(result?.payload)
        const TrueData = result.payload.filter(data => data.isSelected == true)
        setInterestsData(TrueData);
        handleWorkReload();
        setLoader(false);
      });
    }

    const handleWorkReload = () => {
      getLocalData('USER_INFO').then(async (res) => {
        const reData = res?.data;
        const getWorkResult = await dispatch(getWorkExpAPI({user_id : reData.id}));
        setWorkResult(getWorkResult.payload);
      })
    }

    const handleAward = () => {
      getLocalData('USER_INFO').then(async (res) => {
        const reData = res?.data;
        const getAwardResult = await dispatch(getAwardAPI({user_id : 230025}));
        setGetAward(getAwardResult.payload)
      })
    }

    const handleWorkloadMore = () => {
      setWorkShowAll()
    }

    useEffect(()=>{
      asyncFetchDailyData();
      handleWorkReload();
      handleAward();
    },[])

    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#F2FAFA'}}>
      <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnable={true}>
        <View style={{padding:10}}>

          <GetProfile profile={profile} setProfile={setProfile} changeProfile={changeProfile}/>
          <LocationModal locationModal={locationModal} setLocationModal={setLocationModal}/>
          <MobileNumberModal mobileNumber={mobileNumber} setMobileNumber={setMobileNumber}/>
          <EmailModal emailid={emailid} setemailid={setemailid}/>
          <Card style={styles.CartContainer}>

            <View style={styles.ProfileImageContainer}>
              <Image source={{uri:userdata.profileimage}} style={styles.profileimg}/>
              <TouchableOpacity onPress={() => handleProfile()} style={styles.profileEditBtnTouch}>
                <Entypo name="edit" size={20} color="black"  style={styles.profileEditBtn}  />
              </TouchableOpacity>
            </View>

            <View>
                <Text style={styles.userName}>
                  {userdata.first_name} {userdata.last_name} 
                  <Image source={require('../../assets/images/celTick.png')} style={styles.imageTick}/>
                </Text>
                <View style={styles.userCategoryContainer}>
                  <Text style={styles.userCategory}>
                    {userdata?.speciality} | {userdata?.city}
                  </Text>
                  <TouchableOpacity onPress={toggleModal}>
                    <Entypo name="edit" size={23} color="black"  style={{marginLeft:10,color:'#2C8892'}}  />
                  </TouchableOpacity>
                </View>
            </View>

            <View style={styles.basicInfoConatiner}>
              <View style={{marginBottom:10,marginTop:20}}>
                <Text style={styles.basicInfoTitle}>Basic Info</Text>
              </View>
              <View style={styles.userInfoContainer}>
                  <Text style={styles.userInfoText}>
                    Mobile Number : <Text style={styles.userInfoTextResult}>{userdata.mobilenumber} </Text>
                  </Text>
                  <TouchableOpacity onPress={mobileModal}>
                    <Entypo name="edit" size={23} color="black" style={{marginLeft:70,color:'#2C8892'}}  />
                  </TouchableOpacity>
              </View>
              <View style={styles.userInfoContainer}>
                  <Text style={styles.userInfoText}>
                  Email ID : <Text style={styles.userInfoTextResult}>{userdata.email}</Text>
                  </Text>
                  <TouchableOpacity onPress={emailModal}>
                    <Entypo name="edit" size={23} color="black"  style={{marginLeft:70,color:'#2C8892'}}  />
                  </TouchableOpacity>
              </View>
              <View style={styles.userInfoContainer}>
                  <Text style={styles.userInfoText}>
                  MRN :  <Text style={styles.userInfoTextResult}>12345 | 2010</Text>
                  </Text>
              </View>
              <View style={styles.userInfoContainer}>
                  <Text style={styles.userInfoText}>
                  MRN Reg: <Text style={styles.userInfoTextResult}>Himachal Pradesh</Text>
                  </Text>
              </View>
            </View>
          </Card>  

          <AboutMeModal aboutMe={aboutMe} setaboutMe={setaboutMe}/>
          <Card style={styles.CartContainer}>
              <View>
                <Text style={styles.userInfoTitle}>About Me</Text>
                <Entypo name="edit" size={23} color="black" style={{marginLeft:70,color:'#2C8892',alignSelf:'flex-end', marginTop:-20}} onPress={aboutMeModal} />
              </View>
              <Text style={{paddingHorizontal:20,color:'#51668A',lineHeight:20,marginBottom:20}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquet cursus pellentesque. Mauris gravida libero nec sapien ultricies blandit. </Text>
          </Card>

          <WorkExperienceModal workExp={workExp} setWorkExp={setWorkExp} handleWorkReload={handleWorkReload}/>
          <EditWorkExperienceModal 
            editWorkExp={editWorkExp} 
            setEditWorkExp={setEditWorkExp} 
            passWorkExp={passWorkExp}
            handleWorkReload={handleWorkReload}
          />
          <Card style={styles.CartContainer}>
              <View>
                <Text style={styles.userInfoTitle}>Work Experience</Text>
                <TouchableOpacity onPress={() => WorkExpModal()}>
                  <Text style={styles.AddInfo}>
                    <Entypo name="plus" size={15} color="#2376E5" /> 
                    Add Work Experience
                  </Text>
                </TouchableOpacity>
              </View>
              {workResult?.slice(0, workShowAll).map((data,i) => {
                return (
                  <View style={[styles.AddedDetails,{borderBottomWidth: i == workResult?.length-1 ? 0 : 2}]} key={i}>
                    <View style={{flexDirection:'row'}}>
                      {/* <Image source={require('../../assets/dr-icon/trofee.png')}/> */}
                      <View style={styles.SingleLetter}>
                          <Text style={styles.SingleLetterText}>{data.designation[0].toUpperCase()}</Text>
                      </View>
                      <View style={{paddingLeft:10}}>
                        <Text style={styles.AddedDetailsTitle}>{data.designation}</Text>
                        <Text style={styles.AddedDetailsSubTitle}>{data.hospital_id}</Text>
                        <Text style={styles.AddedDetailsDate}>
                          {moment(data.start_date).format("MMM YYYY")} - {
                          data.end_date == "1970-01-01" ? "Present" : moment(data.end_date).format("MMM YYYY")}
                          {/* {console.log(data.end_date)} */}
                        </Text>
                      </View>  
                    </View>
                    <TouchableOpacity onPress={() => WorkExpEditModal(data)}>
                      <Entypo name="edit" size={23} color="#2C8892"  />
                    </TouchableOpacity>
                  </View>
                )
              })}
              {workShowAll !== undefined &&
              <TouchableOpacity style={styles.ShowAllContainer} onPress={() => handleWorkloadMore()}>
                <Text style={styles.ShowAllText}>Show all {workResult?.length-2} experiences</Text>
                <AntDesign name="arrowright" size={25} color="#2376E5"/>
              </TouchableOpacity>}
          </Card>
          
          <QualificationModal qualification={qualification} setQualification={setQualification}/>
          <Card style={styles.CartContainer}>
            <View>
              <Text style={styles.userInfoTitle}>Qualification</Text>
              <Text style={styles.AddInfo}>
                <Entypo name="plus" size={15} color="#2376E5" /> 
                Add Qualification
              </Text>
            </View>
            <View style={styles.AddedDetails}>
              <View style={{flexDirection:'row'}}>
              <Image source={require('../../assets/images/mbbsimg.png')}/>
                <View style={{paddingLeft:10}}>
                  <Text style={styles.AddedDetailsTitle}>MBBS</Text>
                  <Text style={styles.AddedDetailsSubTitle}>Ramaiah Medical College</Text>
                  <Text style={styles.AddedDetailsDate}>June 2019 - June 2024</Text>
                </View>
              </View> 
              <TouchableOpacity onPress={qualificationModal}>  
                <Entypo name="edit" size={23} color="#2C8892"/>  
              </TouchableOpacity>  
            </View>
              <View style={styles.devider}/>
              <TouchableOpacity style={styles.showMoreContainer}>
                <Text style={styles.showMore}>Show all 4 Qualification</Text>
                <Feather name="arrow-right" size={19} color="#2376E5" />
              </TouchableOpacity>
          </Card>

          <AwardsModal awards={awards} setAwards={setAwards}/>
          <AwardsEditModal 
            editAwards={editAwards} 
            setEditAwards={setEditAwards} 
            passAwardData={passAwardData} 
            handleAward={handleAward}
          />
          <Card style={styles.CartContainer}>
              <View>
                <Text style={styles.userInfoTitle}>Awards</Text>
                <TouchableOpacity onPress={() => awardsModal()}>
                  <Text style={styles.AddInfo}>
                    <Entypo name="plus" size={15} color="#2376E5" /> 
                    Add Awards
                  </Text>
                </TouchableOpacity>
              </View>
              {getAward?.map((data,i) => {
                return(
                  <View style={styles.AddedDetails} key={i}>
                    <View style={{flexDirection:'row'}}>
                      <View style={styles.SingleLetter}>
                          <Text style={styles.SingleLetterText}>{data.award[0].toUpperCase()}</Text>
                      </View>
                      <View style={{paddingLeft:10}}>
                        <Text style={styles.AddedDetailsTitle}>{data.award}</Text>
                        <Text style={styles.AddedDetailsDate}>
                        {moment(data.awardyear).format("MMM YYYY")}</Text>
                      </View>  
                    </View>
                    <TouchableOpacity onPress={() => awardsEditModal(data)}>
                      <Entypo name="edit" size={23} color="#2C8892"  /> 
                    </TouchableOpacity>
                       
                  </View>
                )
              })}
          </Card>

          <PublicationModal publication={publication} setPublication={setPublication}/>
          <Card style={styles.CartContainer}>
              <View>
                <Text style={styles.userInfoTitle}>Publications</Text>
                <Text style={styles.AddInfo}>
                  <Entypo name="plus" size={15} color="#2376E5" /> 
                  Add Publications
                </Text>
              </View>
              <View style={styles.AddedDetails}>
                <View style={{flexDirection:'row'}}>
                  <Image source={require('../../assets/dr-icon/trofee.png')}/>
                  <View style={{paddingLeft:10}}>
                    <Text style={styles.AddedDetailsTitle}>Lorem ipsum dolor sit amet</Text>
                    <Text style={styles.AddedDetailsDate}>June 2021</Text>
                  </View>  
                </View>
                <Entypo name="edit" size={23} color="#2C8892"  onPress={publicationModal}/>    
              </View>
          </Card>

          <AchievementsModal achievement={achievement} setAchievement={setAchievement}/>
          <Card style={styles.CartContainer}>
            <View>
              <Text style={styles.userInfoTitle}>Achievements</Text>
              <Text style={styles.AddInfo}>
                <Entypo name="plus" size={15} color="#2376E5" /> 
                Add Achievements
              </Text>
            </View>
            <View style={styles.AddedDetails}>
              <View style={{flexDirection:'row'}}>
                <Image source={require('../../assets/dr-icon/trofee.png')}></Image>
                <View style={{paddingLeft:10}}>
                  <Text style={styles.AddedDetailsTitle}>Lorem ipsum dolor sit amet</Text>
                  <Text style={styles.AddedDetailsDate}>June 2021</Text>
                </View>  
              </View>
              <Entypo name="edit" size={23} color="#2C8892"  onPress={() => AchievementModal()}/>    
            </View>
          </Card>
          
          <IntrestsModal setInterests={setInterests} Interests={Interests} allInterestsData={allInterestsData}/>
          <Card style={styles.CartContainer}>
            <View style={styles.InterestsContainer}>
              <Text style={styles.userInfoTitle}>Interests</Text>
              <Entypo name="edit" size={23} color="#2C8892" onPress={InterestsModal} />
            </View>
            <View style={styles.InterestsList}>
              {loader &&<View style={styles.loaderContainer}>
                 <ActivityIndicator size={'small'}/>
              </View>}
              {interestsData?.map((data,i) => {
                return(
                  <View style={styles.InterestsSelected} key={i}>
                    <Text>{data.speciality}</Text>
                  </View>
                )
              })}
            </View>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
    );
  }

  export default EditProfileScreen;