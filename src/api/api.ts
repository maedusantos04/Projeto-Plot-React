import axios from "axios";
import { obterToken } from "../services/sessaoService";

export const api = axios.create({
    baseURL: "https://localhost:7235/api/" // define o enedreço principal da nossa API
})

// interceptors -> intercepta as requisições antes de envia-las para API para configurar a autenticacao
// config: é um objeto do axios que contem as configuracoes da requisição
// requisicao: url, metodos http, cabeçalho da requisiçao (onde fica o token, por exemplo) e dados que retornam
api.interceptors.request.use((config) => {

    // aqui pegamos o token recebido na sessão
    const token = obterToken();

    if(token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config;
})