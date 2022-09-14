import React, { Component } from 'react';
import reactDom from 'react-dom';

import { View, Text,ProfilePicture, StyleSheet,SafeAreaView, TextInput,Button, Image} from 'react-native';
import { Touchable, TouchableOpacity } from 'react-native-web';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



// create a component
const City = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>


<h2 style={{ color: "white",
        backgroundColor: "DodgerBlue",
        padding: "20px",
        fontFamily: "Sans-Serif",  textAlign: "center"}}>Insert City</h2>

        <TextInput
          style={styles.input}
          keyboardType="Email "
          placeholder="Enter Your Role Name"
        />
        
        <Button
        title="Go to login"
        onPress={() => navigation.navigate('Student_Register')}
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
export default City;
