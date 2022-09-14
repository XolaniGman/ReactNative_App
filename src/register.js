//import liraries
//import liraries
import React, { Component } from 'react';
import reactDom from 'react-dom';

import { View, Text, StyleSheet,SafeAreaView, TextInput,Button, } from 'react-native';
import { Touchable, TouchableOpacity } from 'react-native-web';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



// create a component
const register = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
          
        <TextInput
          style={styles.input}
          keyboardType="Email "
          placeholder="Enter Your Fist Name"
        />
         
        <TextInput
          style={styles.input}
        keyboardType="Password"
        placeholder="Enter Your Last Name"
        />
         
        <TextInput
          style={styles.input}
        keyboardType="Password"
        placeholder="Enter Your Physical Address"
        />
         
        <TextInput
          style={styles.input}
        keyboardType="Password"
        placeholder="Enter Your Email Address"
        />
         
        <TextInput
          style={styles.input}
        keyboardType="Password"
        placeholder="Enter Your Password"
        />
        <Button
        title="Go to login"
        onPress={() => navigation.navigate('login')}
      />
      </SafeAreaView>
    );
};
<strong></strong>
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
        
        //alignItems: 'center',
        justifyContent: 'center',
      
    },
    input:{
            height: 30,

            margin: 9,
display:'grid',

            borderBottomWidth:1,
            padding: 20,
            backgroundColor: '#fff',
            
           
    },
    button:{
        backgroundColor: "#6200ea",
        padding: 10,
        margin:10,
        borderRadius: 10,
        justifyContent:'center',
    
      
    },
 form:{
        margin:16,
      
    }
});

//make this component available to the app
export default register;
