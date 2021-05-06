import React, {useEffect, useState} from 'react';
// import { Button ,TextInput} from 'react-native-paper';
import {ActivityIndicator, View, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoadingScreen = ({navigation}) => {
  // const [refresh, setRefresh] = useState('');
  
  const detectLogin = async props => {
    const accesstoken = await AsyncStorage.getItem('token');
    const refreshtoken = await AsyncStorage.getItem('refreshtoken');
    // console.log(refreshtoken)
    // setRefresh('refreshtoken');
    // console.log(setRefresh);

    fetch('https://dreamnepal.herokuapp.com/api/auth/refresh/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'refresh': refreshtoken
      }),
    })
      .then(res => res.json())
      .then(async data => {
        console.log(data);
        try {
          await AsyncStorage.setItem('token', data.access);
        } catch (e) {
          console.log('error here', e);
        }
      });
    if (accesstoken) {
      navigation.replace('Home');
    } else {
      navigation.replace('Login');
    }
  };
  useEffect(() => {
    detectLogin();
  }, []);

  return (
    <View style={styles.loading}>
      <ActivityIndicator size="large" color="blue" />
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingScreen;
