import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { AuthContext } from '../context/AuthContext';

const Tab2Screen = () => {

    const { signIn, logOut, authState: { isLoggedIn } } = useContext(AuthContext)

    return (
        <View style={styles.globalMagin}>
            <Text>Tab 2 screen</Text>

            {!isLoggedIn && <Button
                title='Sign in'
                onPress={signIn}
            />}

            {isLoggedIn && <Button
                title='Log out'
                onPress={logOut}
            />}

        </View>
    )
}

export default Tab2Screen
