import React, { useEffect } from 'react'
import { createContext, useState } from "react";
import { AppState, Platform } from 'react-native';
import { check, PERMISSIONS, PermissionStatus, request } from "react-native-permissions";


export interface PermissionsState {
    locationStatus: PermissionStatus
}


export const permissionInitState: PermissionsState = {
    locationStatus: 'unavailable',
}

type PermissionsContextProps = {
    permissions: PermissionsState,
    askLocationPermissions: () => void,
    checkLocationPermissions: () => void

}


export const PermissionsContext = createContext({} as PermissionsContextProps)


export const PermissionsProvider = ({ children }: any) => {

    const [permissions, setPermissions] = useState(permissionInitState)

    useEffect(() => {
        AppState.addEventListener('change', state =>{
            if( state !== 'active') return 
            checkLocationPermissions()
        })
    }, [])

    const askLocationPermissions = async () => {
        let permissionStatus: PermissionStatus
        if (Platform.OS === 'ios') {
            permissionStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
        } else {
            permissionStatus = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
        }
        setPermissions({
            ...permissions,
            locationStatus: permissionStatus
        })
    }

    const checkLocationPermissions =async () => {
        let permissionStatus: PermissionStatus
        if (Platform.OS === 'ios') {
            permissionStatus = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
        } else {
            permissionStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
        }
        setPermissions({
            ...permissions,
            locationStatus: permissionStatus
        })
    }

    return (
        <PermissionsContext.Provider value={{
            permissions,
            askLocationPermissions,
            checkLocationPermissions
        }}
        >
            {children}
        </PermissionsContext.Provider>
    )

}