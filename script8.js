/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes

*/



/*
// Escrevendo o nome dos pacientes na tela e aplicando a lógica necessária
let index = 0;
let patientsName = [];

for(index; index < patients.length; index++) {
  patientsName[index] = patients[index].name
}

alert(patientsName)
*/

// ------------------------------------------------

/* 
Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

"Paciente X possui o IMC de: Y"

Crie uma função para fazer o cálculo de IMC

*/

// Criando a lista de pacientes
let patients = [
  {
    name: 'Gabriel',
    age: 26,
    weight: 90,
    height: 190
  },

  {
    name: 'Larissa',
    age: 21,
    weight: 60,
    height: 155
  },

  {
    name: 'Leticia',
    age: 18,
    weight: 55,
    height: 158
  }

]

// Criando uma função para calculo do IMC
function calculateIMC (weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}

let index = 0;

for (index; index < patients.length; index++) {
  alert(`O(a) paciente ${patients[index].name} terá o IMC de: ${calculateIMC(patients[index].weight, patients[index].height)} `)
}