import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signupscreen from "./components/Signupscreen";
import Loginscreen from "./components/Loginscreen";
import Home from "./components/Home";
import Web from "./components/Web";
import Mobile from "./components/Mobile";
import Standalone from "./components/Standalone";
import Session from "./components/Session";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Group>
                <Stack.Screen name="LOGIN" component={Loginscreen}/>
                <Stack.Screen name="SIGNUP" component={Signupscreen}/>
                <Stack.Screen  name="HOME" component={Home}/>
                <Stack.Screen  name="WEB APPLICATION DEVELOPMENT" component={Web}/>
                <Stack.Screen  name="MOBILE APPLICATION DEVLOPMENT" component={Mobile}/>
                <Stack.Screen  name="STANDALONE APPLICATION DEVLOPMENT" component={Standalone}/>
                <Stack.Screen  name="SESSION" component={Session}/>
            </Stack.Group>
        </Stack.Navigator>
    )
}

export default StackNavigator;
