import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Button, View, Text, SafeAreaView, TouchableOpacity, StyleSheet, TextInput, Image, Dimensions, ScrollView } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import standalone from '../assets/image1.png';

const Standalone = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.image}
                    source={standalone}
                    resizemode="stretch"
                />
            </View>

            <View style={styles.footer}>
                <Text style={styles.text_footer}>Course Content</Text>
                <ScrollView>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttontext}> C Language</Text>
                        <Ionic name="chevron-forward" size={30} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttontext}> C#</Text>
                        <Ionic name="chevron-forward" size={30} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttontext}> C++</Text>
                        <Ionic name="chevron-forward" size={30} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttontext}>Python</Text>
                        <Ionic name="chevron-forward" size={30} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttontext}> Ruby</Text>
                        <Ionic name="chevron-forward" size={30} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttontext}> jQuery</Text>
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
export default Standalone;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: '#fff'
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
});