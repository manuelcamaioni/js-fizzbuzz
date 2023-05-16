const ulElement = document.querySelector('ul');


for(let i = 1; i <= 100; i++){
    const liElement = document.createElement('li');
    liElement.innerHTML = i;

    if(i % 3 === 0 && i % 5 === 0){
       liElement.innerHTML = `FizzBuzz`;

    } else if(i % 5 === 0){
        liElement.innerHTML = `Buzz`;

    }else if(i % 3 === 0){
        liElement.innerHTML = `Fizz`
    }
    else{
        liElement.innerHTML = i;
    }
    
    ulElement.append(liElement);
}
