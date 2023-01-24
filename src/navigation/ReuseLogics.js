import React from 'react';
import { Text,PermissionsAndroid } from 'react-native';
const ImagePicker = require('react-native-image-picker');

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
            const granted = await PermissionsAndroid.request(
                  PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                  {
                        title: "App Library Permission",
                        message:"App needs access to your Library ",
                        buttonNeutral: "Ask Me Later",
                        buttonNegative: "Cancel",
                        buttonPositive: "OK"
                  }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
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
export const PickImageAll = async (setloader) => {
      const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
                  title: "App Library Permission",
                  message:"App needs access to your Library ",
                  buttonNeutral: "Ask Me Later",
                  buttonNegative: "Cancel",
                  buttonPositive: "OK"
            }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            let options = {
              storageOptions: {
                skipBackup: true,
                path: 'images',
              },
              selectionLimit:3,
              mediaType: 'photo',
            };
            const result = ImagePicker.launchImageLibrary(options, (response) => {
                  setloader(true);
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

export const PickVideos = async (setloader) => {
   const { granted } = await ImagePicker.requestCameraPermissionsAsync();
      if (granted === true) {
            setloader(true);
            var library = await ImagePicker.launchImageLibraryAsync({
            selectionLimit: 5,
            mediaTypes: ImagePicker.MediaTypeOptions.Videos,
            allowsEditing: false,
            allowsMultipleSelection: true,
            aspect: [1, 1],
            quality: 0.7,
            });
            if (!library.cancelled) {
                  const selectedImg = library.uri ? [library] : library.selected;
                  return selectedImg;
            }
      } else {
            const denied = 'Camera permission denied';
            // alert("You've refused to allow this app to access your camera!");
            return denied;
      }
}