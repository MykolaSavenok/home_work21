const buttonCount = 5;
const timeout = 500;
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

Promise.all(buttonsPromisses.filter((_, index) => index % 2 === 0))
   .then(() => {
      setTimeout(() => {
         alert('Всі непарні кнопки натиснуті!');
      }, timeout);
   });

Promise.all(buttonsPromisses.filter((_, index) => index % 2 !== 0))
   .then(() => {
      setTimeout(() => {
         alert('Всі парні кнопки натиснуті!');
      }, timeout);
   });

Promise.all(buttonsPromisses)
   .then((answer) => {
      if (answer) {
         setTimeout(() => {
            alert('Всі кнопки натиснуті!');
         }, 2500);
      }
   })

