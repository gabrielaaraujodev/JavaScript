let students = [{
  name: "Gabriel",
  firstGrade: 10,
  secondGrade: 8,
},
{
  name: "Rodrigo",
  firstGrade: 9,
  secondGrade: 8,
},
{
  name: "Larissa",
  firstGrade: 3,
  secondGrade: 2,
}]

function calculateGrade (firstGrade, secondGrade) {
  return ((firstGrade + secondGrade) / 2).toFixed(2)
   
}

for (let grades of students) {
  alert(`A média final do(a) ${grades.name} é: ${calculateGrade(grades.firstGrade, grades.secondGrade)}`)

  if (calculateGrade(grades.firstGrade, grades.secondGrade) >= 7) {
    alert("Meus parabéns, você passou de ano !")
  } else { 
    alert("Infelizmente você está de recuperação !")
  }
}

//-------------------------------------------------
