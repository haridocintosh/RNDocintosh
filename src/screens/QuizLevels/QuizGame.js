import React, { useRef, useState, useEffect } from 'react'
import { SafeAreaView,ScrollView,Easing,Dimensions,Text,View} from 'react-native'
import Svg, { Path } from 'react-native-svg';
import Animated from 'react-native-reanimated';
import TimeOutModal from './TimeOutModal';
import { useDispatch } from 'react-redux';
import QuizGameQuetion from './QuizGameQuetion';
import { GetQuizQuestions } from '../../../redux/reducers/mcqSlice';
import { useNavigation } from '@react-navigation/native';
import { styles } from './QuizLevelsStyles';

const QuizGame = ({route}) => {
  const dispatch =  useDispatch();
  const { basicId } = route?.params;
  const { title } = route?.params;
  const navigation = useNavigation();
    
    const animatedValue = useRef(new Animated.Value(0)).current;
    const [isTop, setIsTop] = useState(true);
    const [timeOUtModal, setTimeOUtModal] = useState(false);
    const [mcqQue, setMcqQue] = useState([]);
    const [seconds, setSeconds] = React.useState(60);
    const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);

    navigation.setOptions({ title: title })

    const startAnimation = toValue => {
        Animated.timing(animatedValue, {
            toValue,
            duration: 60000,
            easing: Easing.linear,
            useNativeDriver: true
        }).start(() => {
        })
    }

    const Mcqs = async() => {
      navigation.setOptions({ title: 'Quize Game' });
      const result = await dispatch(GetQuizQuestions({basic_id : basicId}));
      setMcqQue(result.payload.questions);
    };
  useEffect(() => {
      Mcqs();
      startAnimation(isTop && 1);
  }, []);

  useEffect(() => {
    if (seconds > 0 && isTop) {
     const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
     return () => {clearTimeout(timer)};
    } else {
      setIsTop(false);
      setIsOptionsDisabled(true);
      setTimeOUtModal(true);
    }
  });

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, Dimensions.get('window').height],
    extrapolate: 'clamp'
})

  return (
    <SafeAreaView style={{flex: 1, backgroundColor:"#fff"}}>
      {timeOUtModal && <TimeOutModal/>}
      
      <Animated.View style={[styles.square, { transform: [{ translateY }]}]}>
        
        <Svg 
          height={200}
          width={Dimensions.get('screen').width/1}
          style={{position:'absolute',bottom:-199}}> 
          <Path fill="#D5F2E8" d="M0,64L20,64C40,64,80,64,120,74.7C160,85,200,107,240,112C280,117,320,107,360,96C400,85,440,75,480,69.3C520,64,560,64,600,74.7C640,85,680,107,720,112C760,117,800,107,840,96C880,85,920,75,960,85.3C1000,96,1040,128,1080,144C1120,160,1160,160,1200,133.3C1240,107,1280,53,1320,58.7C1360,64,1400,128,1420,160L1440,192L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"/>
        </Svg>
      </Animated.View>
      <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnable={true} style={{padding:10}}>
        <View style={styles.mcqSecTiming}>
          <Text style={styles.mcqSecTimingText}>{seconds}</Text>
          <Text style={styles.mcqSecTimingText}>Sec</Text>
        </View>
      
        <QuizGameQuetion 
          mcqQue={mcqQue} 
          isTop={isTop} 
          singleMcq={basicId} 
          seconds={seconds} 
          disabled={isOptionsDisabled}
          setDisabled={setIsOptionsDisabled}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default QuizGame