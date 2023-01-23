import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './RewardsStyles'

const VouchersHistory = () => {
  return (
    <View >
      <View style={styles.VoucherContainer}>
        <Image source={require('../../assets/dr-icon/coupon1.png')} style={styles.coupon1}/>
        <View style={{}}>
            <Text style={styles.VoucherCount}>4</Text>
            <Text style={styles.VoucherBalance}>Total Balance</Text>
        </View>
    </View>

    <View style={styles.voucherContainer}>
        <TouchableOpacity style={styles.vouchersHistory}>
            <Image source={require('../../assets/dr-icon/giftBox.png')} style={styles.coupon1}/>
            <Text style={styles.voucherMoney}>₹ 100</Text>
            <Text style={styles.voucherTitle}>Completed a Quiz</Text>
            <Text style={styles.voucherDescription}>Received on 8 jan 2024</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.vouchersHistory}>
            <Image source={require('../../assets/dr-icon/giftBox.png')} style={styles.coupon1}/>
            <Text style={styles.voucherMoney}>₹ 100</Text>
            <Text style={styles.voucherTitle}>Completed a Quiz</Text>
            <Text style={styles.voucherDescription}>Received on 8 jan 2024</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.vouchersHistory}>
            <Image source={require('../../assets/dr-icon/giftBox.png')} style={styles.coupon1}/>
            <Text style={styles.voucherMoney}>₹ 100</Text>
            <Text style={styles.voucherTitle}>Completed a Quiz</Text>
            <Text style={styles.voucherDescription}>Received on 8 jan 2024</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.vouchersHistory}>
            <Image source={require('../../assets/dr-icon/giftBox.png')} style={styles.coupon1}/>
            <Text style={styles.voucherMoney}>₹ 100</Text>
            <Text style={styles.voucherTitle}>Completed a Quiz</Text>
            <Text style={styles.voucherDescription}>Received on 8 jan 2024</Text>
        </TouchableOpacity>
    </View>
    </View>
  )
}

export default VouchersHistory