import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { Todo } from './entities/Todo';

export default function App() {
  const [text, setText] = useState('')
  const [todos, setTodos] = useState([] as Todo[])

  const renderItem = ({ item }: { item: Todo }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  const handleAddTodo = () => {
    const todo = new Todo(Math.random().toString(), text)
    setTodos((todos: Todo[]) => [...todos, todo])
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>Anton and Anne is hopefully happy today since he is learning React Native</Text>
      <TextInput value={text} onChangeText={setText} style={styles.textInput} />
      <Button title="Add todo" onPress={handleAddTodo} />

      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      <StatusBar style="auto" />
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
  textInput: {
    borderColor: '#000',
    borderWidth: 1
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
