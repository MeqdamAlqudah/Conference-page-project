/* eslint-disable func-names */
// more-button activation
const moreElements = function () {
  // prettier-ignore
  const hide = document.querySelector('.hide').classList;
  // prettier-ignore
  if (hide.contains('hidden')) {
    hide.remove('hidden');
    document.querySelector('.more-btn .arrow .up').classList.remove('hidden');
    document.querySelector('.more-btn .arrow #down').classList.add('hidden');
    document.querySelector('.more-btn .text').textContent = 'LESS';
  } else {
    hide.add('hidden');
    document.querySelector('.more-btn .arrow .up').classList.add('hidden');
    document.querySelector('.more-btn .arrow #down').classList.remove('hidden');
    document.querySelector('.more-btn .text').textContent = 'MORE';
  }
};
// prettier-ignore
document
  .querySelector('.more-btn')
  .addEventListener('click', moreElements);

//  The menu
// Open the menu
// prettier-ignore
const openMenu = function () {
  document.querySelector('.menu').classList.remove('hidden');
};
// Close the menu
// prettier-ignore
const closeMenu = function () {
  document.querySelector('.menu').classList.add('hidden');
};
// prettier-ignore
const menuOpenerCloser = function () {
  if (document.getElementsByClassName('menu')[0].classList.contains('hidden')) {
    openMenu();
  } else {
    closeMenu();
  }
};
// prettier-ignore
document.getElementsByClassName('menu_')[0].addEventListener('click', menuOpenerCloser);
// Show Home Page
// prettier-ignore
const showHome = function () {
  document.querySelector('.text-container').classList.remove('hidden');
  document.querySelector('.text-containerAbout-page').classList.add('hidden');
  document.querySelector('.container p.display-1').style.textAlign = '';
  document.querySelector('.container h1').style.textAlign = '';
  document.getElementsByClassName('mainProgram')[0].classList.remove('hidden');
  document
    .getElementsByClassName('featuredSpeakers')[0]
    .classList.remove('hidden');
  document.getElementsByClassName('dateAbout')[0].classList.add('hidden');
  document.getElementsByClassName('date')[0].classList.remove('hidden');
  document.getElementsByClassName('about-page')[0].classList.add('hidden');
  document.getElementsByClassName('Partner')[0].classList.add('hidden');
  document.querySelector('.text-container').classList.remove('hidden');
  document.querySelector('.text-containerAbout-page').classList.add('hidden');
};
// Show About Page
// prettier-ignore
const showAbout = function () {
  document.querySelector('.text-container').classList.add('hidden');
  document.querySelector('.text-containerAbout-page').classList.remove('hidden');
  document.querySelector('.container p.display-1').style.textAlign = 'center';
  document.querySelector('.container h1').style.textAlign = 'center';
  document.getElementsByClassName('mainProgram')[0].classList.add('hidden');
  document.getElementsByClassName('featuredSpeakers')[0].classList.add('hidden');
  document.getElementsByClassName('about-page')[0].classList.remove('hidden');
  document.getElementsByClassName('Partner')[0].classList.remove('hidden');
  document.getElementsByClassName('dateAbout')[0].classList.remove('hidden');
  document.getElementsByClassName('date')[0].classList.add('hidden');
  document.querySelectorAll('.home-page p')[4].style.marginBottom = '56px';
};
// add Event listener to menu options
// prettier-ignore
document.querySelector('.menu li.about').addEventListener('click', showAbout);

// prettier-ignore
document.querySelector('.menu li.home').addEventListener('click', showHome);
