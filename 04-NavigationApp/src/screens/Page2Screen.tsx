import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props extends StackScreenProps<any, any> { }

const Page2Screen = ({ navigation }: Props) => {

    useEffect(() => {
        navigation.setOptions({
            title: 'Hola mundo',
            headerBackTitle: 'go back'
        })
    }, [])

    return (
        <View style={styles.globalMagin}>
            <Text style={styles.title}>Page 2 screen</Text>

            <Button
                title='go to page 3'
                onPress={() => navigation.navigate("Page3Screen")}
            />
        </View>
    )
}

export default Page2Screen
