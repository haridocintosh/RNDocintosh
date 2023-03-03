import React,{useState, useEffect} from 'react';
import { View, Text ,TextInput,Pressable} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Button } from 'react-native-elements';
import Modal from "react-native-modal";
import {styles} from '../EditProfileStyles';
import {useForm, Controller} from 'react-hook-form';
import { updateUserInfoAPI } from '../../../../redux/reducers/profileSlice';
import { useDispatch } from 'react-redux';
import { getLocalData } from '../../../apis/GetLocalData';


const AboutMeModal = ({aboutMe,setaboutMe,asyncFetchDailyData,userdata}) => {
    const {control, handleSubmit, reset, formState: { errors }} = useForm({mode: 'onBlur'});
    const dispatch = useDispatch();

    const onSubmit = async (data) => {
        await dispatch(updateUserInfoAPI({summary:data?.summary,id:userdata.id}));
        asyncFetchDailyData();
        setaboutMe(false);
    }
    
  return (
    <Modal
        style={{}}
        animationType="slide"
        transparent={true}
        visible={aboutMe}>
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Pressable style={styles.closebtn} onPress={() => setaboutMe(!aboutMe)}>
                    <AntDesign name="close" size={20} color="#51668A" />
                </Pressable>
                <Text style={styles.modalText}>Edit About Me</Text>
                <View style={styles.input}>
                    <Text style={styles.modalSubText}>About Me*</Text>
                    <Controller
                        control={control}        
                        name="summary"      
                        defaultValue={userdata?.summary}  
                        rules={{
                            required: true,
                        }}  
                        render={({field: {onChange, value, onBlur}}) => (
                        <TextInput
                            value={value}            
                            onBlur={onBlur}            
                            onChangeText={value => onChange(value)}
                            multiline={true} 
                        />
                        )}  
                    />
                </View>
                {errors.summary && <Text style={styles.errorMsg}>This field is required!</Text>}
                <View style={styles.modalBtnContainer}>
                    <Button title="Save" buttonStyle={{ backgroundColor:'#2C8892',width:'100%'}}
                        titleStyle={{ color:'#fff', textAlign:"center"}} onPress={handleSubmit(onSubmit)}/>
                </View>
            </View>
        </View>
    </Modal>
  )
}

export default AboutMeModal