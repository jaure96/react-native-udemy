import React from 'react'
import { Text, View } from 'react-native'
import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/MaterialIcons';
import currencyFormater from 'currency-formatter'

interface Props {
    movieFull: MovieFull,
    cast: Cast[]
}

const MovieDetails = ({ movieFull, cast }: Props) => {
    return (
        <>
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name='star-outline' color='gray' size={16} />
                    <Text>{movieFull.vote_average}</Text>
                    <Text style={{ marginLeft: 5 }}>
                        - {movieFull.genres.map(g => g.name).join(',')}
                    </Text>
                </View>

                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>Historia</Text>
                <Text style={{ fontSize: 16 }}>{movieFull.overview}</Text>

                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>Presupuesto</Text>
                <Text style={{ fontSize: 16 }}>{currencyFormater.format(movieFull.budget, { code: 'USD' })}</Text>

            </View>


        </>
    )
}

export default MovieDetails
