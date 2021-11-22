import React, { useEffect, useState } from 'react'
import { Dimensions, FlatList, Platform, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Loading from '../components/Loading'
import PokemonCard from '../components/PokemonCard'
import SearchInput from '../components/SearchInput'
import usePokemonSearch from '../hooks/usePokemonSearch'
import { styles } from '../theme/appTheme';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';

const { width: screenWidth } = Dimensions.get('window')

const SearchScreen = () => {

    const { top } = useSafeAreaInsets()
    const { isFetching, simplePokemonList } = usePokemonSearch()
    const [filteredPokemons, setFilteredPokemons] = useState<SimplePokemon[]>([])
    const [term, setTerm] = useState('')

    useEffect(() => {
        if (term.length === 0) return setFilteredPokemons([])
        if (isNaN(Number(term))) {
            setFilteredPokemons(
                simplePokemonList.filter(p => p.name.toLocaleLowerCase().includes(term.toLocaleLowerCase()))
            )
        } else {
            const pokById = simplePokemonList.find(p => p.id === term)
            setFilteredPokemons(pokById ? [pokById] : [])
        }

    }, [term])

    if (isFetching) return <Loading />

    return (
        <View style={{
            flex: 1,

            marginHorizontal: 20
        }}>
            <SearchInput
                onDebounce={setTerm}
                style={{
                    flex: 1,
                    zIndex: 999,
                    width: screenWidth - 40,
                    top: Platform.OS === 'ios' ? top : top + 10
                }}
            />

            <FlatList
                data={filteredPokemons}
                keyExtractor={(pokemon) => pokemon.id}
                showsVerticalScrollIndicator={false}
                numColumns={2}

                //Header
                ListHeaderComponent={(
                    <Text style={{
                        ...styles.title,
                        ...styles.globalMargin,
                        marginTop: Platform.OS === 'ios' ? top + 60 : top + 50,
                        paddingBottom: 10
                    }}>{term}</Text>
                )}
                renderItem={({ item }) => <PokemonCard pokemon={item} />}
            />
        </View>
    )
}

export default SearchScreen

