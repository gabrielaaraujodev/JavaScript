/* 

Faça um programa que tenha um menu e apresente a seguinte mensagem:
  
  Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  
--- 
O programa deverá capturar o número digitado pelo usuário e mostrar o seguintes cenários:

  Caso o usuário digite 1, ele poderá cadastrar um item em uma lista

  Caso o usuário digite 2, ele poderá ver os itens cadastrados
    Se não houver nenhum item cadastrado, mostrar a mensagem: 
      "Não existem itens cadastrados"

  Caso o usuário digite 3, a aplicação deverá ser encerrada.

*/

// Criando a Array para lista
let items = []

// Criando uma variável de controle
let index = 0;

// Capturando o nome do user e criando a escolha de opções
let userName = prompt("Qual seu nome ?")

let option

// Criando a escolha de opções e impondo a lógica necessária que o programa exige
while (option != 3){
  option = Number(prompt(`Olá ${userName}, digite o número da opção desejada:

  1. Cadastrar um item na lista
  2. Mostrar itens cadastrados
  3. Sair do programa
  `))

  switch (option) {
    case 1:
      items[index] = prompt("Cadastre um item na lista: ")
      index++
    break

    case 2:
      if (items.length != 0){
        alert(items)
      } else {
        alert("Não existem itens cadastrados !")
      }
    break

    case 3:
      alert("Fechando o programa !")
    break

    default:
      alert("Opção inválida, tente novamente !")
  }
}
