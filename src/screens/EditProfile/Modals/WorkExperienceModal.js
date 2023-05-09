import React,{useState, useEffect} from 'react';
import { View, Text ,TextInput,Pressable,Switch} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Button } from 'react-native-elements';
import Modal from "react-native-modal";
import {styles} from '../EditProfileStyles';
import {useForm, Controller} from 'react-hook-form'
import { DatePickerInput } from 'react-native-paper-dates';
import { format } from 'date-fns';
import { getLocalData } from '../../../apis/GetLocalData';
import { addworkexperianceAPI } from '../../../../redux/reducers/profileSlice';
import { useDispatch } from 'react-redux';

const WorkExperienceModal = ({workExp,setWorkExp,handleWorkReload}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    
    const { control, handleSubmit, reset, formState: { errors }} = useForm({mode: 'onBlur'});
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        getLocalData('USER_INFO').then(async (res) => {
            const reData = res?.data;
            data.startdate = format(data?.startdate, 'yyyy-MM-dd');
            isEnabled ? data.enddate = "" : data.enddate = format(data?.enddate, 'yyyy-MM-dd');
            const mergeData = {...data, user_id:reData?.id, workexp_id:null};
            const allCoinsResult = await dispatch(addworkexperianceAPI(mergeData));
            handleWorkReload()
            setWorkExp(false)
            reset();
        })
    }

  return (
    <Modal
        style={{}}
        animationType="slide"
        transparent={true}
        visible={workExp}>
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Pressable style={styles.closebtn} onPress={() => setWorkExp(!workExp)}>
                    <AntDesign name="close" size={20} color="#51668A" />
                </Pressable>
                <Text style={styles.modalText}>Add Work Experience </Text>
                <View style={styles.input}>
                    <Text style={styles.modalSubText}>Designation*</Text>
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
                {errors.designation && <Text style={styles.errorMsg}>Designation field is required!</Text>}
                
                <View style={styles.input}>
                    <Text style={styles.modalSubText}>Hospital/Institution*</Text>
                    <Controller
                        control={control}        
                        name="hospitalname"      
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
                {errors.hospitalname && <Text style={styles.errorMsg}>This field is required!</Text>}
                
                <View style={styles.input}>
                    <Text style={styles.modalSubText}>Start Date*</Text>
                    <Controller
                        control={control}        
                        name="startdate"      
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
                {errors.startdate && <Text style={styles.errorMsg}>This field is required!</Text>}
                <View style={styles.input}>
                    <Text style={styles.modalSubText}>End Date*</Text>
                    <Controller
                        control={control}        
                        name="enddate"      
                        rules={{
                          required: isEnabled ? false : true,
                        }}  
                        render={({field: {onChange, value, onBlur}}) => (
                        <DatePickerInput
                            locale="en"
                            value={value}
                            onChange={(d) => onChange(d)}
                            style={{backgroundColor:'#fff'}}
                            disabled={isEnabled}
                        />
                        )}  
                    />
                </View>
                {errors.enddate && <Text style={styles.errorMsg}>This field is required!</Text>}
                <View style={styles.workingToggle}>
                    <Text style={styles.workingToggleText}>Currently Working</Text>
                        <Switch
                            trackColor={{false:'#DDDDDD', true: '#2C8892'}}
                            thumbColor={isEnabled ? '#DDDDDD' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={setIsEnabled}
                            value={isEnabled}
                        />
                </View>
                <View style={styles.modalBtnContainer}>
                    <Button title="Save" buttonStyle={{ backgroundColor:'#2C8892',width:'100%'}}
                        titleStyle={{ color:'#fff', textAlign:"center"}} onPress={handleSubmit(onSubmit)}/>
                </View>
            </View>
        </View>
    </Modal>
  )
}

export default WorkExperienceModal