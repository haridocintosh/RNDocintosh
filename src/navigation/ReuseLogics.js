import React from 'react';
import { Text,PermissionsAndroid, Linking,Alert } from 'react-native';
const ImagePicker = require('react-native-image-picker');
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



export const showHeaderItem = {
      headerShown: true,  
      headerStyle: { backgroundColor: '#071B36'},
      headerTintColor: '#fff',
};
export const showHeaderItemBackless = {
      headerShown: true,  
      headerStyle: { backgroundColor: '#071B36'},
      headerTintColor: '#fff',
      headerLeft: () => <Text/>
};

export const Icon = (provider, name, size, color) => {
    if(provider == "Ionicons"){
      return <Ionicons name={name} size={size} color={color}/>
    }else if(provider == "Fontisto"){
      return <Fontisto name={name} size={size} color={color}/>
    }else if(provider == "MaterialCommunityIcons"){
      return <MaterialCommunityIcons name={name} size={size} color={color}/>
    }else if(provider == "Octicons"){
      return <Octicons name={name} size={size} color={color}/>
    }else if(provider == "AntDesign"){
      return <AntDesign name={name} size={size} color={color}/>
    }else if(provider == "Feather"){
      return <Feather name={name} size={size} color={color}/>
    }else if(provider == "Foundation"){
      return <Foundation name={name} size={size} color={color}/>
    }else if(provider == "Entypo"){
      return <Entypo name={name} size={size} color={color}/>
    }else if(provider == "MaterialIcons"){
      return <MaterialIcons name={name} size={size} color={color}/>
    }else if(provider == "FontAwesome5"){
      return <FontAwesome5 name={name} size={size} color={color}/>
    }else if(provider == "FontAwesome"){
      return <FontAwesome name={name} size={size} color={color}/>
    }
}

const openSettings = () => {
      Linking.openSettings();
};

export const PickImage = async (arg) => {
      let options = {
            storageOptions: {
              skipBackup: true,
              path: 'images',
            },
            selectionLimit:3,
            mediaType: 'photo',
          };
      if(arg==1){
            const granted = await PermissionsAndroid.request(
                  PermissionsAndroid.PERMISSIONS.CAMERA,
                  {
                        title: "App Camera Permission",
                        message:"App needs access to your camera ",
                        buttonNeutral: "Ask Me Later",
                        buttonNegative: "Cancel",
                        buttonPositive: "OK"
                  }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                  const result = ImagePicker.launchCamera(options, (response) => {
                      //  setloader(true);
                        if(response.didCancel) {
                              console.log('User cancelled image picker');
                              //setloader(false);
                        } else if (response.error) {
                              return response.error;
                        } else if (response.customButton) {
                              return response.customButton;
                        } else {
                        const result  = JSON.stringify(response);
                          return result;
                        }
                    });
                    return result;
            } else {
                  console.log("Camera permission denied");
            }
      }else{
            const granted = await PermissionsAndroid.requestMultiple([
                  PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
                  PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
             ],
                  {
                        title: "App Library Permission",
                        message:"App needs access to your Library ",
                        buttonNeutral: "Ask Me Later",
                        buttonNegative: "Cancel",
                        buttonPositive: "OK"
                  }
            );
            if (granted["android.permission.READ_MEDIA_IMAGES"] || 
            granted["android.permission.WRITE_EXTERNAL_STORAGE"] === 
            PermissionsAndroid.RESULTS.GRANTED) {
                  const result = ImagePicker.launchImageLibrary(options, (response) => {
                       // setloader(true);
                        if(response.didCancel) {
                              console.log('User cancelled image picker');
                         //     setloader(false)
                        } else if (response.error) {
                              return response.error;
                        } else if (response.customButton) {
                              return response.customButton;
                        } else {
                        const result  = JSON.stringify(response);
                          return result;
                        }
                  });
                  return result;
            } else {
                  console.log("Camera permission denied");
            }
      }
}
export const PickImageAll = async (setloader) => {
      const granted = await PermissionsAndroid.requestMultiple([
            PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
       ],
            {
                  title: "App Library Permission",
                  message:"App needs access to your Library ",
                  buttonNeutral: "Ask Me Later",
                  buttonNegative: "Cancel",
                  buttonPositive: "OK"
            }
      );
      // console.log("++++",
      // granted["android.permission.READ_MEDIA_IMAGES"], "-------", 
      // granted["android.permission.WRITE_EXTERNAL_STORAGE"], "-------", 
      // PermissionsAndroid.RESULTS.GRANTED);
      if (granted["android.permission.READ_MEDIA_IMAGES"] || 
      granted["android.permission.WRITE_EXTERNAL_STORAGE"] === 
      PermissionsAndroid.RESULTS.GRANTED) {
            let options = {
              storageOptions: {
                skipBackup: true,
                path: 'images',
              },
              multiple: true,
              selectionLimit:3,
              mediaType: 'photo',
              quality: 0.7,
            };
            const result = ImagePicker.launchImageLibrary(options, (response) => {
                  setloader(true);
                  if(response.didCancel) {
                        console.log('User cancelled image picker');
                        setloader(false);
                  } else if (response.error) {
                        return response.error;
                  } else if (response.customButton) {
                        return response.customButton;
                  } else {
                  const result  = JSON.stringify(response);
                    return result;
                  }
            });
            return result;
      } else if(granted === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN){
            console.log('Storage Permission Denied with Never Ask Again.');
            Alert.alert(
            'Storage Permission Required',
            'App needs access to your storage to read files. Please go to app settings and grant permission.',
                  [
                        { text: 'Cancel', style: 'cancel' },
                        { text: 'Open Settings', onPress: openSettings },
                  ],
            );
      } else {
            console.log("Camera permission denied");
      }
}

export const PickVideos = async (setloader) => {
      const granted = await PermissionsAndroid.requestMultiple([
            PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
       ],
            {
                  title: "App Library Permission",
                  message:"App needs access to your Library ",
                  buttonNeutral: "Ask Me Later",
                  buttonNegative: "Cancel",
                  buttonPositive: "OK"
            }
      );
      if (granted["android.permission.READ_MEDIA_VIDEO"] || 
      granted["android.permission.WRITE_EXTERNAL_STORAGE"] === 
      PermissionsAndroid.RESULTS.GRANTED) {
            setloader(true);
            let options = {
              storageOptions: {
                skipBackup: true,
                path: 'video',
              },
              multiple: true,
              selectionLimit:3,
              mediaType: 'video',
              videoQuality:'medium',
            };
            const result = ImagePicker.launchImageLibrary(options, (response) => {
                  if(response.didCancel) {
                        setloader(false)
                        console.log('User cancelled image picker');
                  } else if (response.error) {
                        return response.error;
                  } else if (response.customButton) {
                        return response.customButton;
                  } else {
                  const result  = JSON.stringify(response);
                    return result;
                  }
            });
            return result;

      } else {
            console.log("Camera permission denied");
      }
}


export const SingleImage = async (arg, ) => {
      let options = {
            storageOptions: {
              skipBackup: true,
              path: 'images',
            },
            selectionLimit:1,
            mediaType: 'photo',
          };
      if(arg==1){
            const granted = await PermissionsAndroid.request(
                  PermissionsAndroid.PERMISSIONS.CAMERA,
                  {
                        title: "App Camera Permission",
                        message:"App needs access to your camera ",
                        buttonNeutral: "Ask Me Later",
                        buttonNegative: "Cancel",
                        buttonPositive: "OK"
                  }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                  const result = ImagePicker.launchCamera(options, (response) => {
                        if(response.didCancel) {
                              console.log('User cancelled image picker');
                        } else if (response.error) {
                              return response.error;
                        } else if (response.customButton) {
                              return response.customButton;
                        } else {
                        const result  = JSON.stringify(response);
                          return result;
                        }
                    });
                    return result;
            } else {
                  console.log("Camera permission denied");
            }
      }else{
            const granted = await PermissionsAndroid.requestMultiple([
                  PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
                  PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
             ],
                  {
                        title: "App Library Permission",
                        message:"App needs access to your Library ",
                        buttonNeutral: "Ask Me Later",
                        buttonNegative: "Cancel",
                        buttonPositive: "OK"
                  }
            );
            if (granted["android.permission.READ_MEDIA_IMAGES"] || 
            granted["android.permission.WRITE_EXTERNAL_STORAGE"] === 
            PermissionsAndroid.RESULTS.GRANTED){
                  const result = ImagePicker.launchImageLibrary(options, (response) => {
                        if(response.didCancel) {
                              console.log('User cancelled image picker');
                        } else if (response.error) {
                              return response.error;
                        } else if (response.customButton) {
                              return response.customButton;
                        } else {
                        const result  = JSON.stringify(response);
                          return result;
                        }
                  });
                  return result;
            } else {
                  console.log("Camera permission denied");
            }
      }
}