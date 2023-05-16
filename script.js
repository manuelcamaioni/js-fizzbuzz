const ulElement = document.querySelector('ul');


for(let i = 1; i <= 100; i++){
    const liElement = document.createElement('li'); // creo una variabile con tag <li> </li> vuota per ogni iterazione
    // ? document.querySelector('li').style.listStyleType = none; non funziona

    if(i % 3 === 0 && i % 5 === 0){
       liElement.innerHTML = `FizzBuzz`;  // se rispetta la condizione, il contenuto diventa questa stringa
       liElement.classList.add('red');    // aggiungo una classe all'elemento html, nel caso rispettasse questa condizione

    } else if(i % 5 === 0){
        liElement.innerHTML = `Buzz`; // se ripetta questa condizione, diventa questa
        liElement.classList.add('green'); // aggiungo una classe all'elemento html, nel caso rispettasse questa condizione

    }else if(i % 3 === 0){
        liElement.innerHTML = `Fizz` // se ripetta questa condizione, diventa questa
        liElement.classList.add('blue'); // aggiungo una classe all'elemento html, nel caso rispettasse questa condizione
    }
    else{
        liElement.innerHTML = i; // altrimenti prende il valore di i a n iterazione
    }
    
    ulElement.append(liElement); // stampo il valore al termin della condizione nella pagina html, in una variabile js con all'interno un elemento html, in questo caso <ul> </ul>
}

