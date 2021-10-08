import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import Icon from 'react-native-vector-icons/MaterialIcons';


const Tab2Screen = () => {

    useEffect(() => {
        console.log('Tab 1 efect')
    }, [])

    return (
        <View style={styles.globalMagin}>
            <Text style={styles.title}>Iconos</Text>

            <Text>
                <Icon name="flight" size={50} color="#900" />
            </Text>
            <Text>
                <Icon name="chat" size={50} color="#900" />
            </Text>
            <Text>
                <Icon name="send" size={50} color="#900" />
            </Text>

        </View>
    )
}

export default Tab2Screen
