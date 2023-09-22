//Burgerg menu
//adding class active to burger menu
const burgerBtn = document.querySelector('.burger');
const burgerMenu = document.querySelector('ul');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    burgerMenu.classList.toggle('active');
});
//removing class active after clicking on one of the burger menu links 
const burgerMenuLinks = document.querySelectorAll('ul li');

burgerMenuLinks.forEach(n => n.addEventListener('click', () => {
    burgerBtn.classList.remove('active');
    burgerMenu.classList.remove('active');
}));

//Slider
//dragging functionality
const carousel = document.querySelector('.carousel');

let isDragging = false, startX, startScrollLeft;

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add('dragging');
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
    if(!isDragging) return;

    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}
const dragStop = () => {
    isDragging = false;
    carousel.classList.remove('dragging');
}

carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('mousemove', dragging);
document.addEventListener('mouseup', dragStop);

//previous/next button functionality
const arrowBtns = document.querySelectorAll('.wrapper i');
const firstCardWidth = document.querySelector('.card').offsetWidth;

arrowBtns.forEach(btnA => {
    btnA.addEventListener('click', () => {
        carousel.scrollLeft += btnA.id === 'left' ? -firstCardWidth : firstCardWidth;

    })
});

//Slidershow 
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('slide');
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex-1].style.display = 'flex';
}

//Tabs 
function openTab(evt, tabName) {
    let i;
    const tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }
    const tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '');
    }
    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.className += ' active';
}
document.getElementById("defaultOpen").click(); //setting the deafult tab
