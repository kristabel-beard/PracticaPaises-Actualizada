import axios from 'axios';


const api = axios.create({
    baseURL: 'https://restcountries.eu/rest/v2/',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})
export default {
    ObtenerPaises() {
        return api.get('all');
    },
    //////Recibe un parametro
    ObtenerPais(id) {
        return api.get(`alpha/${id}`);
    }
}