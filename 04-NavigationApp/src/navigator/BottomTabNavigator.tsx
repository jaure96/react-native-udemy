import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Tab1Screen from '../screens/Tab1Screen';
import Tab2Screen from '../screens/Tab2Screen';
import StackNavigator from './StackNavigator';
import { Platform, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


const TabAndorid = createMaterialBottomTabNavigator();
const BottomTabNavigatorAndroid = () => {
    return (
        <TabAndorid.Navigator
            sceneAnimationEnabled
            barStyle={{
                backgroundColor: 'black'
            }}

        >
            <TabAndorid.Screen
                options={{
                    title: 'Tab1',
                    tabBarIcon: ({ color, focused }) => {
                        return (<Text >
                            <Icon name="flight" size={20} color={color} />
                        </Text>)
                    }
                }}
                name="Tab1Screen"
                component={Tab1Screen}
            />
            <TabAndorid.Screen
                options={{
                    title: 'Tab2',
                    tabBarIcon: ({ color, focused }) => {
                        return (<Text >
                            <Icon name="mail" size={20} color={color} />
                        </Text>)
                    }

                }}
                name="Tab2Screen"
                component={Tab2Screen}
            />
            <TabAndorid.Screen
                options={{
                    title: 'Tab3',
                    tabBarIcon: ({ color, focused }) => {
                        return (<Text >
                            <Icon name="person" size={20} color={color} />
                        </Text>)
                    }
                }}
                name="Tab3Screen"
                component={StackNavigator}
            />
        </TabAndorid.Navigator >
    );
}


const BottomTabIOS = createBottomTabNavigator();
const BottomTabNavigatorIOS = () => {

    return (
        <BottomTabIOS.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, focused, size }) => {
                    let iconName: string
                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = 'T1'
                            break;
                        case 'Tab2Screen':
                            iconName = 'T2'
                            break;
                        case 'Tab3Screen':
                            iconName = 'T3'
                            break;
                    }
                    return <Text style={{ color }}>{iconName}</Text>
                }
            })}
        >
            <BottomTabIOS.Screen
                options={{
                    title: 'Tab1',
                    headerShown: false,
                    tabBarLabelStyle: {
                        fontSize: 12
                    }
                }}
                name="Tab1Screen"
                component={Tab1Screen}
            />
            <BottomTabIOS.Screen
                options={{
                    title: 'Tab2',
                    headerShown: false,
                    tabBarLabelStyle: {
                        fontSize: 12
                    }
                }}
                name="Tab2Screen"
                component={Tab2Screen}
            />
            <BottomTabIOS.Screen
                options={{
                    title: 'Tab3',
                    headerShown: false,
                    tabBarLabelStyle: {
                        fontSize: 12
                    }
                }}
                name="Tab3Screen"
                component={StackNavigator}
            />

        </BottomTabIOS.Navigator>
    );
}

const Tabs = () => Platform.OS === 'ios' ? <BottomTabNavigatorIOS /> : <BottomTabNavigatorAndroid />

export default Tabs