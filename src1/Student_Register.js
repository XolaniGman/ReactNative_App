//import liraries
//import liraries
import React, { Component } from 'react';
import reactDom from 'react-dom';

import { View, Text, StyleSheet,SafeAreaView, TextInput,Button, } from 'react-native';
import { Touchable, TouchableOpacity } from 'react-native-web';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



// create a component
const Student_Register = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
             <h1 style={{ color: "white",
        backgroundColor: "DodgerBlue",
        padding: "1px",
        fontFamily: "Sans-Serif", }}> 
              EduTech
            </h1> 
            <h2 style={{ color: "white",
        backgroundColor: "DodgerBlue",
        padding: "20px",
        fontFamily: "Sans-Serif",  textAlign: "center"}}>Wellcome You To Our Teachers Team</h2>
        <TextInput
          style={styles.input}
          keyboardType="FullName "
          placeholder="Enter Your Full Name"
        />
         
         <TextInput
          style={styles.input}
          keyboardType="Surname "
          placeholder="Enter Your Surname"
        />

<TextInput
          style={styles.input}
          keyboardType="Email "
          placeholder="Enter Your Email"
        />

<TextInput
          style={styles.input}
          keyboardType="DateOfDirth "
          placeholder="Enter Your DOB"
        />
      
        <TextInput
          style={styles.input}
          keyboardType="School "
          placeholder="Enter Your school"
        />

<TextInput
          style={styles.input}
          keyboardType="Grade "
          placeholder="Enter Your  Grade"
        />

        <TextInput
          style={styles.input}
        keyboardType="Password"
        placeholder="Enter Your Subject"
        />
         
        <TextInput
          style={styles.input}
        keyboardType="Subject"
        placeholder="Enter Your phone "
        />
         
         <TextInput
          style={styles.input}
          keyboardType="Province "
          placeholder="Enter Your Province"
        />
          <TextInput
          style={styles.input}
          keyboardType="City "
          placeholder="Enter Your City"
        />

        <TextInput
          style={styles.input}
        keyboardType="Password"
        placeholder="Enter Your Password"
        />
         
        <TextInput
          style={styles.input}
        keyboardType="Password"
        placeholder="Enter Your Picture"
        />
        <Button
        title="Go to login"
        onPress={() => navigation.navigate('Upload')}
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
            justifyContent:'center'
           
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
export default Student_Register;
