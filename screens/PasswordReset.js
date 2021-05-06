import React,{useState, useEffect} from 'react';

import { StyleSheet, Text, View, Button,TextInput,TouchableOpacity } from 'react-native';
import AsyncStorage from  '@react-native-async-storage/async-storage'


export default function PasswordReset(props){
    const [old_password, setOld_password] = useState('')
    const [new_password1, setNew_password1] = useState('')
    const [new_password2, setNew_password2] = useState('')
    


    const sendPassword = async  ()=>{
    const token = await AsyncStorage.getItem("token")
      fetch("https://dreamnepal.herokuapp.com/api/auth/password/change/",{
        method:"POST",
        headers: {
         'Content-Type': 'application/json',
         Authorization:"Bearer "+token
         
        
       },
       body:JSON.stringify({
         "old_password":old_password,
         "new_password1":new_password1,
         "new_password2": new_password2
       })
       
      })
      
    
      .then(res=>res.json())
      .then( async (data)=>{
         console.log(data)
        //  try {
        //     //  console.log(data)
        //      await AsyncStorage.getItem('token')
        
        //    } catch (e) {
        //        console.log('here')
        //      console.log("error here",e)
              
        //    }
          
      })
   }
return(
    <View style={styles.container}>
       
          

        <View>
          <Text style={styles.Login}>Password Reset</Text>
        </View>

        <View>
          <Text style={styles.text}>Old Password</Text>
        </View>

        <View>
          <TextInput
          style={styles.input}
          placeholder="Old Password"
          value={old_password}
          onChangeText={(text)=> setOld_password(text)}
          />
        </View>

        <View>
          <Text style={styles.text}>New Password</Text>
        </View>

        <View>
          <TextInput
          style={styles.input}
          placeholder="New Password"
        //   secureTextEntry={true}
          value={new_password1}
          onChangeText={(text)=> setNew_password1(text)}
          />
        </View>

        <View>
          <Text style={styles.text}>Confirm Password</Text>
        </View>

        <View>
          <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={new_password2}
          onChangeText={(text)=> setNew_password2(text)}
          />
        </View>

        <View style={styles.button}>
          <Button
           onPress={() => sendPassword(props)}
            title="Submit Password"
            color="#FF3D00"
          />
        </View> 

      


        </View>
      );
}
// Styles
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',

      justifyContent: 'center',
    },

    Login:{
      textAlign:'center',
      fontSize:50,
      fontWeight:'bold'
    },
    input: {
      borderWidth: 1,
      height: 40,
      margin: 12,
    },
    text:{
      fontWeight:'bold',
      fontSize :20,
      margin :12
    },
    button: {
      width: "95%",
       margin: 10,
       
      
    },
  });
