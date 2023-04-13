import { View, Text, SafeAreaView,StyleSheet,TouchableOpacity } from 'react-native'
import React,{useEffect,useState} from 'react';
import CircularProgress from 'react-native-circular-progress-indicator';

const AssesmentTest = ({navigation}) => {
    const [counter, setCounter] = useState(null);
    const [startQuiz, setStartQuiz] = useState(false);
    navigation.setOptions({ title:'SELF-ASSESSMENT TEST'});

    useEffect(() => {
        const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);

    console.log("counter",counter);
    const handleStart = () => {
      setStartQuiz(true);
      setCounter(60);
    }

  return (
    <SafeAreaView style={{flex:1,backgroundColor:"#ecf2f6",padding:10}}>
      <View style={styles.mainContainer}>
        <Text style={styles.assesmentText}>Telemedicine Orientation</Text>
       
        <View style={styles.QuizContainer}>
          <View style={styles.QuizTitleBox}>
            <Text style={styles.QuizTitleBoxText}>Quiz</Text>
          </View>
          <View style={styles.QuizTitleTextBox}>
            <View>
              <Text style={styles.QuizTitle}>SELF-ASSESSMENT TEST</Text>
              <Text style={styles.QuizSubtitle}>Have you grasped all the key concepts of telemedicine? Test yourself with this Quiz!</Text>
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
          <View style={styles.Mcqs_quesions}>
            <Text style={styles.Mcqs_quesions_text}>1.WHO defines telemedicine as</Text>

            <View style={styles.Mcqs_options}>
                <View style={styles.optionCount}>
                  <Text style={styles.optionCountText}>1</Text>
                </View>
                <View style={{flex:1}}>
                  <Text style={styles.Mcqs_options_text}>
                  Doctors should maintain a patient record
                  </Text>
                </View>
            </View>

            <View style={styles.Mcqs_options}>
                <View style={styles.optionCount}>
                  <Text style={styles.optionCountText}>2</Text>
                </View>
                <View style={{flex:1}}>
                  <Text style={styles.Mcqs_options_text}>
                  Doctor must display at every touchpoint with the patient
                  </Text>
                </View>
            </View>

            <View style={styles.Mcqs_options}>
                <View style={styles.optionCount}>
                  <Text style={styles.optionCountText}>3</Text>
                </View>
                <View style={{flex:1}}>
                  <Text style={styles.Mcqs_options_text}>
                  Patient identification is mandatory
                  </Text>
                </View>
            </View>

            <View style={styles.Mcqs_options}>
                <View style={styles.optionCount}>
                  <Text style={styles.optionCountText}>4</Text>
                </View>
                <View style={{flex:1}}>
                  <Text style={styles.Mcqs_options_text}>
                    Patients personal data can be disclosed without consent
                  </Text>
                </View>
            </View>
              
            
          </View>

        </View> }
      </View>
        
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
    marginBottom:5,
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

})