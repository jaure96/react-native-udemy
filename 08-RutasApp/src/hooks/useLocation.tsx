import { useEffect, useRef, useState } from "react"
import Geolocation from '@react-native-community/geolocation';
import { Location } from '../interface/interfaces';

const useLocation = () => {

    const watchId = useRef<number>()
    const [hasLocation, setHasLocation] = useState(false)
    const [initialPosition, setInitialPosition] = useState<Location>({
        latitude: 0,
        longitude: 0
    })
    const [userLocation, setUserLocation] = useState<Location>({
        latitude: 0,
        longitude: 0
    })

    useEffect(() => {
        getCurrentLocation().then(location => {
            setInitialPosition(location)
            setUserLocation(location)
            setHasLocation(true)
        })
    }, [])

    const getCurrentLocation = (): Promise<Location> => {
        return new Promise((resolve, reject) => {
            Geolocation.getCurrentPosition(
                ({ coords }) => {
                    resolve({
                        latitude: coords.latitude,
                        longitude: coords.longitude
                    })
                },
                err => reject({ err }), { enableHighAccuracy: true }
            );
        })
    }

    const followUserLocation = () => {
        watchId.current = Geolocation.watchPosition(
            ({ coords }) => {
                setUserLocation({
                    latitude: coords.latitude,
                    longitude: coords.longitude
                })
            },
            err => console.log({ err }), { enableHighAccuracy: true, distanceFilter: 10 }
        )
    }

    const stopFollowUserLocation = () => {
        if (watchId.current)
            Geolocation.clearWatch(watchId.current)
    }

    return {
        hasLocation,
        initialPosition,
        userLocation,
        getCurrentLocation,
        followUserLocation,
        stopFollowUserLocation
    }
}

export default useLocation
