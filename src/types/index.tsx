export type TaskT = {
    id:string;
    solicitante: string
    departamento: string;
    titulo: string;
    descricao: string;
    prioridade: string;
    imagem?:string;
    alt?:string;
    tags:{titulo:string; bg:string; text: string } [];
}

type Column = {
    name: string;
    items: TaskT[];
}

export type Columns = {
    [key:string] : Column
}