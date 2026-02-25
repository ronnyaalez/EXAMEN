const Ratings = document.querySelectorAll('.star');
let selectedRating = null;

const submitButton = document.querySelector('#Submit');

Ratings.forEach((button) => {
    button.addEventListener('click', () => {
        Ratings.forEach((btn) => btn.classList.remove('selected'));
        button.classList.add('selected');
        selectedRating = button.textContent;
    });

})


submitButton.addEventListener('click', () => {
document.querySelector('#rating-display').textContent = selectedRating;
document.querySelector('#rating-card').style.display = 'none'
document.querySelector('#Thank-you-card').style.display = 'block'
})