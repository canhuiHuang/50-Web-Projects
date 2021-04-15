const input = document.querySelector('.input');
const button = document.querySelector('.btn');
const searchContainer = document.querySelector('.search');

button.addEventListener('click', () => {
    searchContainer.classList.toggle('active');
    input.focus()
})
