import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import BlackButton from '../components/BlackButton'
import { PermissionsContext } from '../context/PermissionsContext'

const PermissionsScreen = () => {

    const { permissions, askLocationPermissions } = useContext(PermissionsContext)



    return (
        <View style={styles.container} >
            <Text> Permissions screen</Text>

            <BlackButton
                title='Permiso'
                onPress={askLocationPermissions}
            />

            <Text>
                {JSON.stringify(permissions, null, 5)}
            </Text>

        </View>
    )
}

export default PermissionsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});