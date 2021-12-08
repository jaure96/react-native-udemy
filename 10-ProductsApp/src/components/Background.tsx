import React from 'react'
import { Dimensions, View } from 'react-native'

const { width, height } = Dimensions.get('window')

const Background = () => {
    return (
        <View
            style={{
                position: 'absolute',
                backgroundColor: '#5856D6',
                top: -height*0.2,
                width: width * 1.6,
                height: height * 1.2,
                transform: [
                    { rotate: '-70deg' }
                ]
            }}
        />
    )
}

export default Background
