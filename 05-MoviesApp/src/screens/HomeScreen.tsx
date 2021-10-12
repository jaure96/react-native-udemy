import React from 'react'
import { ActivityIndicator, Dimensions, FlatList, Text, View, ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Carousel from 'react-native-snap-carousel';

import useMovies from '../hooks/useMovies'
import MoviePoster from '../components/MoviePoster';

const { width: windowWidth } = Dimensions.get('window')
const HomeScreen = () => {
    const { top } = useSafeAreaInsets()
    const { moviesInCinema, isLoading } = useMovies()


    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator color='red' size={100} />
            </View>
        )
    }

    return (
        <ScrollView>
            <View style={{ marginTop: top + 20 }}>

                <View style={{ height: 440 }}>
                    <Carousel
                        data={moviesInCinema}
                        renderItem={({ item }: any) => <MoviePoster movie={item} />}
                        sliderWidth={windowWidth}
                        itemWidth={300}
                    />
                </View>

                <View style={{ backgroundColor: 'red', height: 260 }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>En cine</Text>
                    <FlatList
                        data={moviesInCinema}
                        renderItem={({ item }: any) => (
                            <MoviePoster movie={item} height={200} width={140} />
                        )}
                        keyExtractor={(item) => item.id.toString()}
                        horizontal
                        showsVerticalScrollIndicator={false}
                    />
                </View>

                <View style={{ backgroundColor: 'red', height: 250 }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>En cine</Text>
                    <FlatList
                        data={moviesInCinema}
                        renderItem={({ item }: any) => (
                            <MoviePoster movie={item} height={200} width={140} />
                        )}
                        keyExtractor={(item) => item.id.toString()}
                        horizontal
                        showsVerticalScrollIndicator={false}
                    />
                </View>

            </View>
        </ScrollView>





    )
}

export default HomeScreen
