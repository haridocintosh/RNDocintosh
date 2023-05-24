import { View, Text,SafeAreaView, TextInput } from 'react-native'
import React,{useEffect,useState} from 'react'
import { styles } from './BusinessPageStyles';
import DropDownPicker from 'react-native-dropdown-picker';
import Button from '../../utils/Button';


const CreateBusinessPage = ({navigation}) => {
    const [text, setText] = useState();
    const [spl, setSpl] = useState([
        {label: 'Doctor', value: '1'},
    ]);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');

    useEffect(() =>{
        navigation.setOptions({ title: 'Create Business Page'});
    });
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"#ecf2f6",padding:20}}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Business Page*</Text>
        <TextInput
            style={styles.input}
            onChangeText={setText}
            value={text}
            placeholder="PediaSure India"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Mobile Number*</Text>
        <TextInput
            style={styles.input}
            onChangeText={setText}
            value={text}
            placeholder="1800-266-0448"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Email ID*</Text>
        <TextInput
            style={styles.input}
            onChangeText={setText}
            value={text}
            placeholder="wecare.anindia@abbott.com"
        />
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
      <Text style={styles.inputLabel}>Category*</Text>
        <DropDownPicker style={styles.customInputVerify}
            open={open}
            value={value}
            items={spl}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setSpl}
            showTickIcon={false}
            searchable={true}
            placeholder="Pediatrics"
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
        <Text style={styles.wordsCount}>0/2000</Text>
      </View>
      <Button 
        title={"Save & Continue"} 
        color={"#fff"} 
        bgColor={"#2C8892"} 
        customStyle={{position:'absolute',bottom:10,width:'100%',alignSelf:'center'}}
        onPress={() => navigation.navigate('UploadProfilePhoto')}
      />
    </SafeAreaView>
  )
}

export default CreateBusinessPage;