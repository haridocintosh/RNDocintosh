import { SafeAreaView, View, Text, Image,  ScrollView, TouchableOpacity, Dimensions,ActivityIndicator } from 'react-native'
import React,{useState, useEffect} from 'react'
import { styles } from './LeaderboardStyles';
import { Divider } from 'react-native-elements';
import * as Progress from "react-native-progress";
import { showLeaderBoard, showRankResult } from '../../../redux/reducers/mcqSlice';
import { getLocalData } from '../../apis/GetLocalData';
import { useDispatch } from 'react-redux';

const Leaderboard = ({navigation}) => {
    const [userData, setUserData] = useState([]);
    const [rank, setRank] = useState();
    const [loader, setLoader] = useState(true);
    const dispatch = useDispatch(); 

    const getLeaderboardData = () => {
        navigation.setOptions({ title: 'Leaderboard' });
        getLocalData('USER_INFO').then(async (res) => {
          const uresult = await dispatch(showLeaderBoard({role : res.data.role}));
          const userRankResult = await dispatch(showRankResult({user_id : res.data.id}));
          console.log(userRankResult.payload);
          setRank(userRankResult.payload)
          setUserData(uresult?.payload);
          setLoader(false)
        //   const rank = uresult?.payload?.findIndex(data => data?.userId == res.data.id)
        });
      };

      useEffect(() => {
        getLeaderboardData();
      },[])

      if(loader){
        return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center' }} >
            <ActivityIndicator size={'large'} color={"#2C8892"}/>
        </View>)
      }
      
    // const gress = 0.3990

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#ecf2f6",padding:15}}>
        <View style={styles.ScoreContainer}>
            <View style={styles.rankConatiner}>
                <Text style={styles.rankText}>#{rank?.rank}</Text>
                <Text style={styles.ownRankText}>Your Rank</Text>
            </View>
            <View style={styles.achiveConatiner}>
                <Image source={require('../../assets/dr-icon/dcoin.png')} style={styles.dcoinImag}/>
                <Text style={styles.achivedText}>{rank?.totalcoins}</Text>
            </View>
            <View style={styles.achiveConatiner}>
                <Image source={require('../../assets/dr-icon/coupon1.png')} style={styles.dcoinImag}/>
                <Text style={styles.achivedText}>0</Text>
            </View>
        </View>

        <View style={styles.rankersLederboard}>
            <View style={styles.rankersScoreBoad}>
                <View style={styles.rankerProfileContainer}>
                    <Image source={{uri:userData[1]?.profile}} style={styles.rankerProfile}/>
                    <View style={styles.rankedNumber}>
                        <Text style={styles.rankedNumberText}>2</Text>
                    </View>
                </View>
                <Text style={styles.rankerName}>Dr. {userData[1]?.first_name} {userData[1]?.last_name}</Text>
                <Text style={styles.rankerScore}>{userData[1]?.coinTotal}</Text>
                <Text style={styles.rankerSpeciality}>{userData[1]?.speciality}</Text>
            </View>

            <View style={styles.rankersScoreBoad2}>
                <View style={styles.rankerProfileContainer2}>
                    <Image source={require('../../assets/dr-icon/blueCrown.png')} style={styles.blueCrown}/>
                    <Image source={{uri:userData[0]?.profile}} style={styles.rankerProfile2}/>
                    <View style={styles.rankedNumber}>
                        <Text style={styles.rankedNumberText}>1</Text>
                    </View>
                </View>
                <Text style={styles.rankerName}>Dr. {userData[0]?.first_name} {userData[0]?.last_name}</Text>
                <Text style={styles.rankerScore}>{userData[0]?.coinTotal}</Text>
                <Text style={styles.rankerSpeciality}>{userData[0]?.speciality}</Text>
            </View>

            <View style={styles.rankersScoreBoad}>
                <View style={styles.rankerProfileContainer}>
                    <Image source={{uri:userData[2]?.profile}} style={styles.rankerProfile}/>
                    <View style={styles.rankedNumber}>
                        <Text style={styles.rankedNumberText}>3</Text>
                    </View>
                </View>
                <Text style={styles.rankerName}>Dr. {userData[2]?.first_name} {userData[2]?.last_name}</Text>
                <Text style={styles.rankerScore}>{userData[2]?.coinTotal}</Text>
                <Text style={styles.rankerSpeciality}>{userData[2]?.speciality}</Text>
            </View>
        </View>

        <Divider style={{marginVertical:20}}/>

        <View style={styles.columnTitleName}>
            <View style={styles.columnTitleTextContainer}>
                <Text style={styles.TextRank}>Rank</Text>
                <Text style={styles.TextName}>Name</Text>
            </View>
            <Text style={styles.TextDocCoins}>DocCoins</Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnable={true} style={{paddingVertical:10}}>
            {userData?.map((data,index) =>{
                return(
                <View style={styles.progressConatiner} key={index}>
                    <Progress.Bar progress={index == 0? 1 :`0.${userData?.length - index}`}  borderWidth={0} color={"#D7E7E7"} height={50} width={Dimensions.get('window').width/1.4}>
                        <View style={styles.topScorerPerson}>
                            <Text style={styles.barPrmaryKey}>{index + 1}</Text>
                            <View style={styles.userDetailsContainer}>
                              <Image source={{uri:data?.profile}} style={styles.barProfile}/>
                                <View style={styles.userDetailsText}>
                                    <Text style={styles.barName}>Dr. {data?.first_name} {data?.last_name}</Text>
                                    <Text style={styles.barSpeciality}>{data?.speciality}</Text>
                                </View>
                            </View>
                        </View>
                    </Progress.Bar>
                    <View style={{flexDirection:'row'}}>
                        <Image source={require('../../assets/dr-icon/dcoin.png')} style={styles.dcoinImag}/>
                        <Text style={styles.winsCoins}>{data?.coinTotal}</Text>
                    </View>
                    
                    {index !== userData?.length -1 && <View style={styles.blackLine}/>}
                </View>
                )
            })}
                
        </ScrollView>

        <TouchableOpacity style={styles.earnButton} onPress={()=>{navigation.navigate("EarnDocCoins")}}>
            <Text style={styles.earnButtonText}>How to Earn DocCoins?</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Leaderboard