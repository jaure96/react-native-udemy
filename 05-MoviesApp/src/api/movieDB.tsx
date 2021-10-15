import axios from "axios";

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params:{
        api_key: 'abc05dc76c57323e5dc6a5ad4634c0cc',
        language: 'es-ES'
    }
})

export default movieDB