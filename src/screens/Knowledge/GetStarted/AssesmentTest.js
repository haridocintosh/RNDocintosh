import { View, Text, SafeAreaView,StyleSheet,TouchableOpacity,Modal } from 'react-native'
import React,{useEffect,useState,use} from 'react';
import CircularProgress from 'react-native-circular-progress-indicator';
import { TsiQuizAPI, TsiQuizSaveAPI } from '../../../../redux/reducers/ALL_APIs';
import { useDispatch } from 'react-redux';
import { getLocalData } from '../../../apis/GetLocalData';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Button } from "react-native-elements";


const AssesmentTest = ({navigation}) => {
    const [counter, setCounter] = useState(null);
    const [startQuiz, setStartQuiz] = useState(false);
    const [scoreBoard, setScoreBoard] = useState(false);
    const [fetchData, setFetchData] = useState([]);
    const [nxtQue, setNxtQue] = useState(0);
    const [score, setScore] = useState(0);
    const [userData, setUserData] = useState(0);
    const dispatch = useDispatch();
    
    navigation.setOptions({ title:'SELF-ASSESSMENT TEST'});

    useEffect(() => {
      getLocalData("USER_INFO").then( async (res) => {
        const resData = res?.data;
        setUserData(resData);
        const data = await dispatch(TsiQuizAPI({user_id:res.data.id,basic_id:307}));
        setFetchData(data.payload)
      })
    },[])

    const handleSelectAns = (data) => {
      console.log("data",data?.is_correct);
      if(data?.is_correct == '1'){
        setScore(score+1);
      }
      if (nxtQue !== fetchData?.quizQuestion.length - 1) {
        setNxtQue(nxtQue+1);
      }else{
        setScoreBoard(true);
        setStartQuiz(false);
        setNxtQue(0);
      }
      
    }
    
    // console.log("score",score);
    useEffect(() => {
      if(!scoreBoard){
        const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
      }
    }, [counter]);

    const handleStart = () => {
      setStartQuiz(true);
      setCounter(60);
    }
    const playAgain = () => {
      setStartQuiz(true);
      setScore(0);
      setScoreBoard(!scoreBoard);
      setCounter(60);
    }
    const handlTimeOut = () => {
      setScore(0);
      setCounter(60)
    }
    const handleToggle = async () => {
      setScoreBoard(!scoreBoard);
      setScore(0);
      console.log("score==score",score);
      const data = await dispatch(TsiQuizSaveAPI({user_id:userData?.id,basic_id:307,score:score}));
      console.log("data",data.payload);
    }

  return(
    <SafeAreaView style={{flex:1,backgroundColor:"#ecf2f6",padding:10}}>
      <View style={styles.mainContainer}>
        <Text style={styles.assesmentText}>Telemedicine Orientation</Text>
        <View style={styles.QuizContainer}>
          <View style={styles.QuizTitleBox}>
            <Text style={styles.QuizTitleBoxText}>Quiz</Text>
          </View>
          <View style={styles.QuizTitleTextBox}>
            <View>
              <Text style={styles.QuizTitle}>{fetchData?.quizQ?.title}</Text>
              <Text style={styles.QuizSubtitle}>{fetchData?.quizQ?.description}</Text>
            </View>
            {!startQuiz &&<TouchableOpacity style={styles.startButton} onPress={() => handleStart()}>
              <Text style={styles.startButtonText}>Start</Text>
            </TouchableOpacity>}
          </View>
        </View>

        {startQuiz && <View style={styles.mcqStartContainer}>
        <CircularProgress
            value={counter}
            radius={35}
            progressValueColor={'#000'}
            duration={100}
            maxValue={60}
            initialValue={""}
            inActiveStrokeColor={'#A7DFCC'}
            activeStrokeColor={'#046B74'}
            titleColor={'white'}
            titleStyle={{fontWeight: 'bold',color:'#000'}}
        />

          {counter == 0 ?
          <View style={styles.Mcqs_quesions} >
            <Text style={styles.textBold}>Looks like you’ve run out of time.No worries.</Text>
            <Text style={styles.textNormal}>Score 7 or more to avail the certificate. Give it another go!</Text>
            <Button
              onPress={() => handlTimeOut()}
              title="Play Again"
              buttonStyle={styles.buttonStyle}
              titleStyle={{
                color: "#fff",
                fontFamily: "PlusJakartaSans-Bold",
              }}
            />
          </View>
          :
          <View style={styles.Mcqs_quesions} >
                <View>
                  <Text style={styles.Mcqs_quesions_text}>{nxtQue+1}.{fetchData?.quizQuestion[nxtQue]?.quiz_question}</Text>
                  {fetchData?.quizQuestion[nxtQue]?.options.map((data,index) => {
                    return(
                      <TouchableOpacity style={styles.Mcqs_options} key={index} onPress={() => handleSelectAns(data)}>
                          <View style={styles.optionCount}>
                            <Text style={styles.optionCountText}>{index + 1}</Text>
                          </View>
                          <View style={{flex:1}}>
                            <Text style={styles.Mcqs_options_text}>
                            {data?.options}
                            </Text>
                          </View>
                      </TouchableOpacity>
                    )
                  })}
                </View>
            </View>
        }
        </View> }
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={scoreBoard}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <TouchableOpacity style={styles.closebtn} onPress={() => handleToggle()}>
                    <AntDesign name="close" size={20} color="#51668A" />
                </TouchableOpacity>
                <Text style={styles.textBold}>You got {score} out of 10 correct</Text>
                <Text style={styles.textNormal}>Score 7 or more to avail the certificate. Give it another go!</Text>
                <Button
                    onPress={() => playAgain()}
                    title="Play Again"
                    buttonStyle={[styles.buttonStyle,{alignSelf:"center"}]}
                    titleStyle={{
                      color: "#fff",
                      fontFamily: "PlusJakartaSans-Bold",
                    }}
                  />
              </View>
            </View>
        </Modal>  
        
    </SafeAreaView>
  )
}

export default AssesmentTest;

export const styles = StyleSheet.create({
  mainContainer:{
    borderWidth:1,
    borderColor:'#8B9EB8',
    borderRadius:10,
    padding:10
  },
  assesmentText:{
    color:'#071B36',
    fontSize:18,
    borderBottomColor:'#2C8892',
    borderBottomWidth:1,
    paddingBottom:10,
    marginBottom:10
  },
  QuizContainer:{
    flexDirection:'row'
  },
  QuizTitleBox:{
    backgroundColor:"#2C8892",
    marginRight:10,
    height:120,
    width:120,
    borderRadius:15,
    justifyContent:'center',
    alignItems:'center'
  },
  QuizTitleBoxText:{
    fontFamily:'Inter-SemiBold',
    color:'#fff',
    fontSize:17
  },
  QuizTitleTextBox:{
    flex:1,
    justifyContent:'space-between'
  },
  QuizTitle:{
    fontFamily:'Inter-SemiBold',
    color:'#071B36',
  },
  QuizSubtitle:{
    fontFamily:'Inter-Regular',
    color:'#071B36',
    fontSize:13,
    marginTop:5
  },
  startButton:{
    backgroundColor:"#2C8892",
    width:70,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:50,
  },
  startButtonText:{
    color:'#fff',
    fontFamily:'Inter-SemiBold',
  },
  mcqStartContainer:{
    marginVertical:10,
    borderTopWidth:1,
    borderTopColor:'#071B36',
    borderStyle:'dashed',
    paddingTop:10,
    flexDirection:'row'
  },
  Mcqs_quesions:{
    marginLeft:10,
    flex:1
  },
  Mcqs_quesions_text:{
    marginBottom:10,
    color:'#071B36',
    fontFamily:'Inter-SemiBold',
    fontSize:16
  },
  Mcqs_options:{
    marginBottom:10,
    backgroundColor:'#3eb5c147',
    borderRadius:50,
    padding:5,
    width:'100%',
    alignItems:'center',
    flexDirection:'row'
  },
  Mcqs_options_text:{
    color:'#071B36'
  },
  optionCount:{
    backgroundColor:'#021d41',
    height:30,
    width:30,
    borderRadius:50,
    justifyContent:'center',alignItems:'center',
    marginRight:7
  },
  optionCountText:{
    color:'#fff'
  },
  buttonStyle: {
    marginTop: 10,
    width: 150,
    
    borderColor: "#fff",
    borderRadius: 15 / 2,
    backgroundColor: "#2C8892",
  },
    // ------------------------   PopUp score Modal --------------------
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor:'rgba(0,0,0,0.4)'  
    },
    modalView: {
      margin: 20,
      width:'60%',
      backgroundColor: "white",
      borderRadius: 20,
      padding: 30,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    closebtn: {
      backgroundColor: "#FFFF",
      alignSelf:'flex-end',
    },
    textBold:{
      fontFamily:'Inter-SemiBold',
      color:'#071B36'
    },
    textNormal:{
      fontFamily:"Inter-Regular",
      color:'#071B36',
      // textAlign:'center',
      marginTop:10
    },

})