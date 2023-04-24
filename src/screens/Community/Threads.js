import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react';
import { styles } from './CommunityStyles';
import Card from '../../utils/Card';
import Entypo from 'react-native-vector-icons/Entypo';
 
const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquet cursus pellentesque. Mauris gravida libero nec sapien ultricies blandit. Vivamus aliquet efficitur ultrices."
const Threads = () => {

  const clock = (val) => {
    console.log(val);
  }
  return (
    <>
      <Card>
        <View style={styles.ThreadPostUserDetailsContainer}>
          <View style={styles.ThreadPostUserDetails}>
            <Image source={require('../../assets/images/CommunityPPic3.png')} style={{borderRadius:50,width:50,height:50}}/>
            <View style={styles.ThreadPostUserDetailsTextContainer}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                  <Text style={styles.ThreadPostPostName}>Dr. Milan</Text>
                  <Image source={require('../../assets/images/celTick.png')} style={{height:20,width:20,marginLeft:10}}/>
              </View>
                <Text style={styles.ThreadPostPostSplty}>Cardiologist</Text>
            </View>
          </View>
          <Entypo name='dots-three-vertical' size={25} color={'#51668A'}/>
        </View>
        <View style={styles.ThreadPostDescriptionContainer}>
          <Text style={styles.ThreadPostDescription}>
              {description}<Text onPress={() => clock("1")} style={styles.ThreadPostDescriptionViewAll}>View more</Text>
          </Text>
        </View>
      </Card>

      <Card>
        <View style={styles.ThreadPostUserDetailsContainer}>
          <View style={styles.ThreadPostUserDetails}>
            <Image source={require('../../assets/images/CommunityPPic3.png')} style={{borderRadius:50,width:50,height:50}}/>
            <View style={styles.ThreadPostUserDetailsTextContainer}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                  <Text style={styles.ThreadPostPostName}>Dr. Milan</Text>
                  <Image source={require('../../assets/images/celTick.png')} style={{height:20,width:20,marginLeft:10}}/>
              </View>
                <Text style={styles.ThreadPostPostSplty}>Cardiologist</Text>
            </View>
          </View>
          <Entypo name='dots-three-vertical' size={25} color={'#51668A'}/>
        </View>
        <View style={styles.ThreadPostDescriptionContainer}>
          <Text style={styles.ThreadPostDescription}>
              {description}<Text onPress={() => clock("1")} style={styles.ThreadPostDescriptionViewAll}>View more</Text>
          </Text>
        </View>
      </Card>

      <Card>
        <View style={styles.ThreadPostUserDetailsContainer}>
          <View style={styles.ThreadPostUserDetails}>
            <Image source={require('../../assets/images/CommunityPPic3.png')} style={{borderRadius:50,width:50,height:50}}/>
            <View style={styles.ThreadPostUserDetailsTextContainer}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                  <Text style={styles.ThreadPostPostName}>Dr. Milan</Text>
                  <Image source={require('../../assets/images/celTick.png')} style={{height:20,width:20,marginLeft:10}}/>
              </View>
                <Text style={styles.ThreadPostPostSplty}>Cardiologist</Text>
            </View>
          </View>
          <Entypo name='dots-three-vertical' size={25} color={'#51668A'}/>
        </View>
        <View style={styles.ThreadPostDescriptionContainer}>
          <Text style={styles.ThreadPostDescription}>
              {description}<Text onPress={() => clock("1")} style={styles.ThreadPostDescriptionViewAll}>View more</Text>
          </Text>
        </View>
      </Card>
      
      <Card>
        <View style={styles.ThreadPostUserDetailsContainer}>
          <View style={styles.ThreadPostUserDetails}>
            <Image source={require('../../assets/images/CommunityPPic3.png')} style={{borderRadius:50,width:50,height:50}}/>
            <View style={styles.ThreadPostUserDetailsTextContainer}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                  <Text style={styles.ThreadPostPostName}>Dr. Milan</Text>
                  <Image source={require('../../assets/images/celTick.png')} style={{height:20,width:20,marginLeft:10}}/>
              </View>
                <Text style={styles.ThreadPostPostSplty}>Cardiologist</Text>
            </View>
          </View>
          <Entypo name='dots-three-vertical' size={25} color={'#51668A'}/>
        </View>
        <View style={styles.ThreadPostDescriptionContainer}>
          <Text style={styles.ThreadPostDescription}>
              {description}<Text onPress={() => clock("1")} style={styles.ThreadPostDescriptionViewAll}>View more</Text>
          </Text>
        </View>
      </Card>
      <Card>
        <View style={styles.ThreadPostUserDetailsContainer}>
          <View style={styles.ThreadPostUserDetails}>
            <Image source={require('../../assets/images/CommunityPPic3.png')} style={{borderRadius:50,width:50,height:50}}/>
            <View style={styles.ThreadPostUserDetailsTextContainer}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                  <Text style={styles.ThreadPostPostName}>Dr. Milan</Text>
                  <Image source={require('../../assets/images/celTick.png')} style={{height:20,width:20,marginLeft:10}}/>
              </View>
                <Text style={styles.ThreadPostPostSplty}>Cardiologist</Text>
            </View>
          </View>
          <Entypo name='dots-three-vertical' size={25} color={'#51668A'}/>
        </View>
        <View style={styles.ThreadPostDescriptionContainer}>
          <Text style={styles.ThreadPostDescription}>
              {description}<Text onPress={() => clock("1")} style={styles.ThreadPostDescriptionViewAll}>View more</Text>
          </Text>
        </View>
      </Card>
      <Card>
        <View style={styles.ThreadPostUserDetailsContainer}>
          <View style={styles.ThreadPostUserDetails}>
            <Image source={require('../../assets/images/CommunityPPic3.png')} style={{borderRadius:50,width:50,height:50}}/>
            <View style={styles.ThreadPostUserDetailsTextContainer}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                  <Text style={styles.ThreadPostPostName}>Dr. Milan</Text>
                  <Image source={require('../../assets/images/celTick.png')} style={{height:20,width:20,marginLeft:10}}/>
              </View>
                <Text style={styles.ThreadPostPostSplty}>Cardiologist</Text>
            </View>
          </View>
          <Entypo name='dots-three-vertical' size={25} color={'#51668A'}/>
        </View>
        <View style={styles.ThreadPostDescriptionContainer}>
          <Text style={styles.ThreadPostDescription}>
              {description}<Text onPress={() => clock("1")} style={styles.ThreadPostDescriptionViewAll}>View more</Text>
          </Text>
        </View>
      </Card>
      <Card>
        <View style={styles.ThreadPostUserDetailsContainer}>
          <View style={styles.ThreadPostUserDetails}>
            <Image source={require('../../assets/images/CommunityPPic3.png')} style={{borderRadius:50,width:50,height:50}}/>
            <View style={styles.ThreadPostUserDetailsTextContainer}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                  <Text style={styles.ThreadPostPostName}>Dr. Milan</Text>
                  <Image source={require('../../assets/images/celTick.png')} style={{height:20,width:20,marginLeft:10}}/>
              </View>
                <Text style={styles.ThreadPostPostSplty}>Cardiologist</Text>
            </View>
          </View>
          <Entypo name='dots-three-vertical' size={25} color={'#51668A'}/>
        </View>
        <View style={styles.ThreadPostDescriptionContainer}>
          <Text style={styles.ThreadPostDescription}>
              {description}<Text onPress={() => clock("1")} style={styles.ThreadPostDescriptionViewAll}>View more</Text>
          </Text>
        </View>
      </Card>
      <Card>
        <View style={styles.ThreadPostUserDetailsContainer}>
          <View style={styles.ThreadPostUserDetails}>
            <Image source={require('../../assets/images/CommunityPPic3.png')} style={{borderRadius:50,width:50,height:50}}/>
            <View style={styles.ThreadPostUserDetailsTextContainer}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                  <Text style={styles.ThreadPostPostName}>Dr. Milan</Text>
                  <Image source={require('../../assets/images/celTick.png')} style={{height:20,width:20,marginLeft:10}}/>
              </View>
                <Text style={styles.ThreadPostPostSplty}>Cardiologist</Text>
            </View>
          </View>
          <Entypo name='dots-three-vertical' size={25} color={'#51668A'}/>
        </View>
        <View style={styles.ThreadPostDescriptionContainer}>
          <Text style={styles.ThreadPostDescription}>
              {description}<Text onPress={() => clock("1")} style={styles.ThreadPostDescriptionViewAll}>View more</Text>
          </Text>
        </View>
      </Card>
      <Card>
        <View style={styles.ThreadPostUserDetailsContainer}>
          <View style={styles.ThreadPostUserDetails}>
            <Image source={require('../../assets/images/CommunityPPic3.png')} style={{borderRadius:50,width:50,height:50}}/>
            <View style={styles.ThreadPostUserDetailsTextContainer}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                  <Text style={styles.ThreadPostPostName}>Dr. Milan</Text>
                  <Image source={require('../../assets/images/celTick.png')} style={{height:20,width:20,marginLeft:10}}/>
              </View>
                <Text style={styles.ThreadPostPostSplty}>Cardiologist</Text>
            </View>
          </View>
          <Entypo name='dots-three-vertical' size={25} color={'#51668A'}/>
        </View>
        <View style={styles.ThreadPostDescriptionContainer}>
          <Text style={styles.ThreadPostDescription}>
              {description}<Text onPress={() => clock("1")} style={styles.ThreadPostDescriptionViewAll}>View more</Text>
          </Text>
        </View>
      </Card>
      <Card>
        <View style={styles.ThreadPostUserDetailsContainer}>
          <View style={styles.ThreadPostUserDetails}>
            <Image source={require('../../assets/images/CommunityPPic3.png')} style={{borderRadius:50,width:50,height:50}}/>
            <View style={styles.ThreadPostUserDetailsTextContainer}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                  <Text style={styles.ThreadPostPostName}>Dr. Milan</Text>
                  <Image source={require('../../assets/images/celTick.png')} style={{height:20,width:20,marginLeft:10}}/>
              </View>
                <Text style={styles.ThreadPostPostSplty}>Cardiologist</Text>
            </View>
          </View>
          <Entypo name='dots-three-vertical' size={25} color={'#51668A'}/>
        </View>
        <View style={styles.ThreadPostDescriptionContainer}>
          <Text style={styles.ThreadPostDescription}>
              {description}<Text onPress={() => clock("1")} style={styles.ThreadPostDescriptionViewAll}>View more</Text>
          </Text>
        </View>
      </Card>
        
    </>
  )
}

export default Threads