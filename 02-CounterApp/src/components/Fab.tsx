import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet, TouchableNativeFeedback, Platform } from 'react-native';

interface Props {
    title: string,
    position?: 'br' | 'bl',
    onPress: () => void,

}


const Fab = ({ title, onPress, position = 'br' }: Props) => {

    const ios = () => {
        return <TouchableOpacity activeOpacity={0.5} style={styles.fabLocation} onPress={onPress}>
            <View style={styles.fab}>
                <Text style={styles.fabText}>-1</Text>
            </View>
        </TouchableOpacity>
    }

    const android = () => {
        return (
            <View style={[
                styles.fabLocation,
                position === 'bl' ? styles.left : styles.right
            ]}>
                <TouchableNativeFeedback
                    background={TouchableNativeFeedback.Ripple('black', false, 30)}
                    onPress={onPress}
                >
                    <View style={styles.fab}>
                        <Text style={styles.fabText}>{title}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>

        )
    }

    return Platform.OS === 'ios' ? ios() : android()
}

export default Fab


const styles = StyleSheet.create({
    fabLocation: {
        position: 'absolute',
        bottom: 25
    },
    right: {
        right: 25
    },
    left: {
        left: 25
    },
    fab: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    },
    fabText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})