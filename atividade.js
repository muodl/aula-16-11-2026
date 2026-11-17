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