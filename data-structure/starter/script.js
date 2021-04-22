'use strict';

const weekDays = ['mon','tuesday','wed', 'thursday', 'friday','sat'];

const openingHours= {
  [weekDays[2]]:{
    open:12,
    close:12
  },
  [weekDays[1]]:{
    open:11,
    close:23,
  },
  sat:{
    open:0,
    close:24
  },
};

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';



// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
  //es6 enhanced object literals
  openingHours,

  // idio me to na egrafa kai t function ops einai t parakatw
  order (starter, main){
    return [this.starterMenu[starter], this.mainMenu[main]];
  },

  orderDelivery: function({starter,mainIndex,time,adress}){
    console.log(`order received ${this.starterMenu[starter]}
     and ${this.mainMenu[mainIndex] }
      will be delivered to ${adress} at ${time}`);
  },

  orderPizza:  function(mainIng, ...otherIng){
    console.log(mainIng);
    console.log(otherIng);
  }
};



// for (const day of Object.keys(openingHours)){
//   console.log(day);
// }

// //Rest operator otan einai ... aristera apo  t =
// //pairnei oti exei meta t risoto..oxi oti exoume kanei skip
// //episis prepi n einai panta st teleutaia thesi to ...others
// const [pizza, , risotto, ...others] =[...restaurant.mainMenu, ...restaurant.starterMenu];

// console.log(pizza, risotto, others)

// // //Rest parameters in function

// // const add = function (...numbers){
// //   console.log(numbers);
// // };
// // add(2,3);
// // add(2,3,5,67,);

// // restaurant.orderPizza('mushroms', 'onion','spinach');

// // ///DISTRUCURING OBJECTS /////
// // restaurant.orderDelivery({
// //   time:'23:30',
// //   adress:'skata23',
// //   mainIndex:2,
// //   starter:2,

// // });

// // const {name,openingHours, categories} = restaurant;
// // console.log(name, openingHours,categories);

// // const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
// // console.log(restaurantName,hours,tags);


// // // me t [] t kanw set ena default values epeidi t menu den uparxei kapou
// // const {menu = [], starterMenu:starters = []} = restaurant;
// // console.log(menu, starters);


// // //mutating variables
// // let a = 111;
// // let b = 999;
// // const obj = {a:23, b: 5 , c: 14};

// // ({a,b} = obj);
// // console.log(a,b);

// // const {fri:{open, close}} = openingHours;
// // console.log(open, close);



// // // ///DISTRUCURING ARRAYS /////
// // // const arr  =[2,3,4];
// // // const a = arr[0];
// // // const b = arr[1];
// // // const c = arr[2];

// // // const [x,y,z] =arr;
// // // console.log(x,y,z);


// // // // otan kanw distructoring gia na kanw skip to ena value vazw ,, 
// // // let [main, ,secondary] = restaurant.categories;
// // // console.log(main,secondary);

// // // // anti na kanw auto tha kanw distructuring
// // // // const main = main;
// // // // main = secondary;
// // // // secondary =temp;


// // // //kanei switch t values opws apo panw
// // // [main,secondary] =[secondary, main];
// // // console.log[main, secondary];

// // // // t pairnw san values
// // // const[starter, mainCourse] = restaurant.order(2,0);
// // // console.log(starter,mainCourse) ;

// // // //nested

// // // const nested = [2,3, [5,6]];
// // // //const [i, ,j] = nested;
// // // //console.log(i,j);
// // // const[i, , [j,k]] = nested;
// // // console.log(i,j,k);



/////TEST

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...field]=players1;
console.log(gk, field);

const allPlayers  = [...players1, ...players2]
console.log(allPlayers);

const players1Final = [...players1, 'tiago', 'coutognio', 'perisic'];

const {odds:{team1, x:draw, team2}} = game;

const printGoals =  function(...players){
  console.log(`${players.length} goals were scored`);
}

printGoals('Daviers','Muller', 'lewadofski');
printGoals('Daviers','Muller', );

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for(const item of menu) console.log(item);

for(const item of menu.entries()) {
  console.log(item);
}

console.log([...menu.entries()]);

if(restaurant.openingHours.mon){
  console.log(restaurant.openingHours.mon);
};
if(restaurant.openingHours.sat){
  console.log(restaurant.openingHours.sat);
};

//optional chaining
//an uparxei i deutera tha gurisei timi 
//an den uparxei deutera de gurizei error alla undefined
console.log(restaurant.openingHours.mon?.open);

// example
const days = ['mon','tuesday','wed', 'thursday', 'friday','sat'];
 for (const day of days){
  //  console.log(day);
   const open =  restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`on ${day}, we open at ${open}`);
 };


 //method chaing

 console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
 console.log(restaurant.orderasasd?.(0,1) ?? 'Method does not exist');


 //looping over property names...keys

const properties = Object.keys(openingHours);
console.log(properties);

console.log(`we are open on ${properties.length}`);

 for (const day of Object.keys(openingHours)){
   console.log(day);
 }

 let openStr = `We are open on ${properties.length} days
 :`;

 for (const opndays of properties){
   openStr +=`${opndays} `;
 }
console.log(openStr);


// property valus

const values = Object.values(openingHours)
console.log(values);

const entries = Object.entries(openingHours);

//console.log(entries);

for ( const [key, {open, close}] of entries){
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

//test

for (const [i, player] of game.scored.entries()){
  console.log(`goal ${i +1}: ${player}`);
}

let average=0;
for (const odd of Object.values(game.odds)){
  average += odd;
  average/= Object.values(game.odds).length;
  console.log(average);
}

// sets

const ordersSet = new Set ([
  'pasta',
  'Pizza',
  'Rissote',
  'pasta',
  'pizzetti',
  'mmprokolo'
]);

console.log(ordersSet);

console.log(new Set('Jonas'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
ordersSet.add('Garlis Bread');
console.log(ordersSet);
ordersSet.delete('Garlis Bread');
console.log(ordersSet);


for (const order of ordersSet) console.log(order);

//example

const staff = [
  'waiter',
  'chef',
  'waiter',
  'manager',
  'chef',
  'waiter'
];


const staffUnique = [...new Set (staff)];
console.log(staffUnique);

// MAP

const rest = new Map ();
//add values 

rest.set('name', 'Classico');
rest.set (1, 'firense');
rest.set(2, 'Athens');
console.log(rest);

rest.set('categories', ['Italian', 'Pizzeria', 'Vegeterian','Organic'])
.set('open', 11)
.set('close', 23)
.set(true,'we are open');

console.log(rest.get('name'));
console.log(rest.get(true));

const time = 21;
console.log(rest.get(time > rest.get('open') && time< rest.get('close')));

console.log(rest.has('organic'));
rest.delete(2);
console.log(rest);

rest.set([1,2], 'Test');
// tha gurisei undefined
console.log(rest);

// prepei na ftiaksw ena const array[1,2]
// kai na valw t array san key

// mporw na valw kai obj san key
rest.set(document.querySelector('h1'), 'Heading');