import React from 'react'
import { StyleSheet, View } from 'react-native'

const PositionScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cajaVerde}/>
            <View style={styles.cajaMorada}/>
            <View style={styles.cajaNaranja}/>            
        </View>
    )
}

export default PositionScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        /* width: 400,
        height: 400,
        justifyContent: 'center',
        alignItems: 'center', */
        backgroundColor: '#21EEEE'
    },
    cajaMorada:{
        width: 100,
        height: 100,
        backgroundColor:'#741099',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        right: 0
    },
    cajaNaranja:{
        width: 100,
        height: 100,
        backgroundColor:'#E6B350',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        right: 0,
        bottom: 0
    },
    cajaVerde:{
        /* width: 100,
        height: 100, */
        backgroundColor:'#27DC7C',
        borderWidth: 10,
        borderColor: 'white',
        /* position: 'absolute',
        left: 0,
        right: 0,
        bottom:0,
        top: 0 */
        ...StyleSheet.absoluteFillObject
    }
});