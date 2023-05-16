const ulElement = document.querySelector('ul');
const liElement = document.createElement('li');


// for(let i = 1; i <= 100; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log(`FizzBuzz (${i})`);

//     } else if(i % 5 === 0){
//         console.log(`Buzz (${i})`);

//     }else if(i % 3 === 0){
//         console.log(`Fizz (${i})`);
//     }
//     else{
//         console.log(i);
//     }
    
// }

let i = 1;

liElement.innerHTML = parseInt(i);
console.log(liElement);