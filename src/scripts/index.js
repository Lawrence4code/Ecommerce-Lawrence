import '../styles/style.scss';

console.log('index.js file.');

// const tablinks = document.getElementsByClassName('tablinks');
// const tabcontent = document.getElementsByClassName('tabcontent');

const mensOutwearElement = document.querySelectorAll(
  '#mens-outwear-tab, #mens-outwear-btn'
);
const ladiesOutwearElement = document.querySelectorAll(
  '#ladies-outwear-tab, #ladies-outwear-btn'
);
const mensTshirtElement = document.querySelectorAll(
  '#mens-tshirt-tab, #mens-tshirt-btn'
);
const ladiesTshirtElement = document.querySelectorAll(
  '#ladies-tshirt-tab, #ladies-tshirt-btn'
);

for (let ele of mensOutwearElement) {
  ele.addEventListener('click', e => {
    togglePage(e, 'mens-outwear-block');
  });
}
for (let ele of ladiesOutwearElement) {
  ele.addEventListener('click', e => {
    togglePage(e, 'ladies-outwear-block');
  });
}
for (let ele of mensTshirtElement) {
  ele.addEventListener('click', e => {
    togglePage(e, 'mens-tshirt-block');
  });
}
for (let ele of ladiesTshirtElement) {
  ele.addEventListener('click', e => {
    togglePage(e, 'ladies-tshirt-block');
  });
}

function togglePage(e, page) {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
  const tablinks = document.getElementsByClassName('tablinks');

  const blockContent = document.getElementsByClassName('blocks');

  for (let element of blockContent) {
    element.style.display = 'none';
  }

  for (let tab of tablinks) {
    tab.className = tab.className.replace(' active', '');
    tab.className = tab.className.replace(' aniAtribute', '');
    tab.style.border = 'none';
    tab.style.borderBottom = '1px transparent solid';
  }

  document.getElementById(page).style.display = 'block';
  e.currentTarget.className += ' active';
  e.currentTarget.className += ' aniAtribute';
}

// Snackbar Function
function snackbarFunction() {
  var snackbarElement = document.getElementById('snackbar');

  snackbarElement.className = 'show';

  setTimeout(function() {
    snackbarElement.className = snackbarElement.className.replace('show', '');
  }, 2000);
}

document.querySelector('.icon').addEventListener('click', () => {
  snackbarFunction();
});
