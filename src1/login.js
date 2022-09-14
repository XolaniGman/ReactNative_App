//import liraries
//import liraries
import React, { Component } from 'react';
import reactDom from 'react-dom';
import { View, Text, StyleSheet,SafeAreaView, TextInput,TouchableOpacity,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// create a component
const Marks = ({navigation}) => {
    return (
        <SafeAreaView >
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
        title="Go to Details"
        onPress={() => navigation.navigate('home')}
      />
      </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
        justifyContent: 'center',
    },
    input:{
            height: 40,
            margin: 12,
            borderWidth: 1,
            borderBottomWidth:1,
            padding: 10,
            backgroundColor: '#fff',
            
           
    },
    button:{
        backgroundColor: "#6200ea",
        padding: 10,
        margin:10,
        borderRadius: 10,
        justifyContent:'center',
    
      
    },
    

});

//make this component available to the app
export default login;
