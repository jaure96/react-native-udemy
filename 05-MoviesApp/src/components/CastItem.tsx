import React from 'react'
import { Cast } from '../interfaces/creditsInterface';
import { Image, StyleSheet, Text, View } from 'react-native';

interface Props {
    actor: Cast
}

const CastItem = ({ actor }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`

    return (
        <View style={styles.container}>
            {actor.profile_path && <Image style={{ width: 50, height: 50, borderRadius: 10 }} source={{ uri }} />}

            <View style={styles.actorInfo}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{actor.name}</Text>
                <Text style={{ fontSize: 18, opacity: 0.6 }}>{actor.character}</Text>

            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
         borderRadius: 10,
         height: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 3.84,
        elevation: 9,
       
       
        marginLeft: 20,
        paddingRight: 15
    },
    actorInfo: {
        marginLeft: 10,
        marginTop: 4
    }
});

export default CastItem
