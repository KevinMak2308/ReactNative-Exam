import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import chatReducer from './store/reducers/chat.reducer';


const Stack = createNativeStackNavigator();


const rootReducer = combineReducers({
  chat: chatReducer,
  //user: UserReducer,
  //posts: PostReducer
});

const store = createStore(rootReducer);

export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Screen1" component={Screen1} />
          <Stack.Screen name="Screen2" component={Screen2} />
          <Stack.Screen name="Screen3" component={Screen3} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

