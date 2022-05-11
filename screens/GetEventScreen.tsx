import { getStateFromPath, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Event } from '../entities/Event';
import { fetchEvents, userParticipating } from '../store/actions/event.actions';
import { StackParamList } from "../typings/navigations";

type ScreenNavigationType = NativeStackNavigationProp<StackParamList, "GetEventScreen">

export default function EventScreen() {

    const navigation = useNavigation<ScreenNavigationType>()

    const events: Event[] = useSelector((state: any) => state.event?.events);

    const user = useSelector((state: any) => state.user?.loggedInUser);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchEvents())
    }, []);

    const renderEvents = ({ item }: { item: Event }) => {
        console.log("Here is item.participating: ", item.participating)
        const going: boolean | undefined = item.participating && item.participating.findIndex(email => email == user.email) > -1 ; 
        
        return (  
        <View>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
            {!going ? (
            <Button
                onPress={() => participateButton(item.id)}
                title="Going"
            />
            ) : (
            <Button
                onPress={notParticipateButton}
                title="Not Going"
            />
            )
        }
        </View>   
    )
}

    const participateButton = (id: any) => {

        console.log("This is our event id: ", id);
        dispatch(userParticipating(user.email, id))

        console.log("This is the user email: ", user.email);
        alert("You've responded to the event.")
    }

    const notParticipateButton = () => {

        alert("You've responded to the event.")
    }

    return (
        
        <View style={styles.container}>
            <Text> All Events </Text>
            <Button title='Create Event' onPress={() => navigation.navigate("AddEventScreen")} />

            <FlatList
                data={events}
                renderItem={renderEvents}
            />
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