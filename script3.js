/* 

Capturar 2 números e fazer as operações matemáticas:
  1) Soma
  2) Multiplicação
  3) Divisão
  4) Resto da divisão

E para cada operação mostrar um 'alert' com o resultado
*/

// Colocando uma mensagem introdutoria

alert("Iremos fazer algumas operações com 2 números")

// Capturando um DADO (Números) e armazenando em uma variável
let numberOne = prompt("Digite o primeiro número: ")

let numberTwo = prompt("Digite o segundo número: ")

soma = Number(numberOne) + Number(numberTwo)

// Capturando as variáveis acima e criando as lógicas operacionais
multiplicaçao = Number(numberOne) * Number(numberTwo)

divisao = Number(numberOne) / Number(numberTwo)

restoDivisao = Number(numberOne) % Number(numberTwo)

// Escrevendo as MENSAGENS de cara operação
alert("A soma de " + numberOne + " + " + numberTwo + " é: " + soma)

alert("A multiplicação de " + numberOne + " x " + numberTwo + " é: " + multiplicaçao)

alert("A divisão de " + numberOne + " / " + numberTwo + " é: " + divisao)

alert("O resto da divisão de " + numberOne + " / " + numberTwo + " é: " + restoDivisao)