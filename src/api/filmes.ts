import type { RespostaFilmes } from "../types/filme";
import { api } from "./api";

export async function listarFilmes(
    pagina: number = 1,
    tamanhoPagina: number = 10,
    busca: string = ""
) : Promise<RespostaFilmes> {

    const resposta = await api.get<RespostaFilmes>("Filme", {

        // "https://localhost:7235/api/Filme?pagina=1&tamanhoPagina=10&busca=Batmaan"
        params: {
            pagina, // numero da pagina a ser consultada
            tamanhoPagina, // quantidade de filmes por pagina
            busca // termo utilizado para pesquisar os filmes
        }
    })

    return resposta.data;
}
