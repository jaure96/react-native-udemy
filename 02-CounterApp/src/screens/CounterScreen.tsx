import React, { useState } from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import Fab from '../components/Fab';

const CounterScreen = () => {

    const [counter, setCounter] = useState(10)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Counter: {counter}</Text>

            <Fab title='+1' onPress={() => setCounter(counter + 1)} />
            <Fab title='-1' onPress={() => setCounter(counter - 1)} position={'bl'} />

        </View>
    )
}

export default CounterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 40,
        top: -10
    },

})