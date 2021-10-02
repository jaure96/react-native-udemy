import React, { useRef, useState } from 'react'
enum Operations {
    SUM, REST, MULTIPLY, DIVIDE
}

const useCalculator = (initialValue: number) => {

    const [prevNumber, setPrevNumber] = useState('0')
    const [number, setNumber] = useState(initialValue.toString())
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

    return {
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
    }
}

export default useCalculator
