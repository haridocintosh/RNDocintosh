import React from 'react'
import { View, Text ,Image,SafeAreaView,Alert, FlatList,TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
const styelcss = require('../../../assets/css/style');


const Doctor = ({handleRemove,filteredDataSource,handleLoadeMore,renderLoader}) => {

    const ItemView = ({item}) => {
        return (
            <View style={styelcss.communitySubDiv}>
                <View style={{display:"flex",flexDirection:"row",alignItems:"flex-start",alignItems:'center'}}>
                    <Image source={{uri:item?.userprofile}} style={{width:50,height:50,borderRadius:50}}/>
                    <View style={styelcss.doctorListContent}>
                        <Text style={{fontWeight:"600",fontSize:15,color:'#071B36'}}>
                            {item?.username}
                        </Text>
                        <Text style={styelcss.communittysubtxt}>{item?.speciality}</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => handleRemove(item?.id)}>
                    <AntDesign name="close" size={20} color={"#51668A"}/>
                </TouchableOpacity>
            </View>
        );
    };
  return (
    <SafeAreaView style={styelcss.searchContainer} >
        <FlatList
            data={filteredDataSource}
            keyExtractor={(item, index) => index.toString()}
            renderItem={ItemView}
            showsVerticalScrollIndicator={false}
            onEndReached={() => handleLoadeMore()}
            ListFooterComponent={renderLoader}
        />
    </SafeAreaView>
  )
}

export default Doctor;