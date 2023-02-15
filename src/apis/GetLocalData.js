import AsyncStorage from '@react-native-async-storage/async-storage';


export const getLocalData = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      console.log(jsonValue);
      const data = jsonValue != null ? JSON.parse(JSON.parse(jsonValue)) : null;
      console.log(data);
      return data;
    } catch(e) {
     console.log(e)
    }
}