import React from 'react'
import MapView from 'react-native-maps';
import useLocation from '../hooks/useLocation';
import LoadingScreen from '../screens/LoadingScreen';


const Map = () => {

    const { hasLocation, initialPosition } = useLocation()

    if (!hasLocation) return <LoadingScreen />

    return (
        <>
            <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    ...initialPosition,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                showsUserLocation
            >
            </MapView>
        </>
    )
}

export default Map
