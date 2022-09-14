//import liraries
import React, { Component } from 'react';
import reactDom from 'react-dom';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, SafeAreaView, FlatList, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import serviceData from './data';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


// create a component
const home = ({ navigation }) => {
    return (
        <SafeAreaView>
            <FlatList
                data={serviceData}
                contentInset={{ padding: 12 }}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={{ margin: 20, height: windowHeight * 0.2, backgroundColor: item.bgColor,borderRadius:0 }}>
                            <View style={{backgroundColor:item.bgColor}}>
                             
                               
                                <Text style={styles.category}>
                                    {item.category}
                                </Text>
                                <Text style={styles.name}>
                                    {item.name}
                                </Text>
                                <Text>
                                    {item.numberCompany}
                                </Text>

                            </View>
                            <Image style={{
                                    height:90, width:60,position:'absolute',right:0,margin:10,bottom:0
                                }} source={item.image} />
                        </TouchableOpacity>
                    )
                }}
            >

            </FlatList>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: '#2c3e50',
    },
    category: {
        fontSize: 50,
        fontWeight: '500',
        color: 'white',
        justifyContent:'center',
        alignItems: 'center',
        
    },
    name: {
        fontSize: 25,
        color: 'white',
        fontWeight: '500'
    }
});

//make this component available to the app
export default home;