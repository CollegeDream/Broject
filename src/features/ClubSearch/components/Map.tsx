import { Text, View } from "react-native";
import React, { useEffect, useState } from 'react'
import MapView, { LocalTile, Marker } from 'react-native-maps'
import GetLocation from 'react-native-get-location'

export const CustomMap = () => {
    type Location = {
        latitude: number,
        longitude: number
    }

    const initialLocation: Location = {
        latitude: 47.78,
        longitude: -122.43
    }
    const [myLocation, setMyLocation] = useState(initialLocation)
    const [pin, setPin ] = useState<Location>(initialLocation)
     
    const local = {
        latitude: "47.78",
        longitude: "-122.43"
    }
    useEffect(() => {
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 60000,
        })
            .then(location => {
                const coordinates: Location = {
                    latitude: location.latitude,
                    longitude: location.longitude
                };
                console.log(coordinates)
                setMyLocation(coordinates);
                setPin(coordinates)
            })
            .catch(error => {
                const { code, message } = error;
                console.warn(code, message);
            });
    }, []);
    return (
        <View>
            <MapView className="w-full h-full"
                region={{
                    latitude: myLocation.latitude,
                    longitude: myLocation.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                provider="google"
            >
            <Marker
                coordinate={pin}
                title = 'My Location'
                description="I am here"
            />
            
            </MapView>
        </View >
    )

}

