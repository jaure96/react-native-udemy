import React from 'react'
import { StyleSheet, Text, View, Dimensions, useWindowDimensions } from 'react-native'

/* const { width, height } = Dimensions.get('window')
 */
const DimensionsScreen = () => {

    const { width, height } = useWindowDimensions()

    return (
        <View>
            <View style={styles.container} >
                <View style={{
                    ...styles.cajaMorada,
                    width: width * 0.5
                    }} />
                <View style={styles.cajaNaranja} />
            </View>
            <Text style={styles.title}>W: {width} H: {height}</Text>
        </View>


    )
}

export default DimensionsScreen

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 300,
        backgroundColor: 'red'
    },
    cajaMorada: {
        backgroundColor: '#5856D6',
        height: '50%',
        //width: '50%'
    },
    cajaNaranja: {
        backgroundColor: '#F0A23B'
    },
    title: {
        fontSize: 20,
        textAlign: 'center'
    }
});