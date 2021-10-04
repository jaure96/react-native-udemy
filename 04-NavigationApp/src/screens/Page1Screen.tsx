import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from '../theme/appTheme'

interface Props extends StackScreenProps<any, any> { }

const Page1Screen = ({ navigation }: Props) => {

    return (
        <View style={styles.globalMagin}>
            <Text style={styles.title}>Page 1 screen</Text>

            <Button title='go to page 2' onPress={() => navigation.navigate('Page2Screen')} />

            <Text>Navigate with params</Text>

            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    style={{
                        ...styles.bigButton,
                        backgroundColor: '#1F2665'
                    }}
                    onPress={() => navigation.navigate('PersonScreen', {
                        id: 1,
                        name: 'Pedro'
                    })}
                >
                    <Text style={styles.bigButonTxt}>Pedro</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        ...styles.bigButton,
                        backgroundColor: '#D19829'
                    }}
                    onPress={() => navigation.navigate('PersonScreen', {
                        id: 2,
                        name: 'Maria'
                    })}
                >
                    <Text style={styles.bigButonTxt}>Maria</Text>
                </TouchableOpacity>
            </View>




        </View>
    )
}

export default Page1Screen
