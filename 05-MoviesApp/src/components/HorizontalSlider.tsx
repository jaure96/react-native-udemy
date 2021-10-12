import React from 'react'
import { View, Text, FlatList } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import MoviePoster from './MoviePoster';

interface Props {
    title?: string,
    movies: Movie[]
}

const HorizontalSlider = ({ title, movies }: Props) => {
    return (
        <View style={{
            height: title ? 260 : 220,
            alignItems: 'center'
        }}>
            {title && <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{title}</Text>}
            <FlatList
                data={movies}
                renderItem={({ item }: any) => (
                    <MoviePoster movie={item} height={200} width={140} />
                )}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default HorizontalSlider
