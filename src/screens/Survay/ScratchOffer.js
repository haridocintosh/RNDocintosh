import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Clipboard,
  ToastAndroid,
  ImageBackground,
  Linking
} from "react-native";
import React, { useEffect, useState, useRef, useTransition } from "react";
import Svg, { Path } from "react-native-svg";
import AntDesign from "react-native-vector-icons/AntDesign";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { TapGestureHandler, ScrollView } from "react-native-gesture-handler";
import { styles } from "./SurvayStyle";


const ScratchOffer = ({ setShowOffer }) => {
  const [removeScratch, setRemoveScratch] = useState(true);
  const [fullDetails, setfullDetails] = useState(false);
  const [increaseHeight, setIncreaseHeight] = useState(30);
  const [intialHeight, setIntialHeight] = useState(1);
  const bottomSheetRef = useRef(null);
  const snapPoints = [ intialHeight,`${increaseHeight}%`];
  // const snapPoints = [1 , `30%`];

  const copyToClipboard = (code) => {
    Clipboard.setString(code);
    ToastAndroid.showWithGravity(
      "Coupon Copied!",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  };

  const handleRemoveScratch = () => {
    setRemoveScratch(false);
    bottomSheetRef.current?.expand();
    
  };

  const closeModal = () => {
    setShowOffer(false);
  };
  const fullOfferDetails = () => {
    setIncreaseHeight(50);
    setfullDetails(true);
    setIntialHeight(200)
  }

  useEffect(()=>{
    bottomSheetRef.current?.close();
  },[])
  
  return (
    <View style={styles.Scratchcontainer}>
      <View style={styles.ScratchCard}>
        <TapGestureHandler
          numberOfTaps={2}
          onActivated={() => handleRemoveScratch()}
        >
          <View>
            <View style={styles.ScratchBottomOffer}>
              <Image
                source={require("../../assets/dr-icon/tankyouCelebration.png")}
                style={styles.ScratchOffertankyouCelebration}
              />
              <TouchableOpacity onPress={() => closeModal()}>
                <AntDesign name="close" size={25} style={styles.closeIcon} />
              </TouchableOpacity>
              <Image
                source={require("../../assets/images/amazon.png")}
                style={{ marginTop: 30, width: 80, height: 30 }}
              />
              <Text style={styles.wonMoney}>₹100</Text>
              <View style={styles.coupan}>
                <Text style={styles.coupanCode}>AUG75D22</Text>
                <TouchableOpacity onPress={() => copyToClipboard("AUG75D22")}>
                  <Svg
                    width="25"
                    height="25"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <Path
                      d="M17.8411 6.54979L15.1205 4.17525C15.0256 4.09234 14.8986 4.04594 14.7671 4.04594H12.8808L12.393 2.12973C12.3615 2.00606 12.2765 1.89932 12.1575 1.83411L8.93101 0.066655C8.81806 0.00442663 8.68333 -0.0150106 8.55512 0.0116375L1.17287 1.53817C0.78087 1.61937 0.446975 1.83489 0.232712 2.14557C0.0182874 2.45593 -0.0509587 2.82443 0.0374844 3.18292L2.73931 14.111C2.82775 14.469 3.06377 14.7743 3.40351 14.9704C3.64673 15.1112 3.92234 15.1834 4.20312 15.1834C4.31436 15.1834 4.42663 15.172 4.53787 15.1491L5.69449 14.9099V16.6253C5.69449 17.3834 6.36913 18 7.19823 18H16.4963C17.3257 18 18 17.3832 18 16.6253L17.9998 6.88822C17.9998 6.76016 17.9422 6.63819 17.8411 6.54979ZM15.2635 5.62908L16.1944 6.44148H15.2635V5.62908ZM10.5118 2.05264L9.60337 2.24026L9.40746 1.44776L10.5118 2.05264ZM4.31122 14.2359C4.18695 14.2619 4.05806 14.2418 3.94956 14.1791C3.84106 14.1164 3.76581 14.0191 3.73753 13.9044L1.03588 2.97628C0.977436 2.74022 1.13993 2.50463 1.39806 2.4515L8.25552 1.03359L8.71761 2.90325C8.7476 3.02441 8.82885 3.12974 8.94386 3.19605C9.02631 3.24354 9.12109 3.26831 9.21708 3.26831C9.25479 3.26831 9.2925 3.26439 9.33003 3.25687L11.5137 2.80544L11.8296 4.04592H7.19773C6.36863 4.04592 5.69398 4.6627 5.69398 5.42089V13.9498L4.31122 14.2359ZM16.9752 16.6255C16.9752 16.8673 16.7598 17.0639 16.4953 17.0639H7.19769C6.93304 17.0639 6.71774 16.8673 6.71774 16.6255V5.4209C6.71774 5.17905 6.93302 4.98216 7.19769 4.98216H14.2394V6.90964C14.2394 7.16811 14.4684 7.37784 14.7514 7.37784H16.9756L16.9752 16.6255ZM14.6111 10.1354H9.08226C8.79961 10.1354 8.57028 9.92597 8.57028 9.66718C8.57028 9.40871 8.79944 9.19898 9.08226 9.19898H14.6111C14.894 9.19898 15.123 9.40855 15.123 9.66718C15.123 9.92597 14.894 10.1354 14.6111 10.1354ZM14.6111 12.4688H9.08226C8.79961 12.4688 8.57028 12.2594 8.57028 12.0006C8.57028 11.7418 8.79944 11.5324 9.08226 11.5324H14.6111C14.894 11.5324 15.123 11.7418 15.123 12.0006C15.123 12.2594 14.894 12.4688 14.6111 12.4688ZM14.6111 14.8023H9.08226C8.79961 14.8023 8.57028 14.5928 8.57028 14.3341C8.57028 14.0753 8.79944 13.8659 9.08226 13.8659H14.6111C14.894 13.8659 15.123 14.0753 15.123 14.3341C15.123 14.5928 14.894 14.8023 14.6111 14.8023Z"
                      fill="#51668A"
                    />
                    <Path
                      d="M4.31122 14.2359C4.18695 14.2619 4.05806 14.2418 3.94956 14.1791C3.84106 14.1164 3.76581 14.0191 3.73753 13.9044L1.03588 2.97628C0.977436 2.74022 1.13993 2.50463 1.39806 2.4515L8.25552 1.03359L8.71761 2.90325C8.7476 3.02441 8.82885 3.12974 8.94386 3.19605C9.02631 3.24354 9.12109 3.26831 9.21708 3.26831C9.25479 3.26831 9.2925 3.26439 9.33003 3.25687L11.5137 2.80544L11.8296 4.04592H7.19773C6.36863 4.04592 5.69398 4.6627 5.69398 5.42089V13.9498L4.31122 14.2359Z"
                      fill="#51668A"
                    />
                  </Svg>
                </TouchableOpacity>
              </View>
            </View>
            {removeScratch ? (
              <ImageBackground
                source={require("../../assets/images/scratchCard.png")}
                style={styles.ScratchTopImage}
              >
                <Text style={styles.tabToWin}>Double tap for your Reward</Text>
              </ImageBackground>
            ) : (
              <Text></Text>
            )}
          </View>
        </TapGestureHandler>
      </View>

      {/* -----------------------BottomSheet Design  start----------------------------------- */}
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        //  enablePanDownToClose={true}
      >
        <BottomSheetView>
          <ScrollView>
            {fullDetails ? (
              <View style={styles.SheetContentContainer}>
              <View style={styles.TermsAndCondContainer}>
                <TouchableOpacity>
                  <Text style={styles.requireStepsTitle}>Kindly find the below steps :</Text>
                  <Text style={styles.requireSteps}>
                    Login to 
                    <Text style={{color: 'blue'}}onPress={() => Linking.openURL('http://amazon.in ')}>  amazon.in </Text>
                      website.
                    </Text>
                  <Text style={styles.requireSteps}>Click on Amazon pay balance.</Text>
                  <Text style={styles.requireSteps}>Then select Add gift card.</Text>
                  <Text style={styles.requireSteps}>Enter the 14-digit alpha-numeric claim code details in the format of 4 digit- 6 digit- 4 digit.</Text>
                  <Text style={styles.requireSteps}>Then the amount will be added to the amazon wallet.</Text>
                  <Text style={styles.requireSteps}>You can purchase any product you want to buy by selecting the payment option as Amazon pay balance.</Text>
                </TouchableOpacity>
              </View>
            </View>
            ) : (
              <View style={styles.SheetContentContainer}>
                <View style={styles.TermsAndCondContainer}>
                  <TouchableOpacity onPress={()=> fullOfferDetails()}>
                    <Text style={styles.termsCondText}>Know How to Redeem your Voucher</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </ScrollView>
        </BottomSheetView>
      </BottomSheet>
      {/* ------------------------BottomSheet Design  End----------------------------------- */}
    </View>
  );
};

export default ScratchOffer;
