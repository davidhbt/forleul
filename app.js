const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

const wrapperReact = wrapper.getBoundingClientRect();
const notBtnReact = noBtn.getBoundingClientRect();


yesBtn.addEventListener('click', () => {
    question.innerHTML = 'i knew it';
})

noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperReact.width - notBtnReact.width)) * 1;
    const j = Math.floor(Math.random() * (wrapperReact.height - notBtnReact.height)) * 1;

    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';

});