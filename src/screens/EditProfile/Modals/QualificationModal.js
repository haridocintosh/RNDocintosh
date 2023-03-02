import React,{useState, useEffect} from 'react';
import { View, Text ,TextInput,Pressable} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Button } from 'react-native-elements';
import Modal from "react-native-modal";
import {styles} from '../EditProfileStyles';
import {useForm, Controller} from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { DatePickerInput } from 'react-native-paper-dates';


const QualificationModal = ({qualification,setQualification}) => {
    const { control, handleSubmit, reset, formState: { errors }} = useForm({mode: 'onBlur'});
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        console.log(data);
    }

  return (
    <Modal
        style={{}}
        animationType="slide"
        transparent={true}
        visible={qualification}>
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Pressable style={styles.closebtn} onPress={() => setQualification(!qualification)}>
                    <AntDesign name="close" size={20} color="#51668A" />
                </Pressable>
                <Text style={styles.modalText}>Add Qualification</Text>
                <View style={styles.input}>
                    <Text style={styles.modalSubText}>Course*</Text>
                    <Controller
                        control={control}        
                        name="designation"      
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
                <View style={styles.input}>
                    <Text style={styles.modalSubText}>College Name*</Text>
                    <Controller
                        control={control}        
                        name="designation"      
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
                <View style={styles.input}>
                    <Text style={styles.modalSubText}>Year of Completion*</Text>
                    <Controller
                        control={control}        
                        name="designation"      
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
                <View style={styles.modalBtnContainer}>
                    <Button 
                        onPress={handleSubmit(onSubmit)}
                        title="Save" 
                        buttonStyle={{ backgroundColor:'#2C8892',width:'100%'}}
                        titleStyle={{ color:'#fff', textAlign:"center"}}/>
                </View>
            </View>
        </View>
    </Modal>
  )
}

export default QualificationModal