import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Movie } from '../interfaces/movieInterface';

interface Props {
    movie: Movie,
    height?: number
    width?: number
}

const MoviePoster = ({ movie, width = 300, height = 420 }: Props) => {

    const navigation = useNavigation()

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('detailScreen' as never, movie as never)}
            style={{ width, height, marginHorizontal: 8 }}
        >
            <View style={styles.imageContainer}>
                <Image source={{ uri }} style={styles.image} />
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 20,
    },
    imageContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 3.84,

        elevation: 10,
    }
});

export default MoviePoster
