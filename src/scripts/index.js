import '../styles/style.scss';

console.log('index.js file.');

// const tablinks = document.getElementsByClassName('tablinks');
// const tabcontent = document.getElementsByClassName('tabcontent');

document.getElementById('mens-outwear-tab').addEventListener('click', e => {
  togglePage(e, 'mens-outwear-block');
});

document.getElementById('mens-outwear-tab').addEventListener('click', e => {
  togglePage(e, 'mens-outwear-block');
});

document.getElementById('ladies-outwear-tab').addEventListener('click', e => {
  togglePage(e, 'ladies-outwear-block');
});
document.getElementById('mens-tshirt-tab').addEventListener('click', e => {
  togglePage(e, 'mens-tshirt-block');
});
document.getElementById('ladies-tshirt-tab').addEventListener('click', e => {
  togglePage(e, 'ladies-tshirt-block');
});

function togglePage(e, page) {
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

// document.getElementById('hero').style.display = 'block';
