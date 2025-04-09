export class HomeSearch {
    nome?: string;
    faixaIdadeInicial?: number;
    faixaIdadeFinal?: number;
    sexo?: Sexo;
    status?: StatusDesaparecido;
}

export class ResultadoPaginado {
    totalPages?: number;
    totalElements?: number;
    last?: boolean;
    numberOfElements?: number;
    first?: boolean;
    size?: number;
    content?: Array<Desaparecido> = [];
}

export class Desaparecido {
    id?: number;
    nome?: string;
    idade?: number;
    sexo?: Sexo;
    vivo?: boolean;
    urlFoto?: string;
    ultimaOcorrencia?: IUltimaOcorrencia;
  }

export interface IUltimaOcorrencia {
    dtDesaparecimento: string;
    dataLocalizacao: any;
    encontradoVivo: boolean;
    localDesaparecimentoConcat: string;
    ocorrenciaEntrevDesapDTO: IOcorrenciaEntrevDesapDto;
    listaCartaz: any;
    ocoId: number;
}

export interface IOcorrenciaEntrevDesapDto {
  informacao: any;
  vestimentasDesaparecido: string;
}

export interface IPaginacaoRequest {
    pagina: number,
    porPagina: number;
}

export const ListaSexos = {
    MASCULINO: 'Masculino',
    FEMININO: 'Feminino',
};

export const ListaStatusDesaparecido = {
    LOCALIZADO: 'Localizado',
    DESAPARECIDO: 'Desaparecido',
};

export class Estatisticas {
    quantPessoasDesaparecidas: number = 0;
    quantPessoasEncontradas: number = 0;
}
export interface IEstatisticas {
    quantPessoasDesaparecidas: number;
    quantPessoasEncontradas: number;
}

  export interface IPaginacaoRequest {
    pagina: number,
    porPagina: number;
}


export type Resultado = keyof typeof ResultadoPaginado;
export type Sexo = keyof typeof ListaSexos;
export type StatusDesaparecido = keyof typeof ListaStatusDesaparecido;