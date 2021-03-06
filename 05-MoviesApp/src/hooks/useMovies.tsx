import React, { useEffect, useState } from 'react'
import movieDB from '../api/movieDB'
import { Movie, MoviesResponse } from '../interfaces/movieInterface';

interface MoviesState {
    nowPlaying: Movie[],
    popular: Movie[],
    topRated: Movie[],
    upcoming: Movie[],
}

const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [movies, setMovies] = useState<MoviesState>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upcoming: [],
    })


    const getMovies = async () => {
        const nowPlayingPromise = movieDB.get<MoviesResponse>('/now_playing')
        const popularPromise = movieDB.get<MoviesResponse>('/popular')
        const topRatedPromise = movieDB.get<MoviesResponse>('/top_rated')
        const upcomingPromise = movieDB.get<MoviesResponse>('/upcoming')

        const resps = await Promise.all([nowPlayingPromise, popularPromise, topRatedPromise, upcomingPromise])

        setMovies({
            nowPlaying: resps[0].data.results,
            popular: resps[1].data.results,
            topRated: resps[2].data.results,
            upcoming: resps[3].data.results,
        })

        setIsLoading(false)
    }

    useEffect(() => {
        getMovies()
    }, [])

    return {
        ...movies,
        isLoading
    }
}

export default useMovies
