import React, { Component } from 'react';
import { Button, View, Text, Dimensions, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionic from 'react-native-vector-icons/Ionicons';


const Login = () => {
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
        <Text style={styles.title}>Learn Coding App!</Text>
        <Image
          source={require('../assets/Logo.png')}
          style={styles.logo}
          resizemode="stretch"
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.text_footer}>Username or Email</Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Your Username or Email"
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
          />
          {data.check_textInputChange ?
            <Ionic name="checkmark-circle-outline" size={25} color="black" />
            : null}
        </View>
        <Text style={[styles.text_footer, { marginTop: 28 }]}>Password</Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Your Password"
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
        <TouchableOpacity style={styles.text}>
          <Text style={styles.textt}> Forgot password</Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <Button onPress={() => navigation.navigate("HOME")} title='Login' color="#009387" />
        </View>
        <TouchableOpacity style={styles.createacc}>
          <Text style={styles.texttt} onPress={() => navigation.navigate("SIGNUP")}  > Create account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

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
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 50,
  },
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  button: {
    marginTop: 33,
    color: '#009387',
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
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 'bold'
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#05375a',
    paddingBottom: 5,
    justifyContent: 'space-between'
  },
  text: {
    marginTop: 20,
  },
  textt: {
    color: 'gray',
    fontSize: 17,
  },
  createacc: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 28
  },
  texttt: {
    color: '#05375a',
    fontSize: 20,
    fontWeight: 'bold'
  },
});