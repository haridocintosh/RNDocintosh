import React,{useState, useEffect} from 'react';
import { View, Text , ScrollView, Pressable, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Button } from 'react-native-elements';
import Modal from "react-native-modal";
import {styles} from '../EditProfileStyles';
import { useDispatch } from 'react-redux';
import { getLocalData } from '../../../apis/GetLocalData';
import { addCircle } from '../../../../redux/reducers/circleSlice';

const IntrestsModal = ({Interests, setInterests, allInterestsData}) => {

    const dispatch              = useDispatch()
    const [userId, setuserId]   = useState();
    const [interestsData, setinterestsData]   = useState();

    const handleSelect = async (id) => {
        console.log(id);
        console.log('intersetModal',interestsData);
        let temp = interestsData.map((data) => {
            if (id === data.speciality_id) {
              return { ...data, isSelected: !data.isSelected };
            }
            return data;
          });
          setinterestsData(temp);
        //   const trueVal = temp
        //     .filter((val) => val.isSelected == true)
        //     .map((temp) => temp?.phoneNumbers?.[0].number);
        //   setSelectedList(trueVal)
        const postDetails = {speciality_id:id,id:userId}
        const result = await dispatch(addCircle(postDetails));
    }

    useEffect(()=>{
        setinterestsData(allInterestsData);
        getLocalData('USER_INFO').then((res) => {
          const reData = res?.data;
          setuserId(reData?.id)
        });
       
      },[])
  return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={Interests}>
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Pressable style={styles.closebtn} onPress={() => setInterests(!Interests)}>
                    <AntDesign name="close" size={20} color="#51668A" />
                </Pressable>
                <Text style={styles.modalText}>Edit Interests</Text>
                <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnable={true} style={{height:300}}>
                    <View style={styles.InterestsList}>
                        {interestsData?.map((data, index) => {
                            return(
                                <TouchableOpacity style={data.isSelected ? styles.InterestsSelected :styles.InterestsNotSelected} key={index} onPress={() => handleSelect(data.speciality_id)}>
                                    <Text>{data.speciality}</Text>
                                    {data.isSelected && <AntDesign name="closecircle" size={20} color="#45B5C0" style={styles.selectedIcons}/>}
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                </ScrollView>
                
                {/* <View style={styles.modalBtnContainer}>
                    <Button title="Save" buttonStyle={{ backgroundColor:'#2C8892',width:'100%'}}
                        titleStyle={{ color:'#fff', textAlign:"center"}}/>
                </View> */}
            </View>
        </View>
    </Modal>
  )
}

export default IntrestsModal