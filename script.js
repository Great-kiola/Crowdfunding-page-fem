console.log("Connected!")

let showBtn = document.getElementById('show-modal'),
thankYou = document.querySelector('.thankYou'),
overlay = document.querySelector('.overlay');


showBtn.addEventListener('click', () => {
    thankYou.style.display = 'flex';
    overlay.style.display = 'block';
});

overlay.addEventListener('click', () => {
    thankYou.style.display = 'none';
    overlay.style.display = 'none';
});