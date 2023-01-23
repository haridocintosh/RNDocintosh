import { View, Text,SafeAreaView,TouchableOpacity ,Modal} from 'react-native'
import React,{ useEffect } from 'react';
import { styles } from './ReportPostStyles';
import StepIndicator from 'react-native-step-indicator';

const ReportTrack = ({route,navigation}) => {
    useEffect(()=>{
        navigation.setOptions({ title: 'Report Post'});
    },[])
// const labels = ["Report Received","Under Review","Descision Delivered",];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize:30,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#0F9C69',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#0F9C69',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#0F9C69',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#0F9C69',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
}

    const {reportSelect} = route?.params;
    return (
        <SafeAreaView style={{flex:1}}>
        <View style={styles.selectedReportContainer}>
            <Text style={styles.selectedReport}>{reportSelect}</Text>
        </View>
            <Text style={styles.reportTitle}>Thank you for sharing with us.</Text>
            <Text style={styles.reportSubTitle}>We will notify you on the progress</Text>
        <View style={styles.reportStatusContainer}>
            <Text style={styles.reportStatusTitle}>Report Status</Text>
        </View>
        <View style={styles.StepIndicatorConatainer}>
        <View style={styles.StepIndicator}>
            <StepIndicator
                customStyles={customStyles}
                currentPosition={1}
                direction={'vertical'}
                stepCount={"3"}
            />
        </View>
        
       <View style={styles.StepIndicatorContent}>
            <View style={styles.contentStep}>
                <Text style={styles.StepIndicatorTitle}>Report Received</Text>
                <Text style={styles.StepIndicatorSubTile}>18 Aug 2021</Text>
            </View>
            <View>
                <Text style={styles.StepIndicatorTitle}>Under Review</Text>
                <Text style={styles.StepIndicatorSubTile}>18 Aug 2021</Text>
            </View>
            <View >
                <Text style={styles.StepIndicatorTitle}>Descision Delivered</Text>
                <Text style={styles.StepIndicatorSubTile}>We will send you a notification on the descision made </Text>
            </View>
       </View>

        </View>
      
    </SafeAreaView>
  )
}

export default ReportTrack