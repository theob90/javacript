


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


function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProccess(apples,oranges){

    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice= `juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
    return juice;

}

console.log(fruitProccess(2,3));



