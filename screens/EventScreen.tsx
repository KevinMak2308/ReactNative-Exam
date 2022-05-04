import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Name } from '../entities/Name';
import { addName, fetchName } from '../store/actions/name.actions';
import { StackParamList } from "../typings/navigations";

type ScreenNavigationType = NativeStackNavigationProp<
    StackParamList,
    "EventScreen"
>

export default function EventScreen() {
    const navigation = useNavigation<ScreenNavigationType>()
    const [first, onChangeFirst] = React.useState('');
    const [last, onChangeLast] = React.useState('');

    const names: Name[] = useSelector((state: any) => state.name?.names)

    
    const dispatch = useDispatch()

    useEffect(() => { // only runs dispatch the first time the component renders
        dispatch(fetchName())
    }, [])

    const renderName = ({ item }: { item: any }) => (
        <Text>{item.first}</Text>
        
    );
  

    const handleAddName = () => {
        const name: Name = new Name(first, last );
        dispatch(addName(name));
    }



    return (
        <View style={styles.container}>
            <Text> Event Screen </Text>
            
            <FlatList
                data={names}
                renderItem={({item}) => <Text> {item.first} </Text> }
               
            />

            <TextInput
                onChangeText={onChangeFirst}
                value={first}
                placeholder="first name"
            />
              <TextInput
                onChangeText={onChangeLast}
                value={last}
                placeholder="last name"
            />
            <Button title="Create Name" onPress={handleAddName} />
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