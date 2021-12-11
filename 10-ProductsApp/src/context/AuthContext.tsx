import React, { useEffect, useReducer } from "react";
import { createContext } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import cafeApi from "../api/cafeApi";
import { Usuario, LoginResponse, LoginData, RegisterData } from '../interfaces/loginInterfaces';
import { authReducer, AuthState } from './authReducer';

type AuthContextProps = {
    errorMessage: string,
    token: string | null,
    user: Usuario | null,
    status: 'checking' | 'authenticated' | 'not-authenticated',
    signUp: (registerData: RegisterData) => void,
    signIn: (loginData: LoginData) => void,
    removeError: () => void,
    logOut: () => void
}

const authInitialState: AuthState = {
    status: 'checking',
    token: null,
    user: null,
    errorMessage: ''
}

export const AuthContext = createContext({} as AuthContextProps)

export const AuthProvider = ({ children }: any) => {

    const [state, dispatch] = useReducer(authReducer, authInitialState)

    useEffect(() => {
        checkToken()
    }, [])

    const checkToken = async () => {
        const token = await AsyncStorage.getItem('token')

        //there is no token
        if (!token) return dispatch({ type: 'notAuthenticated' })

        //there is a token
        const resp = await cafeApi.get('/auth')
        if (resp.status !== 200) {
            return dispatch({ type: 'notAuthenticated' })
        }
        await AsyncStorage.setItem('token', resp.data.token) //Every time I enter, renovate the token
        dispatch({
            type: 'signUp', payload: {
                token: resp.data.token,
                user: resp.data.usuario
            }
        })
    }

    const signUp = async ({ nombre, correo, password }: RegisterData) => {
        try {
            const { data } = await cafeApi.post<LoginResponse>('/usuarios', { nombre, correo, password })
            dispatch({
                type: 'signUp',
                payload: {
                    token: data.token,
                    user: data.usuario
                }
            })
            await AsyncStorage.setItem('token', data.token)
        } catch (error: any) {
            dispatch({ type: 'addError', payload: error.response.data.errors[0].msg || 'Please check the information' })
        }
    }
    const signIn = async ({ correo, password }: LoginData) => {
        try {
            const { data } = await cafeApi.post<LoginResponse>('/auth/login', { correo, password })
            dispatch({
                type: 'signUp',
                payload: {
                    token: data.token,
                    user: data.usuario
                }
            })
            await AsyncStorage.setItem('token', data.token)
        } catch (error: any) {
            dispatch({ type: 'addError', payload: error.response.data.msg || 'Incorrent information' })
        }
    }
    const removeError = () => dispatch({ type: 'removeError' })

    const logOut = async () => {
        await AsyncStorage.removeItem('token')
        dispatch({ type: 'logOut' })

    }

    return (
        <AuthContext.Provider value={{
            ...state,
            signUp,
            signIn,
            removeError,
            logOut
        }} >
            {children}
        </AuthContext.Provider>)
}