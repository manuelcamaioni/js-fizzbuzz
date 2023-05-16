const ulElement = document.querySelector('ul');


for(let i = 1; i <= 100; i++){
    const liElement = document.createElement('li'); // creo una variabile con tag <li> </li> vuota per ogni iterazione

    // ? document.querySelector('li').style.listStyleType = none; non funziona

    // ! popolo la variabile in base al risultato della condizione!

    if(i % 3 === 0 && i % 5 === 0){  //* i % 3 vuol dire che i è divisibile per tre quindi il resto è 0
       liElement.innerHTML = `FizzBuzz`;    // se rispetta la condizione, il contenuto diventa questa stringa
       liElement.classList.add('red');      // aggiungo una classe all'elemento html, nel caso rispettasse questa condizione

    } else if(i % 5 === 0){
        liElement.innerHTML = `Buzz`;       // se ripetta questa condizione, diventa questa
        liElement.classList.add('green');   // aggiungo una classe all'elemento html, nel caso rispettasse questa condizione

    }else if(i % 3 === 0){
        liElement.innerHTML = `Fizz`        // se ripetta questa condizione, diventa questa
        liElement.classList.add('blue');    // aggiungo una classe all'elemento html, nel caso rispettasse questa condizione
    }
    else{
        liElement.innerHTML = i;            // altrimenti prende il valore di i a n iterazione
    }
    
    ulElement.append(liElement);            // stampo sia il tag che il valore(.outerHTML) al termine della condizione nell'html, all'interno di <ul>
}

