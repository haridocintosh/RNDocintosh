import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text ,Image, StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
const styelcss = require('../../../assets/css/style');


const Doctor = ({handleRemove,filteredDataSource,handleLoadeMore,renderLoader}) => {
    const navigation = useNavigation();
    const profileModal = (item) => {
        navigation.navigate("UserDetailsPage",{item})
    }

    const ItemView = ({item}) => {
        return (
            <View style={styelcss.communitySubDiv}>
                <TouchableOpacity style={styelcss.userSearchContainer} onPress={() => profileModal(item)}>
                    <Image source={{uri:item?.userprofile}} style={{width:50,height:50,borderRadius:50}}/>
                    <View style={styelcss.doctorListContent}>
                        <Text style={{fontWeight:"600",fontSize:15,color:'#071B36'}}>
                            {item?.username}
                        </Text>
                        <Text style={styelcss.communittysubtxt}>{item?.speciality}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleRemove(item?.id)}>
                    <AntDesign name="close" size={20} color={"#51668A"}/>
                </TouchableOpacity>
            </View>
        );
    };

  return (
    <View style={styelcss.searchContainer} >
        <FlatList
            data={filteredDataSource}
            keyExtractor={(item, index) => index.toString()}
            renderItem={ItemView}
            showsVerticalScrollIndicator={false}
            onEndReached={() => handleLoadeMore()}
            ListFooterComponent={renderLoader}
            
        />
    </View>
  )
}

export default Doctor;
