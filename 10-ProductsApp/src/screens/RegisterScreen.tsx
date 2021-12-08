import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext, useEffect } from 'react'
import { Alert, Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native'
import WhiteLogo from '../components/WhiteLogo'
import { useForm } from '../hooks/useForm'
import { loginStyles } from '../theme/loginTheme'
import { AuthContext } from '../context/AuthContext';

interface Props extends StackScreenProps<any, any> { }

const RegisterScreen = ({ navigation }: Props) => {

    const { signUp, removeError, errorMessage } = useContext(AuthContext)

    const { email, password, name, onChange } = useForm({
        email: '',
        password: '',
        name: ''
    })

    useEffect(() => {
        if (errorMessage.length === 0) return
        Alert.alert(
            'Incorrect register',
            errorMessage,
            [{ text: 'Ok', onPress: removeError }]
        )
    }, [errorMessage])

    const onRegister = () => {
        Keyboard.dismiss()
        signUp({
            nombre: name,
            correo: email,
            password
        })
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
                        placeholder='Enter your name'
                        placeholderTextColor='rgba(255,255,255,0.4)'
                        underlineColorAndroid='white'
                        style={[
                            loginStyles.inputField,
                            (Platform.OS === 'ios') && loginStyles.inputFieldIOS
                        ]}
                        selectionColor='white'
                        onChangeText={value => onChange(value, 'name')}
                        onSubmitEditing={onRegister}
                        value={name}
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
