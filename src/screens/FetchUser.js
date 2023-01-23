import React from "react";
import {
  
    Text,
    Button,
    View,
  } from 'react-native'
import { getAllUsers } from "../../redux/reducers/allUsers";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../components/CustomButton";

export const FetchUser = ()=>{

    let userAllData = useSelector((state)=>{
        return state.myallUsers.users;
    });

    let loading = useSelector((state)=>{
        return state.mylogin.loading;
    });

 
    const dispatch = useDispatch();

    return (
      <View>
         
         <Text> dasndnjassdj</Text>  
         <Text> dasndnjassdj</Text>  
         <Text> dasndnjassdj</Text>  
        <CustomButton style={{   }} label={"getuserData"} onPress={() => dispatch(getAllUsers())} />
        <Text>{loading?"loading....":""}</Text> 
         {
        userAllData.map((element,index) => {
          return (
            <View key={index}>
                <Text>{element.name} {element.phone} {element.email} {element.website}</Text>
            </View>
          );
        })
      }

     



         </View>
    )
}