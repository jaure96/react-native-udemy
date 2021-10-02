import React, { useState } from 'react'
import { Text, View } from 'react-native'
import CalcButton from '../components/CalcButton';
import { styles } from '../theme/AppTheme';

const CanculatorScreen = () => {

    const [prevNumber, setPrevNumber] = useState('100')
    const [number, setNumber] = useState('1000')


    const clean = () => {
        setPrevNumber('0')
        setNumber('0')
    }

    const buildNumber = (textNumber: string) => {
        setNumber(number + textNumber)
    }

    const positiveNegative = () => {
        if (number.includes('-')) {
            setNumber(number.replace('-', ''))
        } else {
            setNumber('-' + number)
        }
    }

    return (
        <View style={styles.calculadoraContainer}>
            <Text style={styles.smallResult}>{prevNumber}</Text>
            <Text style={styles.result}
                numberOfLines={1}
                adjustsFontSizeToFit
            >
                {number}
            </Text>

            <View style={styles.fila}>
                <CalcButton text="C" color="#A9ACAC" action={clean} />
                <CalcButton text="+/-" color="#A9ACAC" action={positiveNegative} />
                <CalcButton text="del" color="#A9ACAC" action={clean} />
                <CalcButton text="/" color="#FFA10D" action={clean} />
            </View>
            <View style={styles.fila}>
                <CalcButton text="7" action={buildNumber} />
                <CalcButton text="8" action={buildNumber} />
                <CalcButton text="9" action={buildNumber} />
                <CalcButton text="X" color="#FFA10D" action={clean} />
            </View>
            <View style={styles.fila}>
                <CalcButton text="4" action={buildNumber} />
                <CalcButton text="5" action={buildNumber} />
                <CalcButton text="6" action={buildNumber} />
                <CalcButton text="-" color="#FFA10D" action={clean} />
            </View>
            <View style={styles.fila}>
                <CalcButton text="1" action={buildNumber} />
                <CalcButton text="2" action={buildNumber} />
                <CalcButton text="3" action={buildNumber} />
                <CalcButton text="+" color="#FFA10D" action={clean} />
            </View>
            <View style={styles.fila}>
                <CalcButton text="0" action={buildNumber} ancho />
                <CalcButton text="." action={buildNumber} />
                <CalcButton text="=" color="#FFA10D" action={clean} />
            </View>
        </View>
    )
}

export default CanculatorScreen
