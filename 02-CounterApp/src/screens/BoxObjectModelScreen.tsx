import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

const BoxObjectModelScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Box Object Model Screen</Text>
        </View>
    )
}

export default BoxObjectModelScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'red'
    },
    title: {
        padding:20,
        fontSize: 20,
        //width: 150,
        borderWidth: 10
        //backgroundColor: 'red'
    }
});