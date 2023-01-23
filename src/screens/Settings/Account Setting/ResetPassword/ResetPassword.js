import { View, Text, TextInput,SafeAreaView,TouchableOpacity } from 'react-native'
import React, { useEffect,useState } from 'react';
import { styles } from '../AccountSettingStyles';
import { Ionicons } from '@expo/vector-icons';
import { useForm, Controller } from "react-hook-form";
import { resetPasswordAPI } from './ResetPasswordSlice';
import { useDispatch } from 'react-redux';
import { getLocalData } from '../../../../apis/GetLocalData';
import Toast from 'react-native-simple-toast';



const ResetPassword = ({navigation}) => {
  const [showeye, setshoweye] = useState(true);
  const [PasswordMatch, setPasswordMatch] = useState(false);
  const [checkPassword, setCheckPassword] = useState();

  const dispatch = useDispatch();
  const {control, handleSubmit, reset, watch, formState: { errors }} = useForm({mode: 'onBlur'});

  const currentPwd = watch("current_password");
  const newPwd = watch("new_password");

  const onSubmit = (data) => {
    if(currentPwd === newPwd){
      setPasswordMatch(true);
      return;
    }
    getLocalData('USER_INFO').then( async (res) => {
      const resetResult = await dispatch(resetPasswordAPI({current_pwd:data?.current_password,pwd:data?.re_new_password,id:res?.data?.id}));
      Toast.show(resetResult?.payload?.message);
      if(resetResult?.payload.status !== "Error"){
        reset();
        setPasswordMatch(false);
      }
    })
  };

  useEffect(() => {
    navigation.setOptions({title:'Reset Password'});
  },[])
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ecf2f6",paddingHorizontal:15 }}>
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput 
            style={styles.customInputVerifyFullMobile} 
            placeholderTextColor='#687690' 
            placeholder='Current Password*'  
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="current_password"
      />
      {errors.current_password && <Text style={styles.error}>Current Password is required.</Text>}

      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput 
            style={styles.customInputVerifyFullMobile} 
            placeholderTextColor='#687690' 
            placeholder='New Password*'  
            onBlur={onBlur}
            onChangeText={(value) => {onChange(value), setCheckPassword(value)}}
            value={value}
            inputType="password"
            secureTextEntry={showeye}
            hideShow={showeye}
          />
        )}
        name="new_password"
      />
      {errors.new_password && <Text style={styles.error}>New Password is required.</Text>}

      <Controller
        control={control}
        rules={{ validate: (value) => value === checkPassword }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View>
          <TextInput 
            style={styles.customInputVerifyFullMobile} 
            placeholderTextColor='#687690' 
            placeholder='Re-Enter New Password*'  
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            inputType="password"
            secureTextEntry={showeye}
            hideShow={showeye}
          />
          <Ionicons  style={styles.eyeIcon} name={showeye ? 'eye-off' : 'eye'} size={24} color="#51668A" onPress={() => setshoweye(!showeye)} />
          </View>
        )}
        name="re_new_password"
      />
      {errors.re_new_password && <Text style={styles.error}>The passwords do not match.</Text>}

      {PasswordMatch && <Text style={styles.error}>Passwords should not match with current password.</Text>}

        <TouchableOpacity style={styles.resetPasswdBtn}  onPress={handleSubmit(onSubmit)} >
          <Text style={styles.resetPasswdBtnText}>Continue</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default ResetPassword