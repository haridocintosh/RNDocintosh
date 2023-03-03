import React,{useState, useEffect} from 'react';
import { View, Text ,TextInput,Pressable} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Button } from 'react-native-elements';
import Modal from "react-native-modal";
import {styles} from '../EditProfileStyles';
import { DatePickerInput } from 'react-native-paper-dates';
import {useForm, Controller} from 'react-hook-form';
import moment from "moment";
import { EditProfileAwardAPI } from '../../../../redux/reducers/profileSlice';
import { useDispatch } from 'react-redux';
import { format } from 'date-fns';

const AwardsEditModal = ({editAwards,setEditAwards,passAwardData,handleAward}) => {
    const { control, handleSubmit, reset, formState: { errors }} = useForm({mode: 'onBlur'});
    const [inputDate,setInputDate] = useState(passAwardData?.awardyear);
    const dispatch = useDispatch();

    const onSubmit = async (data) => {
        const awardyear =  format(inputDate, 'yyyy-MM-dd');
        console.log(awardyear, data);
        const postParams = {
            id:passAwardData.userID,
            award_id:passAwardData.award_id,
            awardyear:awardyear,
            award:data.award
        }
        const editAward = await dispatch(EditProfileAwardAPI(postParams));
        handleAward();
        setInputDate();
        setEditAwards(false);
    }

    const hadleClose = () => {
        setEditAwards(!editAwards);
        reset();
    }
    useEffect(() => {
        setInputDate(passAwardData?.awardyear)
    },[passAwardData])
    
  return (
    <Modal
        style={{}}
        animationType="slide"
        transparent={true}
        visible={editAwards}>
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Pressable style={styles.closebtn} onPress={() => hadleClose()}>
                    <AntDesign name="close" size={20} color="#51668A" />
                </Pressable>
                <Text style={styles.modalText}>Edit Awards</Text>
                <View style={styles.input}>
                    <Text style={styles.modalSubText}>Name of Award*</Text>
                    <Controller
                        control={control}        
                        name="award"     
                        defaultValue={passAwardData?.award}
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
                        <DatePickerInput
                            locale="en"
                            value={inputDate ? inputDate : passAwardData?.awardyear}
                            onChange={(d) => setInputDate(d)}
                            style={{backgroundColor:'#fff'}}
                        />
                </View>
                {errors.awardyear && <Text style={styles.errorMsg}>Award field is required!</Text>}
                <View style={styles.modalBtnContainer}>
                    <Button title="Save" buttonStyle={{backgroundColor:'#2C8892',width:'100%'}} onPress={handleSubmit(onSubmit)}
                        titleStyle={{ color:'#fff', textAlign:"center"}}/>
                </View>
            </View>
        </View>
    </Modal>
  )
}

export default AwardsEditModal;