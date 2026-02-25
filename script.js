const ratings = document.querySelectorAll('#star');
let selectedRating = null;

const submitButton = document.querySelector('#Submit');

ratings.forEach((button) => {
button.addEventListener('click', () => {
    ratings.forEach((btn) => btn.classList.remove('selected'));
    button.classList.add('selected'); })
})