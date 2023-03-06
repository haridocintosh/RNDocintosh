import React,{useState, useEffect} from 'react';
import { View, Text ,TextInput,Pressable} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Button } from 'react-native-elements';
import Modal from "react-native-modal";
import {styles} from '../EditProfileStyles';
import { DatePickerInput } from 'react-native-paper-dates';
import {useForm, Controller} from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { format } from 'date-fns';
import { getLocalData } from '../../../apis/GetLocalData';
import { EditProfileAwardAPI } from '../../../../redux/reducers/profileSlice';


const AwardsModal = ({awards,setAwards,handleAward}) => {
    const { control, handleSubmit, reset, formState: { errors }} = useForm({mode: 'onBlur'});
    const dispatch = useDispatch();

    const onSubmit = async (data) => {
        getLocalData('USER_INFO').then(async (res) => {
            data.awardyear = format(data?.awardyear, 'yyyy-MM-dd');
            const postParams = { ...data, id:res?.data?.id, award_id:""}
            const editAward = await dispatch(EditProfileAwardAPI(postParams));
            console.log("editAward",editAward);
            handleAward();
            setAwards(false);
            reset();
        })
       
    }
  return (
    <Modal
        style={{}}
        animationType="slide"
        transparent={true}
        visible={awards}>
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Pressable style={styles.closebtn} onPress={() => setAwards(!awards)}>
                    <AntDesign name="close" size={20} color="#51668A" />
                </Pressable>
                <Text style={styles.modalText}>Add Awards</Text>
                <View style={styles.input}>
                    <Text style={styles.modalSubText}>Name of Award*</Text>
                    <Controller
                        control={control}        
                        name="award"      
                        rules={{
                        required: true,
                        }}  
                        render={({field: {onChange, value, onBlur}}) => (
                        <TextInput
                            value={value}            
                            onBlur={onBlur}            
                            onChangeText={value => onChange(value)} 
                        />
                        )}  
                    />
                </View>
                {errors.award && <Text style={styles.errorMsg}>Award field is required!</Text>}
                <View style={styles.input}>
                    <Text style={styles.modalSubText}>Date*</Text>
                    <Controller
                        control={control}        
                        name="awardyear"      
                        rules={{
                        required: true,
                        }}  
                        render={({field: {onChange, value, onBlur}}) => (
                        <DatePickerInput
                            locale="en"
                            value={value}
                            onChange={(d) => onChange(d)}
                            style={{backgroundColor:'#fff'}}
                        />
                        )}  
                    />
                </View>
                {errors.awardyear && <Text style={styles.errorMsg}>Date field is required!</Text>}
                <View style={styles.modalBtnContainer}>
                    <Button 
                        onPress={handleSubmit(onSubmit)}
                        title="Save" buttonStyle={{ backgroundColor:'#2C8892',width:'100%'}}  
                        titleStyle={{ color:'#fff', textAlign:"center"}}/>
                </View>
            </View>
        </View>
    </Modal>
  )
}

export default AwardsModal