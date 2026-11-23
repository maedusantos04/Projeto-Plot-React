import type { Genero } from "../types/genero";
import { api } from "./api";

export async function listarGeneros() : Promise<Genero[]> {

    const resposta = await api.get<Genero[]>("Genero"); 
    return resposta.data
}