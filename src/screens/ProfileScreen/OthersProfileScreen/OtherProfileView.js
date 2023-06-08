import React,{useState,useEffect } from 'react';
import { View, Text ,Image,SafeAreaView, ScrollView,TouchableOpacity,ActivityIndicator} from 'react-native';
import { Card } from 'react-native-paper';
import { styles } from '../../EditProfile/EditProfileStyles';
import FastImage from 'react-native-fast-image';
import { getDoctorsDetails } from '../../../../redux/reducers/ALL_APIs';
import { useDispatch } from 'react-redux';
import moment from "moment";


const OtherProfileView = ({route,navigation}) => {
    const {data} = route?.params;
    const [userDetais, setUserDetails] = useState();
    const [workShowAll, setWorkShowAll] = useState(2);
    const [showAllQualification, setShowAllQualification] = useState(false);
    const [loader, setLoader] = useState(false);
    const [interestsData, setInterestsData] = useState([]);
    const dispatch = useDispatch();


    const GetDoctorDetails = async() => {
        const result = await dispatch(getDoctorsDetails({id:data?.follow_to}));
        await setUserDetails(result.payload);
    }

    const handleWorkloadMore = () => {
        setWorkShowAll()
    }

    useEffect(() => {
        navigation.setOptions({ title: 'Profile' });
        GetDoctorDetails();
    },[])
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F2FAFA'}}>
        <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnable={true}>
            <Card style={styles.CartContainer}>
                <View style={styles.ProfileImageContainer}>
                <FastImage
                    style={styles.profileimg}
                    source={userDetais?.user_profile?.profileimage && {
                            uri:userDetais?.user_profile?.profileimage,
                            priority: FastImage.priority.normal,
                        }}
                />
                </View>
                <View>
                    <Text style={styles.userName}>
                        {userDetais?.user_profile?.title} {userDetais?.user_profile?.first_name} {`${userDetais?.user_profile?.last_name} `}
                        <Image source={require('../../../assets/images/celTick.png')} style={styles.imageTick}/>
                    </Text>
                    <View style={styles.userCategoryContainer}>
                        <Text style={styles.userCategory}>
                            {userDetais?.user_profile?.speciality} | {userDetais?.user_profile?.state}</Text>
                    </View>
                </View>
            </Card>  

            {/* -----------------------About Us------------------------ */}
            {userDetais?.user_profile?.summary && <Card style={styles.CartContainer}>
                <View>
                    <Text style={styles.userInfoTitle}>About</Text>
                </View>
                <Text style={{color:'#51668A',lineHeight:20,marginBottom:20}}>
                {userDetais?.user_profile?.summary}
                </Text>
            </Card>}

            {/*---------------------------Work Experience----------------------------- */}
        {userDetais?.user_workexperience.length > 0 && <Card style={styles.CartContainer}>
            <View>
              <Text style={styles.userInfoTitle}>Work Experience</Text>
            </View>
            {userDetais?.user_workexperience?.slice(0, workShowAll).map((data,i) => {
              return (
                <View style={[styles.AddedDetails]} key={i}>
                  <View style={{flexDirection:'row'}}>
                    <View style={styles.SingleLetter}>
                        <Text style={styles.SingleLetterText}>{data?.designation[0].toUpperCase()}</Text>
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
                </View>
               )
            })}
            {workShowAll !== undefined && userDetais?.user_workexperience?.length > 2 &&
            <TouchableOpacity style={styles.ShowAllContainer}  onPress={() => handleWorkloadMore()}>
              <Text style={styles.ShowAllText}>Show all { userDetais?.user_workexperience?.length-2  } experiences</Text>
              <AntDesign name="arrowright" size={25} color="#2376E5"/>
            </TouchableOpacity>}
        </Card>}

        {/* -----------------------Qualification------------------------ */}
        {userDetais?.user_qualification && <Card style={styles.CartContainer}>
          <View>
            <Text style={styles.userInfoTitle}>Qualification</Text>
          </View>
          <View style={styles.AddedDetails}>
            <View style={{flexDirection:'row'}}>
            <View style={styles.SingleLetter}>
                <Text style={styles.SingleLetterText}>{userDetais?.user_qualification?.qualification?.[0]?.toUpperCase()}</Text>
            </View>
              <View style={{paddingLeft:10}}>
                <Text style={styles.AddedDetailsTitle}>{userDetais?.user_qualification?.qualification}</Text>
                {userDetais?.user_qualification?.collegename && <Text style={styles.AddedDetailsSubTitle}>{userDetais?.user_qualification?.collegename}</Text>}
                {userDetais?.user_qualification?.completionyear && <Text style={styles.AddedDetailsDate}>{userDetais?.user_qualification?.completionyear}</Text>}
              </View>
            </View> 
          </View>

          {showAllQualification && userDetais?.user_pg_qualification?.map ((data,i) => {
            return(
            <View style={styles.AddedDetails} key={i}>
                <View style={{flexDirection:'row'}}>
                <View style={styles.SingleLetter}>
                    <Text style={styles.SingleLetterText}>{data?.qualification[0].toUpperCase()}</Text>
                </View>
                <View style={{paddingLeft:10}}>
                    <Text style={styles.AddedDetailsTitle}>{data.qualification}</Text>
                    {data?.collegename && <Text style={styles.AddedDetailsSubTitle}>{data?.collegename}</Text>}
                    {data?.completionyear && <Text style={styles.AddedDetailsDate}>{data?.completionyear}</Text>}
                </View>
                </View> 
            </View>
            )}) 
          }

            {!showAllQualification && userDetais?.user_pg_qualification.length >0 && <View style={styles.devider}/>}
            {!showAllQualification && userDetais?.user_pg_qualification.length >0 && <TouchableOpacity style={styles.showMoreContainer} onPress={() => setShowAllQualification(true)}>
              <Text style={styles.showMore}>Show all {userDetais?.user_pg_qualification.length} Qualification</Text>
              <Feather name="arrow-right" size={19} color="#2376E5" />
            </TouchableOpacity>}
        </Card>}

        {/* -----------------------Awards------------------------ */}
        {userDetais?.user_award.length > 0 && <Card style={styles.CartContainer}>
            <View>
              <Text style={styles.userInfoTitle}>Awards</Text>
            </View>
            {userDetais?.user_award?.map((data,i) => {
              return(
                <View style={styles.AddedDetails} key={i}>
                  <View style={{flexDirection:'row'}}>
                    <View style={styles.SingleLetter}>
                        <Text style={styles.SingleLetterText}>{data?.award[0].toUpperCase()}</Text>
                    </View>
                    <View style={{paddingLeft:10}}>
                      <Text style={styles.AddedDetailsTitle}>{data.award}</Text>
                      <Text style={styles.AddedDetailsDate}>
                      {moment(data.awardyear).format("MMM YYYY")}</Text>
                    </View>  
                  </View>
                </View>
              )
            })}
        </Card>}

        {/* -----------------------Publications------------------------ */}
        {userDetais?.user_papers?.length > 0 && <Card style={styles.CartContainer}>
            <View>
              <Text style={styles.userInfoTitle}>Publications</Text>
            </View>
            {userDetais?.user_papers.map((data,i) => {
                return(
                <View style={styles.AddedDetails} key={i}>
                    <View style={{flexDirection:'row'}}>
                    <View style={styles.SingleLetter}>
                        <Text style={styles.SingleLetterText}>{data?.title[0].toUpperCase()}</Text>
                    </View>
                    <View style={{paddingLeft:10}}>
                        <Text style={styles.AddedDetailsTitle}>{data.title}</Text>
                        <Text style={styles.AddedDetailsDate}>
                            {moment(data.publishedyear).format("MMMM YYYY")}
                        </Text>
                    </View>  
                    </View>
                </View>
                )
            })}
        </Card>}
        {/* -----------------------Achievements------------------------
        {userDetais?.user_achievement.length > 0 && <Card style={styles.CartContainer}>
          <View>
            <Text style={styles.userInfoTitle}>Achievements</Text>
          </View>
          <View style={styles.AddedDetails}>
            <View style={{flexDirection:'row'}}>
            <View style={styles.SingleLetter}>
            </View>
              <View style={{paddingLeft:10}}>
                <Text style={styles.AddedDetailsTitle}>Lorem ipsum dolor sit amet</Text>
                <Text style={styles.AddedDetailsDate}>June 2021</Text>
              </View>  
            </View>
          </View>
        </Card>} */}

        {/* -----------------------Interests------------------------ */}
        {userDetais?.phycircle?.length > 0  && <Card style={styles.CartContainer}>
          <View style={styles.InterestsContainer}>
            <Text style={styles.userInfoTitle}>Interests</Text>
          </View>
          <View style={styles.InterestsList}>
            {loader && <View style={styles.loaderContainer}>
               <ActivityIndicator size={'small'}/>
            </View>}
            {userDetais?.phycircle?.map((data,i) => {
              return(
                <>
                  {data?.speciality && <View style={styles.InterestsSelected} key={i}>
                    <Text>{data.speciality}</Text>
                  </View>}
                </>
              )
            })}
          </View>
        </Card>}
         
          </ScrollView>
    </SafeAreaView>
  )
}

export default OtherProfileView