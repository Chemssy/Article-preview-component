const buttonShare = document.getElementById('buttonShare');
const popover     = document.getElementById('popover');


buttonShare.addEventListener('click', ()=>{
    popover.classList.toggle('active');
    buttonShare.classList.toggle('active');
})
