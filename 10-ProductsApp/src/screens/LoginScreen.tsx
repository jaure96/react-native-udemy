import React from 'react'
import { Platform, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Background from '../components/Background'
import WhiteLogo from '../components/WhiteLogo'
import { loginStyles } from '../theme/loginTheme'

const LoginScreen = () => {
    return (
        <>
            <Background />

            <View style={loginStyles.formContainer} >
            <WhiteLogo />
            <Text style={loginStyles.title} >Login</Text>

            <Text style={loginStyles.label} >Email:</Text>
            <TextInput
                placeholder='Enter your email'
                placeholderTextColor='rgba(255,255,255,0.4)'
                keyboardType='email-address'
                underlineColorAndroid='white'
                style={[
                    loginStyles.inputField,
                    (Platform.OS === 'ios') && loginStyles.inputFieldIOS
                ]}
                selectionColor='white'

                autoCapitalize={'none'}
                autoCorrect={false}
            />

            <Text style={loginStyles.label} >Password:</Text>
            <TextInput
                placeholder='Enter your password'
                placeholderTextColor='rgba(255,255,255,0.4)'
                underlineColorAndroid='white'
                style={[
                    loginStyles.inputField,
                    (Platform.OS === 'ios') && loginStyles.inputFieldIOS
                ]}
                selectionColor='white'

                autoCapitalize={'none'}
                autoCorrect={false}
            />

            <View style={loginStyles.buttonContainer}            >
                <TouchableOpacity
                    activeOpacity={0.9}
                    style={loginStyles.button}
                >
                    <Text style={loginStyles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>

            <View style={loginStyles.newUserContainer}            >
                <TouchableOpacity
                                    activeOpacity={0.9}
                onPress={()=>console.log('press')}    
                >
                    <Text style={loginStyles.buttonText}>New account</Text>
                </TouchableOpacity>
            </View>
            </View>

            
        </>
    )
}

export default LoginScreen
