

import React,{useEffect,useState} from 'react';``
import { StyleSheet, Text, View,Button, Image } from 'react-native';
import AsyncStorage from  '@react-native-async-storage/async-storage'

const Home=(props)=>{
  
  const [data, setData] = useState({})
  const [isLoading, setLoading] = useState(true)
  const Boiler = async ()=>{
    const token = await AsyncStorage.getItem("token")
    // const refresh = await AsyncStorage.getItem("refreshtoken")

    // console.log('Access'+': ' + token  )
    
    // console.log('Refresh'+': ' + refresh  )
  fetch('https://dreamnepal.herokuapp.com/api/auth/user/',{
  headers:new Headers({
    Authorization:"Bearer "+token
  })
  }).then(res=>res.json())
  .then(data=>{
    console.log(data)
    try{
  
    setData(data)
    }
    catch(e){
     setLoading== false
      console.log(e);
    }

  }
  )
 }
 console.log(data)
useEffect(()=>{
 Boiler()
},[])

  const logout =(props)=>{
    AsyncStorage.removeItem("token").then(()=>{
      props.navigation.navigate("Login")
    })
 }

    return (
        <View style={styles.container}>
            <Image style={styles.tinyLogo} source={{
          uri: 'http://10.0.2.2:100/images/'+ data.image
        }}></Image>
          <Text>Welcome Home.. {data.email}</Text>
          <View style={styles.button}>
          <Button
            onPress={()=> logout(props)}
            title="Logout"
            color="#FF3D00"
          />
        </View> 
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      width: "95%",
       margin: 10,
       
      
    },
    tinyLogo: {
        width: 100,
        height: 100,
      }
  });

  export default Home
