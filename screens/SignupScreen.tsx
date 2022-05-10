import * as SecureStore from 'expo-secure-store';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { rehydrateUser, signup } from '../store/actions/user.actions';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from "../typings/navigations";

type ScreenNavigationType = NativeStackNavigationProp<
    StackParamList,
    "Signup"
>



export default function SignupScreen() {
    const navigation = useNavigation<ScreenNavigationType>()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    async function readPersistedUserInfo() {
        const token = await SecureStore.getItemAsync('idToken');
        const userJson = await SecureStore.getItemAsync('user');
        let user = null;
        if (userJson) {
            user = JSON.parse(userJson);
        }
        if (user) {
            // then we have a priv. login
            // restore the signup by updating the redux store based on usre and token.
            dispatch(rehydrateUser(user, token!))
        }
    }

    useEffect(() => {
        //readPersistedUserInfo();
    }, [])


    return (
        <View style={styles.container}>
            <Text>Signup Screen</Text>
            <TextInput value={email} placeholder="email" onChangeText={setEmail} />
            <TextInput value={password} placeholder="password" onChangeText={setPassword} />
            <Button title="Signup" onPress={() => dispatch(signup(email, password))} />
            <Text>Already signed up?</Text>
            <Button title="Login here" onPress={() => navigation.navigate("LoginScreen")} />
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