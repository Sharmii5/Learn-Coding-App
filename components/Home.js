import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Button, View, Text, ScrollView, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import web from '../assets/image5.webp';
import mobile from '../assets/image2.webp';
import standalone from '../assets/image1.png';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>WELCOME !</Text>
      <Text style={{ fontSize: 20, color: '#61688B', marginTop: 8 }}>
        Find a course you want to learn
      </Text>
      <View
        style={styles.search}>
        <Ionic name="search-outline" size={30} color="black" />
        <TextInput
          style={{ fontSize: 18, marginLeft: 5 }}
          placeholder="Search for anything"
        />
      </View>
      <View
        style={{
          paddingVertical: 25,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Categories</Text>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#009387' }}>
          See All
        </Text>
      </View>
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate("WEB APPLICATION DEVELOPMENT")}>
          <View style={styles.courses}>
            <Text style={{ paddingTop: 5, fontSize: 15, fontWeight: 'bold', color: '#05375a' }}>
              WEB APPLICATION DEVELOPMENT
            </Text>
          </View>
          <Image
            style={styles.image}
            source={web}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("MOBILE APPLICATION DEVLOPMENT")}>
          <View style={styles.courses}>
            <Text style={styles.coursestext}>
              MOBILE APPLICATION DEVLOPMENT
            </Text>
          </View>
          <Image
            style={styles.image}
            source={mobile}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("STANDALONE APPLICATION DEVLOPMENT")}>
          <View style={styles.courses}>
            <Text style={styles.coursestext}>
              STANDALONE APPLICATION DEVELOPMENT
            </Text>
          </View>
          <Image
            style={styles.image}
            source={standalone}
          />
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.nav} >
        <TouchableOpacity>
          <Ionic name="home" size={30} color="ghostwhite" />
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

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  nav: {
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#009387',
    backgroundColor: '#009387',
    paddingLeft: 40,
    paddingRight: 40,
  },
  title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 5
  },
  search: {
    height: 60,
    marginTop: 25,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    backgroundColor: '#F5F5F7',
    borderRadius: 30,
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    width: 385,
    height: 160,
    borderRadius: 10
  },
  courses: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10
  },
  coursestext: {
    paddingTop: 27,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#05375a'
  }
});