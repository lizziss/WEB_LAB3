let answer1 = document.querySelectorAll('.options__input1'),
   answer2 = document.querySelectorAll('.options__input2'),
   answer3 = document.querySelectorAll('.options__input3'),
   answer4 = document.querySelectorAll('.options__input4'),
   answer5 = document.querySelectorAll('.form__select'),
   answer6 = document.querySelectorAll('.checkbox__input1'),
   answer7 = document.querySelectorAll('.checkbox__input2'),
   answer8 = document.querySelectorAll('.checkbox__input3'),
   answer9 = document.querySelectorAll('.checkbox__input4'),
   answer10 = document.getElementById("input__text"),
   endBtn = document.getElementsByTagName('button')[1]
   result = document.getElementById("result"),
   sendForEmail = document.getElementById("sendForEmail"),
   sendForTelegram = document.getElementById("sendForTelegram");

   let firstNameValue, lastNameValue, surnameValue, groupValue;



const allAnswers = [answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10];

class Answers {

   constructor() {
      this.radio = new Array(3, 0, 0, 2);
      this.select = new Array(1, 2, 3, 4);
      this.checkBox = new Array([1, 2], [2, 3], [1, 2], [0, 1, 2, 3]);
      this.code = '@media';
   }
}
endBtn.addEventListener('click', (e) => {
   e.preventDefault();
   var a = checkAnswers();
   console.log(a);
   questionsPage.classList.add('block');
   finishPage.classList.remove('block');

   result.textContent+= a ;

   firstNameValue = document.getElementById('formFirstName').value;
   lastNameValue = document.getElementById('formLastName').value;
   surnameValue = document.getElementById('formSurname').value;
   groupValue = document.getElementById('formGroup').value;
});

function checkAnswers() {

   let answers = new Answers();
   var points = 0;
   var count = 0;

   //checking the correct answers for radio
   for (let i = count; i < 4; i++) {
      if (allAnswers[i][answers.radio[i]].checked) {
         points++;
      }
      count++;
   }

   //checking the correct answers for select
   for (let i = 0; i < 4; i++) {
      if (allAnswers[count][i].value == answers.select[i]) {
         points += 0.25;
      }
   }
   count++;


   //checking the correct answers for checkBox with 2 answers
   for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 2; j++) {
         if (allAnswers[count][answers.checkBox[i][j]].checked) {
            points += 0.5;
         }
      }
      count++;
   }

   //checking the correct answers for checkBox with 4 answers
   for (let i = 0; i < 4; i++) {
      if (allAnswers[count][answers.checkBox[3][i]].checked) {
         points += 0.25;
      }
   }
   count++;


   if (allAnswers[count].value == answers.code) {
      document.body.classList.add('changeColor');
      points++;
   }

   return points;
}


sendForEmail.addEventListener('click', (e) => {
   e.preventDefault();
   sendEmail();

});

sendForTelegram.addEventListener('click', (e) => {
   e.preventDefault();
   sendTelegram();

});

//function for sending results to mail
function sendEmail() {
   sendForEmail.disabled = true;
   const mes = "Ім'я: " + firstNameValue + "\nПрізвище: " + lastNameValue + "\nПо-батькові" + surnameValue + "\nГрупа: " + groupValue + "\nРезультат: " + checkAnswers();
   emailjs.send("service_r1dfv64", "template_wggyhe5", {
      message: mes,
   });
}

//function for sending results to telegram
function sendTelegram() {
   sendForTelegram.disabled = true;
   fetch('https://api.telegram.org/bot1858844290:AAG4xVcUFcD6nNnKqz1biKvcGrhwNCsOHMk/sendMessage', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify({
         chat_id: -519873227,
         text: "Ім'я: " + firstNameValue + "\nПрізвище: " + lastNameValue + "\nПо-батькові: " + surnameValue + "\nГрупа: " + groupValue + "\nРезультат: " + checkAnswers()
      })
   });
}


