import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, SafeAreaView} from 'react-native';

export default function Profile() {
const [userDetails, setUserDetails] = useState([])
console.log(userDetails)
const Data = ()=> {
  const URL = 'https://randomuser.me/api/?results=50'
  fetch(URL)
  .then(responce => responce.json())
  .then(({results}) =>{
    // console.log(data)
    console.log("userDetails")
      setUserDetails(results)
      
  })
}



useEffect(() => {
  Data()
}, [])


  return (
  
    <View >
    
      {/* {userDetails.map((userdata)  =>
        <View>
          <Text>{userdata.email}</Text>
          </View>

      )  
      } */}

<SafeAreaView>
<FlatList
          data={userDetails}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item}) => (
         
              <View style={{width: '85%'}}>
                <Text style={{fontWeight: 'bold'}}>{item.email}</Text>
                <Text>{item.email}</Text>
                <Text>{item.name.first}</Text>

              </View>
            
          )}
        />
      </SafeAreaView>
    
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
     droidSafeArea: {
      flex: 1,

      paddingTop: Platform.OS === 'android' ? 25 : 0
  },
});
