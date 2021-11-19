// more-button activation
const moreElements = function () {
  // prettier-ignore
  const hide = document.querySelectorAll('.hide');
  // prettier-ignore
  if (hide[0].classList.contains('hidden')) {
    for (let i = 0; i < hide.length; i += 1) {
      hide[i].classList.remove('hidden');
    }
    document.querySelector('.more-btn .arrow .up').classList.remove('hidden');
    document.querySelector('.more-btn .arrow #down').classList.add('hidden');
    document.querySelector('.more-btn .text').textContent = 'LESS';
  } else {
    for (let i = 0; i < hide.length; i += 1) {
      hide[i].classList.add('hidden');
    }
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
  document.querySelector('.menu.mobile').classList.remove('hidden');
};
// Close the menu
// prettier-ignore
const closeMenu = function () {
  document.querySelector('.menu.mobile').classList.add('hidden');
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
// prettier-ignore
document
  .getElementsByClassName('cancel')[0]
  .addEventListener('click', menuOpenerCloser);

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
  document.querySelector('.container h1').style.fontSize = '40px';
  document.querySelector('.text-container').classList.remove('hidden');
  document.querySelector('.text-containerAbout-page').classList.add('hidden');
  if (window.screen.width >= 768) {
    document.querySelector('.PartnerContainer').classList.remove('hidden');
    document.querySelector('.Partner h2').classList.remove('hidden');
    document.querySelector('.finalLogo').style.backgroundColor = 'white';
    document.querySelector('.finalLogo').style.justifyContent = 'none';
    document.querySelector('.LogoImageContainer').style.height = '43vmax';
    document.querySelector('img.finalLogoImage').style.height = '8rem';
    document.querySelector('.container h1').style.fontSize = '80px';
    document.querySelector('.container').style.alignItems = 'left';
    document.querySelector('.container p.display-1').classList.remove('hidden');
    document.querySelector('.container').style.marginLeft = '10rem';
    document.querySelector('.container').style.alignItems = 'flex-start';
    closeMenu();
  }
  closeMenu();
};
// Show About Page
// prettier-ignore
const showAbout = function () {
  document.querySelector('.text-container').classList.add('hidden');
  document.querySelector('.LogoImageContainer').style.height = '36vmax';
  document.querySelector('.text-containerAbout-page').classList.remove('hidden');
  document.querySelector('.container p.display-1').style.textAlign = 'center';
  document.querySelector('.container h1').style.textAlign = 'center';
  document.getElementsByClassName('mainProgram')[0].classList.add('hidden');
  document.getElementsByClassName('featuredSpeakers')[0].classList.add('hidden');
  document.querySelector('.container h1').style.fontSize = '40px';
  document.getElementsByClassName('about-page')[0].classList.remove('hidden');
  document.getElementsByClassName('Partner')[0].classList.remove('hidden');
  document.getElementsByClassName('dateAbout')[0].classList.remove('hidden');
  document.getElementsByClassName('date')[0].classList.add('hidden');
  document.querySelector('.home-page').style.marginBottom = '56px';
  if (window.screen.width >= 768) {
    document.querySelector('.PartnerContainer').classList.add('hidden');
    document.querySelector('.Partner h2').classList.add('hidden');
    document.querySelector('.Partner').style.backgroundColor = '#252626';
    document.querySelector('.finalLogo').style.backgroundColor = '#252626';
    document.querySelector('.finalLogo').style.justifyContent = 'center';
    document.querySelector('.finalLogo').style.marginTop = '10px';
    document.querySelector('.finalLogoImage').style.marginRight = '10px';
    document.querySelector('.finalLogoImage').style.marginBottom = '10px';
    document.querySelector('.LogoImageContainer').style.height = '36vmax';
    document.querySelector('.finalLogoImage').style.height = '8rem';
    document.querySelector('.container h1').style.fontSize = '60px';
    document.querySelector('.container').style.alignItems = 'center';
    document.querySelector('.container p.display-1').classList.add('hidden');
    document.querySelector('.container').style.marginTop = '40px';
    document.querySelector('.container').style.marginLeft = '0';

    closeMenu();
  }
  closeMenu();
};
// add Event listener to menu mobile options
// prettier-ignore
document.querySelector('.menu li.about').addEventListener('click', showAbout);

// prettier-ignore
document.querySelector('.menu li.home').addEventListener('click', showHome);

// add Event listener to menu Desktop options
// prettier-ignore
document.querySelector('.menu .menuDesk li.about').addEventListener('click', showAbout);

// prettier-ignore
document.querySelector('.menu .menuDesk li.home').addEventListener('click', showHome);
// prettier-ignore
document.querySelector('.LogoDesktop').addEventListener('click', showHome);
// prettier-ignore
const changeThings = function () {
  document.querySelector('div.text-container').style.alignSelf = 'flex-start';
  document.querySelector('.LogoImageContainer').style.height = '43vmax';
  document.querySelector('img.finalLogoImage').style.height = '8rem';
  document.querySelector('.text-containerAbout-page').style.width = '90%';

  if (window.screen.width >= 768) {
    document.querySelector('div.text-container').style.alignSelf = 'flex-start';
    document.querySelector('.LogoImageContainer').style.height = '43vmax';
    document.querySelector('img.finalLogoImage').style.height = '8rem';
    document.querySelector('.text-containerAbout-page').style.width = '90%';
  }
};
// prettier-ignore
document.querySelector('body').addEventListener('scroll', changeThings);
