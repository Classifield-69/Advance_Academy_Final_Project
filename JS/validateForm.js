function validateForm() {
  let isValid = true;

  const firstName = document.getElementById('firstName');
  const firstNameErr = document.getElementById('firstName-err');
  if (firstName.value.trim() === '') {
    firstNameErr.textContent = 'Името не може да е празно.';
    isValid = false;
  } else {
    firstNameErr.textContent = '';
  }

  const lastName = document.getElementById('lastName');
  const lastNameErr = document.getElementById('lastName-err');
  if (lastName.value.trim() === '') {
    lastNameErr.textContent = 'Фамилията не може да е празна.';
    isValid = false;
  } else {
    lastNameErr.textContent = '';
  }

  const phone = document.getElementById('phone');
  const phoneErr = document.getElementById('phone-err');
  const phoneRegex = /^\+?[0-9\s\-]{7,15}$/;
  if (!phoneRegex.test(phone.value.trim())) {
    phoneErr.textContent = 'Въведи валиден телефонен номер.';
    isValid = false;
  } else {
    phoneErr.textContent = '';
  }

  const email = document.getElementById('email');
  const emailErr = document.getElementById('email-err');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value.trim())) {
    emailErr.textContent = 'Въведи валиден имейл адрес.';
    isValid = false;
  } else {
    emailErr.textContent = '';
  }

  const question = document.getElementById('question');
  const questionErr = document.getElementById('question-err');
  if (question.value.trim() === '') {
    questionErr.textContent = 'Въпросът не може да е празен.';
    isValid = false;
  } else {
    questionErr.textContent = '';
  }

  return isValid;
}