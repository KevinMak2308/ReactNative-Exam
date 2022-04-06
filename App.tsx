import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import SignupScreen from './screens/SignupScreen';
import chatReducer from './store/reducers/chat.reducer';
import userReducer from './store/reducers/user.reducer';
import { StackParamList } from "./typings/navigations";


const Stack = createNativeStackNavigator<StackParamList>();
const Tab = createBottomTabNavigator();

function ChatStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />
      <Stack.Screen name="Screen3" component={Screen3} />
    </Stack.Navigator>
  );
}






const rootReducer = combineReducers({
  chat: chatReducer,
  user: userReducer,
  // posts: PostReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
// const store = createStore(rootReducer);

export default function App() {

  return (
    <Provider store={store}>

      {/* Move navigation related code to a seperate component that is used here */}
      {/* Determine if the user is logged in and display:
      A stack navigator (only) with signup and login
      Our "normal" app with tabs navigation */}
      {/* {user !== undefined ? (
                // Show the app with all navigation
                
            ) : (
                // show a stack navigator with only signup and login screens.
                
            )} */}

      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Home" component={SignupScreen} />
          {/* <Tab.Screen name="Discover" component={DiscoverScreen} /> */}
          <Tab.Screen name="Chat" component={ChatStackNavigator} />
          {/* <Tab.Screen name="Menu" component={MenuScreen} /> */}
        </Tab.Navigator>



      </NavigationContainer>
    </Provider>
  )
}

