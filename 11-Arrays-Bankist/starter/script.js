'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


const displayMovements = function(movements){
  //diagrafei auta pou eixa prin st html kommati...ta proigoumena stoixeia
containerMovements.innerHTML = ''

  movements.forEach(function(mov, i){
    const type = mov > 0 ? 'deposit' : 'withdrawal'
//tha prepi na ferw auto t kommati html pou einai allagmeno st selida html

    const html = `
      <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>
  `;
  // to vazw st container movement stin html selid
  // pio panw t exw dwsei to onoma containerMovements st atistoixo row movement
  //afterbegin eiani t position. after the beginning element
  containerMovements.insertAdjacentHTML('afterbegin', html)
  })
}

// displayMovements(account1.movements);
////--------------------------------////

const calcPrintBalance = function(acc){
  const balance = acc.movements.reduce((acc, mov) => acc+ mov ,0);
  acc.balance = balance;
  labelBalance.textContent = `${acc.balance} EUR`;

};


const calcPrintSummary = function (acc) {
  const incomes =acc.movements.filter(mov => mov > 0)
    .reduce((acc, mov) => acc+mov, 0);
    labelSumIn.textContent = `${incomes} EUR`;

    const outcome = acc.movements.filter(mov => mov <0)
    .reduce((acc, mov) => acc - mov, 0);
    labelSumOut.textContent = `${outcome} EUR`;

    const interest =acc.movements.filter(mov => mov > 0)
    .map(dep => (dep * acc.interestRate)/100)
    .reduce((acc, int) => acc + int, 0 );
    labelSumInterest.textContent = `${interest}`;
  };

// calcPrintSummary(account1.movements);

// calcPrintBalance(account1.movements);


//computing usernames
const createUsernames = function(accs){

  accs.forEach(function(acc) {
    acc.username = acc.owner
    .toLowerCase()
    .split(' ')
    .map(function(name){
      return name[0];
    }).join('');
  })

  
};

createUsernames(accounts);
console.log(accounts);

let currentAccount

btnLogin.addEventListener('click', function (e) {
  //prevent form from submitting
  e.preventDefault();
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);// thelw t value apo autopou tha grapsw st field
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)){// me to ? einai san na elenxw an uparxei to account
    console.log('LOGGED');

    //display UI and message
    labelWelcome.textContent = `Welcome back ${currentAccount.owner.split (' ')[0]}`;// gia na valw mono t onoma
    containerApp.style.opacity = 100;

    //clear fields

    inputLoginUsername.value = inputLoginPin.value = ' ';
    // display movements
    displayMovements(currentAccount.movements);

    //display balance
    calcPrintBalance(currentAccount);

    //display summeray

    calcPrintSummary(currentAccount);
  }
  console.log('LOGIN');
});


btnTransfer.addEventListener('click', function(e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);

  console.log(amount, receiverAcc);

  if (amount >0 && currentAccount.balance >= amount && receiverAcc.username !== currentAccount.username){
    console.log('transfer valid');

  }

});





/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////


// let arr = ['a', 'b', 'c','d','e'];

// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));

// //gia n parw olo t pinakas
// //idio me t spread operator ...
// console.log(arr.slice());

// //splice i diafora einai oti allazei ton arxiko pinaka.

// //console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);



// //reverse

// arr = ['a', 'b', 'c','d','e'];

// const arr2= ['j','i','h','g','f'];
// console.log(arr2.reverse());
// console.log(arr2);


// //concat

// const letters = arr.concat(arr2);
// console.log(letters);
// // idio me t concat alla den allazei t pinaka
// console.log([...arr, ...arr2]);

// //join

// console.log(letters.join('-'));


// //-------------//


// // LOOPING

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for(const movement of movements) {
//   if(movement > 0){
//     console.log( `you deposited ${movement}`);

//   }else{
//     console.log(`you withdrawed ${Math.abs(movement)}`);
//   }
// }

// console.log('//---FOReach--//');
// //dinw oti onoma thelw 
// movements.forEach(function(movement) {
//   if(movement > 0){
//     console.log( `you deposited ${movement}`);

//   }else{
//     console.log(`you withdrawed ${Math.abs(movement)}`);
//   }
// });

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function(value, key, map){
//   console.log(`${key}: v ${value}`);
// });

// const currenciesUnique = new Set( ['usd', 'gbp', 'eur','usd', 'eur']);
// console.log(currenciesUnique);
// //t set den exei key
// currenciesUnique.forEach(function(value, key, map){
//   console.log(`${key}: v ${value}`);
// })

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;
const movementsUSD = movements.map(function(mov){
  return mov * eurToUsd;
});

// arrow function

// const movementsUSD = movements.map(mov => 
//   mov * eurToUsd
// );
console.log(movements);
console.log(movementsUSD);

const movementsDescr = movements.map((mov, i, arr) => {
  if(mov > 0){
        return `Movemetns ${i+ 1}: you deposited ${mov}`;
    
      }else{
        return` Movements ${i+1}: you withdrawed ${Math.abs(mov)}`;
      }
});

console.log(movementsDescr);

const deposit = movements.filter(function(mov){
  return mov > 0;
});

console.log(deposit);

//arroe function.
// to belaki einai ousiastika  t return.
const withdrawls = movements.filter(mov => mov < 0 );
console.log(withdrawls);

//to balance tha eiani ena value kai oxi array
//accumulator -> snowbal. tha vgalei sum apo t currencies
// acc -> accumulator, cur-> currencies

const balance = movements.reduce(function(acc, cur, i , arr){
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur

  //vazw miden giati to accumulator tha ksekinisei me to 0
  // prin arixsw na prosthetw
},0);

console.log(balance);

//arrow function reduce
const bal2 = movements.reduce((acc,cur )=> acc+cur);
console.log(bal2);

//get the maximum value

const max = movements.reduce((acc, mov) =>{
  if(acc > mov)
    return acc;
    else
    return mov;
  },movements[0]);

  console.log(max);

const totalDepUsd = movements.filter(mov => mov>0).map(mov => mov *eurToUsd).reduce((acc, mov) => acc + mov, 0);
console.log(totalDepUsd);

//find method

const firstWithrawl = movements.find(mov => mov <0 )
console.log(firstWithrawl);


console.log(accounts);

const account = accounts.find( acc => acc.owner === 'Jessica Davis');
console.log(account);






