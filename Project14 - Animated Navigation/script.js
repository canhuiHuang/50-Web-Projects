const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav');
const ul = document.querySelector('ul');

toggle.addEventListener('click', ()=> {
    nav.classList.toggle('active');
    ul.style.disabled = true;
});