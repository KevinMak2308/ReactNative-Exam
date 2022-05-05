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
    "NameScreen"
>

export default function NameScreen() {
    const navigation = useNavigation<ScreenNavigationType>()
    const [first, onChangeFirst] = React.useState('');
    const [last, onChangeLast] = React.useState('');

    const names: Name[] = useSelector((state: any) => state.name?.names)
    console.log("WE ARE HERE TO SEE NAMES: ", names);
    
    const dispatch = useDispatch()

    useEffect(() => { // only runs dispatch the first time the component renders
        dispatch(fetchName())
    }, [])
  
    const handleAddName = () => {
        const name: Name = new Name(first, last );
        dispatch(addName(name));
    }

    const renderName = ({ item }: { item: any }) => (
        <View>
        <Text>{item.first}</Text>
        <Text>{item.last}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text> Name Screen </Text>
            
                <FlatList
                data={names}
                renderItem={renderName}
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