import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Event } from '../entities/Event';
import { addEvent, fetchEvents } from '../store/actions/event.actions';
import { StackParamList } from "../typings/navigations";

type ScreenNavigationType = NativeStackNavigationProp <StackParamList, "EventScreen">

export default function EventScreen() {
    const navigation = useNavigation<ScreenNavigationType>()
    const [title, onChangeTitle] = React.useState('');
    const [description, onChangeDescription] = React.useState('');

    const events: Event[] = useSelector((state: any) => state.event?.events);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchEvents())
    }, []);

    const handleAddEvent = () => {
        const event: Event = new Event(title, description)
        dispatch(addEvent(event))
    }

    const renderEvents = ({ item }: { item: any }) => (
        <View>
        <Text>{item.title}</Text>
        <Text>{item.description}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text> Event Screen </Text>

            <FlatList 
                data={events}
                renderItem={renderEvents}
            />

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