export type TaskT = {
    id: string;
    protocolo: string;
    solicitante: string;
    departamento: string;
    titulo: string;
    descricao: string;
    prioridade: string;
    imagem?: string;
    alt?: string;
    responsavel?: [];
    tags: { titulo: string; bg: string; text: string }[];
}

type Column = {
    name: string;
    items: TaskT[];
}

export type Columns = {
    [key: string]: Column
}