const menuIcon = document.querySelector('.menu-icon'),
        header = document.querySelector('header'),
        body = document.querySelectorAll('body');




menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('menu-icon--active');

    header.classList.toggle('header--mobile');

    body.classList.toggle('no-scroll');
});



// Слайдер со стрелками

const sliderArrows = document.querySelector('.slider-arrows');
let slidesArrows = sliderArrows.querySelectorAll('.slider-arrows__item');
        prev = sliderArrows.querySelector('.slider-arrows__arrow-left');
        next = sliderArrows.querySelector('.slider-arrows__arrow-right');

let slideIndex = 0;




prev.addEventListener('click', () => {
    showSlideArrow(-1)
});

next.addEventListener('click', () => {
    showSlideArrow(+1);
});

function showSlideArrow(n) {
    slideIndex += n;

    if(slideIndex < 0) {
        slideIndex = slidesArrows.length - 1;
    }

    if(slideIndex >= slidesArrows.length) {
        slideIndex = 0;
    }
    
    slidesArrows.forEach(item => item.style.display = 'none');

    slidesArrows[slideIndex].style.display = 'block';
}

showSlideArrow(0);





// Слайдер с точками

const sliderDots = document.querySelector('.slider-dots'),
    slidesDots = sliderDots.querySelectorAll('.slider-dots__item'),
    wrapperDots = sliderDots.querySelector('.slider-dots__nav');

const dots = [];

for (let i= 0; i < slidesDots.length; i++) {
    const dot = document.createElement('button');

    dot.dataset.slideTo = i;

    dot.classList.add('slider-dots__nav-item');  //Теперь кнопки появляются с классами, на которых мы до этого вешали стили
    if(i == 0) dot.classList.add('slider-dots__nav-item--active');

    if (i != 0) slidesDots[i].style.display = 'none';

    dot.addEventListener('click', showSlideDots)


    wrapperDots.append(dot);  //благодаря циклу теперь клоичество точек = количеству фотографий
    dots.push(dot);

}


function showSlideDots(event) {
    const slideTo = event.target.dataset.slideTo; //по нажаитю получаем дата атрибут кнопки, на которую жмут

    slidesDots.forEach(item => item.style.display = 'none');

    slidesDots[slideTo].style.display = 'block';

    dots.forEach(dot => dot.classList.remove('slider-dots__nav-item--active')); //перебираем все кнопки через массив и убираем у них класс актив
    
    event.target.classList.add('slider-dots__nav-item--active');  //добавляем обратено класс акитив кнопке, на которую нажали
}




