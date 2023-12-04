/* 

Solicite 2 números, faça a soma deles e apresente o resultado final ao usuário

*/

// Capturando um DADO (Números) e armazenando em uma variável
  let numberOne = prompt("Digite o 1º número: ")

  let numberTwo = prompt("Digite o 2º número: ")

  let soma = Number(numberOne) + Number(numberTwo)
  
// Escrevendo a MENSAGEM

  alert("A soma de " + numberOne + " + " + numberTwo + " é: " + soma)