import { View, Text,SafeAreaView ,Image,ScrollView} from 'react-native'
import React from 'react'
import { styles } from './LeaderboardStyles'

const EarnDocCoins = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor:"#ecf2f6",padding:15}}>
        <View style={styles.TotalBalanceContainer}>
            <View style={styles.DocCoinContainer}>
                <Image source={require('../../assets/dr-icon/dcoin.png')} style={styles.TotalBalanceDcoinImag}/>
                <View style={styles.totalCoinContainer}>
                    <Text style={styles.totalCoinNumber}>2500</Text>
                    <Text style={styles.totalBalanceText}>Total Balance</Text>
                </View>
            </View>
            <Text style={styles.ReedemText}>Redeem</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnable={true} style={{paddingVertical:10}}>


        <View style={styles.activityBonus}>
            <View style={styles.activityBonuslhs}>
                <Text style={styles.activityBonusTitle}>Welcome Bonus</Text>
                <Text style={styles.activityBonusSubTitle}>Per like 10 DocCoins</Text>
            </View>
            <View style={styles.activityBonusrhs}>
                <Image source={require('../../assets/dr-icon/dcoin.png')} style={styles.dcoinImag}/>
                <Text style={styles.howmuchYouEarn}>25</Text>
            </View>
        </View>

        <View style={styles.activityBonus}>
            <View>
                <Text style={styles.activityBonusTitle}>Liked a Post</Text>
                <Text style={styles.activityBonusSubTitle}>Per like 10 DocCoins</Text>
            </View>
            <View style={styles.activityBonusrhs}>
                <Image source={require('../../assets/dr-icon/dcoin.png')} style={styles.dcoinImag}/>
                <Text style={styles.howmuchYouEarn}>25</Text>
            </View>
        </View>

        <View style={styles.activityBonus}>
            <View>
                <Text style={styles.activityBonusTitle}>Commented on a Post</Text>
                <Text style={styles.activityBonusSubTitle}>Per Commented 10 DocCoins</Text>
            </View>
            <View style={styles.activityBonusrhs}>
                <Image source={require('../../assets/dr-icon/dcoin.png')} style={styles.dcoinImag}/>
                <Text style={styles.howmuchYouEarn}>25</Text>
            </View>
        </View>

        <View style={styles.activityBonus}>
            <View>
                <Text style={styles.activityBonusTitle}>Shared on a Post</Text>
                <Text style={styles.activityBonusSubTitle}>Per Share 10 DocCoins</Text>
            </View>
            <View style={styles.activityBonusrhs}>
                <Image source={require('../../assets/dr-icon/dcoin.png')} style={styles.dcoinImag}/>
                <Text style={styles.howmuchYouEarn}>25</Text>
            </View>
        </View>

        <View style={styles.activityBonus}>
            <View>
                <Text style={styles.activityBonusTitle}>Invite</Text>
                <Text style={styles.activityBonusSubTitle}>Per Invite 10 DocCoins</Text>
            </View>
            <View style={styles.activityBonusrhs}>
                <Text style={styles.ActivityRedirect}>Invite</Text>
                <Image source={require('../../assets/dr-icon/dcoin.png')} style={styles.dcoinImag}/>
                <Text style={styles.howmuchYouEarn}>25</Text>
            </View>
        </View>

        <View style={styles.activityBonus}>
            <View>
                <Text style={styles.activityBonusTitle}>Create Post</Text>
                <Text style={styles.activityBonusSubTitle}>Per Create Post 10 DocCoins</Text>
            </View>
            <View style={styles.activityBonusrhs}>
                <Text style={styles.ActivityRedirect}>Try Now</Text>
            </View>
        </View>

        <View style={styles.activityBonus}>
            <View>
                <Text style={styles.activityBonusTitle}>Quiz</Text>
                <Text style={styles.activityBonusSubTitle}>Per Quiz 10 DocCoins</Text>
            </View>
            <View style={styles.activityBonusrhs}>
                <Text style={styles.ActivityRedirect}>Try Now</Text>
            </View>
        </View>

        <View style={styles.activityBonus}>
            <View>
                <Text style={styles.activityBonusTitle}>Survey</Text>
                <Text style={styles.activityBonusSubTitle}>Per Survey 10 DocCoins</Text>
            </View>
            <View style={styles.activityBonusrhs}>
                <Text style={styles.ActivityRedirect}>Try Now</Text>
            </View>
        </View>

        <View style={styles.activityBonus}>
            <View>
                <Text style={styles.activityBonusTitle}>Sentimetrix</Text>
                <Text style={styles.activityBonusSubTitle}>Per Sentimetrix 10 DocCoins</Text>
            </View>
            <View style={styles.activityBonusrhs}>
                <Text style={styles.ActivityRedirect}>Try Now</Text>
            </View>
        </View>
</ScrollView>

    </SafeAreaView>
  )
}

export default EarnDocCoins