import { useEffect, useState } from "react"
import movieDB from "../api/movieDB"
import { MovieFull } from '../interfaces/movieInterface';
import { CreditsResponse, Cast } from '../interfaces/creditsInterface';

interface MovieDatails {
    cast: Cast[],
    isLoading: boolean,
    movieFull?: MovieFull
}

const useMovieDetails = (movieId: number) => {

    const [state, setState] = useState<MovieDatails>({
        isLoading: true,
        movieFull: undefined,
        cast: []
    })



    const getMovieDetails = async () => {

        const movieDetailsPromise = await movieDB.get<MovieFull>(`/${movieId}`)
        const castPromise = await movieDB.get<CreditsResponse>(`/${movieId}/credits`)

        const [movieDetailsResp, castPromiseResp] = await Promise.all([movieDetailsPromise, castPromise])

        setState({
            isLoading: false,
            movieFull: movieDetailsResp.data,
            cast: castPromiseResp.data.cast
        })
    }

    useEffect(() => {
        getMovieDetails()
    }, [])

    return { ...state }

}

export default useMovieDetails
