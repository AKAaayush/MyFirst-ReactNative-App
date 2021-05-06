import React,{useState} from 'react';

import { StyleSheet, Text, View, Button,TextInput,TouchableOpacity } from 'react-native';
export default function Singup(props) {
    const [name, setName] = useState('')
    const [number, setnumber] = useState('')
    const [address, setaddress] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmpassword] = useState('')

    const sendCred=async()=>{
        // console.log(name,email,password,address)
        fetch("https://dreamnepal.herokuapp.com/api/v1/register/",
        {method:'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify({
            "email": email,
            "name" :name,
            "address":address,
            "number" : number,
            "password1" : password,
            "password2" : confirmpassword
        })
    },
       
        )
        .then(res => res.json())
        .then(async (data)=>{
           
            try{
              console.log(data) 
              //  await AsyncStorage.setItem('token', data.token)
            }
            catch(e){
              console.log('error here',e)

            }
            
            

        })

        setName('')
        setEmail('')
        setPassword('')
        setConfirmpassword('')
        setnumber('')
        setaddress('')
        
    
    }

 return(
  
        <View style={styles.container}>
          {/* <Text onPress={()=> props.navigation.navigate("Singup")} >Welcome Login..</Text> */}
          

        <View>
          <Text style={styles.Sign}>Sign-Up</Text>
        </View>

        <View>
          <Text style={styles.text}>Full Name</Text>
        </View>

        <View>
          <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={name}
          onChangeText={(text)=> setName(text)}
          />
        </View>

        <View>
          <Text style={styles.text}>Address</Text>
        </View>

        <View>
          <TextInput
          style={styles.input}
          placeholder="Address"
          value={address}
          onChangeText={(text)=> setaddress(text)}
          />
        </View>

        <View>
          <Text style={styles.text}>Phone</Text>
        </View>

        <View>
          <TextInput
          style={styles.input}
          placeholder="Phone"
          value={number}
          onChangeText={(text)=> setnumber(text)}
          />
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

        <View>
          <Text style={styles.text}>Confirm Password</Text>
        </View>

        <View>
          <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={true}
          value={confirmpassword}
          onChangeText={(text)=> setConfirmpassword(text)}
          />
        </View>

        <View style={styles.button}>
          <Button
            onPress={()=> sendCred()}
            title="Sign-Up"
            color="#FF3D00"
          />
        </View> 

        <View>
          <Text style={{textAlign:'center', margin:15}}>Already have an Account? <Text style ={{fontWeight:'bold', color:'red'}} onPress={()=>props.navigation.navigate('Login')}>Login</Text></Text>
          
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

    Sign:{
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
