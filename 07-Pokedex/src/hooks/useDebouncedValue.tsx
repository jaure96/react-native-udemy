import { useEffect, useState } from "react"

const useDebouncedValue = (input: string = '', time: number = 500) => {

    const [debauncedValue, setDebauncedValue] = useState(input)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebauncedValue(input)
        }, time)
        return () => {
            clearTimeout(timeout)
        }
    }, [input])

    return debauncedValue
}

export default useDebouncedValue
