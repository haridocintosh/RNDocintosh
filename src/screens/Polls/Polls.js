import { View, Text,SafeAreaView,Image,TouchableOpacity } from 'react-native';
import React,{useState,useEffect} from 'react';
import { Card } from 'react-native-paper';
import { styles } from './PollsStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { GetPollsData, SavePollAns } from '../../../redux/reducers/PollsSlice';
import { useDispatch } from 'react-redux';
import { getLocalData } from '../../apis/GetLocalData';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import moment from "moment";


const Polls = () => {
  const [showMcq, setShowMcq] = useState(true);
  const [pollsData, setPollsData] = useState([]);
  const [userData, setUserData] = useState();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const toggleMcq = () => {
    setShowMcq(!showMcq)
  }

  const getPollsQue = () => {
    getLocalData('USER_INFO').then(async(res) => {
      setUserData(res?.data);
      const reData = res?.data;
      const result = await dispatch(GetPollsData({id:reData.id,assoc_id:''}));
      setPollsData(result?.payload?.current_poll);
      
    })
  }
  const handleAnswer = async (data) => {
    const PostData = {qid:data?.qid,id:userData?.id,opt_id:data?.opt_id,basic_id:pollsData?.basic_id};
    const result = await dispatch(SavePollAns(PostData));
    navigation.navigate("PollsThankYouPage")
  }

  useEffect(() => {
    if(isFocused){
      getPollsQue();
    }
  },[isFocused]);
    return (
    <SafeAreaView>
      {pollsData?.solved == 0 ? <Card style={styles.pollsCart}>
        {/* <View style={styles.TrendMcqs}>
          <View style={styles.popular}>
            <Text style={styles.popularText}>Popular</Text>
          </View>
          <Image source={require('../../assets/images/newPoll.png')} style={{width:24, height:24}}/>
        </View> */}
          <Text style={styles.Question}>{pollsData?.question_title}</Text>
        <View style={styles.expireTimeContainer}>
          <View style={styles.expireTime}>
            <Ionicons name="time-outline" size={24} color="#FF3131" />
            <Text style={styles.expireTimeText}>
              Expairing on {moment(pollsData?.end_date).format('DD MMMM')}
            </Text>
          </View>
          <TouchableOpacity onPress={() => toggleMcq()} style={styles.ToggleIcons}>
            {showMcq ? <Entypo name="chevron-thin-up" size={20} color="#45B5C0"/> : <Entypo name="chevron-thin-down" size={20} color="#45B5C0"/>}
          </TouchableOpacity>
        </View>

        {showMcq &&
          <View>
            {pollsData?.option?.map((data,i) => {
              return(
                <TouchableOpacity style={styles.mcqOption} key={i} onPress={() => handleAnswer(data)}>
                  <Text style={styles.mcqOptionText}>{data.options}</Text>
                </TouchableOpacity>
              )
            })}
          </View>
        }
      </Card>
      :
        <View style={styles.NoPollsContainer}>
            <Image source={require('../../assets/images/NoPolls.png')} style={styles.NoPollImage}/>
            <Text style={styles.NoPollsTitle}>You have attemped all Polls.</Text>
            <Text style={styles.NoPollsSubTitle}>You can come back later</Text>
        </View>
      }
    </SafeAreaView>
  )
}

export default Polls;