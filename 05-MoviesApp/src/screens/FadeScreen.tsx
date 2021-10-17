import React, { useRef } from 'react'
import { Animated, Button, View } from 'react-native'
import useFace from '../hooks/useFace'

const FadeScreen = () => {

    const { fadeIn, fadeOut, opacity } = useFace({
        initialOpacity: 0,
        duration: 300
    })


    return (
        <View style={{ flex: 1, backgroundColor: '#787878', justifyContent: 'center', alignItems: 'center' }}>
            <Animated.View style={{ backgroundColor: '#408080', width: 150, height: 150, borderColor: 'white', borderWidth: 10, opacity }} >

            </Animated.View>
            <Button title='fade in' onPress={fadeIn} />
            <Button title='fade out' onPress={fadeOut} />
        </View>
    )
}

export default FadeScreen
