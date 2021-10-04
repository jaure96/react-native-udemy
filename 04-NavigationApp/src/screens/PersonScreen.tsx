import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { RootStackParams } from '../navigator/StackNavigator'
import { styles } from '../theme/appTheme'

interface Props extends StackScreenProps<RootStackParams, 'PersonScreen'>{}

const PersonScreen = ({route, navigation}: Props) => {

    const params = route.params

    useEffect(() => {
        navigation.setOptions({
            title: params.nombre
        })
    }, [])
 
    return (
        <View style={styles.globalMagin}>
            <Text style={styles.title} > Person screen </Text>
            <Text style={styles.title} > {JSON.stringify(params)} </Text>
        </View>
    )
}

export default PersonScreen
