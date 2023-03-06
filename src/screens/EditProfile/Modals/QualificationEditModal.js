import React,{useState, useEffect} from 'react';
import { View, Text ,TextInput,Pressable} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Button } from 'react-native-elements';
import Modal from "react-native-modal";
import {styles} from '../EditProfileStyles';
import {useForm, Controller} from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { DatePickerInput } from 'react-native-paper-dates';
import DropDownPicker from 'react-native-dropdown-picker';
import { getLocalData } from '../../../apis/GetLocalData';
import { AddQualificationAPI, QlifnCollegeAPI, QlifnCourseAPI} from '../../../../redux/reducers/qualificationSlice';
import { format } from 'date-fns';

const QualificationEditModal = () => {
    const [openCourse, setOpenCourse] = useState(false);
    const [openCollege, setOpenCollege] = useState(false);
    const [valueCourse, setValueCourse] = useState(null);
    const [valueCollege, setValueCollege] = useState(null);
    const [itemsCourse, setItemsCourse] = useState([]);
    const [itemsCollege, setItemsCollege] = useState([]);
    const [userId, setUserId] = useState([]);
    const { control, handleSubmit, reset, formState: { errors }} = useForm({mode: 'onBlur'});
    const dispatch = useDispatch();

    const onSubmit = async (data) => {
        data.collegeenddate = format(data?.collegeenddate, 'yyyy-MM-dd')
        const postData = {
            coursetype :"",
            collegeid : valueCollege,
            courseid : valueCourse,
            collegestartdate : "",
            collegeenddate : data.collegeenddate,
            userid : userId,
            pg_id : ""
        }
        console.log("postData",postData);
        const addQuaResult = await dispatch(AddQualificationAPI(postData));
        console.log(addQuaResult);
        getQualification();
        setQualification(false);
    }

    const GetDropList = () => {
      getLocalData('USER_INFO').then(async (res) => {
        setUserId(res?.data?.id);
        const courseResult = await dispatch(QlifnCourseAPI({id : res?.data?.id}));
        setItemsCourse(courseResult?.payload?.map((data) => {return {label: data?.qualification, value: data?.qualification_id}}));
        const collegeResult = await dispatch(QlifnCollegeAPI());
        setItemsCollege(collegeResult?.payload?.map((data) => {return {label: data?.collegename, value: data?.college_id}}));
      })
    }
    
    useEffect(() => {
        GetDropList()
    },[])
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
                    <View style={styles.inputDropDown}>
                        <Text style={styles.modalSubText}>Course*</Text>
                            <DropDownPicker
                                style={styles.DropDownField}
                                open={openCourse}
                                value={valueCourse}
                                items={itemsCourse}
                                setOpen={setOpenCourse}
                                setValue={setValueCourse}
                                setItems={setItemsCourse}
                                dropDownDirection={'TOP'}
                              />
                    </View>
                    <View style={styles.inputDropDown}>
                        <Text style={styles.modalSubText}>College Name*</Text>
                            <DropDownPicker
                                style={styles.DropDownField}
                                open={openCollege}
                                value={valueCollege}
                                items={itemsCollege}
                                setOpen={setOpenCollege}
                                setValue={setValueCollege}
                                setItems={setItemsCollege}
                                dropDownDirection={'TOP'}
                              />
                    </View>
                    <View style={styles.input}>
                        <Text style={styles.modalSubText}>Year of Completion*</Text>
                        <Controller
                            control={control}        
                            name="collegeenddate"      
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

export default QualificationEditModal
