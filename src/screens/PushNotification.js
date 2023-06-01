import OneSignal from 'react-native-onesignal';

export const getdeviceId = () => {
    var userId =  OneSignal.getDeviceState();
     var result =  userId.then((deviceUUid)=>{
        return deviceUUid?.userId;
    }).catch(()=>{
      console.log('Error');
    })
    return result;
  };

