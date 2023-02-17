import AsyncStorage from '@react-native-async-storage/async-storage';


export const getLocalData = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      const data = jsonValue != null ? JSON.parse(JSON.parse(jsonValue)) : null;
      return data;
    } catch(e) {
     console.log(e)
    }
}