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

const EditWorkExperienceModal = ({handleWorkReload,editWorkExp,setEditWorkExp,passWorkExp}) => {
    const [isEnabled, setIsEnabled] = useState(String(passWorkExp?.end_date).includes(1970) ? true : false);
    const { control, handleSubmit, reset, formState: { errors }} = useForm({mode: 'onBlur'});
    const [startDate,setStartDate] = useState(passWorkExp?.start_date);
    const [endDate,setEndDate] = useState(String(passWorkExp?.end_date).includes(1970)?  "" : passWorkExp?.end_date);
    const dispatch = useDispatch();

    console.log("passWorkExp----",passWorkExp);

    const onSubmit = async (data) => {
        const startingDate = format(startDate, 'yyyy-MM-dd');
        const endingDate = isEnabled ? "" : format(endDate, 'yyyy-MM-dd');
        const postParams = {
            user_id:passWorkExp.userID,
            designation:data.designation,
            hospitalname:data.hospitalname,
            startdate:startingDate,
            enddate :endingDate,
            workexp_id :passWorkExp.workexp_id
        }
        const allCoinsResult = await dispatch(addworkexperianceAPI(postParams));
        handleWorkReload();
        setEditWorkExp(false);
        setEndDate();
        setStartDate();
        reset();
    }

  return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={editWorkExp}>
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Pressable style={styles.closebtn} onPress={() => {setEditWorkExp(!editWorkExp),reset()}}>
                    <AntDesign name="close" size={20} color="#51668A" />
                </Pressable>
                <Text style={styles.modalText}>Edit Work Experience </Text>
                <View style={styles.input}>
                    <Text style={styles.modalSubText}>Designation*</Text>
                    <Controller
                        control={control}        
                        name="designation"      
                        defaultValue={passWorkExp?.designation}  
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
                    <Text style={styles.modalSubText}>Hospital/Institution**</Text>
                    <Controller
                        control={control}        
                        name="hospitalname"  
                        defaultValue={passWorkExp?.hospital_id}    
                        rules={{
                        required: true,
                        }}  
                        render={({field: {onChange, value, onBlur}}) => (
                        <TextInput
                            value={value}            
                            onBlur={onBlur}            
                            onChangeText={value => onChange(value)} 
                            editable
                        />
                        )}  
                    />
                </View>
                {errors.hospitalname && <Text style={styles.errorMsg}>This field is required!</Text>}
                <View style={styles.input}>
                    <Text style={styles.modalSubText}>Start Date*</Text>
                        <DatePickerInput
                            locale="en"
                            value={startDate ? startDate: passWorkExp?.start_date}
                            onChange={(d) => setStartDate(d)}
                            style={{backgroundColor:'#fff'}}
                        />
                </View>
                {errors.startdate && <Text style={styles.errorMsg}>This field is required!</Text>}
                <View style={styles.input}>
                    <Text style={styles.modalSubText}>End Date*</Text>
                        <DatePickerInput
                            locale="en"
                            value={endDate}
                            onChange={(d) => setEndDate(d)}
                            style={{backgroundColor:'#fff'}}
                            disabled={isEnabled}
                        />
                </View>
                {errors.enddate && <Text style={styles.errorMsg}>This field is required!</Text>}
                <View style={styles.workingToggle}>
                    <Text style={styles.workingToggleText}>Currently Working</Text>
                        <Switch
                            trackColor={{false: '#DDDDDD', true: '#2C8892'}}
                            thumbColor={isEnabled ? '#DDDDDD' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={setIsEnabled}
                            value={isEnabled}
                        />
                </View>
                <View style={styles.modalBtnContainer}>
                    <Button title="Save" buttonStyle={{backgroundColor:'#2C8892',width:'100%'}}
                        titleStyle={{ color:'#fff', textAlign:"center"}} onPress={handleSubmit(onSubmit)}/>
                </View>
            </View>
        </View>
    </Modal>
  )
}

export default EditWorkExperienceModal;