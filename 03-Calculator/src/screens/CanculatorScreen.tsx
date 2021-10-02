import React, { useRef, useState } from 'react'
import { Text, View } from 'react-native'
import CalcButton from '../components/CalcButton';
import { styles } from '../theme/AppTheme';

enum Operations {
    SUM, REST, MULTIPLY, DIVIDE
}

const CanculatorScreen = () => {

    const [prevNumber, setPrevNumber] = useState('0')
    const [number, setNumber] = useState('0')
    const lastOperation = useRef<Operations>()

    const clean = () => {
        setPrevNumber('0')
        setNumber('0')
    }

    const buildNumber = (textNumber: string) => {

        //Do not accept double dots
        if (number.includes('.') && textNumber === '.') return
        if (number.startsWith('0') || number.startsWith('-0')) {
            //Decimal point
            if (textNumber === '.') {
                setNumber(number + textNumber)
                //Evaluate if is anothe 0 and there is a point
            } else if (textNumber === '0' && number.includes('.')) {
                setNumber(number + textNumber)
                //Is not 0 and it has not a dot
            } else if (textNumber !== '0' && !number.includes('.')) {
                setNumber(textNumber)
                //Avoid 000.0
            } else if (textNumber === '0' && number.includes('.')) {
                setNumber(number)
            } else {
                setNumber(number + textNumber)
            }
        } else {
            setNumber(number + textNumber)
        }


    }

    const positiveNegative = () => {
        if (number.includes('-')) {
            setNumber(number.replace('-', ''))
        } else {
            setNumber('-' + number)
        }
    }

    const del = () => {
        let negative = '', tempNumber = number
        if (number.includes('-')) {
            negative = '-'
            tempNumber = number.substr(1)
        }
        if (tempNumber.length > 1) {
            setNumber(negative + tempNumber.slice(0, -1))
        } else {
            setNumber('0')
        }
    }

    const changeNumberWithPrev = () => {
        if (number.endsWith('.')) {
            setPrevNumber(number.slice(0, -1))
        } else {
            setPrevNumber(number)
        }

        setNumber('0')
    }

    const btnDivide = () => {
        changeNumberWithPrev()
        lastOperation.current = Operations.DIVIDE
    }

    const btnMultiply = () => {
        changeNumberWithPrev()
        lastOperation.current = Operations.MULTIPLY
    }

    const btnSum = () => {
        changeNumberWithPrev()
        lastOperation.current = Operations.SUM
    }

    const btnRest = () => {
        changeNumberWithPrev()
        lastOperation.current = Operations.REST
    }

    const calc = () => {
        const numb1 = Number(number)
        const numb2 = Number(prevNumber)
        switch (lastOperation.current) {
            case Operations.SUM:
                setNumber(`${numb1 + numb2}`)
                break;
            case Operations.REST:
                setNumber(`${numb2 - numb1}`)
                break;
            case Operations.MULTIPLY:
                setNumber(`${numb1 * numb2}`)
                break;
            case Operations.DIVIDE:
                setNumber(`${numb2 / numb1}`)
                break;
        }
        setPrevNumber('0')
    }

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
