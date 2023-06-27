import { View, Text,SafeAreaView, TextInput } from 'react-native'
import React,{useEffect,useState} from 'react'
import { styles } from './CreateCommunityStyles';
import DropDownPicker from 'react-native-dropdown-picker';
import Button from '../../../utils/Button';
import {useForm, Controller} from 'react-hook-form';


const CreateCommunity = ({navigation}) => {
    const [privacyError, setPrivacyError] = useState(false);
    const [spl, setSpl] = useState([
        {label: 'Public', value: '0'},
        {label: 'Private', value: '1'},
    ]);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    const { control, handleSubmit, reset, formState: { errors }} = useForm({mode: 'onBlur'});
    
    // const selectedspl=(e)=>{
    //     console.log("option",e);
    //   }


    useEffect(() =>{
        navigation.setOptions({ title:'Create Community'});
    });
    const onSubmit = async (data) => {
      if(value){
        const allData = {...data, privacy_type:value }
        setPrivacyError(false)
        navigation.navigate('CommunityUploadImage',{allData})
      }else{
        setPrivacyError(true)
      }
      
    }
    
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"#ecf2f6",padding:20}}>
      <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Community Name*</Text>
          <Controller
              control={control}        
              name="community_name"    
              rules={{
              required: true,
              }}  
              render={({field: {onChange, value, onBlur}}) => (
              <TextInput
              style={styles.input}
                  value={value}            
                  onBlur={onBlur}            
                  onChangeText={value => onChange(value)} 
              />
              )}  
          />
        {errors.community_name && <Text style={styles.errorMsg}>Community field is required!</Text>}
        <Text style={styles.bottomTitle}>Provide a community name and optional group icon</Text>
      </View>

      <View style={styles.inputContainer}>
          <Controller
              control={control}        
              name="description"    
              rules={{
              required: true,
              }}  
              render={({field: {onChange, value, onBlur}}) => (
                <TextInput
                    style={styles.inputTextArea}
                    onChangeText={onChange}
                    value={value}
                    onBlur={onBlur}  
                    placeholder="Description"
                    multiline={true}
                    maxLength={2000}
                />
              )}  
          />
        {errors.description && <Text style={styles.errorMsg}>Description field is required!</Text>}
        <Text style={styles.wordsCount}>0/2000</Text>
      </View>
        
      <View style={styles.inputContainer}>
        <DropDownPicker style={styles.customInputVerify}
            open={open}
            value={value}
            items={spl}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setSpl}
            showTickIcon={false}
            searchable={true}
            placeholder="Choose privacy*"
            listMode="MODAL"
            textStyle={{
                fontSize: 16,
                color:"#687690",
                fontFamily: 'PlusJakartaSans-Regular',
            }}
            // onChangeValue={(value) => {
            //     selectedspl(value)
            // }}

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
        {privacyError && <Text style={styles.errorMsg}>Choose Privacy is required!</Text>}
      </View>
      <Button 
        title={"Save & Continue"} 
        color={"#fff"} 
        bgColor={"#2C8892"} 
        customStyle={{position:'absolute',bottom:10,width:'100%',alignSelf:'center'}}
        onPress={handleSubmit(onSubmit)}
      />
    </SafeAreaView>
  )
}

export default CreateCommunity;