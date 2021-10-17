import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../context/GradientContext';

interface Props {
    children: JSX.Element | JSX.Element[]
}

const GradientBackground = ({ children }: Props) => {

    const {colors:{primary, secondary}} = useContext(GradientContext)

    return (
        <View style={{ flex: 1 }}>
            <LinearGradient
                colors={[primary, secondary, 'white']}
                style={{ ...StyleSheet.absoluteFillObject }}
                start={{ x: 0.1, y: 0.1 }}
                end={{ x: 0, y: 0.7 }}
            />
            {children}
        </View>
    )
}

export default GradientBackground
