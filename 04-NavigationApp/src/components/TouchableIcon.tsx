import React, { useContext } from 'react'
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AuthContext } from '../context/AuthContext';

interface Props {
    iconName: string
}

const TouchableIcon = ({ iconName }: Props) => {

    const { changeFavIcon } = useContext(AuthContext)

    return (
        <TouchableOpacity
            onPress={() => changeFavIcon(iconName)}
        >
            <Text>
                <Icon name={iconName} size={50} color="#900" />
            </Text>

        </TouchableOpacity>
    )
}

export default TouchableIcon
