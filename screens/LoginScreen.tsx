import * as SecureStore from 'expo-secure-store';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { rehydrateUser, login } from '../store/actions/user.actions';
import Appbutton from "../components/AppButton"

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    // async function readPersistedUserInfo() {
    //     const token = await SecureStore.getItemAsync('idToken');
    //     const userJson = await SecureStore.getItemAsync('user');
    //     let user = null;
    //     if (userJson) {
    //         user = JSON.parse(userJson);
    //     }
    //     if (user) {
    //         // then we have a priv. login
    //         // restore the signup by updating the redux store based on user and token.
    //         dispatch(rehydrateUser(user, token!))
    //     }
    // }

    // useEffect(() => {
    //     //readPersistedUserInfo();
    // }, [])

   

    return (
        <View style={styles.container}>
            <Text>Login Screen</Text>
            <TextInput value={email} placeholder="email" onChangeText={setEmail} />
            <TextInput value={password} placeholder="password" onChangeText={setPassword} />
            
            <Appbutton title="Login" onPress={() => dispatch(login(email, password))} />
            
            {/* <Button title="login" onPress={() => dispatch(login(email, password))} /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})