import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PokemonScreen from "../screens/PokemonScreen";
import SearchScreen from "../screens/SearchScreen";
import { RootStackParams } from "./Tab1";

const Stack = createStackNavigator<RootStackParams>();

const Tab2 = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'white'
                }
            }}
        >
            <Stack.Screen name="HomeScreen" component={SearchScreen} />
            <Stack.Screen name="PokemonScreen" component={PokemonScreen} />

        </Stack.Navigator>
    );
}

export default Tab2