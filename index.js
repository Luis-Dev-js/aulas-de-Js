// De forma simples e sem verificações sobre o que o usuario digita.
// para simples pesquisa de ideias.

prompt('Digite seu nome?');
// 
const nome = prompt('Digite seu nome?');
const nasc = Number(prompt('digite seu ano de nascimento: '));
const idade = 2020 - nasc;
const resultado = alert(`Ola ${nome} tem ${idade} anos de idade.`);

