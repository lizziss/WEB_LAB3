const form = document.getElementById("form");
const firstName = document.getElementById('formFirstName');
const lastName = document.getElementById('formLastName');
const surname = document.getElementById('formSurname');
const group = document.getElementById('formGroup');
const startBtn = document.getElementsByTagName('button')[0];
const mainPage = document.getElementById('mainPage');
const questionsPage = document.getElementById('questionsPage');
const finishPage = document.getElementById('finishPage');

startBtn.addEventListener('click', (e) => {
   e.preventDefault();
   let error = validateInputs();
   if (error === 0) {
      mainPage.classList.add('block');
      questionsPage.classList.remove('block');
      alert('Тестування розпочато');
   } else {
      alert('Please fill in the required fields');
   }
});

const setError = (input) => {
   input.parentElement.classList.add('_error');
   input.classList.add('_error');
   input.classList.remove('_success');
}


const setSuccess = element => {
   element.parentElement.classList.remove('_error');
   element.parentElement.classList.add('_success');
   element.classList.add('_success');

};
const setFinish = (element) => {
   element.parentElement.classList.remove('_success');
   element.classList.remove('_success');

}


const validateInputs = () => {
   const firstNameValue = firstName.value.trim()
   const lastNameValue = lastName.value.trim();
   const surnameValue = surname.value.trim();
   const groupValue = group.value.trim();
   let error = 0;
   if (firstNameValue === '') {
      setError(firstName);
      error++;
   } else {
      setSuccess(firstName);
   }

   if (lastNameValue === '' ) {
      setError(lastName);
      error++;
   } else {
      setSuccess(lastName);
   }

   if (surnameValue === '' ) {
      setError(surname);
      error++;
   } else {
      setSuccess(surname);
   }

   if (groupValue === '' ) {
      setError(group);
      error++;
   } else {
      setSuccess(group);
   }
   return error;

};