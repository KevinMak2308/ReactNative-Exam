import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../store/actions/user.actions';

export default function SignupScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const loggedInUser = useSelector((state: any) => state.user.loggedInUser);
    const token = useSelector((state: any) => state.user.idToken);
    console.log("signupScreen", loggedInUser);
    console.log("token", token);

    return (
        <View style={styles.container}>
            <Text>Signup Screen</Text>
            <TextInput value={email} placeholder="email" onChangeText={setEmail} />
            <TextInput value={password} placeholder="password" onChangeText={setPassword} />
            <Button title="Signup" onPress={() => dispatch(signup(email, password))} />
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