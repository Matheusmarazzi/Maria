import React from 'react';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import { StyleSheet, View, Text } from 'react-native';
import { Image } from 'expo-image';


export default function MapMoments() {
    const momentos = [
        { id: 1, titulo: 'Local do Primeiro Encontro', coordenadas: { latitude: -24.170966, longitude: -46.759442 }, foto: require('../../../assets/pictures/fototeste.jpeg') }
    ];
    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                initialRegion={{
                    latitude: -24.166720,
                    longitude: -46.763582,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                zoomLevel={12}
            >
                {momentos.map(momento => (
                    <Marker
                        //   style={{height: 100}}
                        key={momento.id}
                        coordinate={momento.coordenadas}
                        title={momento.titulo}
                        image={require('../../../assets/icons/coracao.png')}
                    >
                        <Callout>
                            <View style={styles.calloutContainer}>
                                <Text>{momento.titulo}</Text>
                            </View>
                        </Callout>
                    </Marker>
                ))}

            </MapView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: 500,
        height: 500,
    },
    calloutContainer: {
        width: 200,
        height: 200
    },
    calloutImage: {
        width: 200,
        height: 120,
        borderRadius: 5,
        objectFit: 'contain'

    }
});
