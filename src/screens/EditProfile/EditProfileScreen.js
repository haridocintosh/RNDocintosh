  import React,{useState,useEffect } from 'react';
  import { View, Text ,Image,SafeAreaView, ScrollView,TouchableOpacity,ActivityIndicator} from 'react-native';
  import { Card } from 'react-native-paper';
  import Feather from 'react-native-vector-icons/Feather';
  import Entypo from 'react-native-vector-icons/Entypo';
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

  

  const EditProfileScreen = ({route,navigation}) => {
    const [userdata,setuserdata] = useState([]);
    const [locationModal, setLocationModal] = useState(false);
    const [mobileNumber, setMobileNumber] = useState(false);
    const [emailid, setemailid] = useState(false);
    const [workExp, setWorkExp] = useState(false);
    const [aboutMe, setaboutMe] = useState(false);
    const [qualification, setQualification] = useState(false);
    const [awards, setAwards] = useState(false);
    const [publication, setPublication] = useState(false);
    const [achievement, setAchievement] = useState(false);
    const [Interests, setInterests] = useState(false);
    const [profile, setProfile] = useState(false);
    const [interestsData, setInterestsData] = useState(null);
    const [allInterestsData, setAllInterestsData] = useState(null);
    const [loader, setLoader] = useState(false);
    
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
    const aboutMeModal = () => {
      setaboutMe(!aboutMe);
    };
    const qualificationModal = () => {
      setQualification(!aboutMe);
    };
    const awardsModal = () => {
      setAwards(!awards);
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
      navigation.setOptions({ title: 'Edit Profile'});
      getLocalData('USER_INFO').then(async (res) => {
        setLoader(true);
        const reData = res?.data;
        setuserdata(reData);
        const result = await dispatch(getSelectedInterest({user_id : reData.id}));
        setAllInterestsData(result?.payload)
        const TrueData = result.payload.filter(data => data.isSelected == true)
        setInterestsData(TrueData);
        setLoader(false);
      });
    }

    useEffect(()=>{
      asyncFetchDailyData();
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

          <WorkExperienceModal workExp={workExp} setWorkExp={setWorkExp}/>
          <Card style={styles.CartContainer}>
              <View>
                <Text style={styles.userInfoTitle}>Work Experience</Text>
                <TouchableOpacity onPress={WorkExpModal}>
                  <Text style={styles.AddInfo}>
                    <Entypo name="plus" size={15} color="#2376E5" /> 
                    Add Work Experience
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.AddedDetails}>
                <View style={{flexDirection:'row'}}>
                  <Image source={require('../../assets/dr-icon/trofee.png')}></Image>
                  <View style={{paddingLeft:10}}>
                    <Text style={styles.AddedDetailsTitle}>Senior Medical Officer</Text>
                    <Text style={styles.AddedDetailsSubTitle}>Sai Hospital</Text>
                    <Text style={styles.AddedDetailsDate}>Jul 2021 - Present</Text>
                  </View>  
                </View>
                <Entypo name="edit" size={23} color="#2C8892"  onPress={WorkExpModal}/>    
              </View>
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
          <Card style={styles.CartContainer}>
              <View>
                <Text style={styles.userInfoTitle}>Awards</Text>
                <Text style={styles.AddInfo}>
                  <Entypo name="plus" size={15} color="#2376E5" /> 
                  Add Awards
                </Text>
              </View>
              <View style={styles.AddedDetails}>
                <View style={{flexDirection:'row'}}>
                  <Image source={require('../../assets/dr-icon/trofee.png')}></Image>
                  <View style={{paddingLeft:10}}>
                    <Text style={styles.AddedDetailsSubTitle}>Lorem ipsum dolor sit amet</Text>
                    <Text style={styles.AddedDetailsDate}>June 2021</Text>
                  </View>  
                </View>
                <Entypo name="edit" size={23} color="#2C8892"  onPress={awardsModal}/>    
              </View>
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
                  <Image source={require('../../assets/dr-icon/trofee.png')}></Image>
                  <View style={{paddingLeft:10}}>
                    <Text style={styles.AddedDetailsSubTitle}>Lorem ipsum dolor sit amet</Text>
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
                  <Text style={styles.AddedDetailsSubTitle}>Lorem ipsum dolor sit amet</Text>
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
              {interestsData?.map((data) => {
                return(
                  <View style={styles.InterestsSelected}>
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