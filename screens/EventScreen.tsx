import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Name } from '../entities/Name';
import { fetchName } from '../store/actions/name.actions';
import { StackParamList } from "../typings/navigations";

type ScreenNavigationType = NativeStackNavigationProp<
    StackParamList,
    "EventScreen"
>

export default function EventScreen() {
    const navigation = useNavigation<ScreenNavigationType>()
    const [title, onChangeTitle] = React.useState('');

    const isHappy = useSelector((state: any) => state.chat.isHappy) // subscribe to redux store and select attribute (isHappy)
    const names: Name[] = useSelector((state: any) => state.name?.names)

    // console.log("isHappy", isHappy);
    const dispatch = useDispatch()

    useEffect(() => { // only runs dispatch the first time the component renders
        dispatch(fetchName())
    }, [])

    const renderName = ({ item }: { item: any }) => (
        <View>
        <Text>{item.first}</Text>
        <Text>{item.last}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text> Event Screen </Text>
            <Button title="Go to screen 2" onPress={() => navigation.navigate("Screen2")} />

            <FlatList
                data={names}
                renderItem={renderName}
            />

            <TextInput
                onChangeText={onChangeTitle}
                value={title}
                placeholder="Name of Event"
            />
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