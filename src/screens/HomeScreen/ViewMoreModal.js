import React,{useEffect, useState} from 'react';
import { View, Text ,TextInput,Pressable,StyleSheet,ScrollView,useWindowDimensions} from 'react-native';
import Modal from "react-native-modal";
import RenderHtml from 'react-native-render-html';
import { Icon } from '../../navigation/ReuseLogics';


const ViewMoreModal = ({loadMoreModal,setLoadMoreModal,description}) => {
    const {width} = useWindowDimensions;
    const mixedStyle = {
        body:{
            color:'#51668A',
            fontFamily:"Inter-Regular",
            fontSize:15,
            width:'95%'
        },
      }
  
    return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={loadMoreModal}>
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Pressable style={styles.closebtn} onPress={() => setLoadMoreModal(false)}>
                    {Icon("AntDesign", "close",22,"#51668A")}
                </Pressable>
                <ScrollView 
                    showsVerticalScrollIndicator={false} 
                    showsHorizontalScrollIndicator={false}
                    style={{paddingBottom:25}}
                >
                    <RenderHtml
                        width={width}
                        source={{html : description}}
                        tagsStyles={mixedStyle}
                    />
                </ScrollView>
            </View>
        </View>
    </Modal>
  )
}

export default ViewMoreModal;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },

    modalView: {
        margin:20,
        backgroundColor: 'white',
        borderRadius: 15,
        paddingHorizontal:15,
        paddingVertical:25,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {width:0,height:2},
        shadowOpacity: 0.30,
        shadowRadius: 4,
        elevation: 10,
        width:'100%',
        maxHeight:500,
    },

    closebtn: {
        backgroundColor: "#FFFF",
        alignSelf:'flex-end',
        marginTop:-10,
        paddingBottom:10
    },
})
