import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Button, View, Text, SafeAreaView, TouchableOpacity, StyleSheet, TextInput, Image, Dimensions, ScrollView } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import html from '../assets/HTML.jpg';

const Session = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View >
                    <Image
                        style={styles.image}
                        source={html}
                        resizemode="stretch"
                    />
                    <Ionic name="play-circle" size={60} color="#fff" style={styles.icon1} />
                    <Ionic name="heart" size={35} color="white" style={styles.icon2} />
                    <Ionic name="share-social" size={35} color="white" style={styles.icon3} />
                </View>
            </View>
            <View style={styles.footer}>
                <ScrollView>
                    <TouchableOpacity style={styles.button}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                            <Ionic name="checkmark-circle-outline" size={40} color="green" style={styles.icon6} />
                            <Text style={{ color: '#05375a', fontSize: 30, fontWeight: 'bold', marginBottom: 7 }}> Session 01 </Text>
                            <Ionic name="chevron-up-outline" size={23} color="gray" style={styles.icon5} />
                            <Ionic name="time-outline" size={23} color="gray" style={styles.icon4} />
                            <Text style={{ marginTop: 14, color: "gray" }}> 1h 45m</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button2}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                            <Ionic name="play-circle" size={40} color="#009387" style={styles.icon6} />
                            <Text style={{ color: '#05375a', fontSize: 30, fontWeight: 'bold', marginBottom: 7 }}> Session 02 </Text>
                            <Ionic name="chevron-down-outline" size={23} color="gray" style={styles.icon5} />
                            <Ionic name="time-outline" size={23} color="gray" style={styles.icon4} />
                            <Text style={{ marginTop: 14, color: "gray" }}> 2h 30m</Text>
                        </View>
                        <Text>"What is HTML?" will help you learn basics of HTML.
                            You will also learn how to create your first web page using HTML.
                            This HTML tutorial covers the following topics:{'\n'} {'\n'}
                            1. What is HTML? {'\n'}
                            2. HTML Myth {'\n'}
                            3. Web page and Website{'\n'}
                            4. How HTML Works?{'\n'}
                            5. HTML Tags {'\n'}
                            6. HTML Attributes {'\n'}
                            7. Creating First HTML Web Page {'\n'}
                            8. HTML FAQs</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                            <Ionic name="lock-closed" size={35} color="gray" style={styles.icon6} />
                            <Text style={{ color: '#05375a', fontSize: 30, fontWeight: 'bold', marginBottom: 7 }}> Session 03 </Text>
                            <Ionic name="chevron-up-outline" size={23} color="gray" style={styles.icon5} />
                            <Ionic name="time-outline" size={23} color="gray" style={styles.icon4} />
                            <Text style={{ marginTop: 14, color: "gray" }}> 1h 30m</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                            <Ionic name="lock-closed" size={35} color="gray" style={styles.icon6} />
                            <Text style={{ color: '#05375a', fontSize: 30, fontWeight: 'bold', marginBottom: 7 }}> Session 04 </Text>
                            <Ionic name="chevron-up-outline" size={23} color="gray" style={styles.icon5} />
                            <Ionic name="time-outline" size={23} color="gray" style={styles.icon4} />
                            <Text style={{ marginTop: 14, color: "gray" }}> 2h 10m</Text>
                        </View>
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

export default Session;

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
        alignItems: 'center',
        backgroundColor: "#009387"
    },
    footer: {
        flex: 2,
        backgroundColor: '#fff',
        paddingVertical: 5,
        paddingHorizontal: 10
    },
    image: {
        width: 420,
        height: 260,
        opacity: 0.7,
    },
    icon1: {
        position: 'absolute',
        top: 30,
        marginTop: 50,
        marginLeft: 170,
        tintColor: Colors.white
    },
    icon2: {
        position: 'absolute',
        bottom: 20,
        marginLeft: 370,
    },
    icon3: {
        position: 'absolute',
        bottom: 20,
        marginLeft: 320,
    },
    icon4: {
        paddingLeft: 12,
        marginTop: 13,
    },
    icon5: {
        paddingRight: 50,
        marginTop: 13,
    },
    icon6: {
        paddingRight: 5
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
        backgroundColor: "whitesmoke",
        paddingLeft: 20,
        paddingRight: 15,
        paddingBottom: 15,
        paddingTop: 13,
        marginBottom: 15
    },
    button2: {
        borderRadius: 8,
        backgroundColor: "powderblue",
        paddingLeft: 20,
        paddingRight: 15,
        paddingBottom: 15,
        paddingTop: 13,
        marginBottom: 15
    }
});