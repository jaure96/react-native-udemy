import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useRef, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Dimensions, Image } from 'react-native'
import ImageColors from 'react-native-image-colors';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';

const windowWidth = Dimensions.get('window').width

interface Props {
    pokemon: SimplePokemon
}

const PokemonCard = ({ pokemon }: Props) => {

    const navigation = useNavigation()
    const isMounted = useRef(true)
    const [bgColor, setBgColor] = useState('grey')

    useEffect(() => {
        if (!isMounted.current) return;
        ImageColors.getColors(pokemon.picture, { fallback: 'grey' }).then(colors => {
            if (colors.platform === 'android')
                setBgColor(colors.dominant || 'grey')
            if (colors.platform === 'ios')
                setBgColor(colors.background || 'grey')

        })
        return () => {
            isMounted.current = false
        }
    }, [])

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigation.navigate('PokemonScreen' as never, { simplePokemon: pokemon, color: bgColor } as never)}
        >
            <View style={{
                ...styles.cardContainer,
                width: windowWidth * 0.4,
                backgroundColor: bgColor
            }} >
                {/* Nombre y id del pokemon */}
                <View >
                    <Text style={styles.name}>
                        {pokemon.name}
                        {'\n#' + pokemon.id}
                    </Text>
                </View>

                <View style={styles.pokebolaContainer}>
                    <Image
                        source={require('../assets/pokebola-blanca.png')}
                        style={styles.pokebola}
                    />
                </View>

                <FadeInImage
                    uri={pokemon.picture}
                    style={styles.pokemonImage}
                />

            </View>
        </TouchableOpacity>
    )
}

export default PokemonCard

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        height: 120,
        width: 25,
        marginBottom: 25,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    name: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        top: 20,
        left: 10
    },
    pokebola: {
        width: 100,
        height: 100,
        position: 'absolute',
        right: -25,
        bottom: -25

    },
    pokemonImage: {
        width: 120,
        height: 120,
        position: 'absolute',
        right: -8,
        bottom: -5
    },
    pokebolaContainer: {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: 0,
        right: 0,
        overflow: 'hidden',
        opacity: 0.5
    }
});