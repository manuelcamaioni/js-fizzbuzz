const ulElement = document.querySelector('ul');


for(let i = 1; i <= 100; i++){
    const liElement = document.createElement('li');
    liElement.innerHTML = i;

    if(i % 3 === 0 && i % 5 === 0){
       liElement.innerHTML = `FizzBuzz`;
       liElement.classList.add('red');

    } else if(i % 5 === 0){
        liElement.innerHTML = `Buzz`;
        liElement.classList.add('green');

    }else if(i % 3 === 0){
        liElement.innerHTML = `Fizz`
        liElement.classList.add('blue');
    }
    else{
        liElement.innerHTML = i;
    }
    
    ulElement.append(liElement);
}
