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
  import { getWorkExpAPI,
    userInfo,
    getAwardAPI,
    getQualificationAPI,
    getPublicationAPI 
  } from '../../../redux/reducers/profileSlice';
  import moment from "moment";
  import EditWorkExperienceModal from './Modals/EditWorkExperienceModal';
  import AwardsEditModal from './Modals/AwardsEditModal';
  import PublicationEditModal from './Modals/PublicationEditModal';
  import QualificationEditModal from './Modals/QualificationEditModal';
  
  
  const EditProfileScreen = ({route,navigation}) => {
    const [userdata,setuserdata] = useState([]);
    const [localData,setLocalData] = useState();
    const [locationModal, setLocationModal] = useState(false);
    const [mobileNumber, setMobileNumber] = useState(false);
    const [emailid, setemailid] = useState(false);
    const [workExp, setWorkExp] = useState(false);
    const [editWorkExp, setEditWorkExp] = useState(false);
    const [passWorkExp, setPassWorkExp] = useState(undefined);
    const [aboutMe, setaboutMe] = useState(false);
    const [qualification, setQualification] = useState(false);
    const [editQualification, setEditQualification] = useState(false);
    const [awards, setAwards] = useState(false);
    const [editAwards, setEditAwards] = useState(false);
    const [publication, setPublication] = useState(false);
    const [editPublication, setEditPublication] = useState(false);
    // const [achievement, setAchievement] = useState(false);
    const [Interests, setInterests] = useState(false);
    const [profile, setProfile] = useState(false);
    const [interestsData, setInterestsData] = useState(null);
    const [allInterestsData, setAllInterestsData] = useState(null);
    const [workResult, setWorkResult] = useState(null);
    const [loader, setLoader] = useState(false);
    const [workShowAll, setWorkShowAll] = useState(2);
    const [getAward, setGetAward] = useState(null);
    const [passAwardData, setPassAwardData] = useState(null);
    const [passQualification, setPassQualification] = useState(null);
    const [getQualificationData, setGetQualificationData] = useState();
    const [publicationData, setGetPublicationData] = useState();
    const [qualificationShowAll, setQualificationShowAll] = useState(2);
    const [publicationShowAll, setPublicationShowAll] = useState(2);
    const [propPublication, setPropPublication] = useState();
    const [awardShowAll, setAwardShowAll] = useState(2);
    
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
      data.end_date = await new Date(moment(data?.end_date).format("MM/DD/YYYY"));
      setPassWorkExp(data)
      setEditWorkExp(!editWorkExp)
    };
    const aboutMeModal = () => {
      setaboutMe(!aboutMe);
    };
    const handleEditQualification = async (data) => {
      data.completionyear = await new Date(moment(data?.completionyear).format("MM/DD/YYYY"));
      setPassQualification(data);
      console.log("data",data);
      setEditQualification(!editQualification);
    };
    const awardsModal = () => {
      setAwards(!awards);
    };
    const awardsEditModal = async (data) => {
      data.awardyear = await new Date(moment(data?.awardyear).format("MM/DD/YYYY"))
      setPassAwardData(data);
      setEditAwards(!editAwards);
    };
    // const publicationModal = () => {
    //   setPublication(!publication);
    // };
    const publicationEditModal = async (data) => {
      data.publishedyear = await new Date(moment(data?.publishedyear).format("MM/DD/YYYY"))
      setPropPublication(data)
      setEditPublication(!editPublication);
    };
    // const AchievementModal = () => {
    //   setAchievement(!achievement);
    // };
    const InterestsModal = () => {
      setInterests(!Interests);
    };
    const handleProfile = () => {
      setProfile(!profile);
    };

    const changeProfile = (arg) => {
      SingleImage(arg).then((res) => {
        setProfile(!profile)
        navigation.navigate("ProfilePictureCrop",{pucUrl : res.assets[0], user_ID: userdata.id})
      })
    }

    const asyncFetchDailyData = async () => {
      navigation.setOptions({title:'Edit Profile'});
      getLocalData('USER_INFO').then(async (res) => {
        setLoader(true);
        const uresult = await dispatch(userInfo({user_id : res.data.id}));
        setuserdata(uresult?.payload[0]);
        const result = await dispatch(getSelectedInterest({user_id : res.data.id}));
        setAllInterestsData(result?.payload)
        const TrueData = result.payload.filter(data => data.isSelected == true)
        setInterestsData(TrueData);
        setLoader(false);
      });
    }

    const handleWorkReload = async () => {
      getLocalData('USER_INFO').then(async (res) => {
        const getWorkResult = await dispatch(getWorkExpAPI({user_id : res.data.id}));
        setWorkResult(getWorkResult.payload);
      })
    }

    const handleAward = async () => {
      getLocalData('USER_INFO').then(async (res) => {
        const getAwardResult = await dispatch(getAwardAPI({user_id : res.data.id}));
        setGetAward(getAwardResult.payload);
      })
    }

    const handleWorkloadMore = () => {
      setWorkShowAll()
    }

    const getQualification = async () => {
      getLocalData('USER_INFO').then(async (res) => {
        const getQualificationResult = await dispatch(getQualificationAPI({user_id : res?.data.id}));
        console.log(getQualificationResult);
        if(getQualificationResult.payload.status == 'Success'){
          console.log(getQualificationResult.payload.data);
          setGetQualificationData(getQualificationResult.payload.data);
        }
      })
    }

    const getPublication =  () => {
      getLocalData('USER_INFO').then(async (res) => {
        const getPublicationResult = await dispatch(getPublicationAPI({user_id : res?.data.id}));
        setGetPublicationData(getPublicationResult.payload);
      })
    }
    
    useEffect(()=>{
      if(route?.params) {
        const {justLoad} = route?.params;
        if(justLoad == "justLoad"){
          asyncFetchDailyData();
        }
      }
    },[route?.params])

    useEffect(()=>{
        asyncFetchDailyData();
        handleWorkReload();
        handleAward();
        getQualification();
        getPublication();
    },[])
    

    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#F2FAFA'}}>
      <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnable={true}>
        <View style={{padding:10}}>

          <GetProfile profile={profile} setProfile={setProfile} changeProfile={changeProfile}/>
          <LocationModal locationModal={locationModal} setLocationModal={setLocationModal}/>
          <MobileNumberModal mobileNumber={mobileNumber} currentmobileno= {userdata.mobilenumber} setMobileNumber={setMobileNumber}/>
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
                    {userdata?.speciality} {userdata?.city}
                  </Text>
                  {/* <TouchableOpacity onPress={toggleModal}>
                    <Entypo name="edit" size={23} color="black"  style={{marginLeft:10,color:'#2C8892'}}  />
                  </TouchableOpacity> */}
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
                  MRN :  <Text style={styles.userInfoTextResult}>{userdata?.mrn}</Text>
                  </Text>
              </View>
              <View style={styles.userInfoContainer}>
                  <Text style={styles.userInfoText}>
                  MRN Reg: <Text style={styles.userInfoTextResult}>{userdata?.mry}</Text>
                  </Text>
              </View>
            </View>
          </Card>  

          <AboutMeModal 
            asyncFetchDailyData={asyncFetchDailyData} 
            aboutMe={aboutMe} 
            setaboutMe={setaboutMe} 
            userdata={userdata}
          />
          <Card style={styles.CartContainer}>
              <View>
                <Text style={styles.userInfoTitle}>About Me</Text>
                <Entypo name="edit" size={23} color="black" style={{marginLeft:70,color:'#2C8892',alignSelf:'flex-end', marginTop:-20}} onPress={aboutMeModal} />
              </View>
              <Text style={{paddingHorizontal:20,color:'#51668A',lineHeight:20,marginBottom:20}}>
              {userdata?.summary}  
              </Text>
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
                          String(data.end_date).includes(1970) ? "Present" : moment(data.end_date).format("MMM YYYY")}
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
              workResult?.length > 2 &&
              <TouchableOpacity style={styles.ShowAllContainer} onPress={() => handleWorkloadMore()}>
                <Text style={styles.ShowAllText}>Show all { workResult?.length-2  } experiences</Text>
                <AntDesign name="arrowright" size={25} color="#2376E5"/>
              </TouchableOpacity>}
          </Card>
          
          <QualificationModal 
            qualification={qualification} 
            setQualification={setQualification}
            getQualification={getQualification}
          />
          <QualificationEditModal 
            setEditQualification={setEditQualification}
            editQualification={editQualification}
            getQualification={getQualification}
            passQualification={passQualification}
          />

          <Card style={styles.CartContainer}>
            <View>
              <Text style={styles.userInfoTitle}>Qualification</Text>
              <TouchableOpacity onPress={() => setQualification(!qualification)}>
                <Text style={styles.AddInfo}>
                  <Entypo name="plus" size={15} color="#2376E5" /> 
                  Add Qualification
                </Text>
              </TouchableOpacity>
            </View>
            <Text> {console.log(getQualificationData)} </Text>
            {getQualificationData?.slice(0, qualificationShowAll)?.map((data,i) => {
              return(
                <View style={styles.AddedDetails} key={i}>
                  <View style={{flexDirection:'row'}}>
                  <View style={styles.SingleLetter}>
                      <Text style={styles.SingleLetterText}>{data?.qualification[0]?.toUpperCase()}</Text>
                  </View>
                    <View style={{paddingLeft:10}}>
                      <Text style={styles.AddedDetailsTitle}>{data?.qualification}</Text>
                      <Text style={styles.AddedDetailsSubTitle}>{data?.collegename}</Text>
                      <Text style={styles.AddedDetailsDate}>
                        {/* {moment(data.startyear).format("MMM YYYY")} -  */}
                        {moment(data.completionyear).format("MMM YYYY")}
                      </Text>
                    </View>
                  </View> 
                  <TouchableOpacity onPress={() => handleEditQualification(data)}>  
                    <Entypo name="edit" size={23} color="#2C8892"/>  
                  </TouchableOpacity>  
                </View>
              )
            })}
              {qualificationShowAll !== undefined &&
              getQualificationData?.length > 2 &&
              <>
                <View style={styles.devider}/>
                <TouchableOpacity style={styles.ShowAllContainer} onPress={() => setQualificationShowAll()}>
                  <Text style={styles.ShowAllText}>Show all {getQualificationData?.length-2} Qualification</Text>
                  <Feather name="arrow-right" size={19} color="#2376E5" />
                </TouchableOpacity>
              </>}
          </Card>

          <AwardsModal awards={awards} setAwards={setAwards} handleAward={handleAward}/>
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
              {getAward?.slice(0, awardShowAll)?.map((data,i) => {
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
              {awardShowAll !== undefined &&
                getAward?.length > 2 &&
                <>
                  <View style={styles.devider}/>
                  <TouchableOpacity style={styles.ShowAllContainer} onPress={() => setAwardShowAll()}>
                    <Text style={styles.ShowAllText}>Show all {getAward?.length-2} Awards</Text>
                    <Feather name="arrow-right" size={19} color="#2376E5" />
                  </TouchableOpacity>
                </>}
          </Card>

          <PublicationModal publication={publication} setPublication={setPublication} getPublication={getPublication}/>
          <PublicationEditModal 
            editPublication={editPublication} 
            setEditPublication={setEditPublication} 
            getPublication={getPublication}
            propPublication={propPublication}
          />
          <Card style={styles.CartContainer}>
              <View>
                <Text style={styles.userInfoTitle}>Publications</Text>
                <TouchableOpacity onPress={() => setPublication(true)}>
                  <Text style={styles.AddInfo}>
                    <Entypo name="plus" size={15} color="#2376E5"/> 
                    Add Publications
                  </Text>
                </TouchableOpacity>
              </View>

              {publicationData?.slice(0, publicationShowAll)?.map((data,i) => {
                return(
                  <View style={styles.AddedDetails} key={i}>
                    <View style={{flexDirection:'row'}}>
                    <View style={styles.SingleLetter}>
                        <Text style={styles.SingleLetterText}>{data?.title[0].toUpperCase()}</Text>
                    </View>
                      <View style={{paddingLeft:10}}>
                        <Text style={styles.AddedDetailsTitle}>{data?.title}</Text>
                        <Text style={styles.AddedDetailsDate}>
                          {moment(data.publishedyear).format("MMM YYYY")}
                        </Text>
                      </View>  
                    </View>
                    <Entypo name="edit" size={23} color="#2C8892"  onPress={() => publicationEditModal(data)}/>    
                  </View>
                )
              })}
              {publicationShowAll !== undefined &&
              publicationData?.length > 2 &&
              <>
                <View style={styles.devider}/>
                <TouchableOpacity style={styles.ShowAllContainer} onPress={() => setPublicationShowAll()}>
                  <Text style={styles.ShowAllText}>Show all {publicationData?.length-2} Qualification</Text>
                  <Feather name="arrow-right" size={19} color="#2376E5" />
                </TouchableOpacity>
              </>}
          </Card>

          {/* <AchievementsModal achievement={achievement} setAchievement={setAchievement}/>
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
          </Card> */}
          
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