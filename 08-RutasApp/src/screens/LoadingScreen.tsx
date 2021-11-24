import React from 'react'
import { ActivityIndicator, View } from 'react-native'

const LoadingScreen = () => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <ActivityIndicator
                color={'black'}
                size={50}
            />
        </View>
    )
}

export default LoadingScreen
