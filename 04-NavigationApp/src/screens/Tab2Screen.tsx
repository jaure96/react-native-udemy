import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

const Tab2Screen = () => {

    useEffect(() => {
        console.log('Tab 2 efect')
     }, [])

    return (
        <View>
            <Text>Tab 2 screen</Text>
        </View>
    )
}

export default Tab2Screen
