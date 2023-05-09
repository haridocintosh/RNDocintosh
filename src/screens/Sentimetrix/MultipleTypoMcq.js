import { View, Text, SafeAreaView ,ScrollView,TextInput} from 'react-native'
import React,{useState,useEffect} from 'react';
import { styles } from './SentimetrixStyles';
import {useForm, Controller} from 'react-hook-form';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MultipleTypoMcq = ({setLiftUpData, error, navigation}) => {
  // const [mainMessage,] = useState();
  const { control, handleSubmit, reset, watch, formState: { errors }} = useForm({mode: 'onBlur'});
  
  const mainMessage = watch("main_message");
  const otherMessage = watch("other_message");
  const anyOtherMessage = watch("any_other_message");
  const allData = [
    {main:mainMessage,key:1,x_val:mainMessage},
    {main:mainMessage,key:2,x_val:otherMessage},
    {main:mainMessage,key:3,x_val:anyOtherMessage},
  ];


  useEffect(() => {
    setLiftUpData(allData);
  },[mainMessage,otherMessage,anyOtherMessage]);

  // const handleOnChange = (data) => {
  //   setLiftUpData(mainMessage,otherMessage,anyOtherMessage)
  // }

  return (
    <SafeAreaView style={{ backgroundColor: "#ecf2f6", flex: 1 }}>
      <ScrollView
        keyboardShouldPersistTaps={"handled"}
        showsVerticalScrollIndicator={false}
        nestedScrollEnable={true}
      >
        <View style={{ paddingHorizontal: 15 }}>
          <View>
            <Text style={styles.typoHeadings}>Main Message</Text>
            <Controller
                control={control}        
                name="main_message"     
                // defaultValue={passAwardData?.award}
                rules={{
                required: true,
                }}  
                render={({field: {onChange, value, onBlur}}) => (
                <TextInput
                    value={value}    
                    style={styles.inputText}        
                    onBlur={onBlur}
                    placeholder="Type Here"            
                    onChangeText={value => onChange(value)} 
                    maxLength={200}
                />
              )}  
             /> 
             {errors.main_message && <Text style={styles.errorMsg}>This field is required!</Text>}
            
            <View style={styles.limitationTextContainer}>
              <Text style={[styles.limitationText]}>
                {mainMessage ? mainMessage.length : 0}/200
              </Text>
            </View>
          </View>
        </View>

        <View style={{ padding: 15 }}>
          <View>
            <Text style={styles.typoHeadings}>Other Message</Text>
            <Controller
                control={control}        
                name="other_message"     
                // defaultValue={passAwardData?.award}
                rules={{
                required: true,
                }}  
                render={({field: {onChange, value, onBlur}}) => (
                <TextInput
                    value={value}    
                    style={styles.inputText}        
                    onBlur={onBlur}
                    placeholder="Type Here"            
                    onChangeText={value => onChange(value)} 
                    maxLength={200}
                />
                )}  
            />
            {errors.other_message && <Text style={styles.errorMsg}>This field is required!</Text>}
            <View style={styles.limitationTextContainer}>
              <Text style={[styles.limitationText]}>
                {otherMessage ? otherMessage.length : 0}/200
              </Text>
            </View>
          </View>
        </View>

        <View style={{ padding: 15 }}>
          <View>
            <Text style={styles.typoHeadings}>Any other message that you would like to mention</Text>
            <Controller
                control={control}        
                name="any_other_message"     
                // defaultValue={passAwardData?.award}
                rules={{
                required: true,
                }}  
                render={({field: {onChange, value, onBlur}}) => (
                <TextInput
                    value={value}    
                    style={styles.inputText}        
                    onBlur={onBlur}
                    placeholder="Type Here"            
                    onChangeText={value => onChange(value)} 
                    maxLength={200}
                />
                )}  
            />
            {errors.any_other_message && <Text style={styles.errorMsg}>This field is required!</Text>}
            <View style={styles.limitationTextContainer}>
              <Text style={[styles.limitationText]}>
                {anyOtherMessage ? anyOtherMessage.length : 0}/200
              </Text>
            </View>
          </View>
        </View>
        <Text style={styles.errorMsg}>
          {error && <><Ionicons name="warning" size={15} color="#D01212"/> {error}</>}
        </Text>
     </ScrollView>
    </SafeAreaView>
  )
}

export default MultipleTypoMcq