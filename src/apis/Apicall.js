import { mainApi } from "./constant"
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';
import axios  from 'axios';

const storeData = async (key,value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
      console.log(e);
    }
}

const singlestoreData = async (key,value) => {
  try {
    await AsyncStorage.setItem(key, value)
  }catch (e) {
    console.log(e);
  }
}


const login = (email,password) =>
new Promise((resolve, reject) => {
  axios({
    method: 'post',
    url: `${mainApi.baseUrl}/ApiController/login`,
    headers: {"Content-type": "application/json; charset=UTF-8"},
    data: JSON.stringify({
      email: email,
      password: password,
    }),
    responseType: 'json',
  })
    .then(res => {
      if(res.status === 200) {
        storeData('USER_INFO',JSON.stringify({
          login:true,
          data:res.data["session_data"]
        })) 
        singlestoreData('isloggedin','true');  
        resolve(res.data);
        Toast.show(res.data["message"])
      } else reject(res);
    })
    .catch(error => {
      console.log(error);
      reject(error);
    });
});

 const quicklogin = (email,mobile_no) =>
  new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: `${mainApi.baseUrl}/ApiController/loginwithotp`,
      headers: {"Content-type": "application/json; charset=UTF-8"},
      data: JSON.stringify({
        email: email,
        mobile_no: mobile_no,
      }),
      responseType: 'json',
    })
      .then(res => {
        if(res.status === 200) {
          resolve(res.data);
          Toast.show(res.data["message"])
        } else reject(res);
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
  });


const verifyOtp = (otp,user_id) =>
  new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: `${mainApi.baseUrl}/ApiController/loginwithotpverify`,
      headers: {"Content-type": "application/json; charset=UTF-8"},
      data: JSON.stringify({
        otp: otp,
        user_id: user_id,
      }),
      responseType: 'json',
    })
      .then(res => {
        if(res.status === 200) {
        storeData('USER_INFO',JSON.stringify({
          login:true,
          data:res.data["session_data"]
        }))  
        resolve(res.data);
        Toast.show(res.data["message"])
        } else reject(res);
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
  });


  const check_mail= (e)=>
  new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: `${mainApi.baseUrl}/ApiController/email_check`,
      headers: {"Content-type": "application/json; charset=UTF-8"},
      data: JSON.stringify({
        email: e
      }),
      responseType: 'json',
    })
      .then(res => {
        if(res.status === 200) {
          resolve(res.data);
          if(res.data["message"])
          Toast.show(res.data["message"])
        } else reject(res);
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
  })
  

  const forgotverifyOtp = (otp,user_id) =>
  new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: `${mainApi.baseUrl}/ApiController/verifyotp`,
      headers: {"Content-type": "application/json; charset=UTF-8"},
      data: JSON.stringify({
        otp: otp,
        user_id: user_id,
      }),
      responseType: 'json',
    })
      .then(res => {
        if(res.status === 200) {
        resolve(res.data);
        Toast.show('OTP Verify Successfully')
        } else reject(res);
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
  });


export {login, quicklogin, verifyOtp, check_mail, storeData, singlestoreData,forgotverifyOtp} 