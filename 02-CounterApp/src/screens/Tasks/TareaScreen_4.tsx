import React from 'react'
import { StyleSheet, View } from 'react-native'

const TareaCreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cajaMorada} />
            <View style={styles.cajaNaranja} />
            <View style={styles.cajaAzul} />
        </View>
    )
}

export default TareaCreen


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#385278',
        justifyContent:'space-between',
    },
    cajaMorada:{
        width:100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#6E0774',
        alignSelf: 'flex-end'
    },
    cajaNaranja:{
        width:100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#E9C154',
        alignSelf: 'center'
    },
    cajaAzul:{
        width:100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4CA'
    }
});