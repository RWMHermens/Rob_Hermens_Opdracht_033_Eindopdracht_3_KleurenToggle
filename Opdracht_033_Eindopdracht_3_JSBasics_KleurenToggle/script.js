// Navigation Bar
const hamburger = document.querySelector('.image');
const navBar = document.querySelector('.menu');

const nav = () => {
    navBar.style.left = '-1px';
};
hamburger.addEventListener('mouseover', nav);
// hamburger.addEventListener('click', nav);

const navGone = () => {
    navBar.style.left = '-200px';
};
navBar.addEventListener('click', navGone);
// hamburger.addEventListener('mouseout', navGone);


// Buttons & Background
const body = document.querySelector('body');
const homeButton = document.querySelector('.menu__home');
const redButton = document.querySelector('.menu__red');
const orangeButton = document.querySelector('.menu__orange');
const purpleButton = document.querySelector('.menu__purple');
const greenButton = document.querySelector('.menu__green');
const text = document.querySelector('.text');

const clickHomeButton = () => {
    body.classList.add('bgr-grey');
    body.classList.remove('bgr-red', 'bgr-orange', 'bgr-purple', 'bgr-green');
    text.classList.add('text');
    text.innerText = 'grijs';
};
homeButton.addEventListener('click', clickHomeButton);

const clickRedButton = () => {
    body.classList.add('bgr-red');
    body.classList.remove('bgr-grey', 'bgr-orange', 'bgr-purple', 'bgr-green');
    text.classList.add('text');
    text.innerText = 'rood';
};
redButton.addEventListener('click', clickRedButton);

const clickOrangeButton = () => {
    body.classList.add('bgr-orange');
    body.classList.remove('bgr-grey', 'bgr-red', 'bgr-purple', 'bgr-green');
    text.classList.add('text');
    text.innerText = 'oranje';
};
orangeButton.addEventListener('click', clickOrangeButton);

const clickPurpleButton = () => {
    body.classList.add('bgr-purple');
    body.classList.remove('bgr-grey', 'bgr-red', 'bgr-orange', 'bgr-green');
    text.classList.add('text');
    text.innerText = 'paars';
};
purpleButton.addEventListener('click', clickPurpleButton);

const clickGreenButton = () => {
    body.classList.add('bgr-green');
    body.classList.remove('bgr-grey', 'bgr-red', 'bgr-orange', 'bgr-purple');
    text.classList.add('text');
    text.innerText = 'groen';
};
greenButton.addEventListener('click', clickGreenButton);


// Keys
/* werkt niet, maar laat hem even staan voor referentie
const keyPress = (e) => {
    if (e.keyCode === 49) {
        addEventListener('keydown', clickHomeButton);
    } else if (e.keyCode === 50) {
        addEventListener('keydown', clickRedButton);
    } else if (e.keyCode === 51) {
        addEventListener('keydown', clickOrangeButton);
    } else if (e.keyCode === 52) {
        addEventListener('keydown', clickPurpleButton);
    } else if (e.keyCode === 53) {
        addEventListener('keydown', clickGreenButton);
    }
}; 
keyPress();
werkt niet */

document.addEventListener('keydown', (e) => {
    if (e.key == 1) {
        clickHomeButton();
    } else if (e.key == 2) {
        clickRedButton();
    } else if (e.key == 3) {
        clickOrangeButton();
    } else if (e.key == 4) {
        clickPurpleButton();
    } else if (e.key == 5) {
        clickGreenButton();
    }
});