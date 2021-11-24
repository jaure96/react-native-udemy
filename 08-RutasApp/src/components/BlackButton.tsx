import React from 'react'
import { StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native'

interface Props {
    title: string,
    onPress: () => void,
    style?: StyleProp<ViewStyle>
}

const BlackButton = ({ title, onPress, style = {} }: Props) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={{
                ...style as any,
                ...styles.blackButton
            }}
        >
            <Text style={styles.buttonText} >{title}</Text>
        </TouchableOpacity>
    )
}

export default BlackButton

const styles = StyleSheet.create({
    blackButton: {
        height: 50,
        width: 200,
        backgroundColor: 'black',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

    },
    buttonText: {
        color: 'white',
        fontSize: 20
    }
});
