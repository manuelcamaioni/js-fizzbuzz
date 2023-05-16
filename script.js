const ulElement = document.querySelector('ul');
const liElement = document.createElement('li');

for(let i = 1; i <= 100; i++){
    // if(i % 3 === 0 && i % 5 === 0){
    //     liElement.innerHTML = `FizzBuzz`;

    // } else if(i % 5 === 0){
    //     liElement.innerHTML = `Buzz`;

    // }else if(i % 3 === 0){
    //     liElement.innerHTML = `Fizz`
    // }
    // else{
    //     liElement.innerHTML = i;
    // }
    liElement.innerHTML = i;
    ulElement.append(liElement);
    console.log(liElement);
}
