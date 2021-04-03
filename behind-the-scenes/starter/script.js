'use strict';
const restaurant = {
    name: 'classico italian',
    location: 'via angelo 23',
    categories: ['Italian', 'Pizzeria', 'Vegeterian','Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic bread', 'Caprese salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open:12,
            close:22,
        },
        fri:{
            open:11,
            close:23,
        },
        sat:{
            open:0,
            close:24,
        },
    },

    order:function (starterIndex, mainIndex){
        return[this.starterMenu[starterIndex], this.mainMenu[mainIndex]];

    },


    orderPasta: function (ing1, ing2, ing3){
        console.log(`here is your pasta with ${ing1}, ${ing2}`);

    }
};

const ingredients = [ 
prompt('lets make pasta ingredient 1?'),
prompt(`ingredient 2`)];
console.log(ingredients);
restaurant.orderPasta(...ingredients);



const arr = [7,8,9];
const newArr = [1,2, ...arr];
console.log(newArr);

const newMenu = [...restaurant.mainMenu, 'gnocci'];
console.log(newMenu);


//copy array
const mainMenuCopy = [...restaurant.mainMenu];
//join array
const menu1 = [...restaurant.starterMenu, ...restaurant.mainMenu];

// OBJECT DESTRUCTURING

const {name, openingHours, categories} = restaurant;
console.log(name,openingHours, categories);

const {name: restaurantName, openingHours: hours, categories: tags}= restaurant;
console.log(restaurantName,hours, tags)

// st menu = [] einaidefault price gia t menu, epeidi den uparxei to vazei keno
const {menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

//mutating variebles
let a  = 111;
let b =  999;

const obj = {a:23, b:45, c:67};
({a, b} = obj);
console.log(a,b);

// nested

const {fri: {open, close}} = openingHours;
console.log(open, close);

//DESTRUCTURING ARRAYS
// const arr= [2,3,4];
// const a =arr[0]; 
// const b =arr[1]; 


// const [x,y] = arr;
// console.log(x,y);

// let [main, secondary] = restaurant.categories;
// console.log(main,secondary);

// // const temp = main;
// // main = secondary;
// // secondary = temp;

// //allazw seira 
// [main,secondary] = [secondary, main]
// console.log(main,secondary);

// //console.log(restaurant.order(2,0));
// const [starter, mainCourse ] = restaurant.order(2,0);
// console.log(starter, mainCourse);

// //nested destructuring
// const nested = [2,4,[5,6]];
// const [g, ,h] = nested;
// console.log(g,h);

// const [i, , [r, t]] = nested;
// console.log(i,r,t);


