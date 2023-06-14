import { View, Text,SafeAreaView, TextInput } from 'react-native'
import React,{useEffect,useState} from 'react'
import { styles } from './CreateCommunityStyles';
import DropDownPicker from 'react-native-dropdown-picker';
import Button from '../../../utils/Button';


const CreateCommunity = ({navigation}) => {
    const [text, setText] = useState();
    const [spl, setSpl] = useState([
        {label: 'Private', value: '1'},
        {label: 'Public', value: '2'},
    ]);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    
    const selectedspl=(e)=>{
        console.log("option",e);
      }

    useEffect(() =>{
        navigation.setOptions({ title:'Create Community'});
    });
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"#ecf2f6",padding:20}}>
      <View style={styles.inputContainer}>
        
        <Text style={styles.inputLabel}>Community Name*</Text>
        <TextInput
            style={styles.input}
            onChangeText={setText}
            value={text}
            // placeholder="PediaSure India"
        />
        <Text style={styles.bottomTitle}>Provide a community name and optional group icon</Text>
      </View>
      
      <View style={styles.inputContainer}>
        <TextInput
            style={styles.inputTextArea}
            onChangeText={setText}
            value={text}
            placeholder="Description"
            multiline={true}
            maxLength={2000}
        />
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
            onChangeValue={(value) => {
                selectedspl(value)
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
      <Button 
        title={"Save & Continue"} 
        color={"#fff"} 
        bgColor={"#2C8892"} 
        customStyle={{position:'absolute',bottom:10,width:'100%',alignSelf:'center'}}
        onPress={() => navigation.navigate('CommunityUploadImage')}
      />
    </SafeAreaView>
  )
}

export default CreateCommunity;