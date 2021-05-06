
import React,{useEffect,useState} from 'react';
import Home from './screens/Home'
import Login from './screens/Login'
import Loading from './screens/Loading'
import Signup from './screens/Signup'
import Nav from './navbars/BottomNav'
import AsyncStorage from  '@react-native-async-storage/async-storage'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function App() {
  const [isLoggedin,setLogged] =useState(true)

  const detectLogin= async ()=>{
    // const token = await AsyncStorage.getItem('token')
    // if(token){
    //     setLogged(true)
    // }else{
    //     setLogged(false)
    // }
    

 }

  useEffect(()=>
  {
   detectLogin()
  },[])

  return (
    <>
    
      
       
    <NavigationContainer   > 
    
      <Stack.Navigator headerMode="none">
    
      <Stack.Screen name="Loading" component={Loading} />    
        <Stack.Screen name="Home" component={Nav} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Singup" component={Signup} />
      </Stack.Navigator>
      
    </NavigationContainer>

    
    </>
  );





}

