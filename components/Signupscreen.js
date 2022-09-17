import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react';
import { Button, View, Text, SafeAreaView, Dimensions, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';

const Signup = () => {
  const navigation = useNavigation();

  const [data, setData] = React.useState({
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
  });
  const textInputChange = (val) => {
    if (val.length != 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false
      });
    }
  }
  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val
    });
  }
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    });
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.title}>The right way to {'\n'}learn to code, {'\n'}for free.</Text>
          <Image
            source={require('../assets/Logo.png')}
            style={styles.logo}
            resizemode="stretch"
          />
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text_footer}>User name</Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Your User name"
            autoCapitalize="none"
          />
        </View>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Your Email"
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
          />
          {data.check_textInputChange ?
            <Ionic name="checkmark-circle-outline" size={25} color="black" />
            : null}
        </View>
        <Text style={styles.text_footer}>Contact number</Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Your Contact number"
            autoCapitalize="none"
          />
        </View>
        <Text style={[styles.text_footer, { marginTop: 28 }]}>Password</Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Type Password"
            secureTextEntry={data.secureTextEntry ? true : false}
            autoCapitalize="none"
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity
            onPress={updateSecureTextEntry}
          >
            {data.secureTextEntry ?
              <Ionic name="eye-off-outline" size={25} color="black" />
              :
              <Ionic name="eye-outline" size={25} color="black" />
            }
          </TouchableOpacity>
        </View>
        <Text style={[styles.text_footer, { marginTop: 28 }]}>Confirm Password</Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Confirm your Password"
            secureTextEntry={data.secureTextEntry ? true : false}
            autoCapitalize="none"
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity
            onPress={updateSecureTextEntry}
          >
            {data.secureTextEntry ?
              <Ionic name="eye-off-outline" size={25} color="black" />
              :
              <Ionic name="eye-outline" size={25} color="black" />
            }
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <Button onPress={() => navigation.navigate("HOME")} title='Create account' color="#009387" />
        </View>
      </View>
    </View>
  );
};
export default Signup;
const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#009387'
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 5,
    marginRight: 18
  },
  button: {
    marginTop: 33,
    color: '#009387',
    borderRadius: 40,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row'
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold'
  },
  text_footer: {
    color: '#05375a',
    fontSize: 20,
    marginTop: 15,
    marginBottom: 10,
    fontWeight: 'bold'
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#05375a',
    paddingBottom: 3,
    justifyContent: 'space-between'
  },
  logo: {
    width: 110,
    height: 110,
    borderRadius: 18,
  },
});

