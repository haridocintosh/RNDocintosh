import { View, Text,SafeAreaView ,Image,ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './LeaderboardStyles';
import { docHistoryResult } from '../../../redux/reducers/mcqSlice';
import { useDispatch } from 'react-redux';
import { getLocalData } from '../../apis/GetLocalData';
import moment from "moment";
import { getAllCoins } from '../../../redux/reducers/postData';


const taskList={
  1:'Registration',
  2:'Like',
  3:'Comment',
  4:'Post Upload',
  5:'Share a Post',
  6:'Refer & Invite',
  7:'Staying on app for 2 minutes continuous',
  8:'Quiz',
  9:'Survey',
  10:'Poll',
  11:'Sentimetrix',
  12:'5 Quiz in a day',
  13:'Like Deduction',
  14:'Comment Deduction',
  15:'Post Delete'
}

const DocCoinsHistory = () => {
  const dispatch = useDispatch();
  const [docHistory,setDocHistory] = useState([]);
  const [allcoins, setAllcoins] = useState(0);

  const getDocHistory = () => {
    getLocalData('USER_INFO').then( async (res) =>{
      const result = await dispatch(docHistoryResult({id:res?.data?.id}));
      setDocHistory(result?.payload);
      const allCoinsResult = await dispatch(getAllCoins({user_id:res?.data?.id}));
      setAllcoins(allCoinsResult?.payload?.coins);
    })
  }

  const getActivityName = (task) => {
    return taskList[task];
  }

  useEffect(() =>{
    getDocHistory()
  },[])


  return (
    <SafeAreaView style={{flex: 1, backgroundColor:"#ecf2f6",padding:15}}>
        <View style={styles.TotalBalanceContainer}>
            <View style={styles.DocCoinContainer}>
                <Image source={require('../../assets/dr-icon/dcoin.png')} style={styles.TotalBalanceDcoinImag}/>
                <View style={styles.totalCoinContainer}>
                    <Text style={styles.totalCoinNumber}>{allcoins?.[0]?.coinTotal}</Text>
                    <Text style={styles.totalBalanceText}>Total Balance</Text>
                </View>
            </View>
            {/* <Text style={styles.ReedemText}>Redeem</Text> */}
        </View>
        <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnable={true} style={{paddingVertical:10}}>
        <Text style={styles.historyTitle}>Transaction History</Text>
          {docHistory?.map((data,index) => {
            return(
            <View key={index}>
              <View style={styles.coinHistoryContainer}>
                <View>
                  <Text style={styles.CoinsTrackTitle}>{getActivityName(data?.task)}</Text>
                  <Text style={styles.CoinsTrackTime}>
                    {data?.coin.includes("-") ? 'Debited on ' : 'Credited on '}
                    {moment(data?.createdAt).format('DD MMMM YYYY')}
                  </Text>
                </View>
                <Text style={data?.coin.includes("-") ? styles.CoinsTrackMin: styles.CoinsTrackPlus}>
                    {data?.coin}
                </Text>
              </View>
            </View>
            )
          })}
        </ScrollView>
    </SafeAreaView>
  )
}

export default DocCoinsHistory