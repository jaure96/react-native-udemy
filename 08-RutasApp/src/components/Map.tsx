import React, { useRef } from 'react'
import MapView from 'react-native-maps';
import useLocation from '../hooks/useLocation';
import LoadingScreen from '../screens/LoadingScreen';
import Fab from './Fab';


const Map = () => {

    const { hasLocation, initialPosition, getCurrentLocation } = useLocation()
    const mapViewRef = useRef<MapView>()


    const centerPosition = async () => {
        const { latitude, longitude } = await getCurrentLocation()
        mapViewRef.current?.animateCamera({
            center: { latitude, longitude }
        })
    }


    if (!hasLocation) return <LoadingScreen />
    return (
        <>
            <MapView
                ref={el => mapViewRef.current = el!}
                style={{ flex: 1 }}
                initialRegion={{
                    ...initialPosition,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                showsUserLocation
            >
            </MapView>
            <Fab
                iconName={'compass-outline'}
                onPress={centerPosition}
                style={{
                    position: 'absolute',
                    bottom: 10,
                    right: 10
                }}
            />
        </>
    )
}

export default Map
