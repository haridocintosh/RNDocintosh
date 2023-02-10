import React,{useState, useEffect} from 'react';
import { View, Text ,TextInput,Pressable,Switch} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Button } from 'react-native-elements';
import Modal from "react-native-modal";
import {styles} from '../EditProfileStyles';
import {useForm, Controller} from 'react-hook-form'
// import DatePicker from 'react-native-date-picker'
import DatePicker from 'react-native-modern-datepicker';


const WorkExperienceModal = ({workExp,setWorkExp}) => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const { control, handleSubmit, reset, formState: { errors }} = useForm({mode: 'onBlur'});

    const onSubmit = (data) => {
        console.log('data',data);
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
                <Text style={styles.modalText}>Edit Work Experience </Text>
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
                    <Text style={styles.modalSubText}>Hospital/Institution**</Text>
                    <Controller
                        control={control}        
                        name="hspl_or_inst"      
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
                {errors.hspl_or_inst && <Text style={styles.errorMsg}>This field is required!</Text>}
                
                <View style={styles.input}>
                    <Text style={styles.modalSubText}>Start Date*</Text>
                    {/* <DatePicker
                        mode="monthYear"
                        selectorStartingYear={2000}
                        onMonthYearChange={selectedDate => setDate(selectedDate)}
                        /> */}
                         <TextInput />
                </View>
                <View style={styles.input}>
                    <Text style={styles.modalSubText}>End Date*</Text>
                    <TextInput autoCapitalize="none" />
                </View>
                <View style={styles.workingToggle}>
                    <Text style={styles.workingToggleText}>Currently Working</Text>
                    <Switch
                        trackColor={{false: '#DDDDDD', true: '#2C8892'}}
                        thumbColor={isEnabled ? '#DDDDDD' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
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