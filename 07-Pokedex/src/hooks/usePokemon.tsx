import { useEffect, useState } from "react"
import { AdvancedPokemon } from '../interfaces/pokemonInterfaces';
import { pokemonApi } from '../api/pokemonApi';

const usePokemon = (id: string) => {

    const [isLoading, setIsLoading] = useState(true)
    const [pokemon, setPokemon] = useState<AdvancedPokemon>({} as AdvancedPokemon)


    const loadPokemon = async () => {
        const resp = await pokemonApi.get<AdvancedPokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`)
        setPokemon(resp.data)
        setIsLoading(false)
    }

    useEffect(() => {
        loadPokemon()
    }, [])

    return {
        isLoading,
        pokemon
    }
}

export default usePokemon
