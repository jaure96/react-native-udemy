import React, { useReducer } from "react";
import { createContext } from "react";
import { Usuario } from '../interfaces/appInterfaces';
import { authReducer, AuthState } from './authReducer';

type AuthContextProps = {
    errorMessage: string,
    token: string | null,
    user: Usuario | null,
    status: 'checking' | 'authenticated' | 'not-authenticated',
    signUp: () => void,
    signIn: () => void,
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

    const signUp = () => {

    }
    const signIn = () => {

    }
    const removeError = () => {

    }
    const logOut = () => {

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