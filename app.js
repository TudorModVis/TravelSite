const heroHeading = document.getElementById('hero-heading');
const hero = document.querySelector('.hero');
const mainHero = document.getElementById('main');
const placesMain = document.querySelector('.places');
const placesContainer = document.querySelector('.places-container');
const places = placesContainer.querySelectorAll('img');

document.body.classList.toggle('open');

window.onscroll = () => {
    let value = window.scrollY;
    
    heroHeading.style.transition = 0 + 's';
    heroHeading.style.top = 0.8 * value + 'px';
    heroHeading.style.opacity = hero.clientHeight / (value * 5);
}

const loading = document.querySelector('.loading');
function onDOMLoaded() {
    setTimeout(() => {loading.classList.toggle('close');
    (window.outerWidth < 850)? heroHeading.style.paddingTop = 20 + 'vh': heroHeading.style.paddingTop = 40 + 'vh';
    mainHero.style.top = 0;}, 4100)
    
    setTimeout(() => {
        loading.style.display = 'none';
        document.body.classList.toggle('open');
        
    }, 4700)
}

document.addEventListener('DOMContentLoaded', onDOMLoaded);

let placeIndex = 0;

function slideTo(index, width, container, time) {
    container.style.transition = time + 's';
    container.style.transform = `translateX(-${index * width}px)`;
}

function teleportTo(index, width, container) {
    container.style.transition = 0 + 's';
    container.style.transform = `translateX(-${index * width}px)`;
}

function nextSlide() {
    placeIndex++;
    const placeWidth = places[0].clientWidth;
    if (placeIndex >= places.length - 2) {
        placeIndex = 0;
        teleportTo(placeIndex, placeWidth, placesContainer);
    } else {
        slideTo(placeIndex, placeWidth, placesContainer, 1);
    }
}

setInterval(nextSlide, 3000);

const reviews = document.querySelectorAll('.review');
const reviewsWrapper = document.querySelector('.wrapper');

const leftArrow = document.querySelector('#left-arrow');
const rightArrow = document.querySelector('#right-arrow');

let clientIndex = (window.outerWidth < 850)? 0:1;

const reviewWidth = reviews[0].clientWidth + 30;

reviewsWrapper.style.transform = `translateX(-${clientIndex * reviewWidth}px)`;

leftArrow.onclick = moveLeft;
rightArrow.onclick = moveRight;

function moveLeft() {
    clientIndex--;
    slideTo(clientIndex, reviewWidth, reviewsWrapper, 0.85);
    rightArrow.disabled = true;
    leftArrow.disabled = true;
    setTimeout(checkReview, 1000);
}

function moveRight() {

    clientIndex++;
    slideTo(clientIndex, reviewWidth, reviewsWrapper, 0.85);
    rightArrow.disabled = true;
    leftArrow.disabled = true;
    setTimeout(checkReview, 1000);
}

function checkReview() {
    if (clientIndex == 0) {
        clientIndex = reviews.length - 3;
        teleportTo(clientIndex, reviewWidth, reviewsWrapper);
    }

    if (clientIndex == reviews.length - 2) {
        clientIndex = 1;
        teleportTo(clientIndex, reviewWidth, reviewsWrapper);
    }

    leftArrow.disabled = false;
    rightArrow.disabled = false;
}


const form = document.querySelector('form');
const formButton = form.querySelector('#submit')
formButton.onclick = (ev) => {  
    ev.preventDefault();                     
    let name = form.querySelector("#fullname").value;
    let city = form.querySelector("#city").value;
    let checkIn = form.querySelector('#check-in').value;
    let checkOut = form.querySelector('#check-out').value;
    let rooms = form.querySelector('#rooms').value;
    let radius = form.querySelector('#radius').value;
    let adults = form.querySelector('#adults').value;
    let children = form.querySelector('#children').value;
    let phoneNumber = 447955380984;

    let url = "https://wa.me/" + phoneNumber + "?text="

    + 'Hello, I\'m ' + name + '. ' 
    + 'I want to visit ' + city + ' from ' 
    + checkIn + ' until ' + checkOut + '. I would like to have ' 
    + rooms;
    
    url += (rooms > 1)? ' rooms for ': ' room for ';
    url += adults;
    url += (adults > 1)? ' adults': ' adult';

    if (children != 0) {
        url += ' and ' + children;
        url += (children > 1)? ' children': ' child';
    }

    url += ' within ' + radius + ' from my destination.';

    console.log(url)



    window.open(url,'_blank').focus();
}

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.hero .menu');
const header = document.querySelector('.hero header');
const headerLogo = document.querySelector('header span')

const lineOne = document.querySelector('.menu-btn .line--1');
const lineTwo = document.querySelector('.menu-btn .line--2');
const lineThree = document.querySelector('.menu-btn .line--3');
menuBtn.addEventListener('click', () => {
    document.body.classList.toggle('open');
    headerLogo.classList.toggle('open');
    menu.classList.toggle('nav-open');
    header.classList.toggle('open');
    lineOne.classList.toggle('line-cross');
    lineTwo.classList.toggle('line-fade-out');
    lineThree.classList.toggle('line-cross');
})

const menuLinks = menu.querySelectorAll('.links a');

menuLinks.forEach(link => link.onclick = () => {
    document.body.classList.toggle('open');
    headerLogo.classList.toggle('open');
    menu.classList.toggle('nav-open');
    header.classList.toggle('open');
    lineOne.classList.toggle('line-cross');
    lineTwo.classList.toggle('line-fade-out');
    lineThree.classList.toggle('line-cross');
})


const menuMail = document.querySelector('#mail');
const menuPop = menuMail.querySelector('p')

const footerMail = document.querySelector('.footer #mail');
const footerPop = footerMail.querySelector('p');

menuMail.onclick = () => {

    navigator.clipboard.writeText('talietravel@gmail.com');

    menuPop.classList.toggle('open');
    setTimeout(() => {menuPop.classList.toggle('open');}, 2000)
}

footerMail.onclick = () => {
    navigator.clipboard.writeText('talietravel@gmail.com');

    footerPop.classList.toggle('open');
    setTimeout(() => {footerPop.classList.toggle('open');}, 2000)
}

const advantagesHeading = document.querySelector('.advantages .heading h1');
const advantagesText = document.querySelector('.advantages p');

const circlesDiv = document.querySelectorAll('.circle-div')
const  circleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const circle = entry.target.querySelector('.circle');
            const header = entry.target.querySelector('h4');
            const p = entry.target.querySelector('p');

            header.style.marginLeft = 0 + 'px';
            p.style.marginLeft = 0 + 'px';

            circle.style.marginLeft = 0 + 'px';
            circle.style.backgroundColor = '#5D703F';
          } else {
            const circle = entry.target.querySelector('.circle');
            const header = entry.target.querySelector('h4');
            const p = entry.target.querySelector('p');

            header.style.marginLeft = -25 + 'px';
            p.style.marginLeft = -25 + 'px';

            circle.style.marginLeft = -25 + 'px';
            circle.style.backgroundColor = 'transparent';
          }
    })
});

circlesDiv.forEach(circle => circleObserver.observe(circle));

const homeLink = document.querySelector('footer #home');

homeLink.onclick = () => {
    heroHeading.style.opacity = hero.clientHeight / (1 * 5);
}