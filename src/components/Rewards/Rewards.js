import { View, Text ,SafeAreaView,TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import { styles } from './RewardsStyles';
import RedeemCoins from './RedeemCoins';
import VouchersHistory from './VouchersHistory';


const Rewards = () => {
    const [btnClick, setBtnClick] = useState(true);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#ecf2f6",padding:15}}>
        <View style={styles.rewardsContainer}>
            <TouchableOpacity style={styles.rewardsBtnsConatiner} onPress={() => setBtnClick(true)}>
                <View style={btnClick ? styles.rewardsBtnActive : styles.rewardsBtnInActive}>
                   <Text style={btnClick ? styles.rewardsTextActive :styles.rewardsTextInActive}>Redeem Coins</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rewardsBtnsConatiner} onPress={() => setBtnClick(false)}>
                <View style={btnClick ? styles.rewardsBtnInActive :styles.rewardsBtnActive}>
                   <Text style={btnClick ? styles.rewardsTextInActive:styles.rewardsTextActive}>Vouchers History</Text>
                </View>
            </TouchableOpacity>
        </View>
        {btnClick ? <RedeemCoins/>:<VouchersHistory/>}
    </SafeAreaView>
  )
}

export default Rewards