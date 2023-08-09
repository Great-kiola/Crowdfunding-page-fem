console.log("Connected!")

let showBtn = document.getElementById('show-modal'),
thankYou = document.querySelector('.thankYou'),
overlay = document.querySelector('.overlay');

let divIcon = document.querySelector('.divIcon'),
BkmrkText = document.querySelector('.BkmrkText');


showBtn.addEventListener('click', () => {
    thankYou.style.display = 'flex';
    overlay.style.display = 'block';
});

overlay.addEventListener('click', () => {
    thankYou.style.display = 'none';
    overlay.style.display = 'none';
});


divIcon.addEventListener('click', () => {
    BkmrkText.innerText = 'Bookmarked';
});