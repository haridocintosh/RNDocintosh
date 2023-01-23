import { View, Text,SafeAreaView ,Image,TouchableOpacity} from 'react-native'
import React,{useEffect, useRef, useState,useMemo} from 'react'
import { styles } from './BellNotificationStyles';
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { TapGestureHandler, ScrollView } from "react-native-gesture-handler";

const BellNotification = ({navigation}) => {
    // const [isOpen, setIsOpen]  = useState(false);
    const snapPoints = useMemo(() => [1, '30%'], []);
    const bottomSheetRef = useRef(null);

    const handlePresentModal = () => {
        bottomSheetRef.current?.expand();
    }
    useEffect(()=>{
        navigation.setOptions({ title: 'Notification'});
        bottomSheetRef.current?.close();
    },[])
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#E6E6E6'}}>
        <Text style={styles.DayNotification}>Today</Text>

        <View style={styles.userDoesContainer}>
            <View style={styles.WhatuserDoes}>
                <Image source={require('../../../assets/images/p2.png')} style={styles.ProfilePic}/>
                <View style={styles.userName}>
                    <Text style={styles.userNameText}>Dr.Shalani</Text>
                    <Text style={styles.userTimeText}>
                        Share you a Gift card 
                        <Text style={styles.dot}> . </Text>
                        2 hrs ago
                    </Text>
                </View>
            </View>
            <TouchableOpacity style={styles.threeDotsContainer} onPress={() => handlePresentModal()}>
              <Image source={require('../../../assets/images/three-dots.png')} style={styles.threeDots}/>
            </TouchableOpacity>
        </View>
        <View style={styles.userDoesContainer}>
            <View style={styles.WhatuserDoes}>
                <Image source={require('../../../assets/images/p3.png')} style={styles.ProfilePic}/>
                <View style={styles.userName}>
                    <Text style={styles.userNameText}>Dr.Shalani</Text>
                    <Text style={styles.userTimeText}>
                        Share you a Gift card 
                        <Text style={styles.dot}> . </Text>
                        2 hrs ago
                    </Text>
                </View>
            </View>
            <TouchableOpacity style={styles.threeDotsContainer} onPress={() => handlePresentModal()}>
              <Image source={require('../../../assets/images/three-dots.png')} style={styles.threeDots}/>
            </TouchableOpacity>
        </View>
       
        <Text style={styles.DayNotification}>Yesterday</Text>

        <View style={styles.userDoesContainer}>
            <View style={styles.WhatuserDoes}>
                <Image source={require('../../../assets/images/p2.png')} style={styles.ProfilePic}/>
                <View style={styles.userName}>
                    <Text style={styles.userNameText}>Dr.Shalani</Text>
                    <Text style={styles.userTimeText}>
                        Share you a Gift card 
                        <Text style={styles.dot}> . </Text>
                        2 hrs ago
                    </Text>
                </View>
            </View>
            <TouchableOpacity style={styles.threeDotsContainer} onPress={() => handlePresentModal()}>
              <Image source={require('../../../assets/images/three-dots.png')} style={styles.threeDots}/>
            </TouchableOpacity>
        </View>
        <View style={styles.userDoesContainer}>
            <View style={styles.WhatuserDoes}>
                <Image source={require('../../../assets/images/p3.png')} style={styles.ProfilePic}/>
                <View style={styles.userName}>
                    <Text style={styles.userNameText}>Dr.Shalani</Text>
                    <Text style={styles.userTimeText}>
                        Share you a Gift card 
                        <Text style={styles.dot}> . </Text>
                        2 hrs ago
                    </Text>
                </View>
            </View>
            <TouchableOpacity style={styles.threeDotsContainer} onPress={() => handlePresentModal()}>
              <Image source={require('../../../assets/images/three-dots.png')} style={styles.threeDots}/>
            </TouchableOpacity>
        </View>

        <BottomSheet
            ref={bottomSheetRef}
            snapPoints={snapPoints}
            enablePanDownToClose={true}
        >
            <BottomSheetView>
            <ScrollView>
                <TouchableOpacity style={styles.SheetOpionsContainer}>
                    <Image source={require('../../../assets/dr-icon/follow.png')} style={styles.SheetOpions}/>
                    <View style={styles.OpionsContainer}>
                        <Text style={styles.OpionsTitle}>Follow</Text>
                        <Text style={styles.OpionsSubTitle}>Follow this user</Text>
                    </View>
                </TouchableOpacity>
                {/* <TouchableOpacity style={styles.SheetOpionsContainer}>
                    <Image source={require('../../../assets/dr-icon/manageNotification.png')} style={styles.SheetOpions}/>
                    <View style={styles.OpionsContainer}>
                        <Text style={styles.OpionsTitle}>Manage notifications</Text>
                        <Text style={styles.OpionsSubTitle}>Manage notifications from this page</Text>
                    </View>
                </TouchableOpacity> */}
                <TouchableOpacity style={styles.SheetOpionsContainer}>
                    <Image source={require('../../../assets/dr-icon/turnOffNotification.png')} style={styles.SheetOpions}/>
                    <View style={styles.OpionsContainer}>
                        <Text style={styles.OpionsTitle}>Turn off notifications</Text>
                        <Text style={styles.OpionsSubTitle}>Stop receiving notification like this</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
            </BottomSheetView>
        </BottomSheet>
      
    </SafeAreaView>
  )
}

export default BellNotification