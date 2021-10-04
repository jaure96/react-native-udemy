import React from 'react'
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import SettingsScreen from '../screens/SettingsScreen';
import StackNavigator from './StackNavigator';
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { styles } from '../theme/appTheme';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {

    const { width } = useWindowDimensions()

    return (
        <Drawer.Navigator
            screenOptions={{
                drawerType: width >= 768 ? 'permanent' : 'front'
            }}
            drawerContent={(props) => <InternalMenu {...props} />}
        >
            <Drawer.Screen name="StackNavigator" options={{ title: 'StackNavigator' }} component={StackNavigator} />
            <Drawer.Screen name="SettingsScreen" options={{ title: 'Settings' }} component={SettingsScreen} />
        </Drawer.Navigator>
    );
}
export default MyDrawer


const InternalMenu = ({ navigation }: DrawerContentComponentProps) => {

    return (
        <DrawerContentScrollView>

            {/*  Avatar container */}
            <View style={styles.avatarContainer}>
                <Image
                    style={styles.avatar}
                    source={{
                        uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
                    }} />
            </View>


            {/*  Options container */}
            <View style={styles.menuContainer}>
                <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('StackNavigator')} >
                    <Text style={styles.menuText}>Navegation</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('SettingsScreen')}>
                    <Text style={styles.menuText}>Settings</Text>
                </TouchableOpacity>
            </View>


        </DrawerContentScrollView>
    )
}