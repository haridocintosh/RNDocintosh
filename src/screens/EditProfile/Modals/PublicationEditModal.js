import React,{useState, useEffect} from 'react';
import { View, Text ,TextInput,Pressable} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Button } from 'react-native-elements';
import Modal from "react-native-modal";
import {styles} from '../EditProfileStyles';
import {useForm, Controller} from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { DatePickerInput } from 'react-native-paper-dates';
import { format } from 'date-fns';
import { getLocalData } from '../../../apis/GetLocalData';
import { addPublicationAPI } from '../../../../redux/reducers/profileSlice';


const PublicationEditModal = ({editPublication,setEditPublication,getPublication,propPublication}) => {
    const {control, handleSubmit, reset, formState: { errors }} = useForm({mode: 'onBlur'});
    const dispatch = useDispatch();
    const [publishedYear, setPublishedyear]=useState(propPublication?.publishedyear);
    
    const onSubmit = (data) => {
        getLocalData('USER_INFO').then(async (res) => {
            data.publishedyear = format(publishedYear, 'yyyy-MM-dd');
            const postParams = {...data, id:res?.data?.id, paperpublised_id:propPublication?.paperpublised_id};
            const addPublicationResult = await dispatch(addPublicationAPI(postParams));
            getPublication();
            setEditPublication(false);
            reset();
        })
    }
    useEffect(() => {
        setPublishedyear(propPublication?.publishedyear);
    },[propPublication]);

    const hadleClose = () => {
        setEditPublication(!editPublication);
        reset();
    }
 return (
    <Modal
        style={{}}
        animationType="slide"
        transparent={true}
        visible={editPublication}>
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Pressable style={styles.closebtn} onPress={() => hadleClose()}>
                    <AntDesign name="close" size={20} color="#51668A" />
                </Pressable>
                <Text style={styles.modalText}>Edit Publications</Text>
                <View style={styles.input}>
                    <Text style={styles.modalSubText}>Title*</Text>
                    <Controller
                        control={control}        
                        name="title"      
                        defaultValue={propPublication?.title}
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
                {errors.title && <Text style={styles.errorMsg}>Title field is required!</Text>}
                <View style={styles.input}>
                    <Text style={styles.modalSubText}>Journal*</Text>
                    <Controller
                        control={control}        
                        name="journal"   
                        defaultValue={propPublication?.journal}   
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
                {errors.journal && <Text style={styles.errorMsg}>Journal field is required!</Text>}
                <View style={styles.input}>
                    <Text style={styles.modalSubText}>Start Date*</Text>
                 
                        <DatePickerInput
                            locale="en"
                            value={publishedYear? publishedYear: propPublication?.publishedyear}
                            onChange={(d) => setPublishedyear(d)}
                            style={{backgroundColor:'#fff'}}
                        />
                       
                </View>
                {errors.publishedyear && <Text style={styles.errorMsg}>Date field is required!</Text>}
                <View style={styles.modalBtnContainer}>
                    <Button 
                        title="Save" 
                        onPress={handleSubmit(onSubmit)}
                        buttonStyle={{ backgroundColor:'#2C8892',width:'100%'}}
                        titleStyle={{ color:'#fff', textAlign:"center"}}/>
                </View>
            </View>
        </View>
    </Modal>
  )
}

export default PublicationEditModal

