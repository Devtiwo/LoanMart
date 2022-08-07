//  FUNCTIONALITY FOR MOBILE MENU
const menu = document.querySelector('.fa-bars');
const mobLinks = document.querySelectorAll('.links');
const mobMenu = document.querySelector('.mobile');
const closeBtn = document.querySelector('.fa-times');

menu.addEventListener('click', () => {
  mobMenu.classList.remove('hidden');
  mobMenu.classList.add('slide-right');
  mobMenu.style.zIndex = '2';
});

closeBtn.addEventListener('click', () => {
  mobMenu.classList.add('hidden');
});

for (let i = 0; i < mobLinks.length; i++) {
  mobLinks[i].addEventListener('click', () => {
    mobMenu.classList.add('hidden');
  });
}

//   FUNCTIONALITY FOR PROGRESS BAR
const backBtns = document.querySelectorAll('.btn-back');
const nextBtns = document.querySelectorAll('.btn-next');
const progress = document.getElementById('progress');
const formSteps = document.querySelectorAll('.form-step');
const progressSteps = document.querySelectorAll('.progress-step');

let formStepsNum = 0;
nextBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    formStepsNum++;
    updateFormSteps();
    updateProgressbar();
  });
});

backBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
  });
});

function updateFormSteps() {
  formSteps.forEach(formStep => {
    formStep.classList.contains('form-step-active') &&
    formStep.classList.remove('form-step-active');
  });
  formSteps[formStepsNum].classList.add('form-step-active');
}

function updateProgressbar() {
  progressSteps.forEach((progressStep, index) => {
    if(index < formStepsNum + 1) {
      progressStep.classList.add('progress-step-active');
    } else {
      progressStep.classList.remove('progress-step-active');
    }
  });
  const progressActive = document.querySelectorAll('.progress-step-active');
  progress.style.width = ((progressActive.length - 1) / (progressSteps.length -1)) * 100 + '%';
}