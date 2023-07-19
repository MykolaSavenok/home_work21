const buttonCount = 5;
const timeout = 5000;
const shadow = 'shadow'

for (let i = 1; i <= buttonCount; i++) {
   const btnElem = document.createElement('button');
   const wrap = document.querySelector('.wrapper');
   btnElem.className = 'btn'
   btnElem.textContent = 'Click';
   wrap.append(btnElem);
}

const buttonsElements = [...document.querySelectorAll('.btn')];

const buttonsPromisses = buttonsElements.map(
   btnElem => new Promise((resolve, reject) => {
      btnElem.onclick = () => resolve(btnElem.classList.add(shadow));
   }))

Promise.all(buttonsPromisses.filter((_, index) => index % 2 !== 0))
.then(() => {
   alert('Всі непарні кнопки натиснуті!');
 });

 Promise.all(buttonsPromisses.filter((_, index) => index % 2 === 0))
 .then(() => {
   alert('Всі парні кнопки натиснуті!');
 });

Promise.all(buttonsPromisses)
   .then((answer) => {
      if (answer) {
         alert('Всі конпки натиснуті');
      }
   })

