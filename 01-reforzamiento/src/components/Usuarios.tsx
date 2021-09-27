
import { Usuario } from '../interfaces/reqRes';
import useUsuarios from '../hooks/useUsuarios';


const Usuarios = () => {

    const { usuarios, nxt, prev} = useUsuarios(1)



    const renderItem = ({ id, first_name, last_name, email, avatar }: Usuario) => {
        return (
            <tr key={id.toString()}>
                <td>
                    <img src={avatar} alt={first_name} style={{ width: 35, borderRadius: 100 }} ></img>
                </td>
                <td>{first_name} {last_name}</td>
                <td>{email}</td>
            </tr>
        )
    }

    return (
        <>
            <h3>Usuarios: </h3>

            <table className='table'>
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map(usuario => renderItem(usuario))}
                </tbody>
            </table>
            <button className='btn btn-primary' onClick={prev}>
                Anteriores
            </button>
            &nbsp;
            <button className='btn btn-primary' onClick={nxt}>
                Siguientes
            </button>

        </>
    )
}

export default Usuarios
