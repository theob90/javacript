


// //arrow function

// const calcAge3 = birthYear => 2021 - birthYear;
// const ageThree = calcAge3(1998);
// console.log(ageThree);

// const yearToRetirement = (birthYear, firstName) => {
//     const age = 2021 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement}  years`
// }

// console.log(yearToRetirement(1990, `theo`));


// function cutFruitPieces(fruit){
//     return fruit * 4;
// }

// function fruitProccess(apples,oranges){

//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice= `juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
//     return juice;

// }

// console.log(fruitProccess(2,3));

// const  calcAge = function (birthYear){
//     return 2021 - birthYear;
// } 

// const yearToRetirement = function (birthYear, firstName)  {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if(retirement> 0){
//         return `${firstName} retires in ${retirement}  years`;

//     }else{
//         return `${firstName} already retired`;
//     }

//     // return retirement;
// }

// console.log(yearToRetirement(1990, `theo`));
// console.log(yearToRetirement(1950, `thddddddddeo`));

// const friend1 = 'Theo';
// const friend2 = 'deps';
// const friend3 = 'paparia';

// const friends = ['Theo', 'deps','paparia'];
// console.log (friends);

// const years = new Array (1993,2002,2200);
// console.log(years);

// console.log(friends[0]);

// console.log(friends.length);

// const calcAge = function(birthYear){
//     return 2021 - birthYear;
// }

// const years1 = [1990,2200];

// console.log(calcAge(years1));


// const age1 = calcAge(years1[0]);
// console.log(age1);



// const friends = ['theo', 'deps']
// friends.push('foufo');
// console.log(friends);


const jonas = {
    first: 'theo',
    last:'bez',
    age:'33',
    job:'soft'

};

console.log(jonas.age);

// const interested = prompt('what do you want to know of jonas? choose first last age job');

// console.log(interested);

jonas.location ='Patra';
jonas.friends ='3';
jonas.bff='Michael';
console.log(jonas);

console.log('${jonas.first} has ${jonas.friends}`);
