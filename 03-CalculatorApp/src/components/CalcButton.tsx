import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/AppTheme'

interface Props {
    text: string,
    color?: string,
    ancho?: boolean,
    action: (textNumber: string) => void
}

const CalcButton = ({ text, color = '#2D2D2D', ancho = false, action }: Props) => {
    return (
        <TouchableOpacity onPress={() => action(text)}>
            <View style={{
                ...styles.button,
                backgroundColor: color,
                width: ancho ? 180 : 80
            }}>
                <Text style={{
                    ...styles.buttonTxt,
                    color: color === '#A9ACAC' ? 'black' : 'white'
                }}>{text}</Text>
            </View>
        </TouchableOpacity>

    )
}

export default CalcButton
