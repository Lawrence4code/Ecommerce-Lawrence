import '../styles/style.scss';

// getting all the specific ids and storing in variable
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

// iterating through above created variables and adding event listener
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

// toggle function to switch between tabs
function togglePage(e, page) {
  // for smooth scrolling when click on button or links
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });

  // variabke for tabs
  const tablinks = document.getElementsByClassName('tablinks');

  // variable for blocks
  const blockContent = document.getElementsByClassName('blocks');

  // setting all blocks content to display to hide
  for (let element of blockContent) {
    element.style.display = 'none';
  }

  // iterating through each tablinks and removing class to reset sytles
  for (let tab of tablinks) {
    tab.className = tab.className.replace(' active', '');
    tab.className = tab.className.replace(' aniAtribute', '');
    tab.style.border = 'none';
    tab.style.borderBottom = '1px transparent solid';
  }

  // adding classes based on element click
  document.getElementById(page).style.display = 'block';
  e.currentTarget.className += ' active';
  e.currentTarget.className += ' aniAtribute';
}

// Snackbar Function
function snackbarFunction() {
  console.log('triggered');
  var snackbarElement = document.getElementById('snackbar');

  snackbarElement.className = 'show';

  setTimeout(function() {
    snackbarElement.className = snackbarElement.className.replace('show', '');
  }, 2000);
}

// document.querySelector('.hot-link');

for (let ele of document.querySelectorAll('.hot-link')) {
  ele.addEventListener('click', () => {
    snackbarFunction();
  });
}
