import { View, Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Image,} from 'react-native'
import React from 'react'

const Congratulation = () => {
return (
<SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems:"center",paddingTop:120}}>
    <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnable={true} style={{paddingHorizontal: 25}}>
    <View>
        <Text style={styles.congratulationText}>Congratulations!</Text>
        <Text style={styles.congratulationpara}>You are a part of the Docintosh family.</Text>
        <Image source={require('../assets/images/congratulation.png')} style={{marginHorizontal: 50,marginVertical: 50}} />
        <Text style={styles.congratulationparat}>Profile verification can take upto 48 hrs. But that will not stop you from enjoying the community</Text>
    </View>
    </ScrollView>
</SafeAreaView>
  )
}
const styles = StyleSheet.create({
    congratulationText:{
        fontSize:24,
        fontWeight:"600",
        color:"#071B36",
        textAlign:"center"
    },
    congratulationpara:{
        fontSize:14,
        fontWeight:"400",
        color:"#687690" ,
        paddingTop:24,
        textAlign:"center"

    },
    congratulationparat:{
        fontSize:14,
        fontWeight:"400",
        color:"#687690" ,
        paddingTop:24,
        width:320,
        lineHeight:20,
        textAlign:"center",
        paddingHorizontal:23


    }
})
export default Congratulation