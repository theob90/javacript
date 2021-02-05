'use strict';


// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnClose = document.querySelector('.close-modal');

// // const btnClose = document.querySelector.querySelector('.show-modal');
// // console.log(btnClose);

// const openModal = function(){
//     console.log('button clicked');
//     //allazei to hidden apo t html arxeio.
//     //epidi afairw tin class vazw classList
//     //de vazw .hidden giati i class legetai hidden, den einai selector.
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
// };

// const btnsOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnsOpenModal);

// for(let i = 0; i<btnsOpenModal.length; i++){
//     btnsOpenModal[i].addEventListener('click', openModal);
// }

// //gia na min exw epanalipsi to modal kai overlay ta vazw se ena const

// const closeModal = function(){
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');

// };

// btnClose.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

// document.addEventListener('keydown', function(e){
//     //gia n dw pio key patietai
//     console.log(e.key);
//     if(e.key === 'Escape'){

//         //elenxw an fainetai i oxi to modal
//         if(!modal.classList.contains('hidden')){
//             closeModal();
//         };
//     }
// });

const modal = document.querySelector('.modal');
const btnClose = document.querySelector('.close-modal')
const overlay = document.querySelector('.overlay');

const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const btnOpenmodal = document.querySelectorAll('.show-modal');

for(let i=0; i<btnOpenmodal.length; i++){
    btnOpenmodal[i].addEventListener('click', openModal);
};

//CLOSE MODAL

const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

const btnCloseModal = document.querySelector('.show-modal');

btnClose.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//CLOSE ME ESC

document.addEventListener('keydown', function(e){
    console.log(e.key);
    if(e.key === 'Escape'){
        if(!modal.classList.contains('hidden')){
            closeModal();
        }
    };
});