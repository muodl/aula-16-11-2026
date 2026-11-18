const saudacao = (nome) => {
  return "Olá, " + nome;
};

console.log(saudacao("Murilo"));

const soma = (a, b) => {
  return a + b;
};

console.log(soma(2, 3));

const comDesconto = (preco) => preco - (preco * 0.10);

console.log(comDesconto(100));

let idade = 20;
let situacao = idade >= 18 ? "Maior de idade" : "Menor de idade";

console.log(situacao);

const statusNota = (nota) => nota >= 7 ? "Aprovado" : "Reprovado";

console.log(statusNota(8));
console.log(statusNota(5));

const textoBotao = (logado) => logado ? "Sair" : "Entrar";

console.log(textoBotao(true));
console.log(textoBotao(false));

//const numeros = [1, 2, 3, 4];
//Esperado: [2, 4, 6, 8].

const numeros = [1, 2, 3, 4];

const duplicados = numeros.map((n) => n *2)

console.log(duplicados)

const nomes = ["ana", "bruno", "carla"];

const maiusculos = nomes.map((n) => n.toUpperCase())

console.log(maiusculos)

const produtos = [
  { id: 1, nome: "Caderno", preco: 15 },
  { id: 2, nome: "Caneta", preco: 3 },
  { id: 3, nome: "Mochila", preco: 120 },
];

const nomes2 = produtos.map((produto) => produto.nome);

console.log(nomes2)

const numeros2 = [1, 2, 3, 4, 5, 6];

const pares = numeros2.filter((n) => n % 2 === 0)
console.log(pares)

const notas = [5, 8, 6.5, 9, 7];

const aprovadas = notas.filter((nota) => nota >= 7);

console.log(aprovadas);

const baratos = produtos.filter(p => p.preco < 50);
const nomes3 = baratos.map(p => p.nome);

console.log(nomes3);

