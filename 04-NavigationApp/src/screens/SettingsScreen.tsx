import React, { useContext } from 'react'
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AuthContext } from '../context/AuthContext';

const SettingsScreen = () => {

    const insets = useSafeAreaInsets()

    const {authState} = useContext(AuthContext)

    return (
        <View style={{marginTop: insets.top}}>
            <Text>Settings screen</Text>

            <Text>{JSON.stringify(authState, null, 4)}</Text>
        </View>
    )
}

export default SettingsScreen
