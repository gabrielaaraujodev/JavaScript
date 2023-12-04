/* 

  Capture 10 itens para uma lista de mercado e coloque-os na tela separados por virgula.

*/

let item = 0;

let listItems = [];

// Estrutura de repetição para capturar o itens
  for(item; item < 10; item++) {
    let fruits = prompt("Digite o item " + (item + 1))

    listItems[item] = fruits
  }

// Mostrando a lista na tela 
  alert(listItems)