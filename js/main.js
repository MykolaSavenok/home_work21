const btns = document.querySelectorAll('.btn');

const toggleShadow = (button) => {
   return new Promise((resolve) => {
      button.classList.toggle('shadow');
      resolve();
   });
};

const checkButtonStatus = () => {
   return new Promise((resolve, reject) => {
      const allButtonsPressed = [...btns].every(btn => btn.classList.contains('shadow'));
      const oddButtonsPressed = [...btns].every((btn, index) => index % 2 === 0 ? btn.classList.contains('shadow') : true);
      const evenButtonsPressed = [...btns].every((btn, index) => index % 2 !== 0 ? btn.classList.contains('shadow') : true);

      if (allButtonsPressed) {
         resolve('Всі кнопки натиснуті');
      } else if (oddButtonsPressed) {
         resolve('Натиснуті всі непарні кнопки');
      } else if (evenButtonsPressed) {
         resolve('Натиснуті всі парні кнопки');
      } else {
         reject('Ще не всі кнопки натиснуті');
      }
   });
};

btns.forEach(button => {
   button.addEventListener('click', () => {
      toggleShadow(button)
         .then(() => checkButtonStatus())
         .then((message) => {
            console.log(message);
         })
         .catch(error => console.error(error));
   });
});
