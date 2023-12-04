/* 

Jogo da advinhação

*/

// Apresente uma mensagem ao usuário
  let userNumber = prompt("Advinhe o número que eu estou pensando ? Está entre 0 e 10")

// Transformando a 'STRING' em 'NUMBER'
  userNumber = Number(userNumber)

// Crie uma lógica para gerar um número aleatório
  let randomNumber = Math.round(Math.random() * 10)

// Mostrando o número gerado na tela só para teste
  alert(randomNumber)

// Verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema. 
  let match = userNumber === randomNumber

// Criando uma variável de CONTROLE para guardar o número de tentativas
  let attempts = 1

// Criando a lógica do looping enquanto o número for diferente (dentro dos parenteses do 'while' tem o valor booleano de 'TRUE'. Dessa forma, foi necessário negar a afirmativa)

while (userNumber != randomNumber) {
  userNumber = prompt("Erro, tente novamente !")
  attempts++
}

if (attempts > 1){
  alert("Parabéns, você advinhou em " + attempts + " tentativas !")

} else {
  alert("Parabéns, você advinhou em " + attempts + " tentativa !")
}

  
  