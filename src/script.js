const menuIcon = document.querySelector('.menu-icon'),
        header = document.querySelector('header'),
        body = document.querySelectorAll('body');




menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('menu-icon--active');

    header.classList.toggle('header--mobile');

    body.classList.toggle('no-scroll');
});


