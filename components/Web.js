import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Button, View, Text, ScrollView, TouchableOpacity, StyleSheet, TextInput, Image, Dimensions } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import web from '../assets/image5.webp';
import js from '../assets/jss.jpg';
import php from '../assets/php.png';
import xml from '../assets/xmll.png';
import json from '../assets/json.png';

const Web = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.image}
                    source={web}
                    resizemode="stretch"
                />
            </View>
            <View style={styles.footer}>
                <Text style={styles.text_footer}>Course Content</Text>
                <ScrollView>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("SESSION")}>
                        <Ionic name="logo-html5" size={32} color="black" />
                        <Text style={styles.buttontext}> HTML</Text>
                        <Ionic name="chevron-forward" size={30} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Ionic name="logo-css3" size={32} color="black" />
                        <Text style={styles.buttontext}> CSS</Text>
                        <Ionic name="chevron-forward" size={30} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Image
                            style={{ width: 28, height: 32 }}
                            source={js}
                            resizemode="stretch"
                        />
                        <Text style={styles.buttontext}> Java Script</Text>
                        <Ionic name="chevron-forward" size={30} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Image
                            style={{ width: 35, height: 33 }}
                            source={php}
                            resizemode="stretch"
                        />
                        <Text style={styles.buttontext}> PHP</Text>
                        <Ionic name="chevron-forward" size={30} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Image
                            style={{ width: 35, height: 32 }}
                            source={xml}
                            resizemode="stretch"
                        />
                        <Text style={styles.buttontext}> XML</Text>
                        <Ionic name="chevron-forward" size={30} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Image
                            style={{ width: 35, height: 32 }}
                            source={json}
                            resizemode="stretch"
                        />
                        <Text style={styles.buttontext}> Json</Text>
                        <Ionic name="chevron-forward" size={30} color="black" />
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <View style={styles.nav} >
                <TouchableOpacity onPress={() => navigation.navigate("HOME")}>
                    <Ionic name="home" size={30} color="powderblue" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionic name="heart" size={30} color="powderblue" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionic name="notifications" size={30} color="powderblue" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionic name="person" size={30} color="powderblue" />
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </View>
    );
};

export default Web;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: '#fff',
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 2,
        backgroundColor: '#009387',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 20,
        paddingHorizontal: 30
    },
    image: {
        height: 236,
        width: 400,
        borderRadius: 30,
    },
    text_footer: {
        color: '#fff',
        fontSize: 30,
        marginBottom: 10,
        fontWeight: 'bold'
    },
    button: {
        borderRadius: 8,
        backgroundColor: "powderblue",
        padding: 12,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 18
    },
    buttontext: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#05375a",
        paddingRight: 10
    },
    nav: {
        padding: 13,
        paddingLeft: 40,
        paddingRight: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 12,
        borderRadius: 32,
        borderColor: '#fff',
        backgroundColor: '#009387',
    },
});