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

//  CONTACT FORM VALIDATION
const form = document.getElementById('contact');
function validate(e) {
  const fname = document.getElementById('fname').value;
  const lname = document.getElementById('lname').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const fnameErr = document.querySelector('.fname-error');
  const lnameErr = document.querySelector('.lname-error');
  const emailErr = document.querySelector('.email-error');
  const messageErr = document.querySelector('.message-error');
  const regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
  if(fname.trim() === '') {
    fnameErr.innerHTML = 'Enter your first name!';
    e.preventDefault();
  } else {
    fnameErr.innerHTML = '';
  }
  if(lname.trim() === '') {
    lnameErr.innerHTML = 'Enter your last name!';
    e.preventDefault();
  } else {
    lnameErr.innerHTML = '';
  }
  if(!email.trim().match(regExp)) {
    emailErr.innerHTML = 'Enter a valid email!';
    e.preventDefault()
  } else {
    emailErr.innerHTML = '';
  }
  if(message.trim() === '') {
    messageErr.innerHTML = 'Enter your message!';
    e.preventDefault();
  } else {
    messageErr.innerHTML = '';
  }
}

form.addEventListener('submit', validate);
