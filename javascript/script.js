const date = document.querySelector('.date');
const time = document.querySelector('.time');
const logInButton = document.querySelector('.login');
const registerButton = document.querySelector('.register');

const displayTime = function () {
  const months = [
    'jan',
    'feb',
    'mar',
    'apr',
    'may',
    'jun',
    'jul',
    'aug',
    'sep',
    'oct',
    'nov',
    'dec',
  ];
  const d = new Date();

  const mon = `${months[d.getMonth()]}`.toUpperCase();

  date.textContent = `${d.getDate()} ${mon} ${d.getFullYear()}`;

  const h = `${d.getHours()}`.padStart(2, 0);
  const m = `${d.getMinutes()}`.padStart(2, 0);
  const s = `${d.getSeconds()}`.padStart(2, 1);

  time.textContent = `${h} : ${m} : ${s}`;
};

setInterval(displayTime, 1000);
