import React from 'react'
import { Button, Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> { }

const Page3Screen = ({ navigation }: Props) => {
    return (
        <View>
            <Text style={styles.title}>Page 3 screen</Text>

            <Button title='go back' onPress={() => navigation.pop()} />
            <Button title='go to page 1' onPress={() => navigation.popToTop()} />

        </View>
    )
}

export default Page3Screen
