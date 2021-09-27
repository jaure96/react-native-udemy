import { useEffect, useState, useRef } from 'react'
import { reqResApi } from '../api/reqRes'
import { ReqRespListado, Usuario } from '../interfaces/reqRes'

const useUsuarios = (initialPage: number) => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([])
    const paginaRef = useRef(initialPage)

    useEffect(() => {
        cargarUsuarios()
    }, [])


    const cargarUsuarios = async () => {
        const resp = await reqResApi.get<ReqRespListado>('/users', {
            params: {
                page: paginaRef.current
            }
        })

        if (resp.data.data.length > 0) {
            setUsuarios(resp.data.data)
        } else {
            paginaRef.current--
            alert('No hay mas registros')
        }

    }

    const nxt = () => {
        paginaRef.current++
        cargarUsuarios()
    }

    const prev = async () => {
        if (paginaRef.current > 1) {
            paginaRef.current--
            await cargarUsuarios()
        }
    }

    return {
        usuarios,
        nxt,
        prev
    }


}

export default useUsuarios
