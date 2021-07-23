const navCont = document.querySelector('.navs_container');
const btn1 = document.querySelector('#click_one');
const btn2 = document.querySelector('#click_two');

loadEventListiners()


function loadEventListiners() {
    btn1.addEventListener('click', changeIcon);
    btn2.addEventListener('click', revertIcon);
}


function changeIcon() {
    btn1.classList.add('open2');
    btn2.classList.add('close2');
    navCont.classList.add('navv');

};

function revertIcon() {
    btn1.classList.remove('open2');
    btn2.classList.remove('close2');
    navCont.classList.remove('navv')

}