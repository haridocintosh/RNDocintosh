import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './RewardsStyles'

const RedeemCoins = () => {
  return (
    <View>
    <View style={styles.CoinsContainer}>
        <View style={styles.availableCoins}>
            <Text style={styles.availableCoinsTitleText}>Available DocCoins: </Text>
            <Image source={require('../../assets/dr-icon/dcoin.png')} style={styles.dcoinImag}/>
            <Text style={styles.availableCoinsText}>882</Text>
        </View>
        <Text style={styles.availableHelpText}>You can redeem you DocCoins through Voucher</Text>
    </View>

    
    <View style={styles.voucherContainer}>
        <View style={styles.vouchers}>
            <View style={styles.vouchersCoins}>
                <Image source={require('../../assets/dr-icon/dcoin.png')} style={styles.dcoinImag}/>
                <Text style={styles.CoinsText}>500</Text>
            </View>
            <Image source={require('../../assets/images/amazon.png')} style={styles.voucherImag}/>
            <Text style={styles.voucherMoney}>₹ 125</Text>
            <TouchableOpacity>
                <Text style={styles.voucherRedeem}>Redeem</Text>
            </TouchableOpacity>
            <Image source={require('../../assets/images/voucherCardImg.png')} style={styles.voucherCardImg}/>
        </View>
        
        <View style={styles.vouchers}>
            <View style={styles.vouchersCoins}>
                <Image source={require('../../assets/dr-icon/dcoin.png')} style={styles.dcoinImag}/>
                <Text style={styles.CoinsText}>500</Text>
            </View>
            <Image source={require('../../assets/images/amazon.png')} style={styles.voucherImag}/>
            <Text style={styles.voucherMoney}>₹ 125</Text>
            <TouchableOpacity>
                <Text style={styles.voucherRedeem}>Redeem</Text>
            </TouchableOpacity>
            <Image source={require('../../assets/images/voucherCardImg.png')} style={styles.voucherCardImg}/>
        </View>
        <View style={styles.vouchers}>
            <View style={styles.vouchersCoins}>
                <Image source={require('../../assets/dr-icon/dcoin.png')} style={styles.dcoinImag}/>
                <Text style={styles.CoinsText}>500</Text>
            </View>
            <Image source={require('../../assets/images/amazon.png')} style={styles.voucherImag}/>
            <Text style={styles.voucherMoney}>₹ 125</Text>
            <TouchableOpacity>
                <Text style={styles.voucherRedeem}>Redeem</Text>
            </TouchableOpacity>
            <Image source={require('../../assets/images/voucherCardImg.png')} style={styles.voucherCardImg}/>
        </View>
    </View>

    
    
    </View>
  )
}

export default RedeemCoins