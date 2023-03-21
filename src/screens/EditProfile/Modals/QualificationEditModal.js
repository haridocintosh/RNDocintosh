import React,{useState, useEffect} from 'react';
import { View, Text ,Pressable} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Button } from 'react-native-elements';
import Modal from "react-native-modal";
import {styles} from '../EditProfileStyles';
import { useDispatch } from 'react-redux';
import { DatePickerInput } from 'react-native-paper-dates';
import DropDownPicker from 'react-native-dropdown-picker';
import { AddQualificationAPI, QlifnCollegeAPI, QlifnCourseAPI} from '../../../../redux/reducers/qualificationSlice';
import { format } from 'date-fns';


const QualificationEditModal = ({setEditQualification,editQualification,getQualification,passQualification}) => {
    const [openCourse, setOpenCourse] = useState(false);
    const [openCollege, setOpenCollege] = useState(false);
    const [valueCourse, setValueCourse] = useState(passQualification?.postgradution_id);
    const [valueCollege, setValueCollege] = useState(passQualification?.pcollege_id);
    const [itemsCourse, setItemsCourse] = useState([]);
    const [itemsCollege, setItemsCollege] = useState([]);
    const [completionYear, setCompletionYear]= useState(passQualification?.completionyear);

    const dispatch = useDispatch();

    const onSubmit = async () => {
        const collegeenddate = format(completionYear, 'yyyy-MM-dd');
        const postData = {
            coursetype :"",
            collegeid : valueCollege ? valueCollege : passQualification?.pcollege_id,
            courseid : valueCourse ? valueCourse : passQualification?.postgradution_id,
            collegestartdate : "",
            collegeenddate : collegeenddate,
            userid : passQualification?.id,
            pg_id : passQualification?.pg_id
        }
        const addQuaResult = await dispatch(AddQualificationAPI(postData));
        console.log(addQuaResult);
        getQualification();
        setEditQualification(false);
    }

    const GetDropList = async () => {
        const courseResult = await dispatch(QlifnCourseAPI({id : passQualification?.id}));
        setItemsCourse(courseResult?.payload?.map((data) => {return {label: data?.qualification, value: data?.qualification_id}}));
        const collegeResult = await dispatch(QlifnCollegeAPI());
        setItemsCollege(collegeResult?.payload?.map((data) => {return {label: data?.collegename, value: data?.college_id}}));
    }

    const handleClose = async () => {
        setEditQualification(!editQualification);
        setValueCollege();
        setValueCourse();
    }
    
    useEffect(() => {
        GetDropList();
    },[]);


    useEffect(() => {
        setCompletionYear(passQualification?.completionyear);
        setValueCollege(passQualification?.pcollege_id);
        setValueCourse(passQualification?.postgradution_id);
    },[passQualification]);

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={editQualification}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Pressable style={styles.closebtn} onPress={() => handleClose()}>
                        <AntDesign name="close" size={20} color="#51668A" />
                    </Pressable>
                    <Text style={styles.modalText}>Edit Qualification</Text>
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
                                autoScroll={true}
                                listMode="MODAL"
                                searchable={true}
                                containerStyle={{
                                    zIndex: 9999
                                }}
                                textStyle={{
                                    fontSize: 16,
                                    color:"#687690",
                                    fontFamily: 'PlusJakartaSans-Regular',
                                  }}
                                  listItemLabelStyle={{
                                    color: "#687690",
                                    fontWeight:"800",
                                    borderBottomWidth:1,
                                    borderBottomColor:"#687690",
                                    textAlign:"center",
                                    paddingBottom:10,
                                  }}
                                  selectedItemLabelStyle={{
                                    fontWeight: "900",
                                    color:"#45B5C0",
                                    fontSize:18
                                  }}
                                  searchContainerStyle={{
                                    borderBottomColor: "#687690"
                                  }}
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
                                autoScroll={true}
                                listMode="MODAL"
                                searchable={true}
                                containerStyle={{
                                    zIndex: 9999
                                }}
                            textStyle={{
                                fontSize: 16,
                                color:"#687690",
                                fontFamily: 'PlusJakartaSans-Regular',
                              }}
                              listItemLabelStyle={{
                                color: "#687690",
                                fontWeight:"800",
                                borderBottomWidth:1,
                                borderBottomColor:"#687690",
                                textAlign:"center",
                                paddingBottom:10,
                              }}
                              selectedItemLabelStyle={{
                                fontWeight: "900",
                                color:"#45B5C0",
                                fontSize:18
                              }}
                              searchContainerStyle={{
                                borderBottomColor: "#687690"
                              }}
                              />
                    </View>
                    <View style={styles.input}>
                        <Text style={styles.modalSubText}>Year of Completion*</Text>
                            <DatePickerInput
                                locale="en"
                                value={completionYear ? completionYear : passQualification?.completionyear}
                                onChange={(d) => setCompletionYear(d)}
                                style={{backgroundColor:'#fff'}}
                            />
                    </View>
                    <View style={styles.modalBtnContainer}>
                        <Button 
                            onPress={() => onSubmit()}
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
