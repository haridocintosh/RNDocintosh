import React,{useState, useEffect} from 'react';
import { View, Text ,Image,Pressable,TextInput} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import Modal from "react-native-modal";
import {styles} from '../EditProfileStyles';
import MobileVerify from './MobileVerify';
import {useForm, Controller} from 'react-hook-form'
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-simple-toast';
import { checkMobile } from '../../../../redux/reducers/loginAuth';
import { useDispatch } from 'react-redux';


const MobileNumberModal = ({mobileNumber,setMobileNumber, currentmobileno}) => {
// console.log(currentmobileno);
const dispatch = useDispatch();
const [numVerify,setNumVerify] = useState(false);
const [mobNumber,setMobNumber] = useState(null);

  const { control, handleSubmit, reset, formState: { errors }} = useForm({mode: 'onBlur'});
  const navigation = useNavigation();

  const handleVerify = () => {
    setNumVerify(true);
    setMobileNumber(false)
  }
  const onSubmit = async(data) => {
    if(data.phone_no != ""){
      setMobileNumber(false);
      setMobNumber(data.phone_no)
      const result = await dispatch(checkMobile({mobile:data.phone_no}));
      if(result.payload.status_code != "NE"){
        Toast.show('This mobile no. is registered with us', Toast.LONG);
      }else{
        setNumVerify(true);

      }  
    }
  }

  return (
    <>
    <MobileVerify numVerify={numVerify} setNumVerify={setNumVerify} mobNumber={mobNumber}/>
    <Modal
        style={{}}
        animationType="slide"
        transparent={true}
        visible={mobileNumber}>
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Pressable style={styles.closebtn} onPress={() => setMobileNumber(!mobileNumber)}>
                    <AntDesign name="close" size={20} color="#51668A" />
                </Pressable>
                <View style={styles.ModalBody}>
                  <Text style={styles.modalText}>Edit Mobile Number</Text>
                <View style={styles.input}>
                    <Text style={styles.modalSubText}>Mobile Number*</Text>
                    <Controller
                        control={control}        
                        name="phone_no"      
                        rules={{
                        required: true,
                        }}  
                        render={({field: {onChange, value, onBlur}}) => (
                        <TextInput
                            value={value}            
                            onBlur={onBlur}            
                            onChangeText={value => onChange(value)} 
                            placeholder = "Mobile"
                            keyboardType = 'number-pad'
                            editable={true}
                            maxLength={10}
                        />
                        )}  
                    />
                </View>
                  {errors.phone_no && <Text style={styles.errorMsg}>Phone number is required!</Text>}
                </View>
                <View style={styles.modalBtnContainer}>
                    <Button title="Save" buttonStyle={{ backgroundColor:'#2C8892',width:'100%'}}
                        titleStyle={{ color:'#fff', textAlign:"center"}}
                        onPress={handleSubmit(onSubmit)}/>
                </View>
            </View>
        </View>
    </Modal>
    </>
  )
}

export default MobileNumberModal