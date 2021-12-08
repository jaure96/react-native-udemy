import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native'
import WhiteLogo from '../components/WhiteLogo'
import { useForm } from '../hooks/useForm'
import { loginStyles } from '../theme/loginTheme'

interface Props extends StackScreenProps<any, any> { }

const RegisterScreen = ({ navigation }: Props) => {

    const { email, password, name, onChange } = useForm({
        email: '',
        password: '',
        name: ''
    })

    const onRegister = () => {
        console.log(email, password, name)
        Keyboard.dismiss()
    }

    return (
        <>
            <KeyboardAvoidingView
                style={{ flex: 1, backgroundColor: '#5856D6' }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <View style={loginStyles.formContainer} >
                    <WhiteLogo />
                    <Text style={loginStyles.title} >Register</Text>

                    <Text style={loginStyles.label} >Name:</Text>
                    <TextInput
                        placeholder='Enter your email'
                        placeholderTextColor='rgba(255,255,255,0.4)'
                        underlineColorAndroid='white'
                        style={[
                            loginStyles.inputField,
                            (Platform.OS === 'ios') && loginStyles.inputFieldIOS
                        ]}
                        selectionColor='white'
                        onChangeText={value => onChange(value, 'email')}
                        onSubmitEditing={onRegister}
                        value={email}
                        autoCapitalize={'words'}
                        autoCorrect={false}
                    />

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
                        onSubmitEditing={onRegister}
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
                        onSubmitEditing={onRegister}
                        value={password}
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        secureTextEntry
                    />

                    <View style={loginStyles.buttonContainer}            >
                        <TouchableOpacity
                            activeOpacity={0.9}
                            style={loginStyles.button}
                            onPress={onRegister}
                        >
                            <Text style={loginStyles.buttonText}>Create account</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => navigation.replace('LoginScreen')}
                        style={loginStyles.returnButton}
                    >
                        <Text style={loginStyles.buttonText}>Login</Text>
                    </TouchableOpacity>

                </View>
            </KeyboardAvoidingView>




        </>
    )
}

export default RegisterScreen
