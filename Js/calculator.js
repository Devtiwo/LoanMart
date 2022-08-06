//  FUNCTIONALITY FOR MOBILE MENU

const menu = document.querySelector('.fa-bars');
const mobLinks = document.querySelectorAll('.links');
const mobMenu = document.querySelector('.mobile');
const closeBtn = document.querySelector('.fa-times');

menu.addEventListener('click', () => {
  mobMenu.classList.remove('hidden');
  mobMenu.classList.add('slide-right');
});

closeBtn.addEventListener('click', () => {
  mobMenu.classList.add('hidden');
});

for (let i = 0; i < mobLinks.length; i++) {
  mobLinks[i].addEventListener('click', () => {
    mobMenu.classList.add('hidden');
  });
}

// FUNCTIONALITY FOR LOAN CALCULATOR
const btn = document.getElementById('calc');
const amountError = document.querySelector('.amount-err');
const rateError = document.querySelector('.rate-err');
const termError = document.querySelector('.term-err');

function validate(e) {
  const amount = document.getElementById('amount').value;
  const rate = document.getElementById('rate').value;
  const term = document.getElementById('term').value;

  if(amount.trim() === '' ) {
    amountError.innerHTML = 'Enter a valid loan amount';
    e.preventDefault();
  } else {
    amountError.innerHTML = '';
  }

  if(rate.trim() === '') {
    rateError.innerHTML = 'Enter a valid rate';
    e.preventDefault();
  } else {
    rateError.innerHTML = '';
  }

  if(term.trim() === '') {
    termError.innerHTML = 'Enter a valid loan term';
    e.preventDefault();
  } else {
    termError.innerHTML = '';
  }

  const interest = (amount * rate * term) / 100;
  const totalPayment = parseInt(amount) + parseInt(interest);
  const monthlyPayment = parseInt(totalPayment) / parseInt(term);
  document.querySelector('.monthly').innerHTML = monthlyPayment.toFixed(2);
  document.querySelector('.total-payment').innerHTML = totalPayment;
  document.querySelector('.interest').innerHTML = interest;
}

btn.addEventListener('click', validate);