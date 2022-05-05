import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Event } from '../entities/Event';
import { addEvent } from '../store/actions/event.actions';
import { StackParamList } from "../typings/navigations";

    type ScreenNavigationType = NativeStackNavigationProp <StackParamList, "AddEventScreen">

    export default function EventScreen() {
    const navigation = useNavigation<ScreenNavigationType>()

    const [title, onChangeTitle] = React.useState('');
    const [description, onChangeDescription] = React.useState('');

    const events: Event[] = useSelector((state: any) => state.event?.events);
    const dispatch = useDispatch();

    const handleAddEvent = () => {
        const event: Event = new Event(title, description)
        dispatch(addEvent(event))
    }

    return (
        <View style={styles.container}>
            <Text> Create Event </Text>
            
            <TextInput 
                onChangeText={onChangeTitle}
                value={title}
                placeholder="Event Title"
                />

            <TextInput 
                onChangeText={onChangeDescription}
                value={description}
                placeholder="Event Description"
                />

            <Button title="Create Event" onPress={handleAddEvent} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
})