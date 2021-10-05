import React from 'react'
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import SettingsScreen from '../screens/SettingsScreen';
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { styles } from '../theme/appTheme';
import BottomTabNavigator from './BottomTabNavigator';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
            <Drawer.Screen name="BottomTabNavigator" options={{ title: 'BottomTabNavigator' }} component={BottomTabNavigator} />
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
                <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('BottomTabNavigator')} >
                    <Text style={styles.menuIcon} >
                        <Icon name="place" size={20} />
                    </Text>
                    <Text style={styles.menuText}>Navegation</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('SettingsScreen')}>
                    <Text style={styles.menuIcon}>
                        <Icon name="settings" size={20} />
                    </Text>
                    <Text style={styles.menuText}>Settings</Text>
                </TouchableOpacity>
            </View>


        </DrawerContentScrollView>
    )
}