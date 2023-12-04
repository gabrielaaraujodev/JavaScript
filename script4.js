/* 

Solicitar o nome do aluno e as 3 notas do bimestre. Após isso, calcular a média daquele aluno.

Se o aluno passou no bimestre, dar os parabéns, ma, caso não, motivar o aluno para dar o seu melhor na recuperação.

*/

// 1) Solicitar o nome do aluno
  let name = prompt("Qual seu nome: ")

// 2) Solicitando as notas
  let firstGrade = prompt("1ª nota: ")
  let secondGrade = prompt("2ª nota: ")
  let thirdGrade = prompt("3ª nota: ")

// OBS: Transformando as notas que são do tipo 'STRING' em 'NUMBER' para poder utilizar os operados matemáticos SEM CONCATENAR
  let gradeOne = Number(firstGrade)
  let gradeTwo = Number(secondGrade)
  let gradeThree = Number(thirdGrade)

// Calculando a média 
  let avarage = (gradeOne + gradeTwo + gradeThree) / 3

// Impondo condições
  if (avarage >= 6) {
    alert("Parabéns, " + name +  " você passou de ano !")
  } else {
    alert("Não desista, " + name + " ! você tera mais uma chance. De seu MÁXIMO !")
  }