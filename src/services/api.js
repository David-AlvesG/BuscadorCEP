import axios from "axios";

//02851050/json/

const api = axios.create({
    baseURL:"https://viacep.com.br/ws/"
});

export default api;