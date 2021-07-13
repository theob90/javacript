'use strict';


const Person = function (firstName, birthYear) {
    this.firstName  = firstName;
    this.birthYear = birthYear;

    //kanw assign to function st property this.calcAge, ara ginete method
    //de t kanw auto
    //einai lathos logw performance
    // this.calcAge = function () {
    //     console.log( 2040 - this.birthYear);
    // };
};



const theo = new Person('theo', 1990);
console.log(theo);


//1. new empty object created
//2. function is called, this  = {}
//3. {} linked to prototype.
//4. function auto retrurns  {} ( empty obj)

const deps = new Person('Desp', 1989);
console.log(deps, theo);

//gia na ftiaksw mia methodo

Person.prototype.calcAge = function(){
    console.log(2040 - this.birthYear);
};

theo.calcAge();
console.log(theo.__proto__);
console.log(theo.__proto__.__proto__);
console.dir(Person.prototype.constructor);

const arr = [3,4,5,6,7];
console.log(arr.__proto__);


const Car = function (speed) {
    this.speed = speed ;
    console.log(speed+ `km/h`)
}

const car1 = new Car(100);
console.log(car1);

Car.prototype.accelarate = function(){
    this.speed += 10;
    console.log(this.speed + `km/h`);
};


Car.prototype.brake = function (){
    this.speed -= 10;
    console.log(this.speed);
}
car1.accelarate();
car1.accelarate();
car1.accelarate();

car1.brake();

// es6 classes

class PersonCL {
    constructor(fullName, birthYear){
        this.fullName =fullName;
        this.birthYear = birthYear;
    }

    calcAge(){
        console.log(2040 - this.birthYear);
    }

    set fullName(name){
        if(name.includes(' ')) this._fullName = name;//t _ t vazw gia na apofugw to conflict tou full name edw me t fullanem t constructor
        else alert(`${name} is not a full name`)
    }

    //vaz ena getter giati xanetai to fullname (exw _fullname)
    get fullName(){
        return this._fullName;
    }
}


const jessica = new PersonCL('jesb v', 1985);
console.log(jessica);
jessica.calcAge();

/// GETTERS AND SETTER


const account = {
    owner : 'theo',
    movement : [200,400,543,634],

    get latest(){
        return this.movement.slice(-1).pop(); // pop gia na min girisei pinaka
    },

    set latest(mov){
        this.movement.push(mov);
    },

};

console.log(account.latest);
account.latest = 50;
console.log(account.movement);
 


