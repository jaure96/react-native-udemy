import React, { useEffect, useRef, useState } from 'react'
import MapView, { Polyline } from 'react-native-maps';
import useLocation from '../hooks/useLocation';
import LoadingScreen from '../screens/LoadingScreen';
import Fab from './Fab';


const Map = () => {

    const {
        hasLocation,
        initialPosition,
        userLocation,
        routeLines,
        getCurrentLocation,
        followUserLocation,
        stopFollowUserLocation
    } = useLocation()
    const mapViewRef = useRef<MapView>()
    const following = useRef<boolean>(true)
    const [showPolyline, setShowPolyline] = useState(true)

    useEffect(() => {
        followUserLocation()
        return () => {
            stopFollowUserLocation()
        }
    }, [])

    useEffect(() => {
        if (!following.current) return
        const { latitude, longitude } = userLocation
        mapViewRef.current?.animateCamera({
            center: { latitude, longitude }
        })
    }, [userLocation])

    const centerPosition = async () => {
        const { latitude, longitude } = await getCurrentLocation()
        following.current = true
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
                onTouchStart={() => following.current = false}
            >
                {showPolyline && <Polyline
                    coordinates={routeLines}
                    strokeColor='black'
                    strokeWidth={3}
                />}
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
            <Fab
                iconName={'brush-outline'}
                onPress={() => setShowPolyline(val => !val)}
                style={{
                    position: 'absolute',
                    bottom: 80,
                    right: 10
                }}
            />
        </>
    )
}

export default Map
