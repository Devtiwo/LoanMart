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

// FUNCTIONALITY FOR RANDOM BACKGROUND COLOR IN ABOUT PAGE

const background = document.querySelector('.about-banner');

function getRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const bgColor = `rgb(${red}, ${green}, ${blue})`;
  background.style.backgroundColor = bgColor;
};

setInterval(getRandomColor, 5000);

