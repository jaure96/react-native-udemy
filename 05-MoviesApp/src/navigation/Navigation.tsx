import React from "react"
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import { Movie } from '../interfaces/movieInterface';

export type RootStackParams = {
    homeScreen: undefined,
    detailScreen: Movie
}

const Stack = createStackNavigator<RootStackParams>();

const Navigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="homeScreen" component={HomeScreen} />
            <Stack.Screen name="detailScreen" component={DetailScreen} />
        </Stack.Navigator>
    );
}

export default Navigation