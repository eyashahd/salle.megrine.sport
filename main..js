const btns=document.querySelectorAll('.btn-modal');
const modal = document.querySelector('.bloc-modal');
const CLOSE = document.querySelector('.CLOSE');
const index = document.querySelector('.bloc-modal img');

btns.forEach(btn =>{
    btn.addEventListener('click',(e)=>{
        index.src = 'img/equip-$'{e.target.getAttribute('data-index')}.jpg;
        modal.classList.add('active-modal');
    })
})
close.addEventListener('click',()=>{
    modal.classList.remove('active-modal');
})