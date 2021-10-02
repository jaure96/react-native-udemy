import React from 'react'
import { Text, View } from 'react-native'
import CalcButton from '../components/CalcButton';
import { styles } from '../theme/AppTheme';
import useCalculator from '../hooks/useCalculator';



const CanculatorScreen = () => {

    const {
        number,
        prevNumber,
        clean,
        buildNumber,
        positiveNegative,
        del,
        btnDivide,
        btnMultiply,
        btnSum,
        btnRest,
        calc
    } = useCalculator(0)


    return (
        <View style={styles.calculadoraContainer}>
            {prevNumber !== '0' && <Text style={styles.smallResult}>{prevNumber}</Text>}
            <Text style={styles.result}
                numberOfLines={1}
                adjustsFontSizeToFit
            >
                {number}
            </Text>

            <View style={styles.fila}>
                <CalcButton text="C" color="#A9ACAC" action={clean} />
                <CalcButton text="+/-" color="#A9ACAC" action={positiveNegative} />
                <CalcButton text="del" color="#A9ACAC" action={del} />
                <CalcButton text="/" color="#FFA10D" action={btnDivide} />
            </View>
            <View style={styles.fila}>
                <CalcButton text="7" action={buildNumber} />
                <CalcButton text="8" action={buildNumber} />
                <CalcButton text="9" action={buildNumber} />
                <CalcButton text="X" color="#FFA10D" action={btnMultiply} />
            </View>
            <View style={styles.fila}>
                <CalcButton text="4" action={buildNumber} />
                <CalcButton text="5" action={buildNumber} />
                <CalcButton text="6" action={buildNumber} />
                <CalcButton text="-" color="#FFA10D" action={btnRest} />
            </View>
            <View style={styles.fila}>
                <CalcButton text="1" action={buildNumber} />
                <CalcButton text="2" action={buildNumber} />
                <CalcButton text="3" action={buildNumber} />
                <CalcButton text="+" color="#FFA10D" action={btnSum} />
            </View>
            <View style={styles.fila}>
                <CalcButton text="0" action={buildNumber} ancho />
                <CalcButton text="." action={buildNumber} />
                <CalcButton text="=" color="#FFA10D" action={calc} />
            </View>
        </View>
    )
}

export default CanculatorScreen
