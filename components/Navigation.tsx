import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../App';
import EditProfileScreen from '../screens/EditProfileScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';
import Screen1 from './../screens/Screen1';
import NameScreen from '../screens/NameScreen';
import AddEventScreen from '../screens/AddEventScreen';
import GetEventScreen from '../screens/GetEventScreen';
import QueryEventScreen from '../screens/QueryEventScreen';
import { StackParamList } from "./../typings/navigations";

const Stack = createNativeStackNavigator<StackParamList>();
const Tab = createBottomTabNavigator();

function ChatStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="NameScreen" component={NameScreen} />
            <Stack.Screen name="Screen1" component={Screen1} />
        </Stack.Navigator>
    );
}

function QueryStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="QueryEventScreen" component={QueryEventScreen} /> 
        </Stack.Navigator>
    );
}

function EventStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="GetEventScreen" component={GetEventScreen} />
            <Stack.Screen name="AddEventScreen" component={AddEventScreen} />
        </Stack.Navigator>
    );
}

function ProfileStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        </Stack.Navigator>
    )
}


export default function Navigation() {
    const user = useSelector((state: RootState) => state.user.loggedInUser)

    return (
        <NavigationContainer>
            {/* Move navigation related code to a seperate component that is used here */}
            {/* Determine if the user is logged in and display:
        A stack navigator (only) with signup and login
        Our "normal" app with tabs navigation */}
            {user !== null ? (
                // Show the app with all navigation
                <Tab.Navigator screenOptions={{ headerShown: false }}>
                    <Tab.Screen name="Home" component={HomeScreen} />
                    {/* <Tab.Screen name="Discover" component={DiscoverScreen} /> */}
                    <Tab.Screen name="Chat" component={ChatStackNavigator} />
                    <Tab.Screen name="Menu" component={ProfileStackNavigator} />
                    <Tab.Screen name="Events" component={EventStackNavigator} /> 
                    <Tab.Screen name="QueryEvents" component={QueryStackNavigator} />                    
                
                </Tab.Navigator>
            ) : (
                // show a stack navigator with only signup and login screens.
                <Stack.Navigator>
                    <Stack.Screen name="Signup" component={SignupScreen} />
                    <Stack.Screen name="LoginScreen" component={LoginScreen} /> 
                </Stack.Navigator>
            )}
        </NavigationContainer>
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