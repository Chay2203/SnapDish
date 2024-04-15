import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Restaurants from './screens/Restaurants';

const Stack = createNativeStackNavigator();

import {View, Text} from 'react-native';
import React from 'react';

export default function App() {
    return (
        <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Restaurants" component={Restaurants} />
        </Stack.Navigator>
        </NavigationContainer>
    );
}