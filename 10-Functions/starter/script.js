'use strict';

// const bookings = [];

// const createBooking = function(flightNum
//     , NumofPassanger = 1, price = 100){

//         // NumofPassanger = NumofPassanger || 1;
//         // price = price || 200;



//         const booking = {
//             flightNum,
//             NumofPassanger,
//             price
//         }

//         console.log(booking);
//         bookings.push(booking);
//     }


// createBooking('LM123');
// createBooking('lm333', 3 , 299);
// // an de thelw n valw timi,
// // t vazw undefined (tha parei t DF timi )
// createBooking('lm333', undefined, 400);

// const flight = '1233';
// const theo ={
//     name:'theo',
//     passName: 2342342
// }


// const checkIn = function(flightNum, passanger){
//     flightNum = 'lh999';
//     passanger.name = 'Mr ' + passanger.name;

//     if (passanger.passName === 2342342){
//         alert('check in');
//     }else{
//         alert('wrooooong');
//     }
// }

// checkIn(flight, theo);
// console.log(flight);
// console.log(theo);


// const newPass = function(person){
//     person.passName= Math.trunc(Math.random() * 100 );

// };


// newPass(theo);
// checkIn(flight, theo);


const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
};


const upperFirstWord = function(str){
    const  [first, ...others] = str.split(' ');
    return[first.toUpperCase(), ...others].join(' ');

};

//high order function
const transformer = function (str, fn){

    console.log(`original string: ${str}`);

    // kalw tin upperfirsword function.
    console.log(`Transformed string: ${fn(str)}`);
};


transformer('java is good', upperFirstWord);

//function return function

const greet = function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`)
    };
};

//to greeterHey anaferetai st eswteriko function.
const greeterHey = greet('hey');

greeterHey('theo');

const tax = function(rate){
    return function(value){
        return value + value * rate;
    };
};

const rates = tax(0.1);
console.log(rates(200));

//============//

//call method
const lufthansa = {
    airline: 'lufthansa',
    iataCode: 'LH',
    bookings: [],
    //book: function() {}
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
        );
        this.bookings.push({flight:` ${this.iataCode}${flightNum}`, name})
    },
};

lufthansa.book(222, 'theo');
lufthansa.book(111,'john');
console.log(lufthansa);

const eurowings = {
    airline: 'Eurowings',
    iataCode:'EW',
    bookings: [],

};

//gia na perasw times mesa st book tis lufthasa i tou eurowings, xwris na gafw kathe fora nea book
//xrisimopoio t functions pou einia st lufthansa alla ta this deixnoun st eurowings
const book = lufthansa.book;
book.call(eurowings, 23, 'Saraha williams');
book.call(eurowings, 23, 'jessica');
book.call(eurowings, 23, 'theodoros');



//apply method

const flightData = [44, 'despoina'];

book.apply = (lufthansa, flightData);
console.log(lufthansa);
console.log(eurowings);
// idio me t apply
book.call(eurowings,...flightData);


//bind method

// ftiaxnw ena function pou to this tou koitaei mono to eurowings
const bookEw = book.bind(eurowings);
const bookLu = book.bind(lufthansa);

bookEw(31, 'Jijel');

// mporw na kanw bind kai to flight number apo to booking
// gia na einai ola t onomata sto flight 23
 const bookEw23 = book.bind(eurowings, 23);
 bookEw23('kakarot');

 // with eventListeners

 lufthansa.planes = 300;
 lufthansa.buyPlane = function(){
     //to this auto deicnei to button event listener
     console.log(this);
     this.planes++
     console.log(this.planes);
 };

 document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);
// gia na deiksw to object lufthansa tha balw bind
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));


//partial application

const addTax = (rate, value) => value + value * rate;

console.log(addTax(0.10, 200));
// vszw null giati de xreiazetai na deiksw opws st alla calls, den exw this.
const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));


const poll = {
    question: 'what is your fav programming language',
    options: ['0: Javascript', '1: Java', '2: Python', '3: c++'],
    answers: new Array(4).fill (0),
    registerNewAnswer(){
        const answer = Number(prompt(`${this.question}\n
        ${this.options.join('\n')}\n
        (write option number)`));
        console.log(answer);

        //Register answer

        // an einai true ta 2 prwta && tha ginei to 3o.
        typeof answer === 'number' && answer < 
        this.answers.length && this.answers[answer]++;
        //to displayresults  kaleite meta to method pou grafw parakatw
        this.displayResults();
        this.displayResults('string');
    },
    //type = array, vazei san default t array
    displayResults(type = 'array'){
        if(type === 'array'){
            console.log(this.answers);
        }else if (type === 'string'){
            console.log(`Poll resultd are ${this.answers.join(', ')}`);
        }
    }
};

//poll.registerNewAnswer();
// bazw bind poll giati to this tha deiksei st button enw thelw n deiksei st obj
document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));