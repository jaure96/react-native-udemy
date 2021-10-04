import React from 'react'
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const SettingsScreen = () => {

    const insets = useSafeAreaInsets()

    return (
        <View style={{marginTop: insets.top}}>
            <Text>Settings screen</Text>
        </View>
    )
}

export default SettingsScreen
