import React, { useEffect, useState } from 'react'
import { Platform, StyleProp, StyleSheet, TextInput, View, ViewStyle } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import useDebouncedValue from '../hooks/useDebouncedValue';

interface Props {
    style?: StyleProp<ViewStyle>,
    onDebounce: (value: string) => void
}

const SearchInput = ({ style, onDebounce }: Props) => {

    const [txtValue, setTxtValue] = useState('')

    const debouncedValue = useDebouncedValue(txtValue)

    useEffect(() => {
        onDebounce(debouncedValue)
    }, [debouncedValue])

    return (
        <View style={{
            ...styles.container,
            ...style as any
        }} >
            <View style={styles.textBg}>

                <TextInput
                    placeholder='Search pokemon'
                    style={{
                        ...styles.textInput,
                        top: Platform.OS === 'ios' ? 0 : 2
                    }}
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={txtValue}
                    onChangeText={setTxtValue}
                />

                <Icon name={'search-outline'} color={'grey'} size={30} />

            </View>
        </View>
    )
}

export default SearchInput

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'transparent'
    },
    textBg: {
        backgroundColor: '#F3F1F3',
        borderRadius: 50,
        height: 40,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    textInput: {
        flex: 1,
        fontSize: 18
    }
});