import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '../store/actions/user.actions';

export default function HomeScreen() {
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button title="Logout" onPress={() => dispatch(logout())} />
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