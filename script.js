console.log("Connected!")

let showBtn = document.getElementById('show-modal'),
thankYou = document.querySelector('.thankYou'),
overlay = document.querySelector('.overlay');

let divIcon = document.querySelector('.divIcon'),
BkmrkText = document.querySelector('.BkmrkText');

let cancelIcon = document.getElementById('cancelIcon'),
backProj = document.querySelector('.backProject');

let check = document.querySelectorAll('.check'),
confirmPledge = document.querySelectorAll('.confirmPledge');

let confirm = document.querySelectorAll('.confirm'),
gotit = document.querySelector('.gotIt');


showBtn.addEventListener('click', () => {
    backProj.style.display = 'block';
    overlay.style.display = 'block';
});

overlay.addEventListener('click', () => {
    thankYou.style.display = 'none';
    overlay.style.display = 'none';
    backProj.style.display = 'none';
});


divIcon.addEventListener('click', () => {
    BkmrkText.innerText = 'Bookmarked';
});

cancelIcon.addEventListener('click', () => {
    backProj.style.display = 'none';
    overlay.style.display = 'none';
});

check.forEach(checker => {
    checker.addEventListener('click', () => {
        check.forEach(checker => {
            if (checker.checked){
                checker.checked = false;

                confirmPledge.forEach(myPledge => {
                    myPledge.style.display = 'block';
                });
            }
        });

        checker.checked = true;
    });

});

confirm.forEach(accept => {
    accept.addEventListener('click', (e) => {
        e.preventDefault();
        thankYou.style.display = 'flex';
        backProj.style.display = 'none';
    });
});

gotit.addEventListener('click', (e) => {
    e.preventDefault();
    thankYou.style.display = 'none';
    overlay.style.display = 'none';
    
});

// confirm.addEventListener('click', () => {
//     thankYou.style.display = 'block';
//     backProj.style.display = 'none';

// });