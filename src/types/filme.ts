import type { Genero } from "./genero";

export interface Filme {
    idFilme: number;
    titulo: string;
    sinopse: string;
    dataLacamento: string;
    duracao: number;
    imagemCapa: string;
    idGenero: Genero[]
}

export interface RespostaFilmes {
    items: Filme[];
    total: number;
    pagina: number;
    tamanhoPagina: number;
}