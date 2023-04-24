import { View, Text,SafeAreaView,Image,Switch} from 'react-native'
import React,{ useEffect, useState } from 'react';
import { styles } from './ProfileNPrivacySettingsStyles';
import { getLocalData } from '../../../apis/GetLocalData';
import { privacySettingsAPI } from './ProfileNPrivacySlice';
import { useDispatch } from 'react-redux';

const PPData = [
  {
    name:'Email-ID',
    source:require('../../../assets/dr-icon/Ic_Email.png'),
    isEnable:false,
    column : "email",
  },
  {
    name:'Following list',
    source:require('../../../assets/dr-icon/Ic_Following.png'),
    isEnable:true,
    column : "following",
  },
  {
    name:'Followers list',
    source:require('../../../assets/dr-icon/Ic_Followers.png'),
    isEnable:true,
    column : "follower",
  },
  {
    name:'Earned Doc-Coins',
    source:require('../../../assets/dr-icon/Ic_Coin.png'),
    isEnable:true,
    column : "earned_coins",
  },
  {
    name:'Qualification',
    source:require('../../../assets/dr-icon/Ic_Qualification.png'),
    isEnable:true,
    column : "qualification",
  },
  {
    name:'Work Experience',
    source:require('../../../assets/dr-icon/Ic_Work_Experience.png'),
    isEnable:true,
    column : "work_exp",
  },
  {
    name:'Award',
    source:require('../../../assets/dr-icon/Ic_Award.png'),
    isEnable:false,
    column : "award",
  },
  {
    name:'Paper Published',
    source:require('../../../assets/dr-icon/Ic_Paper_Published.png'),
    isEnable:true,
    column : "paper_published",
  },
  {
    name:'Achievement',
    source:require('../../../assets/dr-icon/Ic_Achievement.png'),
    isEnable:false,
    column : "achievement",
  },
  {
    name:'Special Skills',
    source:require('../../../assets/dr-icon/Ic_Skills.png'),
    isEnable:true,
    column : "special_skills",
  }
]

const ProfileNPrivacySettings = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [ppData, setPPData] = useState(PPData);

  const dispatch = useDispatch();


  useEffect(() => {
    navigation.setOptions({ title: 'Profile & Privacy Settings'});
  },[])

  const handleSelect =  (val,bool) => {
    getLocalData('USER_INFO').then( async (res) => {
      const resData = res?.data;
      // console.log(resData.id);
      const result = ppData?.map(data => data.column == val ? {
        ...data,
        isEnable:!data.isEnable
      }: data)
      console.log(val,bool);
      setPPData(result);
      const postData = {id:resData?.id,column:val,value:bool? 0:1}
      console.log(postData);
      const resetResult = await dispatch(privacySettingsAPI(postData));
      console.log("resetResult",resetResult);
    })
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ecf2f6",padding:15 }}>
      
      {ppData?.map((data,index) => {
        return(
          <View style={styles.mainContainer} key={index}>
            <View style={styles.IconContainer}>
              <Image source={data?.source} style={styles.icons}/>
              <Text style={styles.ppNames}>{data.name}</Text>
            </View>
            <Switch
                trackColor={{false: '#DDDDDD', true: '#2C8892'}}
                thumbColor={isEnabled ? '#DDDDDD' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onChange={() => handleSelect(data.column,data.isEnable)}
                onValueChange={setIsEnabled}
                value={data.isEnable}
            />
          </View>
        )
      })}
      {/* <View style={styles.mainContainer}>
        <View style={styles.IconContainer}>
          <Image source={require('../../../assets/dr-icon/Ic_Email.png')} style={styles.icons}/>
          <Text style={styles.ppNames}>Email-ID</Text>
        </View>
        <Switch
            trackColor={{false: '#DDDDDD', true: '#2C8892'}}
            thumbColor={isEnabled ? '#DDDDDD' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onChange={() => handleSelect('email')}
            onValueChange={setIsEnabled}
            value={isEnabled}
        />
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.IconContainer}>
          <Image source={require('../../../assets/dr-icon/Ic_Following.png')} style={styles.icons}/>
          <Text style={styles.ppNames} >Following list</Text>
        </View>
        <Switch
            trackColor={{false: '#DDDDDD', true: '#2C8892'}}
            thumbColor={isEnabled ? '#DDDDDD' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => handleSelect('following')}
            value={isEnabled}
        />
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.IconContainer}>
        <Image source={require('../../../assets/dr-icon/Ic_Followers.png')} style={styles.icons}/>
          <Text style={styles.ppNames} >Followers list</Text>
        </View>
        <Switch
            trackColor={{false: '#DDDDDD', true: '#2C8892'}}
            thumbColor={isEnabled ? '#DDDDDD' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => handleSelect('follower')}
            value={isEnabled}
        />
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.IconContainer}>
        <Image source={require('../../../assets/dr-icon/Ic_Coin.png')} style={styles.icons}/>
          <Text style={styles.ppNames} >Earned Doc-Coins</Text>
        </View>
        <Switch
            trackColor={{false: '#DDDDDD', true: '#2C8892'}}
            thumbColor={isEnabled ? '#DDDDDD' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => handleSelect('earned_coins')}
            value={isEnabled}
        />
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.IconContainer}>
        <Image source={require('../../../assets/dr-icon/Ic_Qualification.png')} style={styles.icons}/>
          <Text style={styles.ppNames} >Qualification</Text>
        </View>
        <Switch
            trackColor={{false: '#DDDDDD', true: '#2C8892'}}
            thumbColor={isEnabled ? '#DDDDDD' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onChange={() => handleSelect('qualification')}
            onValueChange={setIsEnabled}
            value={isEnabled}
        />
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.IconContainer}>
        <Image source={require('../../../assets/dr-icon/Ic_Work_Experience.png')} style={styles.icons}/>
          <Text style={styles.ppNames} >Work Experience</Text>
        </View>
        <Switch
            trackColor={{false: '#DDDDDD', true: '#2C8892'}}
            thumbColor={isEnabled ? '#DDDDDD' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => handleSelect('work_exp')}
            value={isEnabled}
        />
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.IconContainer}>
        <Image source={require('../../../assets/dr-icon/Ic_Award.png')} style={styles.icons}/>
          <Text style={styles.ppNames} >Award</Text>
        </View>
        <Switch
            trackColor={{false: '#DDDDDD', true: '#2C8892'}}
            thumbColor={isEnabled ? '#DDDDDD' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => handleSelect('award')}
            value={isEnabled}
        />
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.IconContainer}>
        <Image source={require('../../../assets/dr-icon/Ic_Paper_Published.png')} style={styles.icons}/>
          <Text style={styles.ppNames} >Paper Published</Text>
        </View>
        <Switch
            trackColor={{false: '#DDDDDD', true: '#2C8892'}}
            thumbColor={isEnabled ? '#DDDDDD' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => handleSelect('paper_published')}
            value={isEnabled}
        />
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.IconContainer}>
        <Image source={require('../../../assets/dr-icon/Ic_Achievement.png')} style={styles.icons}/>
          <Text style={styles.ppNames} >Achievement</Text>
        </View>
        <Switch
            trackColor={{false: '#DDDDDD', true: '#2C8892'}}
            thumbColor={isEnabled ? '#DDDDDD' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => handleSelect('achievement')}
            value={isEnabled}
        />
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.IconContainer}>
        <Image source={require('../../../assets/dr-icon/Ic_Skills.png')} style={styles.icons}/>
          <Text style={styles.ppNames} >Special Skills</Text>
        </View>
        <Switch
            trackColor={{false: '#DDDDDD', true: '#2C8892'}}
            thumbColor={isEnabled ? '#DDDDDD' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => handleSelect('special_skills')}
            value={isEnabled}
        />
      </View> */}
    </SafeAreaView>
  )
}

export default ProfileNPrivacySettings