// Відстежуй на формі подію input, і щоразу записуй у локальне сховище
// об'єкт з полями email і message, у яких зберігай поточні значення полів форми.
// Нехай ключем для сховища буде рядок "feedback-form-state".
// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані,
//     заповнюй ними поля форми.В іншому випадку поля повинні бути порожніми.
// Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль
// об'єкт з полями email, message та їхніми поточними значеннями.
// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд.
// Для цього додай до проекту і використовуй бібліотеку
const throttle = require('lodash.throttle');

const formEl = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');

const LOCALSTORAGE_KEY = 'feedback-form-state';

const onInput = () => {
  const formData = { email: email.value, message: message.value };
  const strFormData = JSON.stringify(formData);
  localStorage.setItem(LOCALSTORAGE_KEY, strFormData);
};

const onSubmit = e => {
  e.preventDefault();
  if (email.value === '' || message.value === '') {
    alert('You have to fill in all fields!');
    return;
  }
  console.log({ email: email.value, message: message.value });
  e.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
};

const key = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
if (key) {
  email.value = key.email;
  message.value = key.message;
}

formEl.addEventListener('input', throttle(onInput, 500));
formEl.addEventListener('submit', onSubmit);
