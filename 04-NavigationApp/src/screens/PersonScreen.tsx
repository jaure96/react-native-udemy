import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext, useEffect } from 'react'
import { Text, View } from 'react-native'
import { RootStackParams } from '../navigator/StackNavigator'
import { styles } from '../theme/appTheme'
import { AuthContext } from '../context/AuthContext';

interface Props extends StackScreenProps<RootStackParams, 'PersonScreen'>{}

const PersonScreen = ({route, navigation}: Props) => {

    const params = route.params

    const {changeUsername} = useContext(AuthContext)

    useEffect(() => {
        navigation.setOptions({
            title: params.nombre
        })
    }, [])

    useEffect(() => {
        console.log(params.nombre)
        changeUsername(params.nombre)
    }, [])
 
    return (
        <View style={styles.globalMagin}>
            <Text style={styles.title} > Person screen </Text>
            <Text style={styles.title} > {JSON.stringify(params)} </Text>
        </View>
    )
}

export default PersonScreen
