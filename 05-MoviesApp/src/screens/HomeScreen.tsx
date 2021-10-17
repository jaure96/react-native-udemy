import React from 'react'
import { ActivityIndicator, Dimensions, FlatList, Text, View, ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Carousel from 'react-native-snap-carousel';

import useMovies from '../hooks/useMovies'
import MoviePoster from '../components/MoviePoster';
import HorizontalSlider from '../components/HorizontalSlider';
import GradientBackground from '../components/GradientBackground';

const { width: windowWidth } = Dimensions.get('window')
const HomeScreen = () => {
    const { top } = useSafeAreaInsets()
    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies()

    const getPosterColor = (index: number) => {
        console.log(index)
    }


    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator color='red' size={100} />
            </View>
        )
    }

    return (
        <GradientBackground >
            <ScrollView>
                <View style={{ marginTop: top + 20 }}>

                    <View style={{ height: 440 }}>
                        <Carousel
                            data={nowPlaying}
                            renderItem={({ item }: any) => <MoviePoster movie={item} />}
                            sliderWidth={windowWidth}
                            itemWidth={300}
                            inactiveSlideOpacity={0.9}
                            onSnapToItem={index => getPosterColor(index)}
                        />
                    </View>
                    <HorizontalSlider title='Popular' movies={popular} />
                    <HorizontalSlider title='Top rated' movies={topRated} />
                    <HorizontalSlider title='Upcoming' movies={upcoming} />


                </View>
            </ScrollView>
        </GradientBackground>

    )
}

export default HomeScreen
