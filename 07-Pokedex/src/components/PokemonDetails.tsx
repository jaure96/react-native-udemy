import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { AdvancedPokemon } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';

interface Props {
    pokemon: AdvancedPokemon
}

const PokemonDetails = ({ pokemon }: Props) => {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                ...StyleSheet.absoluteFillObject
            }}
        >
            <View
                style={{
                    ...styles.container,
                    marginTop: 370
                }}
            >
                <Text style={styles.title}>Types</Text>
                <View style={{ flexDirection: 'row' }}                >
                    {
                        pokemon.types.map(({ type }) => (
                            <Text
                                style={{
                                    ...styles.regularTxt,
                                    marginRight: 10
                                }}
                                key={type.name}
                            > {type.name}
                            </Text>
                        ))
                    }

                </View>
                <Text style={styles.title}>Weigth</Text>
                <Text style={styles.regularTxt}>{pokemon.weight}kg</Text>
            </View>
            <View style={{
                ...styles.container,
            }}>
                <Text style={styles.title}>Sprites</Text>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <FadeInImage
                        uri={pokemon.sprites.front_default}
                        style={styles.basicSprite}
                    />
                    <FadeInImage
                        uri={pokemon.sprites.back_default}
                        style={styles.basicSprite}
                    />
                    <FadeInImage
                        uri={pokemon.sprites.front_shiny}
                        style={styles.basicSprite}
                    />
                    <FadeInImage
                        uri={pokemon.sprites.back_shiny}
                        style={styles.basicSprite}
                    />
                </ScrollView>
            </View>
            <View
                style={{
                    ...styles.container
                }}
            >
                <Text style={styles.title}>Base skills</Text>
                <View style={{ flexDirection: 'row' }}                >
                    {
                        pokemon.abilities.map(({ ability }) => (
                            <Text
                                style={{
                                    ...styles.regularTxt,
                                    marginRight: 10
                                }}
                                key={ability.name}
                            > {ability.name}
                            </Text>
                        ))
                    }
                </View>

            </View>
            <View
                style={{
                    ...styles.container
                }}
            >
                <Text style={styles.title}>Movements</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {
                        pokemon.moves.map(({ move }) => (
                            <Text
                                style={{
                                    ...styles.regularTxt,
                                    marginRight: 10
                                }}
                                key={move.name}
                            > {move.name}
                            </Text>
                        ))
                    }
                </View>

            </View>
            <View
                style={{
                    ...styles.container
                }}
            >
                <Text style={styles.title}>Stats</Text>
                <View>
                    {
                        pokemon.stats.map((stat, index) => (
                            <View
                                key={stat.stat.name + index}
                                style={{ flexDirection: 'row' }}
                            >
                                <Text
                                    style={{
                                        ...styles.regularTxt,
                                        marginRight: 10,
                                        width: 150
                                    }}
                                > {stat.stat.name}
                                </Text>
                                <Text
                                    style={{
                                        ...styles.regularTxt,
                                        fontWeight: 'bold'
                                    }}

                                > {stat.base_stat}
                                </Text>
                            </View>
                        ))
                    }
                </View>

                <View
                    style={{
                        marginBottom: 20,
                        alignItems: 'center'
                    }}
                >
                    <FadeInImage
                        uri={pokemon.sprites.front_default}
                        style={styles.basicSprite}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

export default PokemonDetails

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 20
    },
    regularTxt: {
        fontSize: 19
    },
    basicSprite: {
        height: 100,
        width: 100
    }
});