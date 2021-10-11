import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import Icon from 'react-native-vector-icons/MaterialIcons';
import TouchableIcon from '../components/TouchableIcon';


const Tab2Screen = () => {

    useEffect(() => {
        console.log('Tab 1 efect')
    }, [])

    return (
        <View style={styles.globalMagin}>


            <Text style={styles.title}>Iconos</Text>
            <TouchableIcon iconName={'flight'} />
            <TouchableIcon iconName={'chat'} />
            <TouchableIcon iconName={'send'} />


        </View>
    )
}

export default Tab2Screen
