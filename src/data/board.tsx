import { v4 as uuidv4 } from "uuid";
// import taskImage from "../assets/images/task.jpg";
// import taskImage2 from "../assets/images/task2.jpg";
// import taskImage3 from "../assets/images/task3.jpg";
import { Columns } from "../types";
import { getRandomColors } from "../helpers/getRandomColors";

export const Board: Columns = {
	backlog: {
		name: "Backlog",
		items: [
			{

				id: uuidv4(),
				protocolo: "1234565",
				solicitante: "biruleibe",
				departamento: "chupingole",
				titulo: "titulo aquizxzczxczxczxcxzczxcxzczxczxfsdtfdhgdfghjgrfjytghkd oh",
				descricao: "testando desc",
				prioridade: "Media",
				// imagem?: string;
				alt: "task image",
				responsavel: ["pedro", "Thiago", "joão"],
				tags: [
					{ title: "Test", ...getRandomColors() },
					{ title: "Front", ...getRandomColors() },
				],
			},
			{

				id: uuidv4(),
				protocolo: "1234565",
				solicitante: "biruleibe",
				departamento: "chupingole",
				titulo: "titulo aqui oh",
				descricao: "testando desc",
				prioridade: "Media",
				// imagem?: string;
				alt: "task image",
				responsavel: ["pedro", "Thiago", "joão"],
				tags: [
					{ title: "Test", ...getRandomColors() },
					{ title: "Front", ...getRandomColors() },
				],
			},
			{

				id: uuidv4(),
				protocolo: "1234565",
				solicitante: "biruleibe",
				departamento: "chupingole",
				titulo: "titulo aqui oh",
				descricao: "testando desc",
				prioridade: "Media",
				// imagem?: string;
				alt: "task image",
				responsavel: ["pedro", "Thiago", "joão"],
				tags: [
					{ title: "Test", ...getRandomColors() },
					{ title: "Front", ...getRandomColors() },
				],
			},
			{

				id: uuidv4(),
				protocolo: "1234565",
				solicitante: "biruleibe",
				departamento: "chupingole",
				titulo: "titulo aqui oh",
				descricao: "testando desc",
				prioridade: "Media",
				// imagem?: string;
				alt: "task image",
				responsavel: ["pedro", "Thiago", "joão"],
				tags: [
					{ title: "Test", ...getRandomColors() },
					{ title: "Front", ...getRandomColors() },
				],
			},
			{

				id: uuidv4(),
				protocolo: "1234565",
				solicitante: "biruleibe",
				departamento: "chupingole",
				titulo: "titulo aqui oh",
				descricao: "testando desc",
				prioridade: "Media",
				// imagem?: string;
				alt: "task image",
				responsavel: ["pedro", "Thiago", "joão"],
				tags: [
					{ title: "Test", ...getRandomColors() },
					{ title: "Front", ...getRandomColors() },
					{ title: "Front", ...getRandomColors() },
					{ title: "Front", ...getRandomColors() },
					{ title: "Front", ...getRandomColors() },
					{ title: "Front", ...getRandomColors() },
					{ title: "Front", ...getRandomColors() },
					{ title: "Front", ...getRandomColors() },
					{ title: "Front", ...getRandomColors() },
					{ title: "Front", ...getRandomColors() },
				],
			},

		],
	},
	pending: {
		name: "Pendente",
		items: [
			{

				id: uuidv4(),
				protocolo: "1234565",
				solicitante: "biruleibe",
				departamento: "chupingole",
				titulo: "titulo aqui oh",
				descricao: "testando desc",
				prioridade: "Media",
				// imagem?: string;
				alt: "task image",
				responsavel: ["pedro", "Thiago", "joão"],
				tags: [
					{ title: "Test", ...getRandomColors() },
					{ title: "Front", ...getRandomColors() },
				],
			},
			{

				id: uuidv4(),
				protocolo: "1234565",
				solicitante: "biruleibe",
				departamento: "chupingole",
				titulo: "titulo aqui oh",
				descricao: "testando desc",
				prioridade: "Media",
				// imagem?: string;
				alt: "task image",
				responsavel: ["pedro", "Thiago", "joão"],
				tags: [
					{ title: "Test", ...getRandomColors() },
					{ title: "Front", ...getRandomColors() },
				],
			},
			{

				id: uuidv4(),
				protocolo: "1234565",
				solicitante: "biruleibe",
				departamento: "chupingole",
				titulo: "titulo aqui oh",
				descricao: "testando desc",
				prioridade: "Media",
				// imagem?: string;
				alt: "task image",
				responsavel: ["pedro", "Thiago", "joão"],
				tags: [
					{ title: "Test", ...getRandomColors() },
					{ title: "Front", ...getRandomColors() },
				],
			},
			{

				id: uuidv4(),
				protocolo: "1234565",
				solicitante: "biruleibe",
				departamento: "chupingole",
				titulo: "titulo aqui oh",
				descricao: "testando desc",
				prioridade: "Media",
				// imagem?: string;
				alt: "task image",
				responsavel: ["pedro", "Thiago", "joão"],
				tags: [
					{ title: "Test", ...getRandomColors() },
					{ title: "Front", ...getRandomColors() },
				],
			},
			{

				id: uuidv4(),
				protocolo: "1234565",
				solicitante: "biruleibe",
				departamento: "chupingole",
				titulo: "titulo aqui oh",
				descricao: "testando desc",
				prioridade: "Media",
				// imagem?: string;
				alt: "task image",
				responsavel: ["pedro", "Thiago", "joão"],
				tags: [
					{ title: "Test", ...getRandomColors() },
					{ title: "Front", ...getRandomColors() },
				],
			},
		],
	},
	todo: {
		name: "Fazendo",
		items: [
			{

				id: uuidv4(),
				protocolo: "1234565",
				solicitante: "biruleibe",
				departamento: "chupingole",
				titulo: "titulo aqui oh",
				descricao: "testando desc",
				prioridade: "Baixa",
				// imagem?: string;
				alt: "task image",
				responsavel: ["pedro", "Thiago", "joão"],
				tags: [
					{ title: "Test", ...getRandomColors() },
					{ title: "Front", ...getRandomColors() },
				],
			},
			{

				id: uuidv4(),
				protocolo: "1234565",
				solicitante: "biruleibe",
				departamento: "chupingole",
				titulo: "titulo aqui oh",
				descricao: "testando desc",
				prioridade: "Baixa",
				// imagem?: string;
				alt: "task image",
				responsavel: ["pedro", "Thiago", "joão"],
				tags: [
					{ title: "Test", ...getRandomColors() },
					{ title: "Front", ...getRandomColors() },
				],
			},
			{

				id: uuidv4(),
				protocolo: "1234565",
				solicitante: "biruleibe",
				departamento: "chupingole",
				titulo: "titulo aqui oh",
				descricao: "testando desc",
				prioridade: "Media",
				// imagem?: string;
				alt: "task image",
				responsavel: ["pedro", "Thiago", "joão"],
				tags: [
					{ title: "Test", ...getRandomColors() },
					{ title: "Front", ...getRandomColors() },
				],
			},
			{

				id: uuidv4(),
				protocolo: "1234565",
				solicitante: "biruleibe",
				departamento: "chupingole",
				titulo: "titulo aqui oh",
				descricao: "testando desc",
				prioridade: "Baixa",
				// imagem?: string;
				alt: "task image",
				responsavel: ["pedro", "Thiago", "joão"],
				tags: [
					{ title: "Test", ...getRandomColors() },
					{ title: "Front", ...getRandomColors() },
				],
			},
			{

				id: uuidv4(),
				protocolo: "1234565",
				solicitante: "biruleibe",
				departamento: "chupingole",
				titulo: "titulo aqui oh",
				descricao: "testando desc",
				prioridade: "Media",
				// imagem?: string;
				alt: "task image",
				responsavel: ["pedro", "Thiago", "joão"],
				tags: [
					{ title: "Test", ...getRandomColors() },
					{ title: "Front", ...getRandomColors() },
				],
			},
		],
	},
	done: {
		name: "Feito",
		items: [
			{

				id: uuidv4(),
				protocolo: "1234565",
				solicitante: "biruleibe",
				departamento: "chupingole",
				titulo: "titulo aqui oh",
				descricao: "testando desc",
				prioridade: "Media",
				// imagem?: string;
				alt: "task image",
				responsavel: ["pedro", "Thiago", "joão"],
				tags: [
					{ title: "Test", ...getRandomColors() },
					{ title: "Front", ...getRandomColors() },
				],
			},
			{

				id: uuidv4(),
				protocolo: "1234565",
				solicitante: "biruleibe",
				departamento: "chupingole",
				titulo: "titulo aqui oh",
				descricao: "testando desc",
				prioridade: "Media",
				// imagem?: string;
				alt: "task image",
				responsavel: ["pedro", "Thiago", "joão"],
				tags: [
					{ title: "Test", ...getRandomColors() },
					{ title: "Front", ...getRandomColors() },
				],
			},
			{

				id: uuidv4(),
				protocolo: "1234565",
				solicitante: "biruleibe",
				departamento: "chupingole",
				titulo: "titulo aqui oh",
				descricao: "testando desc",
				prioridade: "Media",
				// imagem?: string;
				alt: "task image",
				responsavel: ["pedro", "Thiago", "joão"],
				tags: [
					{ title: "Test", ...getRandomColors() },
					{ title: "Front", ...getRandomColors() },
				],
			},
			{

				id: uuidv4(),
				protocolo: "1234565",
				solicitante: "biruleibe",
				departamento: "chupingole",
				titulo: "titulo aqui oh",
				descricao: "testando desc",
				prioridade: "Media",
				// imagem?: string;
				alt: "task image",
				responsavel: ["pedro", "Thiago", "joão"],
				tags: [
					{ title: "Test", ...getRandomColors() },
					{ title: "Front", ...getRandomColors() },
				],
			},
			{

				id: uuidv4(),
				protocolo: "1234565",
				solicitante: "biruleibe",
				departamento: "chupingole",
				titulo: "titulo aqui oh",
				descricao: "testando desc",
				prioridade: "Media",
				// imagem?: string;
				alt: "task image",
				responsavel: ["pedro", "Thiago", "joão"],
				tags: [
					{ title: "Test", ...getRandomColors() },
					{ title: "Front", ...getRandomColors() },
				],
			},
		],
	},
};