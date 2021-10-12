import React, { useEffect, useState } from 'react'
import movieDB from '../api/movieDB'
import { Movie, MovieDBNowPaying } from '../interfaces/movieInterface'

const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [moviesInCinema, setMoviesInCinema] = useState<Movie[]>([])


    const getMovies = async () => {
        const resp = await movieDB.get<MovieDBNowPaying>('/now_playing')
        setMoviesInCinema(resp.data.results)
        setIsLoading(false)
    }

    useEffect(() => {
        getMovies()
    }, [])

    return {
        moviesInCinema,
        isLoading
    }
}

export default useMovies
