
import React,{useState} from 'react';
import { StyleSheet, Text, View, Button,TextInput,TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from  '@react-native-async-storage/async-storage'

export default function Login(props){
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')


    const sendCred = async (props)=>{
      fetch("https://dreamnepal.herokuapp.com/api/auth/login/",{
        method:"POST",
        headers: {
         'Content-Type': 'application/json'
       },
       body:JSON.stringify({
         "email":email,
         "password":password
       })
      })
      .then(res=>res.json())
      .then(async (data)=>{
        console.log(data)
             try {
              //  console.log(data)
              await AsyncStorage.setItem('refreshtoken', data.refresh)
              await AsyncStorage.setItem('token',data.access)
               props.navigation.navigate("Home")
             } catch (e) {
               Alert.alert( 'Login Failed', 'Soory, your Username or Password is Incorrect. Please try again.')
               console.log("error here",e)
                
             }
      })
   }

    return (
        <View style={styles.container}>
          {/* <Text onPress={()=> props.navigation.navigate("Singup")} >Welcome Login..</Text> */}
        
        <View>
          <Text style={styles.Login}>Login</Text>
        </View>

        <View>
          <Text style={styles.text}>Email</Text>
        </View>

        <View>
          <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text)=> setEmail(text)}
          />
        </View>

        <View>
          <Text style={styles.text}>Password</Text>
        </View>

        <View>
          <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text)=> setPassword(text)}
          />
        </View>

        <View style={styles.button}>
          <Button
           onPress={() => sendCred(props)}
            title="Login"
            color="#FF3D00"
          />
        </View> 

        <View>
          <Text style={{textAlign:'center', margin:15}}>Don't have and Account? <Text style ={{fontWeight:'bold', color:'red'}} onPress={()=>props.navigation.navigate('Singup')}>Register</Text></Text>
          
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