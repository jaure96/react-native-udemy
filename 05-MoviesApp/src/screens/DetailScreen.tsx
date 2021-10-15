import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { ActivityIndicator, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { RootStackParams } from '../navigation/Navigation';
import Icon from 'react-native-vector-icons/MaterialIcons'
import useMovieDetails from '../hooks/useMovieDetails';
import MovieDetails from '../components/MovieDetails';

interface Props extends StackScreenProps<RootStackParams, 'detailScreen'> { }


const screenHight = Dimensions.get('screen').height

const DetailScreen = ({ navigation, route }: Props) => {

    const movie = route.params
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

    const { isLoading, movieFull, cast } = useMovieDetails(movie.id)


    return (

        <ScrollView>
            <View style={styles.imageContainer}>
                <View style={styles.imageBorder}>
                    <Image
                        source={{ uri }}
                        style={styles.posterImage}
                    />
                </View>

            </View>
            <View style={styles.marginContainer}>
                <Text style={styles.subtitle}>{movie.original_title}</Text>
                <Text style={styles.title}>{movie.title}</Text>
            </View>
            <View >
                {isLoading ?
                    <ActivityIndicator size={30} color='red' style={{ marginTop: 20 }} /> :
                    <MovieDetails movieFull={movieFull!} cast={cast} />
                }
            </View>

            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()} >
                <Icon
                    color='white'
                    name='chevron-left'
                    size={60}
                />
            </TouchableOpacity>


        </ScrollView>


    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: screenHight * 0.7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 3.84,
        elevation: 10,
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
    },
    imageBorder: {
        flex: 1,
        overflow: 'hidden',
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
    },
    posterImage: {
        flex: 1
    },
    marginContainer: {
        marginHorizontal: 20,
        marginTop: 20
    },
    subtitle: {
        fontSize: 18,
        opacity: 0.8
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20
    },
    backButton: {
        position: 'absolute',
        zIndex: 999,
        elevation: 30,
        top: 5,
        left: 0
    }

});

export default DetailScreen
