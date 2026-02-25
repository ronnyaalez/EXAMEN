const Ratings = document.querySelectorAll('.star');
let selectedRating = 0;

const submitButton = document.getElementById('#Submit');

Ratings.forEach((button) => {
    button.addEventListener('click', () => {
        Ratings.forEach((btn) => btn.classList.remove('selected'));
        button.classList.add('selected');
        selectedRating = button.getAttribute('data-rating');
    });

})
