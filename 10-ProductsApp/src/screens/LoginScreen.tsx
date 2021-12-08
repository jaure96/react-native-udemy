import React from 'react'
import { Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Background from '../components/Background'
import WhiteLogo from '../components/WhiteLogo'
import { loginStyles } from '../theme/loginTheme'
import { useForm } from '../hooks/useForm';
import { StackScreenProps } from '@react-navigation/stack'

interface Props extends StackScreenProps<any, any> { }

const LoginScreen = ({ navigation }: Props) => {

    const { email, password, onChange } = useForm({
        email: '',
        password: ''
    })

    const onLogin = () => {
        console.log(email)
        console.log(password)
        Keyboard.dismiss()
    }

    return (
        <>
            <Background />

            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
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
                        onChangeText={value => onChange(value, 'email')}
                        onSubmitEditing={onLogin}
                        value={email}
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
                        onChangeText={value => onChange(value, 'password')}
                        onSubmitEditing={onLogin}
                        value={password}
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        secureTextEntry
                    />

                    <View style={loginStyles.buttonContainer}            >
                        <TouchableOpacity
                            activeOpacity={0.9}
                            style={loginStyles.button}
                            onPress={onLogin}
                        >
                            <Text style={loginStyles.buttonText}>Login</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={loginStyles.newUserContainer}            >
                        <TouchableOpacity
                            activeOpacity={0.9}
                            onPress={() => navigation.replace('RegisterScreen')}
                        >
                            <Text style={loginStyles.buttonText}>New account</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>




        </>
    )
}

export default LoginScreen
