let numberOne = Number(prompt("Digite o 1º número: "))
let numberTwo = Number(prompt("Digite o 2º número: "))

let sum = numberOne + numberTwo

alert("A soma dos dois números é: " + sum)


let subtraction = numberOne - numberTwo

alert("A subtração dos dois números é: " + subtraction)

let multiplication = numberOne * numberTwo

alert("A multiplicação dos dois números é: " + multiplication)

let split = numberOne / numberTwo

alert("A divisão dos dois números é: " + split)

let rest = numberOne % numberTwo

alert("O resto da divisão dos dois números é: " + rest)

// ------------------------------------------------
if (sum % 2 == 0) {
  alert("A soma dos dois números é PAR !")
} else {
  alert("A soma dos dois números é IMPAR !")
} 

//------------------------------------------------
if (numberOne == numberTwo) {
  alert("Os dois números digitados são iguais !")
} else {
  alert("Os dois números digitados são diferentes !")
}