import { useRef } from 'react'
import { Animated } from 'react-native'

interface Props {
    initialOpacity: number,
    duration: number
}

const useFace = ({ initialOpacity, duration }: Props) => {
    const opacity = useRef(new Animated.Value(initialOpacity)).current

    const fadeIn = (callBack?: Function) => {
        Animated.timing(
            opacity,
            {
                toValue: 1,
                duration,
                useNativeDriver: true
            }
        ).start(() => callBack ? callBack() : null)
    }

    const fadeOut = () => {
        Animated.timing(
            opacity,
            {
                toValue: 0,
                duration,
                useNativeDriver: true
            }
        ).start()
    }

    return {
        fadeIn,
        fadeOut,
        opacity
    }
}

export default useFace
